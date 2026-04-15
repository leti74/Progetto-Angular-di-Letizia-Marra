import {
  UserCard,
  init_user_card
} from "./chunk-UUIF7GXG.js";
import "./chunk-HAC3DQFP.js";
import {
  UsersServices,
  init_users_service
} from "./chunk-SNXXKP2E.js";
import "./chunk-AQVCDG62.js";
import "./chunk-JYNMUJH7.js";
import "./chunk-VB6RTMV7.js";
import "./chunk-KUL5L7HB.js";
import "./chunk-TBTPVLY7.js";
import "./chunk-5TDDVODP.js";
import "./chunk-GAHZEPWQ.js";
import {
  TestBed,
  fakeAsync,
  init_esm,
  init_testing,
  of,
  tick
} from "./chunk-S2VHKD3G.js";
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
