import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-post-list',
  imports: [RouterLink],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {

  city = "fes";


}
