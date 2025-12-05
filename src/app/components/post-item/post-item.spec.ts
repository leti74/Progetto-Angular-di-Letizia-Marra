import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { PostItem } from './post-item';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsersServices } from '../../services/users-service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Post } from '../../models/post.model';
import { UserComment } from '../../models/comment.model';

class UsersServicesMock {
addComment = jasmine.createSpy('addComment').and.returnValue(of({ id: 1, body: 'New comment', email: 'test@test.com' }));
deleteComment = jasmine.createSpy('deleteComment').and.returnValue(of({}));
}

describe('PostItem', () => {
let component: PostItem;
let fixture: ComponentFixture<PostItem>;
let usersService: UsersServicesMock;

const mockPost: Post = {
id: 1,
user_id: 1,
userName: 'Alice',
title: 'Test Post',
body: 'Post body',
comments: []
};

beforeEach(async () => {
usersService = new UsersServicesMock();


await TestBed.configureTestingModule({
  imports: [
    PostItem,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
   
  ],
  providers: [
    { provide: UsersServices, useValue: usersService }
  ]
}).compileComponents();

fixture = TestBed.createComponent(PostItem);
component = fixture.componentInstance;
component.post = { ...mockPost }; // input
fixture.detectChanges();


});

it('should create component and initialize form', () => {
expect(component).toBeTruthy();
expect(component.commentForm).toBeDefined();
});

it('should add a new comment', fakeAsync(() => {
component.commentForm.setValue({ body: 'New comment' });
component.addComment(component.post.id!);
tick();
expect(usersService.addComment).toHaveBeenCalledWith(component.post.id, 'New comment');
expect(component.post.comments?.length).toBe(1);
expect(component.commentForm.value.body).toBeNull(); 
}));

it('should not call addComment if body is empty', () => {
component.commentForm.setValue({ body: '' });
component.addComment(component.post.id!);
expect(usersService.addComment).not.toHaveBeenCalled();
});

it('should delete a comment after confirmation', fakeAsync(() => {
spyOn(window, 'confirm').and.returnValue(true);
component.post.comments = [{ id: 1, body: 'Comment', email: 'test@test.com' }] as UserComment[];
component.deleteComment(1);
tick();
expect(usersService.deleteComment).toHaveBeenCalledWith(1);
expect(component.post.comments?.length).toBe(0);
}));

it('should not delete comment if confirmation is cancelled', () => {
spyOn(window, 'confirm').and.returnValue(false);
component.post.comments = [{ id: 1, body: 'Comment', email: 'test@test.com' }] as UserComment[];
component.deleteComment(1);
expect(usersService.deleteComment).not.toHaveBeenCalled();
expect(component.post.comments?.length).toBe(1);
});
});
