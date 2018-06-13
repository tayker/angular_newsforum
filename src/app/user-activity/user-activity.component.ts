import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DataService } from '../data.service';
import { NewsService } from '../news/news.service';
@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.scss'],
  providers: [NewsService]
})
export class UserActivityComponent implements OnInit {

    @Input()
    favorites: any;
    
    @Input()
    id: number;
    
    @Output() updateFavorite = new EventEmitter<boolean>();
    
    constructor(private dataService: DataService,
                private newsService: NewsService) { }

    onUpdateFavorite(id){
        this.updateFavorite.emit(id);
    }
    
    ngOnInit(){
        
    }
}