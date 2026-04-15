import {
  LoginComponent,
  init_login_component
} from "./chunk-YTYFJ64X.js";
import "./chunk-B7F4PUKS.js";
import {
  Router,
  init_router
} from "./chunk-4UNSYY46.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-EVWX3VIH.js";
import {
  ReactiveFormsModule,
  init_forms
} from "./chunk-I4C45BTD.js";
import "./chunk-VRB4UXM4.js";
import {
  UsersServices,
  init_users_service
} from "./chunk-MYMEVESU.js";
import "./chunk-P55P3FLF.js";
import "./chunk-2DJU6ICH.js";
import "./chunk-YZYR4KU5.js";
import "./chunk-DVI52OKY.js";
import "./chunk-LASEEYUI.js";
import "./chunk-H5MBOYMX.js";
import "./chunk-IWXHUCHX.js";
import {
  TestBed,
  init_esm,
  init_testing,
  of,
  throwError
} from "./chunk-HWYXDFSJ.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/pages/login/componets-login/login-component.spec.ts
var require_login_component_spec = __commonJS({
  "src/app/pages/login/componets-login/login-component.spec.ts"(exports) {
    init_testing();
    init_forms();
    init_router();
    init_esm();
    init_login_component();
    init_auth_service();
    init_users_service();
    var RouterStub = class {
      navigate(commands) {
      }
    };
    var AuthServiceStub = class {
      validateToken(token) {
        return token === "valid-token" ? of(true) : of(false);
      }
      saveToken(token) {
      }
      createUserCurrent() {
        return of({ id: 1, name: "Martina Romeo" });
      }
    };
    var UsersServicesStub = class {
    };
    describe("LoginComponent (standalone)", () => {
      let component;
      let fixture;
      let authService;
      let router;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [LoginComponent, ReactiveFormsModule],
          providers: [
            { provide: AuthService, useClass: AuthServiceStub },
            { provide: UsersServices, useClass: UsersServicesStub },
            { provide: Router, useClass: RouterStub }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        authService = TestBed.inject(AuthService);
        router = TestBed.inject(Router);
        fixture.detectChanges();
      }));
      it("should create component and initialize form", () => {
        expect(component).toBeTruthy();
        expect(component.loginForm.contains("token")).toBeTrue();
      });
      it("should show error message if token is empty on login", () => {
        component.loginForm.setValue({ token: "" });
        component.onLogin();
        expect(component.errorMsg).toBe("Please enter a valid token");
      });
      it("should set error message on invalid token", () => {
        spyOn(authService, "validateToken").and.returnValue(of(false));
        component.loginForm.setValue({ token: "invalid-token" });
        component.onLogin();
        expect(component.errorMsg).toBe("Invalid token. Please check and try again.");
        expect(component.loading).toBeFalse();
      });
      it("should call authService.validateToken and navigate on valid token", () => {
        spyOn(authService, "validateToken").and.returnValue(of(true));
        spyOn(authService, "saveToken");
        spyOn(authService, "createUserCurrent").and.returnValue(of({ id: 1, name: "Alice" }));
        spyOn(router, "navigate");
        component.loginForm.setValue({ token: "valid-token" });
        component.onLogin();
        expect(authService.validateToken).toHaveBeenCalledWith("valid-token");
        expect(authService.saveToken).toHaveBeenCalledWith("valid-token");
        expect(authService.createUserCurrent).toHaveBeenCalled();
        expect(router.navigate).toHaveBeenCalledWith(["users"]);
      });
      it("should handle error from validateToken gracefully", () => {
        spyOn(authService, "validateToken").and.returnValue(throwError(() => new Error("API error")));
        component.loginForm.setValue({ token: "error-token" });
        component.onLogin();
        expect(component.errorMsg).toBe("Invalid token. Please check and try again.");
        expect(component.loading).toBeFalse();
      });
    });
  }
});
export default require_login_component_spec();
//# sourceMappingURL=spec-login-component.spec.js.map
