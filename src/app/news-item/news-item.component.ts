import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

    @Input()
    item;
    
    @Output() favorite = new EventEmitter();
    
    updateFavorite(id){
        
        this.favorite.emit(id);
    }
    ngOnInit(){
        
    }
}
