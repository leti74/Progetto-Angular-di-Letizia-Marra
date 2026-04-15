import {
  Login,
  init_login
} from "./chunk-MA5K5MW3.js";
import "./chunk-VYYVTZ3E.js";
import "./chunk-3UATW3OL.js";
import {
  init_testing as init_testing2,
  provideHttpClientTesting
} from "./chunk-GD7MPICG.js";
import "./chunk-EFR2DRKB.js";
import "./chunk-FY6Y2KGG.js";
import "./chunk-MDJNTZJJ.js";
import "./chunk-HAC3DQFP.js";
import "./chunk-SNXXKP2E.js";
import "./chunk-JYNMUJH7.js";
import "./chunk-VB6RTMV7.js";
import "./chunk-KUL5L7HB.js";
import "./chunk-TBTPVLY7.js";
import "./chunk-5TDDVODP.js";
import {
  init_http,
  provideHttpClient
} from "./chunk-GAHZEPWQ.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-S2VHKD3G.js";
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
