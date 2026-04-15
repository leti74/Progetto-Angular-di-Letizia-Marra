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

// angular:jit:template:src\app\pages\posts\components-posts\add-post-dialog\add-post-dialog.html
var add_post_dialog_default;
var init_add_post_dialog = __esm({
  "angular:jit:template:src\\app\\pages\\posts\\components-posts\\add-post-dialog\\add-post-dialog.html"() {
    add_post_dialog_default = '<h2 mat-dialog-title class="p-4">Add new post</h2>\r\n\r\n<form [formGroup]="postForm" class="flex flex-col gap-3 p-4">\r\n\r\n    <mat-form-field>\r\n        <mat-label>Title</mat-label>\r\n        <input matInput formControlName="title" placeholder="Post title">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n        <mat-label>Body</mat-label>\r\n        <textarea matInput rows="4" formControlName="body" placeholder="Post content"></textarea>\r\n    </mat-form-field>\r\n\r\n    <div class="flex justify-end gap-2 mt-3">\r\n        <button mat-stroked-button (click)="cancel()">Cancel</button>\r\n        <button mat-flat-button color="primary" (click)="save()" [disabled]="postForm.invalid">\r\n            Save\r\n        </button>\r\n    </div>\r\n</form>';
  }
});

// angular:jit:style:src\app\pages\posts\components-posts\add-post-dialog\add-post-dialog.css
var add_post_dialog_default2;
var init_add_post_dialog2 = __esm({
  "angular:jit:style:src\\app\\pages\\posts\\components-posts\\add-post-dialog\\add-post-dialog.css"() {
    add_post_dialog_default2 = "/* src/app/pages/posts/components-posts/add-post-dialog/add-post-dialog.css */\n/*# sourceMappingURL=add-post-dialog.css.map */\n";
  }
});

// src/app/pages/posts/components-posts/add-post-dialog/add-post-dialog.ts
var AddPostDialog;
var init_add_post_dialog3 = __esm({
  "src/app/pages/posts/components-posts/add-post-dialog/add-post-dialog.ts"() {
    "use strict";
    init_tslib_es6();
    init_add_post_dialog();
    init_add_post_dialog2();
    init_core();
    init_forms();
    init_dialog();
    init_form_field();
    init_input();
    init_select();
    init_forms();
    init_common();
    init_button();
    AddPostDialog = class AddPostDialog2 {
      dialogRef;
      postForm;
      constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.postForm = new FormGroup({
          title: new FormControl("", Validators.required),
          body: new FormControl("", Validators.required)
        });
      }
      cancel() {
        this.dialogRef.close();
      }
      save() {
        const title = this.postForm.value.title;
        const body = this.postForm.value.body;
        if (this.postForm.valid) {
          this.dialogRef.close({ title, body });
        }
      }
      static ctorParameters = () => [
        { type: MatDialogRef }
      ];
    };
    AddPostDialog = __decorate([
      Component({
        selector: "app-add-poss-dialog",
        imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, CommonModule, MatButtonModule],
        template: add_post_dialog_default,
        styles: [add_post_dialog_default2]
      })
    ], AddPostDialog);
  }
});

export {
  AddPostDialog,
  init_add_post_dialog3 as init_add_post_dialog
};
//# sourceMappingURL=chunk-UZQJKFPW.js.map
