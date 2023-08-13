import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


export class Message {
    id: string;
    content: string;
    timestamp: firebase.firestore.Timestamp;
    senderUid: string;  // Firebase UID.
    chatroomId: string;
    

    constructor( obj?: any ) {
        this.id = obj && obj.id || null;
        this.content = obj && obj.content || null;
        this.timestamp = obj && obj.timestamp || null;
        this.senderUid = obj && obj.senderUid || null;
        this.chatroomId = obj && obj.chatroomId || null;
    }
    
    public toJSON() {
        return {
            id: this.id,
            content: this.content,
            timestamp: this.timestamp,
            senderUid: this.senderUid,
            chatroomId: this.chatroomId

        }
    }

}