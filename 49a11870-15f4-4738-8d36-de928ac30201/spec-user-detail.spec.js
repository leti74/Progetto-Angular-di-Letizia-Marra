import {
  Posts,
  init_posts
} from "./chunk-27GIMV6L.js";
import "./chunk-UZQJKFPW.js";
import "./chunk-RYV254VE.js";
import {
  UserMainInfo,
  init_user_main_info
} from "./chunk-JL7UD4OB.js";
import {
  UserPosts,
  init_user_posts
} from "./chunk-56ESH7HF.js";
import "./chunk-4H75XJFQ.js";
import "./chunk-B7F4PUKS.js";
import "./chunk-5AKHN6KG.js";
import {
  ActivatedRoute,
  init_router
} from "./chunk-4UNSYY46.js";
import {
  PostItem,
  init_post_item
} from "./chunk-RH4AFQUE.js";
import "./chunk-N23UCZVK.js";
import "./chunk-I4C45BTD.js";
import {
  MatCardModule,
  init_card
} from "./chunk-VRB4UXM4.js";
import {
  UsersServices,
  init_users_service
} from "./chunk-MYMEVESU.js";
import {
  MatIcon,
  init_icon
} from "./chunk-P55P3FLF.js";
import "./chunk-2DJU6ICH.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-BY3MFIMF.js";
import "./chunk-YZYR4KU5.js";
import "./chunk-DVI52OKY.js";
import {
  CommonModule,
  init_common
} from "./chunk-LASEEYUI.js";
import "./chunk-H5MBOYMX.js";
import "./chunk-IWXHUCHX.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of
} from "./chunk-HWYXDFSJ.js";
import "./chunk-TTULUY32.js";

// src/app/pages/user-detail/user-detail.spec.ts
init_testing();
init_router();
init_esm();

// src/app/pages/user-detail/user-detail.ts
init_tslib_es6();

// angular:jit:template:src\app\pages\user-detail\user-detail.html
var user_detail_default = '<div class="px-10">\r\n    <app-user-main-info [user]="user"></app-user-main-info>\r\n    <app-user-posts [userID]="id"></app-user-posts>\r\n</div>';

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
