import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';
import { AuthService } from '../../auth/auth-service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';


class AuthServiceMock {
isAuthenticatedValue = false;
isAuthenticated() { return this.isAuthenticatedValue; }
logout = jasmine.createSpy('logout');
}


@Component({ template: '' })
class DummyComponent {}

describe('Header (standalone)', () => {
let component: Header;
let fixture: ComponentFixture<Header>;
let authService: AuthServiceMock;
let router: Router;

beforeEach(async () => {
authService = new AuthServiceMock();

await TestBed.configureTestingModule({
  imports: [
    Header, // componente standalone va qui
    RouterTestingModule.withRoutes([
      { path: 'login', component: DummyComponent },
      { path: 'users', component: DummyComponent },
      { path: 'posts', component: DummyComponent }
    ])
  ],
  providers: [
    { provide: AuthService, useValue: authService }
  ]
}).compileComponents();

fixture = TestBed.createComponent(Header);
component = fixture.componentInstance;
router = TestBed.inject(Router);
fixture.detectChanges();


});

it('should create header component', () => {
expect(component).toBeTruthy();
});

it('should display logout button when authenticated', () => {
authService.isAuthenticatedValue = true;
fixture.detectChanges();
const compiled = fixture.nativeElement as HTMLElement;
expect(compiled.querySelector('button.logout-link')).not.toBeNull();
});

it('should display login link when not authenticated', () => {
authService.isAuthenticatedValue = false;
fixture.detectChanges();
const compiled = fixture.nativeElement as HTMLElement;
const loginLink = compiled.querySelector('a.logo');
expect(loginLink).not.toBeNull();
expect(loginLink?.textContent).toContain('Login Page');
});

it('should call logout() and navigate to login', () => {
authService.isAuthenticatedValue = true;
fixture.detectChanges();
spyOn(router, 'navigate');
component.logout();
expect(authService.logout).toHaveBeenCalled();
expect(router.navigate).toHaveBeenCalledWith(['login']);
});
});
