import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessageDto } from '../models/ChatMessageDto';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'cf-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  constructor(public WebSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.WebSocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.WebSocketService.closeWebSocket();
  }
  sendMessage(sendForm: NgForm){
    const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message);
    this.WebSocketService.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
  }
}
