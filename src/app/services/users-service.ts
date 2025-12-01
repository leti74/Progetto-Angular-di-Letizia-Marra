import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, catchError, map } from 'rxjs';
import { User } from '../models/user.model';
import { Post } from '../models/post.model';
import { UserComment } from '../models/comment.model';
import { Title } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class UsersServices {

  private baseURL = 'https://gorest.co.in/public/v2';

  constructor(private http: HttpClient) {}

 
  private get authHeaders() {
    const token = localStorage.getItem('access_token') || '';
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
  }

  

  getUsers(page: number = 1, forPage: number = 10): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users?page=${page}&per_page=${forPage}`, this.authHeaders).pipe(
      catchError(error => {
        console.error('❌ Error retrieving users:', error);
        return of([]);
      })
    );
  }

  getUserById(id: number): Observable<User | null> {
    return this.http.get<User>(`${this.baseURL}/users/${id}`, this.authHeaders).pipe(
      catchError(error => {
        console.error('❌ Error retrieving user:', error);
        return of(null);
      })
    );
  }

  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.baseURL}/users?email=${email}`,
      this.authHeaders
    ).pipe(
      catchError(error => {
        console.error('❌ Error fetching user by email:', error);
        return of([]);
      })
    );
  }
  

  deleteUser(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseURL}/users/${id}`, this.authHeaders).pipe(
      map(() => true),
      catchError(error => {
        console.error('❌ Error deleting user:', error);
        return of(false);
      })
    );
  }

  addUser(user: User): Observable<User | null> {
    return this.http.post<User>(`${this.baseURL}/users`, user, this.authHeaders).pipe(
      catchError(error => {
        console.error('❌ User creation error:', error.error);
        return of(null);
      })
    );
  }



  getPostsByUser(userID: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseURL}/users/${userID}/posts`, this.authHeaders).pipe(
      catchError(error => {
        console.error('❌Error in user post recovery: ', error);
        return of([]);
      })
    );
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseURL}/posts`, this.authHeaders).pipe(
      catchError(error => {
        console.error('❌ Post recovery error: ', error);
        return of([]);
      })
    );
  }



  getCommentsByPost(postID: number): Observable<UserComment[]> {
    return this.http.get<UserComment[]>(`${this.baseURL}/posts/${postID}/comments`, this.authHeaders).pipe(
      catchError(error => {
        console.error('❌ Error retrieving comments:', error);
        return of([]);
      })
    );
  }

  addComment(postID: number, commentBody: string): Observable<UserComment | null> {

    const commentPayload= {
      post_id: postID,
      name: "Ganaka Arora",   
      email: "ganaka_arora@crist.example",  
      body: commentBody
    }
    return this.http.post<UserComment>(
      `${this.baseURL}/posts/${postID}/comments`,
      commentPayload,
      this.authHeaders
    ).pipe(
      catchError(error => {
        console.error('❌ Error inserting comment:', error);
        return of(null);
      })
    );
  }

  deleteComment(commentID: number): Observable<boolean>{
    return this.http.delete(`${this.baseURL}/comments/${commentID}`, this.authHeaders).pipe(
      map(()=> true),
      catchError(error => {
        console.error('❌ Error deleting comment:', error);
        return of(false)
      })
    )
  }

  addNewPost(data: {title: string, body: string}): Observable<Post | null>{

    const userCurrent= ()=>{ 
      const userCurrentId = localStorage.getItem('user_current');
    return userCurrentId ? JSON.parse(userCurrentId): null}
    
    const postPayload= {
      title: data.title,
      body: data.body,
      user_id: userCurrent().id,
    }
return this.http.post<Post>(`${this.baseURL}/posts`, postPayload, this.authHeaders).pipe(
  catchError(error => {
    console.error('❌ Error creating new post:', error)
    return of(null)
  })
)
  }
}
