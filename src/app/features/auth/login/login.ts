import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../../services/auth';
import { LoginResponse } from '../../../models/login-response';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  message = signal('');

  constructor(private authService: Auth) {}

  login(): void {
    this.authService
      .login({
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (response: LoginResponse) => {
          console.log(response);

          console.log(response.token);

          this.message.set('success');
        },
        error: (error) => {
          console.log(error);

          setTimeout(() => {
            this.message.set('Invalid email or password');
          });
        },
      });
  }
}
