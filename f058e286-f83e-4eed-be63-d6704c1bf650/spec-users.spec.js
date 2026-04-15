import {
  AddUserDialog,
  init_add_user_dialog
} from "./chunk-VLRAZTEA.js";
import {
  UserCard,
  init_user_card
} from "./chunk-UUIF7GXG.js";
import {
  MatDialog,
  init_dialog
} from "./chunk-332446CA.js";
import {
  MatProgressSpinnerModule,
  init_progress_spinner
} from "./chunk-3XYENMZ7.js";
import {
  init_form_field
} from "./chunk-3UATW3OL.js";
import {
  Button,
  init_button as init_button2
} from "./chunk-GUGLUTQX.js";
import {
  Router,
  init_router
} from "./chunk-FY6Y2KGG.js";
import "./chunk-3ZCJD756.js";
import {
  FormControl,
  FormGroup,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
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
  MatButtonModule,
  init_button
} from "./chunk-AQVCDG62.js";
import "./chunk-JYNMUJH7.js";
import "./chunk-VB6RTMV7.js";
import "./chunk-KUL5L7HB.js";
import "./chunk-TBTPVLY7.js";
import {
  CommonModule,
  init_common
} from "./chunk-5TDDVODP.js";
import "./chunk-GAHZEPWQ.js";
import {
  Component,
  TestBed,
  __decorate,
  debounceTime,
  distinctUntilChanged,
  fakeAsync,
  init_core,
  init_esm,
  init_operators,
  init_testing,
  init_tslib_es6,
  of,
  signal,
  tick
} from "./chunk-S2VHKD3G.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\pages\users\users.html
var users_default;
var init_users = __esm({
  "angular:jit:template:src\\app\\pages\\users\\users.html"() {
    users_default = '<div class="users-page">\r\n\r\n    <div class="flex flex-col mt-10">\r\n\r\n        <form [formGroup]="usersForm" class="flex flex-wrap gap-3 items-center px-8 mb-10\r\n        w-full md:w-auto md:max-w-4xl mx-auto">\r\n\r\n            <div class="flex flex-col gap-2 w-full sm:w-auto">\r\n                <label>Search user</label>\r\n\r\n                <input type="text" formControlName="nameEmail" placeholder="Name or email" class=" w-full px-4 py-2 border border-gray-300 rounded-lg outline-0\r\n               ">\r\n            </div>\r\n\r\n            <div class="flex flex-col gap-2 w-full sm:w-auto">\r\n                <label>Users for page</label>\r\n                <select formControlName="forPage" class="w-full px-4 py-2 border border-gray-300 rounded-lg outline-0">\r\n                    <option [value]="5">5</option>\r\n                    <option [value]="10">10</option>\r\n                    <option [value]="25">25</option>\r\n                    <option [value]="50">50</option>\r\n                </select>\r\n            </div>\r\n\r\n\r\n\r\n            <app-button class="button" label="Add User" icon="person-add" class="mt-5"\r\n                (btnClick)="addUser()"></app-button>\r\n\r\n\r\n\r\n\r\n        </form>\r\n\r\n    </div>\r\n\r\n    @if (isLoading) {\r\n    <div class="flex justify-center mt-30">\r\n        <mat-progress-spinner mode="indeterminate" diameter="40" color="primary"></mat-progress-spinner>\r\n    </div>\r\n    } @else {\r\n\r\n    <div class="w-auto">\r\n        @if(users().length > 0) {\r\n        <app-user-card [users]="users()" (id)="goToUserDetail($event)"\r\n            (userIdDeleted)="userDelete($event)"></app-user-card>\r\n        } @else {\r\n        <p class="text-center mt-10 text-gray-500">No Users found</p>\r\n        }\r\n    </div>\r\n    }\r\n</div>';
  }
});

// angular:jit:style:src\app\pages\users\users.css
var users_default2;
var init_users2 = __esm({
  "angular:jit:style:src\\app\\pages\\users\\users.css"() {
    users_default2 = "/* src/app/pages/users/users.css */\n.users-page {\n  padding-top: 2.3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.users-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n.search-field {\n  flex: 1;\n  min-width: 250px;\n}\n@media (max-width: 600px) {\n  .users-toolbar {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.75rem;\n  }\n  form {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-field {\n    width: 100%;\n    min-width: unset;\n  }\n}\n/*# sourceMappingURL=users.css.map */\n";
  }
});

