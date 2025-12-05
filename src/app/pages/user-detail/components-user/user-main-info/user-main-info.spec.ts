import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMainInfo } from './user-main-info';
import { User } from '../../../../models/user.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


describe('UserMainInfo', () => {
  let component: UserMainInfo;
  let fixture: ComponentFixture<UserMainInfo>;

  const mockUser: User = {
    id: 1,
    name: 'Alice',
    email: 'alice@test.com',
    gender: 'female',
    status: 'active'
    };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMainInfo, CommonModule, MatCardModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMainInfo);
    component = fixture.componentInstance;
    component.user= mockUser
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user name, email, gender and status', ()=>{
    const compiled = fixture.nativeElement as HTMLElement

    expect(compiled.textContent).toContain(mockUser.name)
    expect(compiled.textContent).toContain(mockUser.email); expect(compiled.textContent).toContain(mockUser.gender); expect(compiled.textContent).toContain(mockUser.status);
  })

  
});
