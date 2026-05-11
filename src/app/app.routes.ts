import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { PostList } from './features/posts/post-list/post-list';
import { CreatePost } from './features/posts/create-post/create-post';


export const routes: Routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },

    {
        path: 'login',
        component: Login
    },

    {
        path: 'register',
        component: Register
    },

    {
        path: 'posts',
        component: PostList
    },

    {
        path: 'create-post',
        component: CreatePost
    }
];
