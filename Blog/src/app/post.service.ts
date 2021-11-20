import { Injectable } from '@angular/core';
import { Post } from './interface/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arr: Post[]

  constructor() {
    this.arr = [];

  }

  getAllPost(): Post[] {
    if (localStorage.getItem('post') === null) {
      return this.arr;
    } else {
      this.arr = JSON.parse(localStorage.getItem('post')!)
      return this.arr;
    }

  }

  addPost(post: Post) {
    let posts: Post[] = [];
    if (localStorage.getItem('post') === null) {
      posts.push(post);
      localStorage.setItem('post', JSON.stringify(posts));
    } else {
      posts = JSON.parse(localStorage.getItem('post')!);
      posts.push(post);
      localStorage.setItem('post', JSON.stringify(posts));

    }

  }

  getPostByCategory(cat: string): Post[] {
    return this.arr.filter(post => post.categoria === cat)

  }

}
