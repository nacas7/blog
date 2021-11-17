import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post';
import { PostService } from '../post.service';

@Component({
  selector: 'appBlog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPost: Post[];
  constructor(private postService: PostService) {
    this.arrPost = [];
  }

  filterPost = '';

  ngOnInit(): void {
    this.arrPost = this.postService.getAllPost()
    // console.log(this.arrPost)
  }

  onCategoriaChange($event: any) {
    this.arrPost = this.postService.getPostByCategory($event.target.value)

  }

}
