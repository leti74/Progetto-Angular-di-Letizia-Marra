import {
  AddPostDialog,
  init_add_post_dialog
} from "./chunk-NK2T4XNC.js";
import {
  MatDialogRef,
  init_dialog
} from "./chunk-332446CA.js";
import {
  init_form_field
} from "./chunk-3UATW3OL.js";
import "./chunk-3ZCJD756.js";
import {
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  init_forms,
  init_input
} from "./chunk-MDJNTZJJ.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-AQVCDG62.js";
import "./chunk-JYNMUJH7.js";
import "./chunk-TBTPVLY7.js";
import {
  CommonModule,
  init_common
} from "./chunk-5TDDVODP.js";
import {
  TestBed,
  init_testing
} from "./chunk-S2VHKD3G.js";
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
