import {
  Posts,
  init_posts
} from "./chunk-YILQW2FH.js";
import "./chunk-NK2T4XNC.js";
import {
  MatDialog,
  init_dialog
} from "./chunk-332446CA.js";
import "./chunk-3XYENMZ7.js";
import "./chunk-3UATW3OL.js";
import "./chunk-GUGLUTQX.js";
import "./chunk-JCGICOGR.js";
import "./chunk-3ZCJD756.js";
import {
  ReactiveFormsModule,
  init_forms
} from "./chunk-MDJNTZJJ.js";
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
} from "./chunk-S2VHKD3G.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/pages/posts/posts.spec.ts
var require_posts_spec = __commonJS({
  "src/app/pages/posts/posts.spec.ts"(exports) {
    init_tslib_es6();
    init_testing();
    init_posts();
    init_users_service();
    init_esm();
    init_dialog();
    init_core();
    init_forms();
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
      getAllPosts() {
        return of([
          { id: 1, title: "Post 1", body: "Body 1", user_id: 10, comments: [] },
          { id: 2, title: "Post 2", body: "Body 2", user_id: 10, comments: [] }
        ]);
      }
      getUserById(id) {
        return of({ id: 10, name: "Alice" });
      }
      getCommentsByPost(postId) {
        return of([
          { id: 1, body: "Comment 1", email: "a@test.com" },
          { id: 2, body: "Comment 2", email: "b@test.com" }
        ]);
      }
      addNewPost(data) {
        return of({ success: true });
      }
    };
    var MockMatDialog = class {
      open() {
        return {
          afterClosed: () => of({ title: "New", body: "Post", user_id: 10 })
        };
      }
    };
    describe("Posts", () => {
      let component;
      let fixture;
      let usersService;
      let dialog;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Posts, ReactiveFormsModule, MockPostItem],
          providers: [
            { provide: UsersServices, useClass: MockUsersService },
            { provide: MatDialog, useClass: MockMatDialog }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(Posts);
        component = fixture.componentInstance;
        usersService = TestBed.inject(UsersServices);
        dialog = TestBed.inject(MatDialog);
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should apply filters", fakeAsync(() => {
        component.loadPosts();
        tick();
        fixture.detectChanges();
        component.postsForm.controls["searchText"].setValue("post 1");
        tick();
        fixture.detectChanges();
        expect(component.posts.length).toBe(1);
        expect(component.posts[0].title).toBe("Post 1");
      }));
      it("should open dialog and add new post", fakeAsync(() => {
        const spyAdd = spyOn(usersService, "addNewPost").and.callThrough();
        const spyLoad = spyOn(component, "loadPosts");
        component.addPost();
        tick();
        expect(spyAdd).toHaveBeenCalled();
        expect(spyLoad).toHaveBeenCalled();
      }));
    });
  }
});
export default require_posts_spec();
//# sourceMappingURL=spec-posts.spec.js.map
