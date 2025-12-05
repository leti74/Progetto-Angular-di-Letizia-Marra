import { TestBed } from '@angular/core/testing';
import { provideRouter, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { UserDetail } from './user-detail';
import { UsersServices } from '../../services/users-service';
import { User } from '../../models/user.model';
import { Posts } from '../posts/posts';


class MockUsersService {
  getUserById(id: number) {
    return of({
      id,
      name: 'Test User',
      email: 'test@example.com',
      gender: 'female',
      status: 'active'
    } as User);
  }

  getPostsByUser(userId: number) {
    return of([
        { id: 1, user_id: userId, title: 'Post 1', body: 'Content 1' },
        { id: 2, user_id: userId, title: 'Post 2', body: 'Content 2' }
      ] as unknown as Posts[]);
  }
}

describe('UserDetail', () => {
  let component: UserDetail;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserDetail],
      providers: [
        { provide: UsersServices, useClass: MockUsersService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: new Map([['id', '123']]) }
          }
        }
      ]
    });

    const fixture = TestBed.createComponent(UserDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load user by id from route', () => {
    expect(component.user).toEqual({ id: 123,
      name: 'Test User',
      email: 'test@example.com',
      gender: 'female',
      status: 'active' });
  });
});
