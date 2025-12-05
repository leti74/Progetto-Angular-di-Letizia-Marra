import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './auth-service';
import { UsersServices } from '../services/users-service';
import { of } from 'rxjs';
import { User } from '../models/user.model';

class MockUsersServices {
  getUserByEmail = jasmine.createSpy().and.returnValue(of([]));
  addUser = jasmine.createSpy().and.returnValue(of({
    id: 1,
    name: 'Martina Romeo',
    email: 'martina_romeo@crist.example',
    gender: 'female',
    status: 'inactive'
  }));
}

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let userService: MockUsersServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: UsersServices, useClass: MockUsersServices },
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
    userService = TestBed.inject(UsersServices) as unknown as MockUsersServices;
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });


  it('should create userCurrent if not exists', () => {
    userService.getUserByEmail.and.returnValue(of([])); 

    service.createUserCurrent().subscribe(user => {
      expect(user?.name).toBe('Martina Romeo');
      expect(localStorage.getItem('user_current')).toContain('Martina Romeo');
    });

    expect(userService.addUser).toHaveBeenCalled();
  });

  it('should reuse existing user if found', () => {
    const existingUser: User = {
      id: 99,
      name: 'Existing User',
      email: 'martina_romeo@crist.example',
      gender: 'female',
      status: 'active'
    };

    userService.getUserByEmail.and.returnValue(of([existingUser]));

    service.createUserCurrent().subscribe(user => {
      expect(user).toEqual(existingUser);
      expect(localStorage.getItem('user_current')).toContain('Existing User');
    });

    expect(userService.addUser).not.toHaveBeenCalled();
  });


  it('should return user from localStorage', () => {
    const mockUser = { id: 1, name: 'Test User' };
    localStorage.setItem('user_current', JSON.stringify(mockUser));

    const user = service.getUserCurrent();
    expect(user?.name).toBe('Test User');
  });


  it('should validate token successfully', () => {
    service.validateToken('fake-token').subscribe(result => {
      expect(result).toBeTrue();
    });

    const req = httpMock.expectOne('https://gorest.co.in/public/v2/users');
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toBe('Bearer fake-token');
    req.flush([{ id: 1 }]); 
  });

  it('should return false if token invalid', () => {
    service.validateToken('bad-token').subscribe(result => {
      expect(result).toBeFalse();
    });

    const req = httpMock.expectOne('https://gorest.co.in/public/v2/users');
    req.error(new ErrorEvent('Unauthorized'));
  });

  // ✅ saveToken / getToken
  it('should save and retrieve token', () => {
    service.saveToken('abc123');
    expect(service.getToken()).toBe('abc123');
  });


  it('should clear token and user on logout', () => {
    localStorage.setItem('access_token', 'abc123');
    localStorage.setItem('user_current', JSON.stringify({ id: 1 }));

    service.logout();

    expect(service.getToken()).toBeNull();
    expect(service.getUserCurrent()).toBeNull();
    expect(service.isAuthenticated()).toBeFalse();
  });

  it('should return true if authenticated', () => {
    service.saveToken('abc123');
    expect(service.isAuthenticated()).toBeTrue();
  });
});
