import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../../../services/post';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-post',
  imports: [FormsModule, RouterLink],
  templateUrl: './create-post.html',
  styleUrl: './create-post.css',
})
export class CreatePost {

  title = '';
  content = '';

  message = signal('');

  constructor(private postService: Post, private router: Router){}

  createPost(): void {

    if(!this.title || !this.content){
      this.message.set("All field are required");
      return;
    }

    this.postService.createPost({

      title: this.title,
      content: this.content,
      userId: 1

    }).subscribe({

      next: (response: any) =>{

        console.log(response);

        this.message.set('Post created');

        this.router.navigate(['/posts']);
      },

      error: (error: any) => {

        console.log(error);

        this.message.set('Error');
      }
    })
  }
}
