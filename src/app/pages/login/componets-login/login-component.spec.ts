import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LoginComponent } from './login-component';
import { AuthService } from '../../../auth/auth-service';
import { Router } from '@angular/router';
import { provideRouter } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';
import { User } from '../../../models/user.model';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';


class AuthServiceMock {
  logout() {}
  validateToken(token: string) {
    return of(true);
  }
  saveToken(token: string) {}
  createUserCurrent() {
    return of({ id: 1, name: 'Test User', email: 'test@example.com' });
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthServiceMock;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule],
      providers: [
        { provide: AuthService, useClass: AuthServiceMock
         },
        provideRouter([]),
        provideHttpClient(),
         provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as any;
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty token', () => {
    expect(component.loginForm).toBeTruthy();
    expect(component.loginForm.controls['token'].value).toBe('');
  });

  it('should show error if token is empty', () => {
    component.loginForm.controls['token'].setValue('');
    component.onLogin();
    expect(component.errorMsg).toBe('Please enter a valid token');
  });

  it('should call validateToken and navigate to users on valid token', fakeAsync(() => {
    spyOn(authService, 'validateToken').and.returnValue(of(true));
    spyOn(authService, 'saveToken');
    spyOn(authService, 'createUserCurrent').and.returnValue(of({ id: 1 } as User ));
    spyOn(router, 'navigate');

    component.loginForm.controls['token'].setValue('VALID_TOKEN');
    component.onLogin();
    tick();

    expect(authService.validateToken).toHaveBeenCalledWith('VALID_TOKEN');
    expect(authService.saveToken).toHaveBeenCalledWith('VALID_TOKEN');
    expect(authService.createUserCurrent).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['users']);
    expect(component.errorMsg).toBe('');
  }));

  it('should set errorMsg if token is invalid', fakeAsync(() => {
    spyOn(authService, 'validateToken').and.returnValue(of(false));
    component.loginForm.controls['token'].setValue('INVALID_TOKEN');
    component.onLogin();
    tick();

    expect(component.errorMsg).toBe('Invalid token. Please check and try again.');
  }));

  it('should set errorMsg if validateToken throws error', fakeAsync(() => {
    spyOn(authService, 'validateToken').and.returnValue(throwError(() => new Error('Error')));
    component.loginForm.controls['token'].setValue('TOKEN');
    component.onLogin();
    tick();

    expect(component.errorMsg).toBe('Invalid token. Please check and try again.');
  }));

  it('should call logout on ngOnInit', () => {
    spyOn(authService, 'logout');
    component.ngOnInit();
    expect(authService.logout).toHaveBeenCalled();
  });
});
