import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';
import { ValidationService } from '../validation.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

    constructor(private loginService: LoginService) { }

    login(userLogin, userPassword, userRemember){
        return this.loginService.loginAction(userLogin, userPassword, userRemember)
    }
    ngOnInit() {
    }
}