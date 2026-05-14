import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Post } from '../../../services/post';



@Component({
  selector: 'app-post-list',
  imports: [RouterLink],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList implements OnInit {

  ngOnInit(): void {
    this.getPost();
  }

  posts =signal<any[]>([]);

  constructor(private postService: Post){

  }

  getPost(): void {

    this.postService.getPosts()
      .subscribe({

        next: (response: any) => {
          console.log(response);
          this.posts.set(response.content);
          console.log(this.posts);

        },

        error: (error) => {
          console.log(error);
        }

      });
  }


  deletePost(id: number): void {

    this.postService.deletePost(id)
      .subscribe({

        next:()=> {

          this.posts.set(

            this.posts().filter(
              post => post.id !== id
            )
          );
        },

        error: (error: any) => {
          console.log(error);
        }
      })
  }

  updatePost(id: number): void{
    
  }



}
