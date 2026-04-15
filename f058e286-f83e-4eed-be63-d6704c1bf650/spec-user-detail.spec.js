import {
  Posts,
  init_posts
} from "./chunk-YILQW2FH.js";
import "./chunk-NK2T4XNC.js";
import "./chunk-332446CA.js";
import {
  UserMainInfo,
  init_user_main_info
} from "./chunk-WODIFWG2.js";
import {
  UserPosts,
  init_user_posts
} from "./chunk-5I5TIHDU.js";
import "./chunk-3XYENMZ7.js";
import "./chunk-3UATW3OL.js";
import "./chunk-GUGLUTQX.js";
import {
  ActivatedRoute,
  init_router
} from "./chunk-FY6Y2KGG.js";
import {
  PostItem,
  init_post_item
} from "./chunk-JCGICOGR.js";
import "./chunk-3ZCJD756.js";
import "./chunk-MDJNTZJJ.js";
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
import {
  MatIcon,
  init_icon
} from "./chunk-VB6RTMV7.js";
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
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of
} from "./chunk-S2VHKD3G.js";
import "./chunk-TTULUY32.js";

// src/app/pages/user-detail/user-detail.spec.ts
init_testing();
init_router();
init_esm();

// src/app/pages/user-detail/user-detail.ts
init_tslib_es6();

// angular:jit:template:src\app\pages\user-detail\user-detail.html
var user_detail_default = '<div>\r\n    <app-user-main-info [user]="user"></app-user-main-info>\r\n    <app-user-posts [userID]="id"></app-user-posts>\r\n</div>';

// angular:jit:style:src\app\pages\user-detail\user-detail.css
var user_detail_default2 = "/* src/app/pages/user-detail/user-detail.css */\n.active {\n  color: #2e7d32;\n  font-weight: 500;\n}\n.inactive {\n  color: #c62828;\n  font-weight: 500;\n}\n/*# sourceMappingURL=user-detail.css.map */\n";

// src/app/pages/user-detail/user-detail.ts
init_core();
init_button();
init_card();
init_icon();
init_common();
init_users_service();
init_user_main_info();
init_router();
init_posts();
init_user_posts();
init_post_item();
var UserDetail = class UserDetail2 {
  usersService;
  route;
  user;
  id;
  constructor(usersService, route) {
    this.usersService = usersService;
    this.route = route;
  }
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.usersService.getUserById(this.id).subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }
  static ctorParameters = () => [
    { type: UsersServices },
    { type: ActivatedRoute }
  ];
};
UserDetail = __decorate([
  Component({
    selector: "app-user-detail",
    imports: [MatButtonModule, MatCardModule, MatIcon, CommonModule, UserMainInfo, Posts, UserPosts, PostItem],
    template: user_detail_default,
    styles: [user_detail_default2]
  })
], UserDetail);

// src/app/pages/user-detail/user-detail.spec.ts
init_users_service();
var MockUsersService = class {
  getUserById(id) {
    return of({
      id,
      name: "Test User",
      email: "test@example.com",
      gender: "female",
      status: "active"
    });
  }
  getPostsByUser(userId) {
    return of([
      { id: 1, user_id: userId, title: "Post 1", body: "Content 1" },
      { id: 2, user_id: userId, title: "Post 2", body: "Content 2" }
    ]);
  }
};
describe("UserDetail", () => {
  let component;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserDetail],
      providers: [
        { provide: UsersServices, useClass: MockUsersService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: /* @__PURE__ */ new Map([["id", "123"]]) }
          }
        }
      ]
    });
    const fixture = TestBed.createComponent(UserDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create the component", () => {
    expect(component).toBeTruthy();
  });
  it("should load user by id from route", () => {
    expect(component.user).toEqual({
      id: 123,
      name: "Test User",
      email: "test@example.com",
      gender: "female",
      status: "active"
    });
  });
});
//# sourceMappingURL=spec-user-detail.spec.js.map
