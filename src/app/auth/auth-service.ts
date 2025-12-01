import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { User } from '../models/user.model';
import { UsersServices } from '../services/users-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL= 'https://gorest.co.in/public/v2'
  

  constructor(private http: HttpClient, private userService:UsersServices){}

  userCurrent: any=
  { name: 'Martina Romeo', email: 'martina_romeo@crist.example', gender: 'female', status: 'inactive'}

  createUserCurrent(): Observable<User | null> {
    return this.userService.getUserByEmail(this.userCurrent.email).pipe(
      switchMap(users => {
        if (users && users.length > 0) {
          const existingUser = users[0];
          console.log("User already exists:", existingUser);
          
          localStorage.setItem('user_current', JSON.stringify(existingUser)); 
        
          return of(existingUser);
        } else {
          return this.userService.addUser(this.userCurrent).pipe(
            map(newUser => {
              localStorage.setItem('user_current', JSON.stringify(newUser)); 
              return newUser;
            })
          );
        }
      })
    );
  }
  
  

  
  getUserCurrent(): User | null {
    const data = localStorage.getItem('user_current');
    return data ? JSON.parse(data) : null;
  }
  

  validateToken(token:string):Observable<boolean>{
    return this.http.get(`${this.baseURL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).pipe(
      map((res)=> {
        console.log('✅ Token valido, risposta:', res); 
        return true}),
      catchError(()=> of(false))
    )
  }

  saveToken(token:string){
    localStorage.setItem('access_token', token)
  }


  getToken(): string | null{
    return localStorage.getItem('access_token')
  }

  logout():void {
    localStorage.removeItem('access_token')
    !this.isAuthenticated()
    localStorage.removeItem('user_current')
  }

  isAuthenticated(): boolean {
  return !!this.getToken()
  }
}
