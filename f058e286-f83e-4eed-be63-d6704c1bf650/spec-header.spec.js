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
  init_router,
  provideRouter
} from "./chunk-FY6Y2KGG.js";
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
import "./chunk-GAHZEPWQ.js";
import {
  TestBed,
  init_testing
} from "./chunk-S2VHKD3G.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/components/header/header.spec.ts
var require_header_spec = __commonJS({
  "src/app/components/header/header.spec.ts"(exports) {
    init_testing();
    init_header();
    init_auth_service();
    init_router();
    init_router();
    init_platform_browser();
    var AuthServiceMock = class {
      isAuthenticated() {
        return true;
      }
      logout() {
      }
    };
    describe("Header (Angular 20)", () => {
      let fixture;
      let component;
      let authService;
      let router;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Header],
          providers: [
            { provide: AuthService, useClass: AuthServiceMock },
            provideRouter([])
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(Header);
        component = fixture.componentInstance;
        authService = TestBed.inject(AuthService);
        router = TestBed.inject(Router);
        fixture.detectChanges();
      }));
      it("should render toolbar when user is authenticated", () => {
        const toolbar = fixture.debugElement.query(By.css("mat-toolbar"));
        expect(toolbar).toBeTruthy();
      });
      it("should render Users and Posts links", () => {
        const usersLink = fixture.debugElement.query(By.css('a[routerLink="/users"]'));
        const postsLink = fixture.debugElement.query(By.css('a[routerLink="/posts"]'));
        expect(usersLink).toBeTruthy();
        expect(postsLink).toBeTruthy();
      });
      it("should call logout on AuthService when logout button is clicked", () => {
        spyOn(authService, "logout");
        const logoutBtn = fixture.debugElement.query(By.css(".logout-link"));
        logoutBtn.nativeElement.click();
        expect(authService.logout).toHaveBeenCalled();
      });
      it("should navigate to /login after logout", () => {
        spyOn(router, "navigate");
        spyOn(authService, "logout");
        component.logout();
        expect(authService.logout).toHaveBeenCalled();
        expect(router.navigate).toHaveBeenCalledWith(["login"]);
      });
      it("should NOT render toolbar when user is NOT authenticated", () => {
        spyOn(authService, "isAuthenticated").and.returnValue(false);
        fixture.detectChanges();
        const toolbar = fixture.debugElement.query(By.css("mat-toolbar"));
        expect(toolbar).toBeNull();
      });
    });
  }
});
export default require_header_spec();
//# sourceMappingURL=spec-header.spec.js.map
