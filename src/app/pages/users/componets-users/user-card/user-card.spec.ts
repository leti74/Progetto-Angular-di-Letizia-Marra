import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { UserCard } from './user-card';
import { of } from 'rxjs';
import { User } from '../../../../models/user.model';
import { UsersServices } from '../../../../services/users-service';

class MockUsersServices {
  deleteUser = jasmine.createSpy('deleteUser').and.callFake((id: number) => of(true));
  }

describe('UserCard', () => {
  let component: UserCard;
  let fixture: ComponentFixture<UserCard>;
  let usersServiceMock: MockUsersServices;

  const mockUsers: User[] = [
    { id: 1, name: 'Alice', email: 'alice@test.com', gender: 'female', status: 'active' },
    { id: 2, name: 'Bob', email: 'bob@test.com', gender: 'male', status: 'inactive' }
    ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCard],
      providers: [
        { provide: UsersServices, useClass: MockUsersServices }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCard);
    component = fixture.componentInstance;
    usersServiceMock = TestBed.inject(UsersServices) as unknown as MockUsersServices
    component.users = mockUsers;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit id when goToUserDetail is called', () => {
    spyOn(component.id, 'emit');
    
    component.goToUserDetail(1);
    
    expect(component.id.emit).toHaveBeenCalledWith(1);
    
    });

    it('should call deleteUser and emit userIdDeleted', fakeAsync(() => {
      spyOn(component.userIdDeleted, 'emit');
      const fakeEvent = { stopPropagation: jasmine.createSpy('stopPropagation') } as unknown as Event;
      
      component.deleteUser(1, fakeEvent);
      tick();
      
      expect(fakeEvent.stopPropagation).toHaveBeenCalled();
      expect(usersServiceMock.deleteUser).toHaveBeenCalledWith(1);
      expect(component.userIdDeleted.emit).toHaveBeenCalledWith(1);
      
      }));

      it('should not emit userIdDeleted if deleteUser returns false', fakeAsync(() => {
        spyOn(component.userIdDeleted, 'emit');
        usersServiceMock.deleteUser.and.returnValue(of(false));
        const fakeEvent = { stopPropagation: jasmine.createSpy('stopPropagation') } as unknown as Event;
        
        component.deleteUser(1, fakeEvent);
        tick();
        
        expect(component.userIdDeleted.emit).not.toHaveBeenCalled();
        
        }));
});
