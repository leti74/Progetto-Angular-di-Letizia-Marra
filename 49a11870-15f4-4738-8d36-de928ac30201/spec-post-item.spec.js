import {
  MatExpansionModule,
  PostItem,
  init_expansion,
  init_post_item
} from "./chunk-RH4AFQUE.js";
import "./chunk-N23UCZVK.js";
import {
  FormsModule,
  MatInputModule,
  ReactiveFormsModule,
  init_forms,
  init_input
} from "./chunk-I4C45BTD.js";
import {
  MatCardModule,
  init_card
} from "./chunk-VRB4UXM4.js";
import {
  UsersServices,
  init_users_service
} from "./chunk-MYMEVESU.js";
import {
  MatIconModule,
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
  TestBed,
  fakeAsync,
  init_esm,
  init_testing,
  of,
  tick
} from "./chunk-HWYXDFSJ.js";
import {
  __async,
  __commonJS,
  __spreadValues
} from "./chunk-TTULUY32.js";

// src/app/components/post-item/post-item.spec.ts
var require_post_item_spec = __commonJS({
  "src/app/components/post-item/post-item.spec.ts"(exports) {
    init_testing();
    init_post_item();
    init_forms();
    init_users_service();
    init_esm();
    init_common();
    init_card();
    init_expansion();
    init_button();
    init_input();
    init_icon();
    var UsersServicesMock = class {
      addComment = jasmine.createSpy("addComment").and.returnValue(of({ id: 1, body: "New comment", email: "test@test.com" }));
      deleteComment = jasmine.createSpy("deleteComment").and.returnValue(of({}));
    };
    describe("PostItem", () => {
      let component;
      let fixture;
      let usersService;
      const mockPost = {
        id: 1,
        user_id: 1,
        userName: "Alice",
        title: "Test Post",
        body: "Post body",
        comments: []
      };
      beforeEach(() => __async(null, null, function* () {
        usersService = new UsersServicesMock();
        yield TestBed.configureTestingModule({
          imports: [
            PostItem,
            ReactiveFormsModule,
            FormsModule,
            CommonModule,
            MatCardModule,
            MatExpansionModule,
            MatButtonModule,
            MatInputModule,
            MatIconModule
          ],
          providers: [
            { provide: UsersServices, useValue: usersService }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(PostItem);
        component = fixture.componentInstance;
        component.post = __spreadValues({}, mockPost);
        fixture.detectChanges();
      }));
      it("should create component and initialize form", () => {
        expect(component).toBeTruthy();
        expect(component.commentForm).toBeDefined();
      });
      it("should add a new comment", fakeAsync(() => {
        component.commentForm.setValue({ body: "New comment" });
        component.addComment(component.post.id);
        tick();
        expect(usersService.addComment).toHaveBeenCalledWith(component.post.id, "New comment");
        expect(component.post.comments?.length).toBe(1);
        expect(component.commentForm.value.body).toBeNull();
      }));
      it("should not call addComment if body is empty", () => {
        component.commentForm.setValue({ body: "" });
        component.addComment(component.post.id);
        expect(usersService.addComment).not.toHaveBeenCalled();
      });
      it("should delete a comment after confirmation", fakeAsync(() => {
        spyOn(window, "confirm").and.returnValue(true);
        component.post.comments = [{ id: 1, body: "Comment", email: "test@test.com" }];
        component.deleteComment(1);
        tick();
        expect(usersService.deleteComment).toHaveBeenCalledWith(1);
        expect(component.post.comments?.length).toBe(0);
      }));
      it("should not delete comment if confirmation is cancelled", () => {
        spyOn(window, "confirm").and.returnValue(false);
        component.post.comments = [{ id: 1, body: "Comment", email: "test@test.com" }];
        component.deleteComment(1);
        expect(usersService.deleteComment).not.toHaveBeenCalled();
        expect(component.post.comments?.length).toBe(1);
      });
    });
  }
});
export default require_post_item_spec();
//# sourceMappingURL=spec-post-item.spec.js.map
