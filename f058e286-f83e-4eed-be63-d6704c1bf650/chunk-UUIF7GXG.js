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
  MatIcon,
  init_icon
} from "./chunk-VB6RTMV7.js";
import {
  CommonModule,
  init_common
} from "./chunk-5TDDVODP.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-S2VHKD3G.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\pages\users\componets-users\user-card\user-card.html
var user_card_default;
var init_user_card = __esm({
  "angular:jit:template:src\\app\\pages\\users\\componets-users\\user-card\\user-card.html"() {
    user_card_default = `<div class="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">\r
\r
    @for (user of users; track user.id) {\r
    <div\r
        class="bg-white rounded-lg shadow-md hover:shadow-md transition-shadow p-5 flex border-2 border-gray-50 flex-col justify-between">\r
\r
        <div class="mb-4">\r
            <h3 class="text-2xl font-semibold text-[#0055a5] mb-4">{{ user.name }}</h3>\r
            <p class="text-gray-400 text-sm">{{ user.email }}</p>\r
        </div>\r
\r
        <div class="mb-4 space-y-2">\r
            <p><strong>Gender:</strong> <span class="text-gray-400 ml-1">{{ user.gender }}</span></p>\r
            <p>\r
                <strong>Status:</strong>\r
                <span class=" py-1 rounded-full text-white text-sm\r
                    {{ user.status === 'active' ? 'text-green-500!' : 'text-rose-500!' }}">\r
                    {{ user.status }}\r
                </span>\r
            </p>\r
        </div>\r
\r
        <div class="flex gap-3 mt-auto">\r
            <button class="p-2 rounded-lg hover:bg-gray-200 transition" (click)="goToUserDetail(user.id)">\r
                <mat-icon class="text-[#0055a5]">visibility</mat-icon>\r
            </button>\r
\r
            <button class="p-2 rounded-lg hover:bg-red-100 transition" (click)="deleteUser(user.id, $event)">\r
                <mat-icon class="text-red-600">delete</mat-icon>\r
            </button>\r
        </div>\r
\r
    </div>\r
    }\r
\r
</div>\r
\r
@if (!users.length) {\r
<div class="no-data flex items-center justify-center mt-10 text-gray-500 space-x-2">\r
    <mat-icon>info</mat-icon>\r
    <p>No users found</p>\r
</div>\r
}`;
  }
});

// angular:jit:style:src\app\pages\users\componets-users\user-card\user-card.css
var user_card_default2;
var init_user_card2 = __esm({
  "angular:jit:style:src\\app\\pages\\users\\componets-users\\user-card\\user-card.css"() {
    user_card_default2 = "/* src/app/pages/users/componets-users/user-card/user-card.css */\n/*# sourceMappingURL=user-card.css.map */\n";
  }
});

// src/app/pages/users/componets-users/user-card/user-card.ts
var UserCard;
var init_user_card3 = __esm({
  "src/app/pages/users/componets-users/user-card/user-card.ts"() {
    "use strict";
    init_tslib_es6();
    init_user_card();
    init_user_card2();
    init_common();
    init_core();
    init_button();
    init_card();
    init_icon();
    init_users_service();
    UserCard = class UserCard2 {
      usersServices;
      users = [];
      id = new EventEmitter();
      userIdDeleted = new EventEmitter();
      constructor(usersServices) {
        this.usersServices = usersServices;
      }
      goToUserDetail(id) {
        this.id.emit(id);
      }
      deleteUser(id, event) {
        event.stopPropagation();
        this.usersServices.deleteUser(id).subscribe((u) => {
          if (u)
            this.userIdDeleted.emit(id);
        });
      }
      static ctorParameters = () => [
        { type: UsersServices }
      ];
      static propDecorators = {
        users: [{ type: Input }],
        id: [{ type: Output }],
        userIdDeleted: [{ type: Output }]
      };
    };
    UserCard = __decorate([
      Component({
        selector: "app-user-card",
        imports: [MatButtonModule, MatCardModule, MatIcon, CommonModule],
        template: user_card_default,
        styles: [user_card_default2]
      })
    ], UserCard);
  }
});

export {
  UserCard,
  init_user_card3 as init_user_card
};
//# sourceMappingURL=chunk-UUIF7GXG.js.map
