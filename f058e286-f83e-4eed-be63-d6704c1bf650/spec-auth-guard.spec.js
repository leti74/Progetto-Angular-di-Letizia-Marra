import {
  AuthService,
  init_auth_service
} from "./chunk-EFR2DRKB.js";
import "./chunk-SNXXKP2E.js";
import "./chunk-GAHZEPWQ.js";
import {
  TestBed,
  init_core,
  init_testing,
  inject
} from "./chunk-S2VHKD3G.js";
import "./chunk-TTULUY32.js";

// src/app/auth/auth-guard.spec.ts
init_testing();

// src/app/auth/auth-guard.ts
init_core();
init_auth_service();
var authGuard = (route, state) => {
  return inject(AuthService).isAuthenticated();
};

// src/app/auth/auth-guard.spec.ts
describe("authGuard", () => {
  const executeGuard = (...guardParameters) => TestBed.runInInjectionContext(() => authGuard(...guardParameters));
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });
  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });
});
//# sourceMappingURL=spec-auth-guard.spec.js.map
