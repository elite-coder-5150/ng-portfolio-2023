import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: WebSocketSubject<any>;

  constructor() {
    this.socket = webSocket('');
  }

  sendMsg(msg: string): void {
    this.socket.next({ type:'message',  content: msg });
  }

  receiveMsg(): Observable<any> {
    return this.socket.asObservable();
  }

  getSocket(): WebSocketSubject<any> {
    return this.socket;
  }
}
