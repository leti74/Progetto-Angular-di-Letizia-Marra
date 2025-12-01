import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../../models/user.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-add-poss-dialog',
  imports: [ReactiveFormsModule, MatFormFieldModule,MatSelectModule, MatInputModule, CommonModule, MatButtonModule],
  templateUrl: './add-post-dialog.html',
  styleUrl: './add-post-dialog.css',
})
export class AddPostDialog {

  postForm: FormGroup;
  

  constructor(
    private dialogRef: MatDialogRef<AddPostDialog>, 
  ) {
    
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    const title= this.postForm.value.title
    const body= this.postForm.value.body
    if (this.postForm.valid) {
      this.dialogRef.close({title, body});
    }
  }
}