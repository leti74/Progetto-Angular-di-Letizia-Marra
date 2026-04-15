import {
  UsersServices,
  init_users_service
} from "./chunk-MYMEVESU.js";
import {
  HttpClient,
  init_http
} from "./chunk-H5MBOYMX.js";
import {
  Injectable,
  __decorate,
  catchError,
  init_core,
  init_esm,
  init_tslib_es6,
  map,
  of,
  switchMap
} from "./chunk-HWYXDFSJ.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/auth/auth-service.ts
var AuthService;
var init_auth_service = __esm({
  "src/app/auth/auth-service.ts"() {
    "use strict";
    init_tslib_es6();
    init_http();
    init_core();
    init_esm();
    init_users_service();
    AuthService = class AuthService2 {
      http;
      userService;
      baseURL = "https://gorest.co.in/public/v2";
      constructor(http, userService) {
        this.http = http;
        this.userService = userService;
      }
      userCurrent = { name: "Martina Romeo", email: "martina_romeo@crist.example", gender: "female", status: "inactive" };
      createUserCurrent() {
        return this.userService.getUserByEmail(this.userCurrent.email).pipe(switchMap((users) => {
          if (users && users.length > 0) {
            const existingUser = users[0];
            console.log("User already exists:", existingUser);
            localStorage.setItem("user_current", JSON.stringify(existingUser));
            return of(existingUser);
          } else {
            return this.userService.addUser(this.userCurrent).pipe(map((newUser) => {
              localStorage.setItem("user_current", JSON.stringify(newUser));
              return newUser;
            }));
          }
        }));
      }
      getUserCurrent() {
        const data = localStorage.getItem("user_current");
        return data ? JSON.parse(data) : null;
      }
      validateToken(token) {
        return this.http.get(`${this.baseURL}/users`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).pipe(map((res) => {
          console.log("\u2705 Token valido, risposta:", res);
          return true;
        }), catchError(() => of(false)));
      }
      saveToken(token) {
        localStorage.setItem("access_token", token);
      }
      getToken() {
        return localStorage.getItem("access_token");
      }
      logout() {
        localStorage.removeItem("access_token");
        !this.isAuthenticated();
        localStorage.removeItem("user_current");
      }
      isAuthenticated() {
        return !!this.getToken();
      }
      static ctorParameters = () => [
        { type: HttpClient },
        { type: UsersServices }
      ];
    };
    AuthService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], AuthService);
  }
});

export {
  AuthService,
  init_auth_service
};
//# sourceMappingURL=chunk-EVWX3VIH.js.map
