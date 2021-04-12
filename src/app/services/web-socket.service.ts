import { Injectable } from '@angular/core';
import { ChatMessageDto } from '../models/ChatMessageDto';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  websocket: WebSocket;
  messages: ChatMessageDto[] = [];

  constructor() { }

  public openWebSocket(){
    this.websocket = new WebSocket('ws://localhost:8080/chat');


    this.websocket.onopen = (event) => {
      console.log('Open: ', event);
    };

    this.websocket.onmessage = (event) => {
      const chatMessageDTO = JSON.parse(event.data);
      this.messages.push(chatMessageDTO);

    };

    this.websocket.onclose = (event) => {
      console.log('Close: ', event);
    };
  }

  public sendMessage(aMessages: ChatMessageDto){
    this.websocket.send(JSON.stringify(aMessages));

  }

  public closeWebSocket(){
    this.websocket.close();
  }
}
