import {
  init_form_field
} from "./chunk-3UATW3OL.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-EFR2DRKB.js";
import {
  Router,
  RouterModule,
  init_router
} from "./chunk-FY6Y2KGG.js";
import {
  FormControl,
  FormGroup,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  Validators,
  init_forms,
  init_input
} from "./chunk-MDJNTZJJ.js";
import {
  MatCardModule,
  init_card
} from "./chunk-HAC3DQFP.js";
import {
  UsersServices,
  init_users_service
} from "./chunk-SNXXKP2E.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-VB6RTMV7.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-S2VHKD3G.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\pages\login\componets-login\login-component.html
var login_component_default;
var init_login_component = __esm({
  "angular:jit:template:src\\app\\pages\\login\\componets-login\\login-component.html"() {
    login_component_default = `<div class="login-wrapper">\r
    <div class="login-card">\r
        <div class="logo-area">\r
            <h1>GoREST Portal</h1>\r
            <p class="subtitle">Log in with your personal token</p>\r
        </div>\r
\r
        <form [formGroup]="loginForm" (ngSubmit)="onLogin()">\r
            <div class="form-group">\r
                <label for="token">Token:</label>\r
                <input id="token" type="text" formControlName="token" placeholder="Enter your GoREST token"\r
                    [class.error]="errorMsg" />\r
\r
\r
                @if(errorMsg){\r
                <p class="error-text">{{ errorMsg }}</p>\r
                }\r
            </div>\r
\r
            <button type="submit" class="btn-primary" [disabled]="loginForm.invalid">\r
                Accedi\r
            </button>\r
        </form>\r
\r
        <div class="token-info">\r
            <p>Don't you have a token?</p>\r
            <a href="https://gorest.co.in/consumer/login" target="_blank">\r
                Get your token on GoREST \u2192\r
            </a>\r
        </div>\r
    </div>\r
\r
</div>`;
  }
});

// angular:jit:style:src\app\pages\login\componets-login\login-component.css
var login_component_default2;
var init_login_component2 = __esm({
  "angular:jit:style:src\\app\\pages\\login\\componets-login\\login-component.css"() {
    login_component_default2 = "/* src/app/pages/login/componets-login/login-component.css */\n.login-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 90vh;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.login-card {\n  background: white;\n  padding: 2.5rem 2rem;\n  border-radius: 16px;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08);\n  max-width: 420px;\n  width: 100%;\n  text-align: center;\n  animation: fadeIn 0.4s ease-in-out;\n}\n.logo-area img {\n  width: 70px;\n  height: auto;\n  margin-bottom: 0.8rem;\n}\n.logo-area h1 {\n  font-size: 1.6rem;\n  font-weight: 600;\n  color: #0055a5;\n}\n.subtitle {\n  color: #555;\n  font-size: 0.95rem;\n  margin-bottom: 1.5rem;\n  margin-top: 0.3rem;\n}\n.form-group {\n  text-align: left;\n  margin-bottom: 1.5rem;\n}\nlabel {\n  display: block;\n  font-weight: 500;\n  margin-bottom: 0.4rem;\n  color: #333;\n}\ninput {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 1px solid #d0d4d9;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  transition: all 0.3s;\n}\ninput:focus {\n  border-color: #0055a5;\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(0, 85, 165, 0.15);\n}\ninput.error {\n  border-color: #d9534f;\n}\n.error-text {\n  color: #d9534f;\n  font-size: 0.85rem;\n  margin-top: 0.4rem;\n}\n.btn-primary {\n  width: 100%;\n  background-color: #0055a5;\n  color: white;\n  padding: 0.9rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: background-color 0.25s, transform 0.1s;\n}\n.btn-primary:hover {\n  background-color: #004080;\n  transform: scale(1.01);\n}\n.btn-primary:disabled {\n  background-color: #9fbad4;\n  cursor: not-allowed;\n}\n.token-info {\n  margin-top: 1.5rem;\n  font-size: 0.9rem;\n  color: #666;\n}\n.token-info a {\n  color: #00aeef;\n  text-decoration: none;\n  font-weight: 500;\n}\n.token-info a:hover {\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .login-card {\n    padding: 2rem 1.2rem;\n  }\n  .logo-area h1 {\n    font-size: 1.4rem;\n  }\n}\n/*# sourceMappingURL=login-component.css.map */\n";
  }
});

// src/app/pages/login/componets-login/login-component.ts
var LoginComponent;
var init_login_component3 = __esm({
  "src/app/pages/login/componets-login/login-component.ts"() {
    "use strict";
    init_tslib_es6();
    init_login_component();
    init_login_component2();
    init_core();
    init_card();
    init_form_field();
    init_icon();
    init_input();
    init_forms();
    init_auth_service();
    init_router();
    init_users_service();
    LoginComponent = class LoginComponent2 {
      authService;
      router;
      userService;
      constructor(authService, router, userService) {
        this.authService = authService;
        this.router = router;
        this.userService = userService;
      }
      loginForm;
      errorMsg = "";
      loading = false;
      ngOnInit() {
        this.authService.logout();
        this.loginForm = new FormGroup({
          token: new FormControl("", Validators.required)
        });
      }
      onLogin() {
        const token = this.loginForm.value.token;
        if (!token) {
          this.errorMsg = "Please enter a valid token";
          return;
        }
        this.loading = true;
        this.errorMsg = "";
        this.authService.validateToken(token).subscribe({
          next: (res) => {
            if (res) {
              this.authService.saveToken(token);
              this.authService.createUserCurrent().subscribe(() => {
                this.router.navigate(["users"]);
              });
            } else {
              this.loading = false;
              this.errorMsg = "Invalid token. Please check and try again.";
            }
          },
          error: () => {
            this.loading = false;
            this.errorMsg = "Invalid token. Please check and try again.";
          }
        });
      }
      static ctorParameters = () => [
        { type: AuthService },
        { type: Router },
        { type: UsersServices }
      ];
    };
    LoginComponent = __decorate([
      Component({
        selector: "app-login-component",
        imports: [MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule, ReactiveFormsModule, RouterModule],
        template: login_component_default,
        styles: [login_component_default2]
      })
    ], LoginComponent);
  }
});

export {
  LoginComponent,
  init_login_component3 as init_login_component
};
//# sourceMappingURL=chunk-VYYVTZ3E.js.map