// src/app/pages/users/users.ts
var Users;
var init_users3 = __esm({
  "src/app/pages/users/users.ts"() {
    "use strict";
    init_tslib_es6();
    init_users();
    init_users2();
    init_core();
    init_form_field();
    init_input();
    init_forms();
    init_button();
    init_card();
    init_common();
    init_operators();
    init_button2();
    init_user_card();
    init_users_service();
    init_router();
    init_dialog();
    init_add_user_dialog();
    init_progress_spinner();
    Users = class Users2 {
      usersService;
      router;
      dialog;
      usersForm;
      users = signal([]);
      allUsers = [];
      isLoading = false;
      constructor(usersService, router, dialog) {
        this.usersService = usersService;
        this.router = router;
        this.dialog = dialog;
      }
      ngOnInit() {
        this.usersForm = new FormGroup({
          nameEmail: new FormControl(""),
          forPage: new FormControl(10)
        });
        this.loadUsers();
        this.usersForm.get("forPage")?.valueChanges.subscribe(() => {
          this.loadUsers();
        });
        this.usersForm.get("nameEmail")?.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe((query) => {
          const q = query.trim().toLowerCase();
          if (!q) {
            this.users.set(this.allUsers);
            return;
          }
          const filtered = this.allUsers.filter((user) => user.name.toLowerCase().includes(q) || user.email.toLowerCase().includes(q));
          this.users.set(filtered);
        });
      }
      loadUsers(page = 1) {
        const forPage = this.usersForm.get("forPage")?.value || 10;
        this.isLoading = true;
        this.usersService.getUsers(page, forPage).subscribe({
          next: (users) => {
            this.allUsers = users;
            this.users.set(users);
            this.isLoading = false;
          },
          error: () => {
            this.isLoading = false;
          }
        });
      }
      goToUserDetail(id) {
        this.router.navigate(["user", id]);
      }
      addUser() {
        const dialogRef = this.dialog.open(AddUserDialog, {
          width: "400px"
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            console.log(result);
            this.usersService.addUser(result).subscribe((newUser) => {
              if (newUser) {
                const updatedUsers = [newUser, ...this.users()];
                this.allUsers = updatedUsers;
                this.users.set(updatedUsers);
              }
            });
          }
        });
      }
      userDelete(id) {
        const newUsers = this.users().filter((u) => u.id !== id);
        this.users.set(newUsers);
      }
      static ctorParameters = () => [
        { type: UsersServices },
        { type: Router },
        { type: MatDialog }
      ];
    };
    Users = __decorate([
      Component({
        selector: "app-users",
        imports: [
          MatFormFieldModule,
          MatInputModule,
          ReactiveFormsModule,
          MatButtonModule,
          MatCardModule,
          CommonModule,
          Button,
          UserCard,
          MatProgressSpinnerModule
        ],
        template: users_default,
        styles: [users_default2]
      })
    ], Users);
  }
});

// src/app/pages/users/users.spec.ts
var require_users_spec = __commonJS({
  "src/app/pages/users/users.spec.ts"(exports) {
    init_testing();
    init_users3();
    init_users_service();
    init_dialog();
    init_router();
    init_esm();
    var MockUsersServices = class {
      getUsers = jasmine.createSpy("getUsers").and.returnValue(of([]));
      addUser = jasmine.createSpy("addUser").and.callFake((user) => of(__spreadProps(__spreadValues({}, user), {
        id: 99
      })));
    };
    var MockMatDialog = class {
      open() {
        return {
          afterClosed: () => of({ name: "Nuovo Utente", email: "nuovo@test.com", gender: "male", status: "active" })
        };
      }
    };
    describe("Users", () => {
      let component;
      let fixture;
      let usersServiceMock;
      let dialogMock;
      let routerSpy;
      beforeEach(() => __async(null, null, function* () {
        routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
        dialogMock = new MockMatDialog();
        yield TestBed.configureTestingModule({
          imports: [Users],
          providers: [
            { provide: UsersServices, useClass: MockUsersServices },
            { provide: MatDialog, useValue: dialogMock },
            { provide: Router, useValue: routerSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(Users);
        component = fixture.componentInstance;
        fixture.detectChanges();
        usersServiceMock = TestBed.inject(UsersServices);
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should load users on init", () => {
        expect(usersServiceMock.getUsers).toHaveBeenCalled();
        expect(component.users().length).toBe(0);
      });
      it("should add user from dialog", fakeAsync(() => {
        component.addUser();
        tick();
        fixture.detectChanges();
        expect(usersServiceMock.addUser).toHaveBeenCalledWith(jasmine.objectContaining({
          name: "Nuovo Utente",
          email: "nuovo@test.com",
          gender: "male",
          status: "active"
        }));
        const usersArray = component.users();
        expect(usersArray.length).toBe(1);
        expect(usersArray[0].name).toBe("Nuovo Utente");
        expect(usersArray[0].email).toBe("nuovo@test.com");
        expect(usersArray[0].gender).toBe("male");
        expect(usersArray[0].status).toBe("active");
      }));
      it("should filter users by name/email", fakeAsync(() => {
        const mockUsers = [
          { id: 1, name: "Alice", email: "alice@test.com", gender: "female", status: "active" },
          { id: 2, name: "Bob", email: "bob@test.com", gender: "male", status: "inactive" }
        ];
        usersServiceMock.getUsers.and.returnValue(of(mockUsers));
        component.loadUsers();
        tick();
        fixture.detectChanges();
        component.usersForm.get("nameEmail")?.setValue("Alice");
        tick(300);
        fixture.detectChanges();
        const filtered = component.users();
        expect(filtered.length).toBe(1);
        expect(filtered[0].name).toBe("Alice");
      }));
      it("should navigate to user detail", () => {
        component.goToUserDetail(42);
        expect(routerSpy.navigate).toHaveBeenCalledWith(["user", 42]);
      });
      it("should delete a user", () => {
        component.users.set([{ id: 1, name: "Test", email: "test@test.com", gender: "male", status: "active" }]);
        component.userDelete(1);
        expect(component.users().length).toBe(0);
      });
    });
  }
});
export default require_users_spec();
//# sourceMappingURL=spec-users.spec.js.map
