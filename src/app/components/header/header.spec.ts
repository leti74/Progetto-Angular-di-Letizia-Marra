import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';
import { AuthService } from '../../auth/auth-service';
import { Router } from '@angular/router';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';


class AuthServiceMock {
  isAuthenticated() {
    return true;
  }

  logout() {}
}

describe('Header (Angular 20)', () => {
  let fixture: ComponentFixture<Header>;
  let component: Header;
  let authService: AuthService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header], 
      providers: [
        { provide: AuthService, useClass: AuthServiceMock },
        provideRouter([]), 
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });


  it('should render toolbar when user is authenticated', () => {
    const toolbar = fixture.debugElement.query(By.css('mat-toolbar'));
    expect(toolbar).toBeTruthy();
  });

 
  it('should render Users and Posts links', () => {
    const usersLink = fixture.debugElement.query(By.css('a[routerLink="/users"]'));
    const postsLink = fixture.debugElement.query(By.css('a[routerLink="/posts"]'));

    expect(usersLink).toBeTruthy();
    expect(postsLink).toBeTruthy();
  });


  it('should call logout on AuthService when logout button is clicked', () => {
    spyOn(authService, 'logout');

    const logoutBtn = fixture.debugElement.query(By.css('.logout-link'));
    logoutBtn.nativeElement.click();

    expect(authService.logout).toHaveBeenCalled();
  });


  it('should navigate to /login after logout', () => {
    spyOn(router, 'navigate');
    spyOn(authService, 'logout');

    component.logout();

    expect(authService.logout).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  });


  it('should NOT render toolbar when user is NOT authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    fixture.detectChanges();

    const toolbar = fixture.debugElement.query(By.css('mat-toolbar'));
    expect(toolbar).toBeNull();
  });
});
