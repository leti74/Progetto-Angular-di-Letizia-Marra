import {
  AddUserDialog,
  init_add_user_dialog
} from "./chunk-VLRAZTEA.js";
import {
  MatDialogRef,
  init_dialog
} from "./chunk-332446CA.js";
import "./chunk-3UATW3OL.js";
import "./chunk-3ZCJD756.js";
import {
  ReactiveFormsModule,
  init_forms
} from "./chunk-MDJNTZJJ.js";
import "./chunk-AQVCDG62.js";
import "./chunk-JYNMUJH7.js";
import "./chunk-TBTPVLY7.js";
import "./chunk-5TDDVODP.js";
import {
  TestBed,
  init_testing
} from "./chunk-S2VHKD3G.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/pages/users/componets-users/add-user-dialog/add-user-dialog.spec.ts
var require_add_user_dialog_spec = __commonJS({
  "src/app/pages/users/componets-users/add-user-dialog/add-user-dialog.spec.ts"(exports) {
    init_testing();
    init_add_user_dialog();
    init_dialog();
    init_forms();
    describe("AddUserDialog", () => {
      let component;
      let fixture;
      let dialogRefSpy;
      beforeEach(() => __async(null, null, function* () {
        dialogRefSpy = jasmine.createSpyObj("MatDialogRef", ["close"]);
        yield TestBed.configureTestingModule({
          imports: [AddUserDialog, ReactiveFormsModule],
          providers: [
            { provide: MatDialogRef, useValue: dialogRefSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(AddUserDialog);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should close dialog with form value on save when form is valid", () => {
        component.userForm.setValue({
          name: "Nuovo Utente",
          email: "nuovo@test.com",
          gender: "male",
          status: "active"
        });
        component.save();
        expect(dialogRefSpy.close).toHaveBeenCalledWith({
          name: "Nuovo Utente",
          email: "nuovo@test.com",
          gender: "male",
          status: "active"
        });
      });
      it("should not close dialog on save if form is invalid", () => {
        component.userForm.setValue({
          name: "",
          email: "invalid-email",
          gender: "male",
          status: "active"
        });
        component.save();
        expect(dialogRefSpy.close).not.toHaveBeenCalled();
      });
      it("should close dialog with null on cancel", () => {
        component.cancel();
        expect(dialogRefSpy.close).toHaveBeenCalledWith(null);
      });
      it("should initialize form with default values", () => {
        const value = component.userForm.value;
        expect(value.name).toBe("");
        expect(value.email).toBe("");
        expect(value.gender).toBe("male");
        expect(value.status).toBe("active");
      });
    });
  }
});
export default require_add_user_dialog_spec();
//# sourceMappingURL=spec-add-user-dialog.spec.js.map
