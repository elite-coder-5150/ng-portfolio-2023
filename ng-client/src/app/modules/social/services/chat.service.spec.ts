import { TestBed } from '@angular/core/testing';

import { ChatService } from './chat.service';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { cold } from 'jasmine-marbles'
describe('ChatService', () => {
  let service: ChatService;
  let mockSocket: WebSocketSubject<any>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatService);

    mockSocket = webSocket('');

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a message', () => {
    const msg = 'hello world';
    const spy = spyOn(mockSocket, 'next')
  })
});
