import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { UserPosts } from './user-posts';
import { UsersServices } from '../../../../services/users-service';
import { of } from 'rxjs';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


@Component({ selector: 'app-post-item', standalone: true, template: '' })
class MockPostItem {
@Input() post: any;
}


class MockUsersService {
getPostsByUser(userId: number) {
return of([
{ id: 1, title: 'Post 1', body: 'Content 1', userName: 'Alice', comments: [] },
{ id: 2, title: 'Post 2', body: 'Content 2', userName: 'Alice', comments: [] }
]);
}

getCommentsByPost(postId: number) {
return of([
{ id: 1, body: 'Comment 1', email: '[a@test.com](mailto:a@test.com)' },
{ id: 2, body: 'Comment 2', email: '[b@test.com](mailto:b@test.com)' }
]);
}
};

describe('UserPosts', () => {
let component: UserPosts;
let fixture: ComponentFixture<UserPosts>;
let usersService: MockUsersService;

beforeEach(async () => {
await TestBed.configureTestingModule({
imports: [UserPosts, CommonModule, MatCardModule, MockPostItem],
providers: [{ provide: UsersServices, useClass: MockUsersService }]
}).compileComponents();

fixture = TestBed.createComponent(UserPosts);
component = fixture.componentInstance;
component.userID = 1;
usersService = TestBed.inject(UsersServices) as unknown as MockUsersService;
fixture.detectChanges();


});

it('should create the component', () => {
expect(component).toBeTruthy();
});

it('should load posts and assign them to component', fakeAsync(() => {
component.loadPosts();
tick();
expect(component.posts.length).toBe(2);
expect(component.posts[0].title).toBe('Post 1');
}));

it('should populate comments for each post', fakeAsync(() => {
component.loadPosts();
tick(); 
component.posts.forEach(post => {
expect(post.comments!.length).toBe(2);
expect(post.comments![0].body).toBe('Comment 1');
});
}));

it('should display message "No comments yet" if post has no comments', fakeAsync(() => {
spyOn(usersService, 'getCommentsByPost').and.returnValue(of([])); 
component.loadPosts();
tick();
fixture.detectChanges();


const compiled = fixture.nativeElement as HTMLElement;
expect(compiled.textContent).toContain('No comments yet');


}));
});
