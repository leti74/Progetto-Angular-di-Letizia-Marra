import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, catchError, map } from 'rxjs';
import { User } from '../models/user.model';
import { Post } from '../models/post.model';
import { UserComment } from '../models/comment.model';


@Injectable({
  providedIn: 'root'
})
export class UsersServices {

  private baseURL = 'https://gorest.co.in/public/v2';

  constructor(private http: HttpClient) {}

  // 🔐 Headers generati SEMPRE con token aggiornato
  private get authHeaders() {
    const token = localStorage.getItem('access_token') || '';
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
  }

  // =====================
  //   USERS
  // =====================

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users`, this.authHeaders).pipe(
      catchError(error => {
        console.error('❌ Errore nel recupero utenti:', error);
        return of([]);
      })
    );
  }

  getUserById(id: number): Observable<User | null> {
    return this.http.get<User>(`${this.baseURL}/users/${id}`, this.authHeaders).pipe(
      catchError(error => {
        console.error('❌ Errore nel recupero utente:', error);
        return of(null);
      })
    );
  }

  deleteUser(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseURL}/users/${id}`, this.authHeaders).pipe(
      map(() => true),
      catchError(error => {
        console.error('❌ Errore eliminazione utente:', error);
        return of(false);
      })
    );
  }

  addUser(user: User): Observable<User | null> {
    return this.http.post<User>(`${this.baseURL}/users`, user, this.authHeaders).pipe(
      catchError(error => {
        console.error('❌ Errore creazione utente:', error);
        return of(null);
      })
    );
  }



  getPostsByUser(userID: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseURL}/users/${userID}/posts`, this.authHeaders).pipe(
      catchError(error => {
        console.error('❌ Errore nel recupero post utente:', error);
        return of([]);
      })
    );
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseURL}/posts`, this.authHeaders).pipe(
      catchError(error => {
        console.error('❌ Errore recupero post:', error);
        return of([]);
      })
    );
  }



  getCommentsByPost(postID: number): Observable<UserComment[]> {
    return this.http.get<UserComment[]>(`${this.baseURL}/posts/${postID}/comments`, this.authHeaders).pipe(
      catchError(error => {
        console.error('❌ Errore recupero commenti:', error);
        return of([]);
      })
    );
  }

  addComment(postID: number, commentBody: string): Observable<UserComment | null> {

    const commentPayload= {
      id: Math.random(),
      post_id: postID,
      name: "You",   
      email: "you@example.com",  
      body: commentBody
    }
    return this.http.post<UserComment>(
      `${this.baseURL}/posts/${postID}/comments`,
      commentPayload,
      this.authHeaders
    ).pipe(
      catchError(error => {
        console.error('❌ Errore inserimento commento:', error);
        return of(null);
      })
    );
  }

  deleteComment(commentID: number): Observable<boolean>{
    return this.http.delete(`${this.baseURL}/comments/${commentID}`, this.authHeaders).pipe(
      map(()=> true),
      catchError(error => {
        console.error('❌ Errore eliminazione commento:', error);
        return of(false)
      })
    )
  }

  addNewPost(post: Post): Observable<Post | null>{
return this.http.post<Post>(`${this.baseURL}/posts`, post, this.authHeaders).pipe(
  catchError(error => {
    console.error('❌ Errore creazione nuovo post:', error)
    return of(null)
  })
)
  }
}
