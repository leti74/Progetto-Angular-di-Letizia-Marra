import {
  LoginComponent,
  init_login_component
} from "./chunk-YTYFJ64X.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-HWYXDFSJ.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\pages\login\login.html
var login_default;
var init_login = __esm({
  "angular:jit:template:src\\app\\pages\\login\\login.html"() {
    login_default = "<app-login-component></app-login-component>";
  }
});

// angular:jit:style:src\app\pages\login\login.css
var login_default2;
var init_login2 = __esm({
  "angular:jit:style:src\\app\\pages\\login\\login.css"() {
    login_default2 = "/* src/app/pages/login/login.css */\n/*# sourceMappingURL=login.css.map */\n";
  }
});

// src/app/pages/login/login.ts
var Login;
var init_login3 = __esm({
  "src/app/pages/login/login.ts"() {
    "use strict";
    init_tslib_es6();
    init_login();
    init_login2();
    init_core();
    init_login_component();
    Login = class Login2 {
    };
    Login = __decorate([
      Component({
        selector: "app-login",
        imports: [LoginComponent],
        template: login_default,
        styles: [login_default2]
      })
    ], Login);
  }
});

export {
  Login,
  init_login3 as init_login
};
//# sourceMappingURL=chunk-X5CBXDM7.js.map
