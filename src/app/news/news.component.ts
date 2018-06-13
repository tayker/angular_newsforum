import { Component, OnInit } from '@angular/core';

import { NewsService } from './news.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {

    constructor(private newsService: NewsService,
                private dataService: DataService) { }
    
    news = [];
    
    favorite(id){
        for(let item of this.news){
            if(item.id == id){
                item.favorites = !item.favorites;
                this.dataService.storageNews(JSON.stringify(this.news))
            }
        }
    }
    ngOnInit() {
        if(this.dataService.getStorageNews() !== null &&
           this.dataService.getStorageNews() !== undefined){
            this.news = this.dataService.getStorageNews();
        }
        else{
            this.news = this.newsService.getList();
        }
        
    }

}