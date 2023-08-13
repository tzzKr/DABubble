import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


export class User {
    uid: string; // Firebase UID
    username: string;
    email: string;
    avatarUrl?: string;
    lastActive?: firebase.firestore.Timestamp;
    

    constructor( obj?: any ) {
        this.uid = obj && obj.uid || null;
        this.username = obj && obj.username || null;
        this.email = obj && obj.email || null;
        this.avatarUrl = obj && obj.avatarUrl || null;
        this.lastActive = obj && obj.lastActive || null;
    }
    
    public toJSON() {
        return {
            uid: this.uid,
            username: this.username,
            email: this.email,
            avatarUrl: this.avatarUrl,
            lastActive: this.lastActive
        }
    }

}