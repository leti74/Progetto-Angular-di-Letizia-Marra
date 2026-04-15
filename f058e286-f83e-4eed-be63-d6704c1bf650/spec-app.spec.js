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
import {
  Footer,
  init_footer
} from "./chunk-I4IYPPO6.js";
import {
  Header,
  init_header
} from "./chunk-LVCRT7PE.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-EFR2DRKB.js";
import {
  Router,
  RouterModule,
  RouterOutlet,
  init_router,
  provideRouter
} from "./chunk-FY6Y2KGG.js";
import "./chunk-MDJNTZJJ.js";
import "./chunk-HAC3DQFP.js";
import "./chunk-SNXXKP2E.js";
import "./chunk-AQVCDG62.js";
import "./chunk-JYNMUJH7.js";
import {
  By,
  init_platform_browser
} from "./chunk-VB6RTMV7.js";
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
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src\\app\\app.html"() {
    app_default = "@if(!router.url.includes('login')){\r\n<app-header></app-header>\r\n}\r\n\r\n@if(isSubscribed){\r\n<router-outlet></router-outlet>\r\n}\r\n\r\n@if(!isSubscribed){\r\n<app-login></app-login>\r\n}\r\n\r\n@if(!router.url.includes('login')){\r\n<app-footer></app-footer>\r\n}";
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
    init_router();
    init_footer();
    App = class App2 {
      authService;
      router;
      constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        const w = window;
        w.addEventListener("pageshow", () => {
          if (this.router.url.includes("login")) {
            this.authService.logout();
          }
        });
      }
      isSubscribed;
      ngOnInit() {
        this.isSubscribed = this.authService.isAuthenticated();
      }
      static ctorParameters = () => [
        { type: AuthService },
        { type: Router }
      ];
    };
    App = __decorate([
      Component({
        selector: "app-root",
        imports: [RouterOutlet, Header, Login, Footer, RouterModule],
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
      logout() {
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
