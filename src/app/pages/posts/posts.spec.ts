import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Posts } from './posts';
import { UsersServices } from '../../services/users-service';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


@Component({ selector: 'app-post-item', standalone: true, template: '' })
class MockPostItem {
  @Input() post: any;
}


class MockUsersService {
  getAllPosts() {
    return of([
      { id: 1, title: 'Post 1', body: 'Body 1', user_id: 10, comments: [] },
      { id: 2, title: 'Post 2', body: 'Body 2', user_id: 10, comments: [] }
    ]);
  }

  getUserById(id: number) {
    return of({ id: 10, name: "Alice" });
  }

  getCommentsByPost(postId: number) {
    return of([
      { id: 1, body: 'Comment 1', email: 'a@test.com' },
      { id: 2, body: 'Comment 2', email: 'b@test.com' }
    ]);
  }

  addNewPost(data: any) {
    return of({ success: true });
  }
}

class MockMatDialog {
  open() {
    return {
      
      afterClosed: () => of({ title: "New", body: "Post", user_id: 10 })
    };
  }
}

describe('Posts', () => {

  let component: Posts;
  let fixture: ComponentFixture<Posts>;
  let usersService: UsersServices;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Posts, ReactiveFormsModule, MockPostItem],
      providers: [
        { provide: UsersServices, useClass: MockUsersService },
        { provide: MatDialog, useClass: MockMatDialog }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Posts);
    component = fixture.componentInstance;

    usersService = TestBed.inject(UsersServices);
    dialog = TestBed.inject(MatDialog);

    fixture.detectChanges();
  });

 
  it('should create', () => {
    expect(component).toBeTruthy();
  });


  
  it('should apply filters', fakeAsync(() => {
    component.loadPosts();
    tick();
    fixture.detectChanges();

    component.postsForm.controls['searchText'].setValue("post 1");
    tick();
    fixture.detectChanges();

    expect(component.posts.length).toBe(1);
    expect(component.posts[0].title).toBe("Post 1");
  }));

  
  it('should open dialog and add new post', fakeAsync(() => {

    const spyAdd = spyOn(usersService, 'addNewPost').and.callThrough();
    const spyLoad = spyOn(component, 'loadPosts');

    component.addPost();
    tick();

    expect(spyAdd).toHaveBeenCalled();
    expect(spyLoad).toHaveBeenCalled();

  }));

});
