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

  addPost(post: Post) {
    this.arr.push(post)
  }

  getAllPost(): Post[] {
    return this.arr
  }

  getPostByCategory(cat: string): Post[] {
    return this.arr.filter(post => post.categoria === cat)

  }





}
