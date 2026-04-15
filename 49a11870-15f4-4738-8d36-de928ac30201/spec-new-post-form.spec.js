import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-HWYXDFSJ.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\new-post-form\new-post-form.html
var new_post_form_default;
var init_new_post_form = __esm({
  "angular:jit:template:src\\app\\new-post-form\\new-post-form.html"() {
    new_post_form_default = "<p>new-post-form works!</p>\r\n";
  }
});

// angular:jit:style:src\app\new-post-form\new-post-form.css
var new_post_form_default2;
var init_new_post_form2 = __esm({
  "angular:jit:style:src\\app\\new-post-form\\new-post-form.css"() {
    new_post_form_default2 = "/* src/app/new-post-form/new-post-form.css */\n/*# sourceMappingURL=new-post-form.css.map */\n";
  }
});

// src/app/new-post-form/new-post-form.ts
var NewPostForm;
var init_new_post_form3 = __esm({
  "src/app/new-post-form/new-post-form.ts"() {
    "use strict";
    init_tslib_es6();
    init_new_post_form();
    init_new_post_form2();
    init_core();
    NewPostForm = class NewPostForm2 {
    };
    NewPostForm = __decorate([
      Component({
        selector: "app-new-post-form",
        imports: [],
        template: new_post_form_default,
        styles: [new_post_form_default2]
      })
    ], NewPostForm);
  }
});

// src/app/new-post-form/new-post-form.spec.ts
var require_new_post_form_spec = __commonJS({
  "src/app/new-post-form/new-post-form.spec.ts"(exports) {
    init_testing();
    init_new_post_form3();
    describe("NewPostForm", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [NewPostForm]
        }).compileComponents();
        fixture = TestBed.createComponent(NewPostForm);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_new_post_form_spec();
//# sourceMappingURL=spec-new-post-form.spec.js.map
