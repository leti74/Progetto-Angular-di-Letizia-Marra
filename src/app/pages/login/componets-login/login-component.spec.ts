import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

import { LoginComponent } from './login-component';
import { AuthService } from '../../../auth/auth-service';
import { UsersServices } from '../../../services/users-service';

// Mock Router
class RouterStub {
  navigate(commands: any[]) {}
}

// Mock AuthService
class AuthServiceStub {
  validateToken(token: string) {
    return token === 'valid-token' ? of(true) : of(false);
  }
  saveToken(token: string) {}
  createUserCurrent() {
    return of({ id: 1, name: 'Martina Romeo' });
  }
}

// Mock UsersServices
class UsersServicesStub {}

describe('LoginComponent (standalone)', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthServiceStub;
  let router: RouterStub;

  // ✅ il beforeEach è dentro describe
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub },
        { provide: UsersServices, useClass: UsersServicesStub },
        { provide: Router, useClass: RouterStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as unknown as AuthServiceStub;
    router = TestBed.inject(Router) as unknown as RouterStub;
    fixture.detectChanges();
  });

  it('should create component and initialize form', () => {
    expect(component).toBeTruthy();
    expect(component.loginForm.contains('token')).toBeTrue();
  });

  it('should show error message if token is empty on login', () => {
    component.loginForm.setValue({ token: '' });
    component.onLogin();
    expect(component.errorMsg).toBe('Please enter a valid token');
  });

  it('should set error message on invalid token', () => {
    spyOn(authService, 'validateToken').and.returnValue(of(false));
    component.loginForm.setValue({ token: 'invalid-token' });
    component.onLogin();
    expect(component.errorMsg).toBe('Invalid token. Please check and try again.');
    expect(component.loading).toBeFalse();
  });

  it('should call authService.validateToken and navigate on valid token', () => {
    spyOn(authService, 'validateToken').and.returnValue(of(true));
    spyOn(authService, 'saveToken');
    spyOn(authService, 'createUserCurrent').and.returnValue(of({ id: 1 , name:'Alice'}));
    spyOn(router, 'navigate');

    component.loginForm.setValue({ token: 'valid-token' });
    component.onLogin();

    expect(authService.validateToken).toHaveBeenCalledWith('valid-token');
    expect(authService.saveToken).toHaveBeenCalledWith('valid-token');
    expect(authService.createUserCurrent).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['users']);
  });

  it('should handle error from validateToken gracefully', () => {
    spyOn(authService, 'validateToken').and.returnValue(throwError(() => new Error('API error')));
    component.loginForm.setValue({ token: 'error-token' });
    component.onLogin();
    expect(component.errorMsg).toBe('Invalid token. Please check and try again.');
    expect(component.loading).toBeFalse();
  });
});
