import { Routes } from '@angular/router';
import { Users } from './pages/users/users';
import { Posts } from './pages/posts/posts';
import { Login } from './pages/login/login';
import { authGuard } from './auth/auth-guard';
import { UserDetail } from './pages/user-detail/user-detail';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch: 'full'
    },
    {
        path: 'users',
        canActivate: [authGuard],
        component: Users
    },
    {
        path: 'user/:id',
        component: UserDetail
    },
    {
        path: 'posts',
        canActivate: [authGuard],
        component: Posts
    },
    {
        path: 'login',
        component: Login
    }
];
