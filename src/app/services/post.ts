import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Post {

  private apiUrl = 'http://localhost:8080/posts';

  constructor(private http: HttpClient){}

  getPosts(){

    return this.http.get(
      `${this.apiUrl}?page=0&size=5`
    );
  }
}
