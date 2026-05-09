import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-post-list',
  imports: [RouterLink],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {
  title = 'Angular Posts';

  showMessage(){
    alert('Hello Angular');
  }

  imageUrl = 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';

  count = 0;

  icrement(){
    this.count++;
  }

  isLoggedIn = true;

  showPosts = false;

  posts = [
    'Angular',
    'Spring Boot',
    'Jwt Security'
  ];

  
}
