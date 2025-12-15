
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { Header } from './components/header/header';
import { Login } from './pages/login/login';
import { RouterOutlet, provideRouter } from '@angular/router';
import { AuthService } from './auth/auth-service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';


class AuthServiceMock {
  private authenticated = false;
  isAuthenticated() { return this.authenticated; }
  setAuth(value: boolean) { this.authenticated = value; }
  logout(){}
}

class UsersServicesMock {}

describe('App Component', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  let authService: AuthServiceMock;

  beforeEach(async () => {
    authService = new AuthServiceMock();

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: 'UsersServices', useClass: UsersServicesMock },
        provideHttpClientTesting(),
        provideHttpClient(),
        provideRouter([]),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
  });

  it('should create the App component', () => {
    expect(component).toBeTruthy();
  });

  it('should show <router-outlet> when authenticated', () => {
    authService.setAuth(true);
    component.isSubscribed = authService.isAuthenticated();
    fixture.detectChanges();

    const routerOutlet = fixture.debugElement.query(By.directive(RouterOutlet));
    const loginComp = fixture.debugElement.query(By.directive(Login));

    expect(routerOutlet).not.toBeNull();
    expect(loginComp).toBeNull();
  });

  it('should show <app-login> when not authenticated', () => {
    authService.setAuth(false);
    component.isSubscribed = authService.isAuthenticated();
    fixture.detectChanges();

    const routerOutlet = fixture.debugElement.query(By.directive(RouterOutlet));
    const loginComp = fixture.debugElement.query(By.directive(Login));

    expect(routerOutlet).toBeNull();
    expect(loginComp).not.toBeNull();
  });
});
