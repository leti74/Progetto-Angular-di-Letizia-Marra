import {
  UserCard,
  init_user_card
} from "./chunk-DA3H7XTW.js";
import "./chunk-VRB4UXM4.js";
import {
  UsersServices,
  init_users_service
} from "./chunk-MYMEVESU.js";
import "./chunk-P55P3FLF.js";
import "./chunk-2DJU6ICH.js";
import "./chunk-BY3MFIMF.js";
import "./chunk-YZYR4KU5.js";
import "./chunk-DVI52OKY.js";
import "./chunk-LASEEYUI.js";
import "./chunk-H5MBOYMX.js";
import "./chunk-IWXHUCHX.js";
import {
  TestBed,
  fakeAsync,
  init_esm,
  init_testing,
  of,
  tick
} from "./chunk-HWYXDFSJ.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/pages/users/componets-users/user-card/user-card.spec.ts
var require_user_card_spec = __commonJS({
  "src/app/pages/users/componets-users/user-card/user-card.spec.ts"(exports) {
    init_testing();
    init_user_card();
    init_esm();
    init_users_service();
    var MockUsersServices = class {
      deleteUser = jasmine.createSpy("deleteUser").and.callFake((id) => of(true));
    };
    describe("UserCard", () => {
      let component;
      let fixture;
      let usersServiceMock;
      const mockUsers = [
        { id: 1, name: "Alice", email: "alice@test.com", gender: "female", status: "active" },
        { id: 2, name: "Bob", email: "bob@test.com", gender: "male", status: "inactive" }
      ];
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [UserCard],
          providers: [
            { provide: UsersServices, useClass: MockUsersServices }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(UserCard);
        component = fixture.componentInstance;
        usersServiceMock = TestBed.inject(UsersServices);
        component.users = mockUsers;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should emit id when goToUserDetail is called", () => {
        spyOn(component.id, "emit");
        component.goToUserDetail(1);
        expect(component.id.emit).toHaveBeenCalledWith(1);
      });
      it("should call deleteUser and emit userIdDeleted", fakeAsync(() => {
        spyOn(component.userIdDeleted, "emit");
        const fakeEvent = { stopPropagation: jasmine.createSpy("stopPropagation") };
        component.deleteUser(1, fakeEvent);
        tick();
        expect(fakeEvent.stopPropagation).toHaveBeenCalled();
        expect(usersServiceMock.deleteUser).toHaveBeenCalledWith(1);
        expect(component.userIdDeleted.emit).toHaveBeenCalledWith(1);
      }));
      it("should not emit userIdDeleted if deleteUser returns false", fakeAsync(() => {
        spyOn(component.userIdDeleted, "emit");
        usersServiceMock.deleteUser.and.returnValue(of(false));
        const fakeEvent = { stopPropagation: jasmine.createSpy("stopPropagation") };
        component.deleteUser(1, fakeEvent);
        tick();
        expect(component.userIdDeleted.emit).not.toHaveBeenCalled();
      }));
    });
  }
});
export default require_user_card_spec();
//# sourceMappingURL=spec-user-card.spec.js.map
