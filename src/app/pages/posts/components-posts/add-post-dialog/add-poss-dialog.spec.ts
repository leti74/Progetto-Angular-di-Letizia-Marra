import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPossDialog } from './add-post-dialog';

describe('AddPossDialog', () => {
  let component: AddPossDialog;
  let fixture: ComponentFixture<AddPossDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPossDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPossDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
