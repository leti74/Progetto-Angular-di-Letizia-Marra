import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Login } from './login';
import { Component } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';


@Component({
selector: 'app-login-component',
standalone: true,
template: '<p>mock login component</p>'
})
class MockLoginComponent {}

describe('Login', () => {
let fixture: ComponentFixture<Login>;
let component: Login;

beforeEach(async () => {
await TestBed.configureTestingModule({
imports: [
Login,            
MockLoginComponent
],
providers: [
    provideHttpClient(),
    provideHttpClientTesting()
]
}).compileComponents();


fixture = TestBed.createComponent(Login);
component = fixture.componentInstance;
fixture.detectChanges();


});

it('should create login component', () => {
expect(component).toBeTruthy();
});

it('should render the child login-component', () => {
const compiled = fixture.nativeElement as HTMLElement;
const child = compiled.querySelector('app-login-component');
expect(child).not.toBeNull();
});
});
