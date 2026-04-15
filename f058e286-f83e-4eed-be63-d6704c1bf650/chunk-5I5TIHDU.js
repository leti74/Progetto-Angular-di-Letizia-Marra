import {
  MatProgressSpinnerModule,
  init_progress_spinner
} from "./chunk-3XYENMZ7.js";
import {
  init_form_field
} from "./chunk-3UATW3OL.js";
import {
  MatExpansionModule,
  PostItem,
  init_expansion,
  init_post_item
} from "./chunk-JCGICOGR.js";
import {
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
import {
  MatIconModule,
  init_icon
} from "./chunk-VB6RTMV7.js";
import {
  CommonModule,
  init_common
} from "./chunk-5TDDVODP.js";
import {
  Component,
  Input,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-S2VHKD3G.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\pages\user-detail\components-user\user-posts\user-posts.html
var user_posts_default;
var init_user_posts = __esm({
  "angular:jit:template:src\\app\\pages\\user-detail\\components-user\\user-posts\\user-posts.html"() {
    user_posts_default = '@if (isLoading) {\r\n<div class="flex justify-center mt-10">\r\n    <mat-progress-spinner mode="indeterminate" diameter="40" color="primary"></mat-progress-spinner>\r\n</div>\r\n} @else {\r\n@if (posts.length > 0) {\r\n<div class="flex flex-col items-stretch md:items-center gap-10 mt-6 mx-5">\r\n    <span class="text-2xl text-center mb-2  text-[#0055a5] font-semibold">User\r\n        Posts</span>\r\n    @for (post of posts; track post.id) {\r\n    <app-post-item [post]="post"></app-post-item>\r\n\r\n    }\r\n</div>\r\n} @else {\r\n<div class="flex flex-col items-center mt-10">\r\n    <span class="text-2xl text-center mb-2  text-[#0055a5] font-semibold">User\r\n        Posts</span>\r\n    <p class="text-center mt-10 mb-20">No Posts published</p>\r\n</div>\r\n}\r\n}';
  }
});

// angular:jit:style:src\app\pages\user-detail\components-user\user-posts\user-posts.css
var user_posts_default2;
var init_user_posts2 = __esm({
  "angular:jit:style:src\\app\\pages\\user-detail\\components-user\\user-posts\\user-posts.css"() {
    user_posts_default2 = "/* src/app/pages/user-detail/components-user/user-posts/user-posts.css */\n/*# sourceMappingURL=user-posts.css.map */\n";
  }
});

// src/app/pages/user-detail/components-user/user-posts/user-posts.ts
var UserPosts;
var init_user_posts3 = __esm({
  "src/app/pages/user-detail/components-user/user-posts/user-posts.ts"() {
    "use strict";
    init_tslib_es6();
    init_user_posts();
    init_user_posts2();
    init_core();
    init_button();
    init_card();
    init_expansion();
    init_form_field();
    init_input();
    init_common();
    init_users_service();
    init_forms();
    init_icon();
    init_post_item();
    init_progress_spinner();
    UserPosts = class UserPosts2 {
      usersService;
      userID;
      posts = [];
      isLoading = false;
      constructor(usersService) {
        this.usersService = usersService;
      }
      ngOnInit() {
        this.loadPosts();
      }
      loadPosts() {
        this.isLoading = true;
        this.usersService.getPostsByUser(this.userID).subscribe({
          next: (posts) => {
            this.posts = posts;
            let completed = 0;
            if (posts.length === 0) {
              this.isLoading = false;
            }
            this.posts.forEach((post) => {
              this.usersService.getCommentsByPost(post.id).subscribe({
                next: (comments) => {
                  post.comments = comments;
                  completed++;
                  if (completed === this.posts.length) {
                    this.isLoading = false;
                  }
                },
                error: () => {
                  completed++;
                  if (completed === this.posts.length)
                    this.isLoading = false;
                }
              });
            });
          },
          error: () => this.isLoading = false
        });
      }
      static ctorParameters = () => [
        { type: UsersServices }
      ];
      static propDecorators = {
        userID: [{ type: Input }]
      };
    };
    UserPosts = __decorate([
      Component({
        selector: "app-user-posts",
        standalone: true,
        imports: [
          MatCardModule,
          MatExpansionModule,
          MatFormFieldModule,
          MatInputModule,
          MatButtonModule,
          CommonModule,
          ReactiveFormsModule,
          MatIconModule,
          PostItem,
          MatProgressSpinnerModule
        ],
        template: user_posts_default,
        styles: [user_posts_default2]
      })
    ], UserPosts);
  }
});

export {
  UserPosts,
  init_user_posts3 as init_user_posts
};
//# sourceMappingURL=chunk-5I5TIHDU.js.map
