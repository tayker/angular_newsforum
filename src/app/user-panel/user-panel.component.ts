import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

    constructor(private dataService: DataService) { }
    
    isLogged: boolean = false;
    
    userLogin: string;
    ngOnInit() {
        if(this.dataService.getStorageLogin() !== null &&
          this.dataService.getStorageLogin() !== ''){
            this.userLogin = this.dataService.getStorageLogin();
            this.isLogged = true;
        }
    }
}