import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMainInfo } from './user-main-info';

describe('UserMainInfo', () => {
  let component: UserMainInfo;
  let fixture: ComponentFixture<UserMainInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMainInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMainInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
