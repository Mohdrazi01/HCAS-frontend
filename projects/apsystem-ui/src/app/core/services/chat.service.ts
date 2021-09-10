import { TokenStorageService } from './Token/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { Chat } from './../models/chat';
import * as signalR from '@microsoft/signalr';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private connection: any = new signalR.HubConnectionBuilder()
  .withUrl("https://hcas-api.azurewebsites.net/api/v1/auth/ChatHub",{
   // accessTokenFactory: () =>'token? '+ this.token.getToken(),
    //skipNegotiation: true,
    //transport: signalR.HttpTransportType.WebSockets
  }).configureLogging(signalR.LogLevel.Information).build();

  readonly POST_URL = "https://hcas-api.azurewebsites.net/api/v1/Chat/send"
  private receivedmessageObject:Chat = new Chat();
  private sharedObj = new Subject<Chat>();

  constructor(private http: HttpClient,private token: TokenStorageService) {
    this.connection.onclose(async ()=>{
      await this.start();
    });
    this.connection.on("ReceiveMessage",(user,messageText)=>
    {  this.mapReceivedMessage(user,messageText);
    });
    this.start();
   }

   public async start(){
     try{
       await this.connection.start();
       console.log("connected");
     }catch(err){
       console.log(err);
       setTimeout(() => {
          this.start(),5000
       }, );
     }
   }

   private mapReceivedMessage(user:string,messageText:string):void{
     this.receivedmessageObject.user = user;
     this.receivedmessageObject.messageText = messageText;
    //  this.receivedmessageObject.ImageHeaders = ImageHeaders;
    //  this.receivedmessageObject.ImageBinary = ImageBinary;
     this.sharedObj.next(this.receivedmessageObject);
   }


   public broadcastMessage(Chat:any){

     this.http.post(this.POST_URL,Chat).subscribe(
       data=>{
         console.log(data);
       }
     )
   }

   public retriveMappedObject(): Observable<Chat>{
     return this.sharedObj.asObservable();
   }

}
