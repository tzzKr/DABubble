import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


export class Chatroom {
    id: string;
    name: string;
    description?: string;
    createdDate: firebase.firestore.Timestamp;
    participantUids: string[];  // Array of Firebase UIDs.
    

    constructor( obj?: any ) {
        this.id = obj && obj.id || null;
        this.name = obj && obj.name || null;
        this.description = obj && obj.description || null;
        this.createdDate = obj && obj.createdDate || null;
        this.participantUids = obj && obj.participantUids || null;
    }
    
    public toJSON() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            createdDate: this.createdDate,
            participantUids: this.participantUids
            
        }
    }

}