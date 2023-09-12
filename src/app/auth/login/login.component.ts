import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    public authService: AuthService,
    public afAuth: AngularFireAuth

  ) { 


  }
  ngOnInit() {
   }

   login(){
   this.authService.GoogleAuth();
   }

}

