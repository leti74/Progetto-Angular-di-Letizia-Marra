import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddUserDialog } from './add-user-dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


describe('AddUserDialog', () => {
let component: AddUserDialog;
let fixture: ComponentFixture<AddUserDialog>;
let dialogRefSpy: jasmine.SpyObj<MatDialogRef<AddUserDialog>>;

beforeEach(async () => {
dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);


await TestBed.configureTestingModule({
  imports: [AddUserDialog, ReactiveFormsModule],
  providers: [
    { provide: MatDialogRef, useValue: dialogRefSpy }
  ]
}).compileComponents();

fixture = TestBed.createComponent(AddUserDialog);
component = fixture.componentInstance;
fixture.detectChanges();


});

it('should create', () => {
expect(component).toBeTruthy();
});

it('should close dialog with form value on save when form is valid', () => {
component.userForm.setValue({
name: 'Nuovo Utente',
email: 'nuovo@test.com',
gender: 'male',
status: 'active'
});


component.save();

expect(dialogRefSpy.close).toHaveBeenCalledWith({
  name: 'Nuovo Utente',
  email: 'nuovo@test.com',
  gender: 'male',
  status: 'active'
});


});

it('should not close dialog on save if form is invalid', () => {
component.userForm.setValue({
name: '',
email: 'invalid-email',
gender: 'male',
status: 'active'
});

component.save();

expect(dialogRefSpy.close).not.toHaveBeenCalled();


});

it('should close dialog with null on cancel', () => {
component.cancel();
expect(dialogRefSpy.close).toHaveBeenCalledWith(null);
});

it('should initialize form with default values', () => {
const value = component.userForm.value;
expect(value.name).toBe('');
expect(value.email).toBe('');
expect(value.gender).toBe('male');
expect(value.status).toBe('active');
});
});
