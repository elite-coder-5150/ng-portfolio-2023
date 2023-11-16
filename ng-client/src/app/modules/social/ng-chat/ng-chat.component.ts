import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from '../services/chat.service';
@Component({
  selector: 'app-ng-chat',
  templateUrl: './ng-chat.component.html',
  styleUrls: ['./ng-chat.component.scss']
})
export class NgChatComponent implements OnDestroy, OnInit{
  messages: string[] = [];
  newMsg: string = '';

  private subscription: Subscription = new Subscription();

  constructor(private chat: ChatService) {}

  ngOnInit(): void {
    this.subscription = this.chat.receiveMsg().subscribe((msg) => {
      this.messages.push(msg.content);
    })
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }

  sendMsg(): void {
    if (this.newMsg.trim() !== '') {
      this.chat.sendMsg(this.newMsg);
      this.newMsg = '';
    }
  }
}
