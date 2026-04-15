import {
  MatDialogRef,
  MatSelectModule,
  init_dialog,
  init_select
} from "./chunk-RYV254VE.js";
import {
  init_form_field
} from "./chunk-B7F4PUKS.js";
import {
  FormControl,
  FormGroup,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  Validators,
  init_forms,
  init_input
} from "./chunk-I4C45BTD.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-BY3MFIMF.js";
import {
  CommonModule,
  init_common
} from "./chunk-LASEEYUI.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-HWYXDFSJ.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\pages\users\componets-users\add-user-dialog\add-user-dialog.html
var add_user_dialog_default;
var init_add_user_dialog = __esm({
  "angular:jit:template:src\\app\\pages\\users\\componets-users\\add-user-dialog\\add-user-dialog.html"() {
    add_user_dialog_default = '<h2 mat-dialog-title class="p-4">Add new user</h2>\r\n\r\n<form [formGroup]="userForm" class="flex flex-col gap-3 p-4">\r\n    <mat-form-field>\r\n        <mat-label>Name</mat-label>\r\n        <input matInput formControlName="name" placeholder="Enter your name">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n        <mat-label>Email</mat-label>\r\n        <input matInput formControlName="email" placeholder="Enter your email">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n        <mat-label>Gender</mat-label>\r\n        <mat-select formControlName="gender">\r\n            <mat-option value="male">Male</mat-option>\r\n            <mat-option value="female">Female</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n        <mat-label>Status</mat-label>\r\n        <mat-select formControlName="status">\r\n            <mat-option value="active">Active</mat-option>\r\n            <mat-option value="inactive">Inactive</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n\r\n    <div class="flex justify-end gap-2 mt-3">\r\n        <button mat-stroked-button (click)="cancel()">Cancel</button>\r\n        <button mat-flat-button color="primary" (click)="save()" [disabled]="userForm.invalid">Save</button>\r\n    </div>\r\n</form>';
  }
});

// src/app/pages/users/componets-users/add-user-dialog/add-user-dialog.ts
var AddUserDialog;
var init_add_user_dialog2 = __esm({
  "src/app/pages/users/componets-users/add-user-dialog/add-user-dialog.ts"() {
    "use strict";
    init_tslib_es6();
    init_add_user_dialog();
    init_core();
    init_dialog();
    init_forms();
    init_form_field();
    init_input();
    init_select();
    init_button();
    init_common();
    AddUserDialog = class AddUserDialog2 {
      dialogRef;
      userForm = new FormGroup({
        name: new FormControl("", Validators.required),
        email: new FormControl("", [Validators.required, Validators.email]),
        gender: new FormControl("male", Validators.required),
        status: new FormControl("active", Validators.required)
      });
      constructor(dialogRef) {
        this.dialogRef = dialogRef;
      }
      save() {
        if (this.userForm.valid) {
          this.dialogRef.close(this.userForm.value);
        }
      }
      cancel() {
        this.dialogRef.close(null);
      }
      static ctorParameters = () => [
        { type: MatDialogRef }
      ];
    };
    AddUserDialog = __decorate([
      Component({
        selector: "app-add-user-dialog",
        standalone: true,
        imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
        template: add_user_dialog_default
      })
    ], AddUserDialog);
  }
});

export {
  AddUserDialog,
  init_add_user_dialog2 as init_add_user_dialog
};
//# sourceMappingURL=chunk-HG3WCLRT.js.map
