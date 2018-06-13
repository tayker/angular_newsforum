import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

    constructor() { }
    
    required(arg){
        if(arg == null || arg == undefined || arg == ''){
            return 'required'
        }
        else{
            return false
        }
    }
}
