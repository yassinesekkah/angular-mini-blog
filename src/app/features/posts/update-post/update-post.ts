import { Component, OnInit, signal } from '@angular/core';
import { Post } from '../../../services/post';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-post',
  imports: [],
  templateUrl: './update-post.html',
  styleUrl: './update-post.css',
})
export class UpdatePost implements OnInit {

  id = 0;
  title = '';
  content = '';
  message = signal('');

  constructor (private postService: Post, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    console.log(this.id);

    this.getPost();
  }

  getPost(): void {

    this.postService.getPostById(this.id)
      .subscribe({
        next: (response: any) => {

          console.log(response);
          this.title = response.title;
          this.content = response.content;

        },
        error: (error) => {

          console.log(error);
        }
      })
  }


}
