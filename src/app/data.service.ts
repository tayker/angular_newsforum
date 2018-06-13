import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor() { }
    
    isLogged: boolean;
    
    storageLogin(login){
        localStorage.setItem('Login', login);
    }
    
    getStorageLogin(){
        return localStorage.getItem('Login');
    }
    
    getStorageNews(){
        return JSON.parse(localStorage.getItem('news'));
    }
    
    storageNews(news){
        localStorage.setItem('news', news);
    }
}