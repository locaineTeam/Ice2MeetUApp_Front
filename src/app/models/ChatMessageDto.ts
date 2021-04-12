export class ChatMessageDto{
    user: string;
    message: String;

    constructor(user: string, message: string){
        this.user = user;
        this.message = message;
    }
}