import { TokenStorageService } from './../../core/services/Token/token-storage.service';
import { ChatService } from './../../core/services/chat.service';

import { Component, OnInit } from '@angular/core';
import { Chat } from '@core/models/chat';
import * as alertify from 'alertifyjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  username:string;

  constructor(private chatService: ChatService,private token: TokenStorageService
    ,         private route: Router) { }

  ngOnInit() {
    this.username = this.token.getUserName();
    this.chatService.retriveMappedObject().subscribe(
      (received:Chat)=>{
        this.addToInbox(received);
      }
    );

  }

  msgDto:Chat = new Chat();
  msgInboxArray:Chat[] = [];


  send(){

    this.msgDto.user = this.username;
    if(this.msgDto){
      if( //this.msgDto.user.length == 0||
        this.msgDto.messageText.length == 0){
        alertify.error("Both fields required");
        return;
      }
      else{
        this.chatService.broadcastMessage(this.msgDto);
        this.msgDto.messageText = null;
      }
    }
  }

  addToInbox(obj:Chat){
    let newObj = new Chat();
    newObj.user = obj.user;
    newObj.messageText = obj.messageText;
    // newObj.ImageHeaders = obj.ImageBinary;
    // newObj.ImageBinary = obj.ImageBinary;
    this.msgInboxArray.push(newObj);
  }

  goBack(){
    this.route.navigate(['/dashboard']);
   }
}
