import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  //for form
  email = '';
  password = '';
  message = '';

  login(){
    if(!this.email || !this.password){

      this.message = "All fields are required";
      return;
    }

    if(!this.email.includes("@")){
      this.message = "Enter a valid email";
      return
    }

    if(this.password.length < 7){

      this.message = "Password too short";
      return;
    }

    console.log(this.email);
    console.log(this.password);
    this.message = 'Login success';
  }
}


