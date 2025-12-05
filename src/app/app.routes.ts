import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { authGuard } from './auth/auth-guard';


export const routes: Routes = [
    { path:'', redirectTo:'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'users', canActivate: [authGuard], loadComponent: () => import('./pages/users/users').then(c => c.Users) },
    { path: 'user/:id', loadComponent: () => import('./pages/user-detail/user-detail').then(c => c.UserDetail) },
    { path: 'posts', canActivate: [authGuard], loadComponent: () => import('./pages/posts/posts').then(c => c.Posts) }
  ];
  
