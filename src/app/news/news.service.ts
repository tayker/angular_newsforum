import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

    newslist = [
        { id: 0, title: 'All bad', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ullam vitae, aut ipsa! Dignissimos, excepturi, ut. Libero aliquid repudiandae inventore', type: 'text-only', favorites: false },
        { id: 1, title: 'All bad', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ullam vitae, aut ipsa! Dignissimos, excepturi, ut. Libero aliquid repudiandae inventore', img: 'http://via.placeholder.com/350x150', type: 'text-img', favorites: false },
        { id: 2, title: 'All bad', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ullam vitae, aut ipsa! Dignissimos, excepturi, ut. Libero aliquid repudiandae inventore', img: 'http://via.placeholder.com/350x150', type: 'text-img', favorites: false },
        { id: 3, title: 'All bad', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ullam vitae, aut ipsa! Dignissimos, excepturi, ut. Libero aliquid repudiandae inventore', type: 'text-only', favorites: false },
        { id: 4, title: 'All bad', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ullam vitae, aut ipsa! Dignissimos, excepturi, ut. Libero aliquid repudiandae inventore', img: 'http://via.placeholder.com/350x150', type: 'text-img', favorites: false }
    ]
    
    getList(){
        return this.newslist
    }
}
