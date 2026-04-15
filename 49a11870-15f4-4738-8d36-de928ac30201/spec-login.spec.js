import {
  Login,
  init_login
} from "./chunk-X5CBXDM7.js";
import "./chunk-YTYFJ64X.js";
import "./chunk-B7F4PUKS.js";
import {
  init_testing as init_testing2,
  provideHttpClientTesting
} from "./chunk-ZHKKMIYU.js";
import "./chunk-4UNSYY46.js";
import "./chunk-EVWX3VIH.js";
import "./chunk-I4C45BTD.js";
import "./chunk-VRB4UXM4.js";
import "./chunk-MYMEVESU.js";
import "./chunk-P55P3FLF.js";
import "./chunk-2DJU6ICH.js";
import "./chunk-YZYR4KU5.js";
import "./chunk-DVI52OKY.js";
import "./chunk-LASEEYUI.js";
import {
  init_http,
  provideHttpClient
} from "./chunk-H5MBOYMX.js";
import "./chunk-IWXHUCHX.js";
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
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/pages/login/login.spec.ts
var require_login_spec = __commonJS({
  "src/app/pages/login/login.spec.ts"(exports) {
    init_tslib_es6();
    init_testing();
    init_login();
    init_core();
    init_http();
    init_testing2();
    var MockLoginComponent = class MockLoginComponent {
    };
    MockLoginComponent = __decorate([
      Component({
        selector: "app-login-component",
        standalone: true,
        template: "<p>mock login component</p>"
      })
    ], MockLoginComponent);
    describe("Login", () => {
      let fixture;
      let component;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [
            Login,
            MockLoginComponent
          ],
          providers: [
            provideHttpClient(),
            provideHttpClientTesting()
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(Login);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create login component", () => {
        expect(component).toBeTruthy();
      });
      it("should render the child login-component", () => {
        const compiled = fixture.nativeElement;
        const child = compiled.querySelector("app-login-component");
        expect(child).not.toBeNull();
      });
    });
  }
});
export default require_login_spec();
//# sourceMappingURL=spec-login.spec.js.map
