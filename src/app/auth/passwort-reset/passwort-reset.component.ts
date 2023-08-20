import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-passwort-reset',
  templateUrl: './passwort-reset.component.html',
  styleUrls: ['./passwort-reset.component.scss']
})
export class PasswortResetComponent {

  constructor(public router: ActivatedRoute){}

}
