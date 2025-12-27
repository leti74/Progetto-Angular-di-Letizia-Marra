import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';

import { UsersServices } from './users-service';
import { User } from '../models/user.model';
import { Post } from '../models/post.model';
import { UserComment } from '../models/comment.model';

describe('UsersServices', () => {
  let service: UsersServices;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersServices
      ], 
      imports: [HttpClientTestingModule], 
    });

    service = TestBed.inject(UsersServices);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should fetch users with pagination', () => {
    const mockUsers: User[] = [
      { id: 1, name: 'Martina Romeo', email: 'martina@example.com', gender: 'female', status: 'inactive' },
      { id: 2, name: 'Mario Rossi', email: 'mario@example.com', gender: 'male', status: 'active' }
    ];

    service.getUsers(1, 10).subscribe(users => {
      expect(users.length).toBe(2);
      expect(users[0].name).toBe('Martina Romeo');
    });

    const req = httpMock.expectOne(r => r.url.startsWith('https://gorest.co.in/public/v2/users'));
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });

  it('should fetch user by id', () => {
    const mockUser: User = { id: 1, name: 'Martina Romeo', email: 'martina@example.com', gender: 'female', status: 'inactive' };

    service.getUserById(1).subscribe(user => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne('https://gorest.co.in/public/v2/users/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockUser);
  });


  it('should fetch user by email', () => {
    const mockUsers: User[] = [
      { id: 1, name: 'Martina Romeo', email: 'martina@example.com', gender: 'female', status: 'inactive' }
    ];

    service.getUserByEmail('martina@example.com').subscribe(users => {
      expect(users.length).toBe(1);
      expect(users[0].email).toBe('martina@example.com');
    });

    const req = httpMock.expectOne(r => r.url.includes('email=martina@example.com'));
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });

 
  it('should add a new user', () => {
    const newUser: User = { id: 3, name: 'Luca Bianchi', email: 'luca@example.com', gender: 'male', status: 'active' };

    service.addUser(newUser).subscribe(user => {
      expect(user).toEqual(newUser);
    });

    const req = httpMock.expectOne('https://gorest.co.in/public/v2/users');
    expect(req.request.method).toBe('POST');
    req.flush(newUser);
  });

  
  it('should delete a user', () => {
    service.deleteUser(1).subscribe(result => {
      expect(result).toBeTrue();
    });

    const req = httpMock.expectOne('https://gorest.co.in/public/v2/users/1');
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });

 
  it('should fetch posts by user', () => {
    const mockPosts: Post[] = [
      { id: 1, user_id: 1, title: 'Post 1', body: 'Body 1' }
    ];

    service.getPostsByUser(1).subscribe(posts => {
      expect(posts.length).toBe(1);
      expect(posts[0].title).toBe('Post 1');
    });

    const req = httpMock.expectOne('https://gorest.co.in/public/v2/users/1/posts');
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });

 
  it('should fetch all posts', () => {
    const mockPosts: Post[] = [
      { id: 1, user_id: 1, title: 'Post 1', body: 'Body 1' }
    ];

    service.getAllPosts().subscribe(posts => {
      expect(posts.length).toBe(1);
    });

    const req = httpMock.expectOne('https://gorest.co.in/public/v2/posts');
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });

  
  it('should fetch comments by post', () => {
    const mockComments: UserComment[] = [
      { id: 1, post_id: 1, name: 'Test', email: 'test@example.com', body: 'Nice post!' }
    ];

    service.getCommentsByPost(1).subscribe(comments => {
      expect(comments.length).toBe(1);
      expect(comments[0].body).toBe('Nice post!');
    });

    const req = httpMock.expectOne('https://gorest.co.in/public/v2/posts/1/comments');
    expect(req.request.method).toBe('GET');
    req.flush(mockComments);
  });

 
  it('should add a comment to a post', () => {
    const mockComment: UserComment = {
      id: 1,
      post_id: 1,
      name: 'Ganaka Arora',
      email: 'ganaka_arora@crist.example',
      body: 'Test comment'
    };

    service.addComment(1, 'Test comment').subscribe(comment => {
      expect(comment).toEqual(mockComment);
    });

    const req = httpMock.expectOne('https://gorest.co.in/public/v2/posts/1/comments');
    expect(req.request.method).toBe('POST');
    req.flush(mockComment);
  });

 
  it('should delete a comment', () => {
    service.deleteComment(1).subscribe(result => {
      expect(result).toBeTrue();
    });

    const req = httpMock.expectOne('https://gorest.co.in/public/v2/comments/1');
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });


  it('should add a new post', () => {
    localStorage.setItem('user_current', JSON.stringify({ id: 1 }));

    const mockPost: Post = { id: 1, user_id: 1, title: 'New Post', body: 'Post body' };

    service.addNewPost({ title: 'New Post', body: 'Post body' }).subscribe(post => {
      expect(post).toEqual(mockPost);
    });

    const req = httpMock.expectOne('https://gorest.co.in/public/v2/posts');
    expect(req.request.method).toBe('POST');
    req.flush(mockPost);
  });

  it('should return [] on getUsers error', () => {
    service.getUsers().subscribe(users => {
      expect(users).toEqual([]);
    });
  
    const req = httpMock.expectOne(r => r.url.includes('/users'));
    req.flush('Errore', { status: 500, statusText: 'Server Error' });
  });
  

  it('should return null if addUser fails', () => {
    service.addUser({} as any).subscribe(user => {
      expect(user).toBeNull();
    });
  
    const req = httpMock.expectOne('https://gorest.co.in/public/v2/users');
    req.flush('Error', { status: 400, statusText: 'Bad Request' });
  });
  
  it('should return false if deleteUser fails', () => {
    service.deleteUser(1).subscribe(result => {
      expect(result).toBeFalse();
    });
  
    const req = httpMock.expectOne('https://gorest.co.in/public/v2/users/1');
    req.flush('Error', { status: 500, statusText: 'Server Error' });
  });
  
  it('should return null if addComment fails', () => {
    service.addComment(1, 'Test').subscribe(comment => {
      expect(comment).toBeNull();
    });
  
    const req = httpMock.expectOne('https://gorest.co.in/public/v2/posts/1/comments');
    req.flush('Error', { status: 500, statusText: 'Server Error' });
  });
  
  it('should return [] on getAllPosts error', () => {
    service.getAllPosts().subscribe(posts => {
      expect(posts).toEqual([]);
    });
  
    const req = httpMock.expectOne('https://gorest.co.in/public/v2/posts');
    req.flush('Error', { status: 500, statusText: 'Server Error' });
  });
  

  
});
