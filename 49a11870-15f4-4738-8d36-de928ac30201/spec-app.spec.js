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
import {
  Header,
  init_header
} from "./chunk-7U7XSBEG.js";
import {
  RouterOutlet,
  init_router,
  provideRouter
} from "./chunk-4UNSYY46.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-EVWX3VIH.js";
import "./chunk-I4C45BTD.js";
import "./chunk-VRB4UXM4.js";
import "./chunk-MYMEVESU.js";
import {
  By,
  init_platform_browser
} from "./chunk-P55P3FLF.js";
import "./chunk-2DJU6ICH.js";
import "./chunk-BY3MFIMF.js";
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
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src\\app\\app.html"() {
    app_default = "<app-header></app-header>\r\n@if (isSubscribed) {\r\n<router-outlet></router-outlet>\r\n}@else{\r\n<app-login></app-login>\r\n}";
  }
});

// angular:jit:style:src\app\app.css
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src\\app\\app.css"() {
    app_default2 = "/* src/app/app.css */\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// src/app/app.ts
var App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    init_router();
    init_header();
    init_login();
    init_auth_service();
    App = class App2 {
      authService;
      constructor(authService) {
        this.authService = authService;
      }
      isSubscribed;
      ngOnInit() {
        this.isSubscribed = this.authService.isAuthenticated();
      }
      static ctorParameters = () => [
        { type: AuthService }
      ];
    };
    App = __decorate([
      Component({
        selector: "app-root",
        imports: [RouterOutlet, Header, Login],
        template: app_default,
        styles: [app_default2]
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_testing();
    init_app3();
    init_login();
    init_router();
    init_auth_service();
    init_testing2();
    init_platform_browser();
    init_http();
    var AuthServiceMock = class {
      authenticated = false;
      isAuthenticated() {
        return this.authenticated;
      }
      setAuth(value) {
        this.authenticated = value;
      }
    };
    var UsersServicesMock = class {
    };
    describe("App Component", () => {
      let component;
      let fixture;
      let authService;
      beforeEach(() => __async(null, null, function* () {
        authService = new AuthServiceMock();
        yield TestBed.configureTestingModule({
          imports: [App],
          providers: [
            { provide: AuthService, useValue: authService },
            { provide: "UsersServices", useClass: UsersServicesMock },
            provideHttpClientTesting(),
            provideHttpClient(),
            provideRouter([])
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(App);
        component = fixture.componentInstance;
      }));
      it("should create the App component", () => {
        expect(component).toBeTruthy();
      });
      it("should show <router-outlet> when authenticated", () => {
        authService.setAuth(true);
        component.isSubscribed = authService.isAuthenticated();
        fixture.detectChanges();
        const routerOutlet = fixture.debugElement.query(By.directive(RouterOutlet));
        const loginComp = fixture.debugElement.query(By.directive(Login));
        expect(routerOutlet).not.toBeNull();
        expect(loginComp).toBeNull();
      });
      it("should show <app-login> when not authenticated", () => {
        authService.setAuth(false);
        component.isSubscribed = authService.isAuthenticated();
        fixture.detectChanges();
        const routerOutlet = fixture.debugElement.query(By.directive(RouterOutlet));
        const loginComp = fixture.debugElement.query(By.directive(Login));
        expect(routerOutlet).toBeNull();
        expect(loginComp).not.toBeNull();
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app.spec.js.map
