import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostDialog } from './add-post-dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';


class MatDialogRefMock{
  close= jasmine.createSpy('close')
}

describe('AddPossDialog', () => {
  let component: AddPostDialog;
  let fixture: ComponentFixture<AddPostDialog>;
  let dialogRef: MatDialogRefMock

  beforeEach(async () => {
    dialogRef = new MatDialogRefMock()
    await TestBed.configureTestingModule({
      imports: [AddPostDialog, ReactiveFormsModule, MatFormFieldModule,MatInputModule,MatButtonModule, CommonModule],
      providers:[ {provide: MatDialogRef, useValue: dialogRef}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPostDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty values', () => {
    expect(component.postForm.value).toEqual({ title: '', body: '' });
    expect(component.postForm.valid).toBeFalse();
    });
    
    it('should call dialogRef.close() on cancel', () => {
    component.cancel();
    expect(dialogRef.close).toHaveBeenCalled();
    });
    
    it('should not close dialog when form is invalid on save()', () => {
    component.save();
    expect(dialogRef.close).not.toHaveBeenCalled();
    });
    
    it('should close dialog with form data when form is valid', () => {
    component.postForm.setValue({
    title: 'My Title',
    body: 'My Body'
    });
    
    component.save();
    
    expect(dialogRef.close).toHaveBeenCalledWith({
      title: 'My Title',
      body: 'My Body'
    });
    
    });
});
