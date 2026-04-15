import {
  AddPostDialog,
  init_add_post_dialog
} from "./chunk-NK2T4XNC.js";
import {
  MatDialog,
  init_dialog
} from "./chunk-332446CA.js";
import {
  MatProgressSpinnerModule,
  init_progress_spinner
} from "./chunk-3XYENMZ7.js";
import {
  Button,
  init_button
} from "./chunk-GUGLUTQX.js";
import {
  PostItem,
  init_post_item
} from "./chunk-JCGICOGR.js";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  init_forms
} from "./chunk-MDJNTZJJ.js";
import {
  UsersServices,
  init_users_service
} from "./chunk-SNXXKP2E.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-S2VHKD3G.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\pages\posts\posts.html
var posts_default;
var init_posts = __esm({
  "angular:jit:template:src\\app\\pages\\posts\\posts.html"() {
    posts_default = '<div class="posts-page ">\r\n\r\n    <div class="flex flex-col mt-10">\r\n        <form [formGroup]="postsForm" class=" flex flex-wrap gap-3 items-center px-8 mb-10\r\n        w-full md:w-auto md:max-w-4xl mx-auto">\r\n\r\n\r\n            <div class=" flex flex-col gap-2 w-full sm:w-auto">\r\n                <label>Search post</label>\r\n\r\n                <input type="text" formControlName="searchText" placeholder="Title or body"\r\n                    class="w-full px-4 py-2 border border-gray-300 rounded-lg outline-0" />\r\n            </div>\r\n\r\n\r\n            <div class="flex flex-col gap-2 w-full sm:w-auto">\r\n                <label>Posts per page</label>\r\n\r\n                <select formControlName="forPage" class="w-full px-4 py-2 border border-gray-300 rounded-lg outline-0">\r\n                    <option [value]="5">5</option>\r\n                    <option [value]="10">10</option>\r\n                    <option [value]="25">25</option>\r\n                    <option [value]="50">50</option>\r\n                </select>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n            <app-button class=" mt-5" label="Add Post" icon="note-add" (btnClick)="addPost()">\r\n            </app-button>\r\n\r\n\r\n        </form>\r\n\r\n        @if (isLoading) {\r\n        <div class="flex justify-center mt-30">\r\n            <mat-progress-spinner mode="indeterminate" diameter="40"></mat-progress-spinner>\r\n        </div>\r\n        } @else {\r\n        <div class="flex flex-col items-stretch md:items-center mt-14 gap-10 px-5 sm:px-0">\r\n            @if(posts.length > 0) {\r\n            @for(post of posts; track post.id) {\r\n            <app-post-item [post]="post"></app-post-item>\r\n            }\r\n            } @else {\r\n            <p class="text-center text-gray-500 mt-10 ">No Posts published</p>\r\n            }\r\n        </div>\r\n        }\r\n    </div>\r\n\r\n\r\n</div>';
  }
});

// angular:jit:style:src\app\pages\posts\posts.css
var posts_default2;
var init_posts2 = __esm({
  "angular:jit:style:src\\app\\pages\\posts\\posts.css"() {
    posts_default2 = "/* src/app/pages/posts/posts.css */\n.posts-page label {\n  font-size: 14px;\n  color: #374151;\n  font-weight: 500;\n}\n.posts-page {\n  padding-top: 2.3rem;\n}\n/*# sourceMappingURL=posts.css.map */\n";
  }
});

// src/app/pages/posts/posts.ts
var Posts;
var init_posts3 = __esm({
  "src/app/pages/posts/posts.ts"() {
    "use strict";
    init_tslib_es6();
    init_posts();
    init_posts2();
    init_core();
    init_post_item();
    init_users_service();
    init_button();
    init_forms();
    init_forms();
    init_dialog();
    init_add_post_dialog();
    init_progress_spinner();
    Posts = class Posts2 {
      usersService;
      dialog;
      posts = [];
      allPosts = [];
      postsForm;
      isLoading = false;
      constructor(usersService, dialog) {
        this.usersService = usersService;
        this.dialog = dialog;
      }
      ngOnInit() {
        this.postsForm = new FormGroup({
          searchText: new FormControl(""),
          forPage: new FormControl(10)
        });
        this.loadPosts();
        this.postsForm.valueChanges.subscribe(() => {
          this.applyFilters();
        });
      }
      loadPosts() {
        this.isLoading = true;
        this.usersService.getAllPosts().subscribe({
          next: (posts) => {
            this.posts = posts;
            this.allPosts = posts;
            let completed = 0;
            if (posts.length === 0) {
              this.isLoading = false;
            }
            this.posts.forEach((post) => {
              this.usersService.getCommentsByPost(post.id).subscribe((comments) => {
                post.comments = comments;
                completed++;
                if (completed === this.posts.length) {
                  this.applyFilters();
                  this.isLoading = false;
                }
              });
            });
          },
          error: (err) => {
            console.error(err);
            this.isLoading = false;
          }
        });
      }
      applyFilters() {
        const text = this.postsForm.value.searchText?.toLowerCase() || "";
        const limit = this.postsForm.value.forPage;
        this.posts = this.allPosts.filter((p) => p.title.toLowerCase().includes(text) || p.body.toLowerCase().includes(text)).slice(0, limit);
      }
      addPost() {
        const dialogRef = this.dialog.open(AddPostDialog, {
          width: "400px"
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            this.usersService.addNewPost(result).subscribe(() => {
              this.loadPosts();
            });
          }
        });
      }
      static ctorParameters = () => [
        { type: UsersServices },
        { type: MatDialog }
      ];
    };
    Posts = __decorate([
      Component({
        selector: "app-posts",
        imports: [PostItem, ReactiveFormsModule, Button, MatProgressSpinnerModule],
        template: posts_default,
        styles: [posts_default2]
      })
    ], Posts);
  }
});

export {
  Posts,
  init_posts3 as init_posts
};
//# sourceMappingURL=chunk-YILQW2FH.js.map
