import { Injectable } from '@angular/core';

import { ValidationService } from '../validation.service';
import { DataService } from '../data.service';
import { RouterService } from '../router.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

    isLogged: boolean;
    userLogin: string;
    
    constructor(private validationService: ValidationService,
                private dataService: DataService,
                private routerService: RouterService) { }
    
    loginAction(login, password, remember){
        if(!this.validationService.required(login) &&
           !this.validationService.required(password) &&
            remember){
            this.dataService.storageLogin(login);
            this.routerService.routeToMain();
        }
        else if(!this.validationService.required(login) &&
                !this.validationService.required(password)){
            this.routerService.routeToMain();
        }
    }
}