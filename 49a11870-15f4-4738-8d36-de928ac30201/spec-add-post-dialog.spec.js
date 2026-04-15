import {
  AddPostDialog,
  init_add_post_dialog
} from "./chunk-UZQJKFPW.js";
import {
  MatDialogRef,
  init_dialog
} from "./chunk-RYV254VE.js";
import {
  init_form_field
} from "./chunk-B7F4PUKS.js";
import "./chunk-N23UCZVK.js";
import {
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  init_forms,
  init_input
} from "./chunk-I4C45BTD.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-BY3MFIMF.js";
import "./chunk-YZYR4KU5.js";
import "./chunk-DVI52OKY.js";
import {
  CommonModule,
  init_common
} from "./chunk-LASEEYUI.js";
import "./chunk-IWXHUCHX.js";
import {
  TestBed,
  init_testing
} from "./chunk-HWYXDFSJ.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/pages/posts/components-posts/add-post-dialog/add-post-dialog.spec.ts
var require_add_post_dialog_spec = __commonJS({
  "src/app/pages/posts/components-posts/add-post-dialog/add-post-dialog.spec.ts"(exports) {
    init_testing();
    init_add_post_dialog();
    init_forms();
    init_form_field();
    init_input();
    init_button();
    init_common();
    init_dialog();
    var MatDialogRefMock = class {
      close = jasmine.createSpy("close");
    };
    describe("AddPossDialog", () => {
      let component;
      let fixture;
      let dialogRef;
      beforeEach(() => __async(null, null, function* () {
        dialogRef = new MatDialogRefMock();
        yield TestBed.configureTestingModule({
          imports: [AddPostDialog, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule],
          providers: [{ provide: MatDialogRef, useValue: dialogRef }]
        }).compileComponents();
        fixture = TestBed.createComponent(AddPostDialog);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should initialize the form with empty values", () => {
        expect(component.postForm.value).toEqual({ title: "", body: "" });
        expect(component.postForm.valid).toBeFalse();
      });
      it("should call dialogRef.close() on cancel", () => {
        component.cancel();
        expect(dialogRef.close).toHaveBeenCalled();
      });
      it("should not close dialog when form is invalid on save()", () => {
        component.save();
        expect(dialogRef.close).not.toHaveBeenCalled();
      });
      it("should close dialog with form data when form is valid", () => {
        component.postForm.setValue({
          title: "My Title",
          body: "My Body"
        });
        component.save();
        expect(dialogRef.close).toHaveBeenCalledWith({
          title: "My Title",
          body: "My Body"
        });
      });
    });
  }
});
export default require_add_post_dialog_spec();
//# sourceMappingURL=spec-add-post-dialog.spec.js.map
