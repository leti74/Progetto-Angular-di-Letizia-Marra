import {
  LoginComponent,
  init_login_component
} from "./chunk-VYYVTZ3E.js";
import "./chunk-3UATW3OL.js";
import {
  init_testing as init_testing2,
  provideHttpClientTesting
} from "./chunk-GD7MPICG.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-EFR2DRKB.js";
import {
  Router,
  init_router,
  provideRouter
} from "./chunk-FY6Y2KGG.js";
import {
  ReactiveFormsModule,
  init_forms
} from "./chunk-MDJNTZJJ.js";
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
  TestBed,
  fakeAsync,
  init_esm,
  init_testing,
  of,
  throwError,
  tick
} from "./chunk-S2VHKD3G.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/pages/login/componets-login/login-component.spec.ts
var require_login_component_spec = __commonJS({
  "src/app/pages/login/componets-login/login-component.spec.ts"(exports) {
    init_testing();
    init_login_component();
    init_auth_service();
    init_router();
    init_router();
    init_forms();
    init_esm();
    init_testing2();
    init_http();
    var AuthServiceMock = class {
      logout() {
      }
      validateToken(token) {
        return of(true);
      }
      saveToken(token) {
      }
      createUserCurrent() {
        return of({ id: 1, name: "Test User", email: "test@example.com" });
      }
    };
    describe("LoginComponent", () => {
      let component;
      let fixture;
      let authService;
      let router;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [LoginComponent, ReactiveFormsModule],
          providers: [
            {
              provide: AuthService,
              useClass: AuthServiceMock
            },
            provideRouter([]),
            provideHttpClient(),
            provideHttpClientTesting()
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        authService = TestBed.inject(AuthService);
        router = TestBed.inject(Router);
        fixture.detectChanges();
      }));
      it("should create the component", () => {
        expect(component).toBeTruthy();
      });
      it("should initialize the form with empty token", () => {
        expect(component.loginForm).toBeTruthy();
        expect(component.loginForm.controls["token"].value).toBe("");
      });
      it("should show error if token is empty", () => {
        component.loginForm.controls["token"].setValue("");
        component.onLogin();
        expect(component.errorMsg).toBe("Please enter a valid token");
      });
      it("should call validateToken and navigate to users on valid token", fakeAsync(() => {
        spyOn(authService, "validateToken").and.returnValue(of(true));
        spyOn(authService, "saveToken");
        spyOn(authService, "createUserCurrent").and.returnValue(of({ id: 1 }));
        spyOn(router, "navigate");
        component.loginForm.controls["token"].setValue("VALID_TOKEN");
        component.onLogin();
        tick();
        expect(authService.validateToken).toHaveBeenCalledWith("VALID_TOKEN");
        expect(authService.saveToken).toHaveBeenCalledWith("VALID_TOKEN");
        expect(authService.createUserCurrent).toHaveBeenCalled();
        expect(router.navigate).toHaveBeenCalledWith(["users"]);
        expect(component.errorMsg).toBe("");
      }));
      it("should set errorMsg if token is invalid", fakeAsync(() => {
        spyOn(authService, "validateToken").and.returnValue(of(false));
        component.loginForm.controls["token"].setValue("INVALID_TOKEN");
        component.onLogin();
        tick();
        expect(component.errorMsg).toBe("Invalid token. Please check and try again.");
      }));
      it("should set errorMsg if validateToken throws error", fakeAsync(() => {
        spyOn(authService, "validateToken").and.returnValue(throwError(() => new Error("Error")));
        component.loginForm.controls["token"].setValue("TOKEN");
        component.onLogin();
        tick();
        expect(component.errorMsg).toBe("Invalid token. Please check and try again.");
      }));
      it("should call logout on ngOnInit", () => {
        spyOn(authService, "logout");
        component.ngOnInit();
        expect(authService.logout).toHaveBeenCalled();
      });
    });
  }
});
export default require_login_component_spec();
//# sourceMappingURL=spec-login-component.spec.js.map
