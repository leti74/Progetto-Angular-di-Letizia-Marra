import {
  UserMainInfo,
  init_user_main_info
} from "./chunk-JL7UD4OB.js";
import {
  MatCardModule,
  init_card
} from "./chunk-VRB4UXM4.js";
import "./chunk-DVI52OKY.js";
import {
  CommonModule,
  init_common
} from "./chunk-LASEEYUI.js";
import "./chunk-IWXHUCHX.js";
import {
  TestBed,
  init_testing
} from "./chunk-HWYXDFSJ.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/pages/user-detail/components-user/user-main-info/user-main-info.spec.ts
var require_user_main_info_spec = __commonJS({
  "src/app/pages/user-detail/components-user/user-main-info/user-main-info.spec.ts"(exports) {
    init_testing();
    init_user_main_info();
    init_common();
    init_card();
    describe("UserMainInfo", () => {
      let component;
      let fixture;
      const mockUser = {
        id: 1,
        name: "Alice",
        email: "alice@test.com",
        gender: "female",
        status: "active"
      };
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [UserMainInfo, CommonModule, MatCardModule]
        }).compileComponents();
        fixture = TestBed.createComponent(UserMainInfo);
        component = fixture.componentInstance;
        component.user = mockUser;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should display user name, email, gender and status", () => {
        const compiled = fixture.nativeElement;
        expect(compiled.textContent).toContain(mockUser.name);
        expect(compiled.textContent).toContain(mockUser.email);
        expect(compiled.textContent).toContain(mockUser.gender);
        expect(compiled.textContent).toContain(mockUser.status);
      });
    });
  }
});
export default require_user_main_info_spec();
//# sourceMappingURL=spec-user-main-info.spec.js.map
