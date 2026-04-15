import {
  UserPosts,
  init_user_posts
} from "./chunk-56ESH7HF.js";
import "./chunk-4H75XJFQ.js";
import "./chunk-B7F4PUKS.js";
import "./chunk-RH4AFQUE.js";
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
import "./chunk-P55P3FLF.js";
import "./chunk-2DJU6ICH.js";
import "./chunk-BY3MFIMF.js";
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
  Input,
  TestBed,
  __decorate,
  fakeAsync,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  of,
  tick
} from "./chunk-HWYXDFSJ.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/pages/user-detail/components-user/user-posts/user-posts.spec.ts
var require_user_posts_spec = __commonJS({
  "src/app/pages/user-detail/components-user/user-posts/user-posts.spec.ts"(exports) {
    init_tslib_es6();
    init_testing();
    init_user_posts();
    init_users_service();
    init_esm();
    init_core();
    init_common();
    init_card();
    var MockPostItem = class MockPostItem {
      post;
      static propDecorators = {
        post: [{ type: Input }]
      };
    };
    MockPostItem = __decorate([
      Component({ selector: "app-post-item", standalone: true, template: "" })
    ], MockPostItem);
    var MockUsersService = class {
      getPostsByUser(userId) {
        return of([
          { id: 1, title: "Post 1", body: "Content 1", userName: "Alice", comments: [] },
          { id: 2, title: "Post 2", body: "Content 2", userName: "Alice", comments: [] }
        ]);
      }
      getCommentsByPost(postId) {
        return of([
          { id: 1, body: "Comment 1", email: "[a@test.com](mailto:a@test.com)" },
          { id: 2, body: "Comment 2", email: "[b@test.com](mailto:b@test.com)" }
        ]);
      }
    };
    describe("UserPosts", () => {
      let component;
      let fixture;
      let usersService;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [UserPosts, CommonModule, MatCardModule, MockPostItem],
          providers: [{ provide: UsersServices, useClass: MockUsersService }]
        }).compileComponents();
        fixture = TestBed.createComponent(UserPosts);
        component = fixture.componentInstance;
        component.userID = 1;
        usersService = TestBed.inject(UsersServices);
        fixture.detectChanges();
      }));
      it("should create the component", () => {
        expect(component).toBeTruthy();
      });
      it("should load posts and assign them to component", fakeAsync(() => {
        component.loadPosts();
        tick();
        expect(component.posts.length).toBe(2);
        expect(component.posts[0].title).toBe("Post 1");
      }));
      it("should populate comments for each post", fakeAsync(() => {
        component.loadPosts();
        tick();
        component.posts.forEach((post) => {
          expect(post.comments.length).toBe(2);
          expect(post.comments[0].body).toBe("Comment 1");
        });
      }));
      it('should display message "No comments yet" if post has no comments', fakeAsync(() => {
        spyOn(usersService, "getCommentsByPost").and.returnValue(of([]));
        component.loadPosts();
        tick();
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.textContent).toContain("No comments yet");
      }));
    });
  }
});
export default require_user_posts_spec();
//# sourceMappingURL=spec-user-posts.spec.js.map
