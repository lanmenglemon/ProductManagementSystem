import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : any = {};

  constructor(private _authService : AuthService) { }

  ngOnInit() {
  }

  signup() {
    this._authService.signup(this.signupForm);
  }
}
