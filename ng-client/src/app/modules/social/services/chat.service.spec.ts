import { TestBed } from '@angular/core/testing';

import { ChatService } from './chat.service';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { cold } from 'jasmine-marbles'
describe('ChatService', () => {
  let chat: ChatService;
  let mockSocket: WebSocketSubject<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    chat = TestBed.inject(ChatService);

    mockSocket = webSocket('');

  });

  it('should be created', () => {
    expect(chat).toBeTruthy();
  });

  it('should send a message', () => {
    const msg = 'hello world';
    const spy = spyOn(mockSocket, 'next')

    chat.sendMsg(msg);
    expect(spy).toHaveBeenCalledWith({ type: 'message', content: msg });
  });

  it ('should receive a message', () => {
    const msg = 'Received message';
    const expected = cold('(a|)', { a: { type: 'message', content: msg }});

    chat.receiveMsg().subscribe((result) => {
      expect(result).toEqual({ type: 'message', content: msg})
    });

    mockSocket.next({ type: 'message', content: msg });
    expect(chat.receiveMsg()).toBeObservable(expected);
  })

  it('should return the socket', () => {
    const socket = chat.getSocket();
    expect(socket).toBe(mockSocket);
  })
});
