import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { Users } from './users';
import { UsersServices } from '../../services/users-service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { User } from '../../models/user.model';

class MockUsersServices {
getUsers = jasmine.createSpy('getUsers').and.returnValue(of([]));
addUser = jasmine.createSpy('addUser').and.callFake((user: User) => of({
...user,
id: 99
}));
}

class MockMatDialog {
open() {
return {
afterClosed: () => of({ name: 'Nuovo Utente', email: 'nuovo@test.com', gender: 'male', status: 'active' })
};
}
}

describe('Users', () => {
let component: Users;
let fixture: ComponentFixture<Users>;
let usersServiceMock: MockUsersServices;
let dialogMock: MockMatDialog;
let routerSpy: jasmine.SpyObj<Router>;

beforeEach(async () => {
routerSpy = jasmine.createSpyObj('Router', ['navigate']);
dialogMock = new MockMatDialog();

await TestBed.configureTestingModule({
  imports: [Users],
  providers: [
    { provide: UsersServices, useClass: MockUsersServices },
    { provide: MatDialog, useValue: dialogMock },
    { provide: Router, useValue: routerSpy }
  ]
}).compileComponents();

fixture = TestBed.createComponent(Users);
component = fixture.componentInstance;
fixture.detectChanges();

usersServiceMock = TestBed.inject(UsersServices) as unknown as MockUsersServices;


});

it('should create', () => {
expect(component).toBeTruthy();
});

it('should load users on init', () => {
expect(usersServiceMock.getUsers).toHaveBeenCalled();
expect(component.users().length).toBe(0); 
});

it('should add user from dialog', fakeAsync(() => {
component.addUser();
tick();
fixture.detectChanges();


expect(usersServiceMock.addUser).toHaveBeenCalledWith(jasmine.objectContaining({
  name: 'Nuovo Utente',
  email: 'nuovo@test.com',
  gender: 'male',
status: 'active'
}));

const usersArray = component.users();
expect(usersArray.length).toBe(1);
expect(usersArray[0].name).toBe('Nuovo Utente');
expect(usersArray[0].email).toBe('nuovo@test.com');
expect(usersArray[0].gender).toBe('male');
expect(usersArray[0].status).toBe('active');


}));

it('should filter users by name/email', fakeAsync(() => {
const mockUsers: User[] = [
{ id: 1, name: 'Alice', email: 'alice@test.com', gender: 'female', status: 'active' },
{ id: 2, name: 'Bob', email: 'bob@test.com', gender: 'male', status: 'inactive' }
];
usersServiceMock.getUsers.and.returnValue(of(mockUsers));


component.loadUsers();
tick();
fixture.detectChanges();

component.usersForm.get('nameEmail')?.setValue('Alice');
tick(300); // debounce
fixture.detectChanges();

const filtered = component.users();
expect(filtered.length).toBe(1);
expect(filtered[0].name).toBe('Alice');


}));

it('should navigate to user detail', () => {
component.goToUserDetail(42);
expect(routerSpy.navigate).toHaveBeenCalledWith(['user', 42]);
});

it('should delete a user', () => {
component.users.set([{ id: 1, name: 'Test', email: 'test@test.com', gender: 'male', status: 'active' }]);
component.userDelete(1);
expect(component.users().length).toBe(0);
});
});
