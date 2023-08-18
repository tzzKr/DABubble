import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


export class User {
    uid: string; // Firebase UID
    username: string;
    displayName: string;
    email: string;
    photoURL: string;
    avatarUrl?: string;
    emailVerified: string;
    lastActive?: firebase.firestore.Timestamp;
    

    constructor( obj?: any ) {
        this.uid = obj && obj.uid || null;
        this.username = obj && obj.username || null;
        this.email = obj && obj.email || null;
        this.displayName = obj && obj.displayNAme || null;
        this.photoURL = obj && obj.photoURL || null;
        this.avatarUrl = obj && obj.avatarUrl || null;
        this.lastActive = obj && obj.lastActive || null;
        this.emailVerified = obj && obj.emailVerified || null;
    }
    
    public toJSON() {
        return {
            uid: this.uid,
            photoURL: this.photoURL,
            username: this.username,
            email: this.email,
            avatarUrl: this.avatarUrl,
            lastActive: this.lastActive,
            displayName: this.displayName,
            emailVerified: this.emailVerified
        }
    }

}