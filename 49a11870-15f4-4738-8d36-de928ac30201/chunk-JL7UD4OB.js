import {
  MatCardModule,
  init_card
} from "./chunk-VRB4UXM4.js";
import {
  CommonModule,
  init_common
} from "./chunk-LASEEYUI.js";
import {
  Component,
  Input,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-HWYXDFSJ.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\pages\user-detail\components-user\user-main-info\user-main-info.html
var user_main_info_default;
var init_user_main_info = __esm({
  "angular:jit:template:src\\app\\pages\\user-detail\\components-user\\user-main-info\\user-main-info.html"() {
    user_main_info_default = `<div class=" py-8!  ">\r
    <div>\r
\r
\r
        <div>\r
            <span class="text-2xl text-center! mb-2  text-[#0055a5]! font-semibold!">User\r
                Information</span>\r
\r
\r
\r
            <div class=" flex! flex-col! items-start! text-gray-800 mt-10 ml-4!">\r
\r
\r
                <div>\r
                    <p><strong class="font-semibold mr-1 ">Nome:</strong> {{ user?.name }}</p>\r
                </div>\r
\r
                <div>\r
                    <p><strong class="font-semibold  mr-1 ">Email:</strong> {{ user?.email }}</p>\r
                </div>\r
\r
                <div>\r
                    <p><strong class="font-semibold  mr-1  ">Genere:</strong> {{ user?.gender }}</p>\r
                </div>\r
\r
                <div class="flex items-center gap-2">\r
                    <strong class="font-semibold">Status:</strong>\r
\r
                    <span class=" py-1 rounded-full text-sm capitalize" [ngClass]="{\r
              ' text-green-700': user?.status === 'active',\r
              ' text-red-700': user?.status === 'inactive'\r
            }">\r
                        {{ user?.status }}\r
                    </span>\r
                </div>\r
\r
            </div>\r
\r
        </div>\r
    </div>`;
  }
});

// angular:jit:style:src\app\pages\user-detail\components-user\user-main-info\user-main-info.css
var user_main_info_default2;
var init_user_main_info2 = __esm({
  "angular:jit:style:src\\app\\pages\\user-detail\\components-user\\user-main-info\\user-main-info.css"() {
    user_main_info_default2 = "/* src/app/pages/user-detail/components-user/user-main-info/user-main-info.css */\n/*# sourceMappingURL=user-main-info.css.map */\n";
  }
});

// src/app/pages/user-detail/components-user/user-main-info/user-main-info.ts
var UserMainInfo;
var init_user_main_info3 = __esm({
  "src/app/pages/user-detail/components-user/user-main-info/user-main-info.ts"() {
    "use strict";
    init_tslib_es6();
    init_user_main_info();
    init_user_main_info2();
    init_core();
    init_common();
    init_card();
    UserMainInfo = class UserMainInfo2 {
      user;
      static propDecorators = {
        user: [{ type: Input }]
      };
    };
    UserMainInfo = __decorate([
      Component({
        selector: "app-user-main-info",
        imports: [CommonModule, MatCardModule],
        template: user_main_info_default,
        styles: [user_main_info_default2]
      })
    ], UserMainInfo);
  }
});

export {
  UserMainInfo,
  init_user_main_info3 as init_user_main_info
};
//# sourceMappingURL=chunk-JL7UD4OB.js.map
