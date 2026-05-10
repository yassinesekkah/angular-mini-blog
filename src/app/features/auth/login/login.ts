import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = '';
  password = '';
  message = '';

  constructor(private authService: Auth) {

  }

  login() {

    this.authService.login({

      email: this.email,
      password: this.password

    }).subscribe((response: any) => {

      console.log(response);

      localStorage.setItem(
        'token', response.token
      );

      this.message = 'Login Success';

    });

  }

}