import {
  RouterLink,
  init_router
} from "./chunk-FY6Y2KGG.js";
import {
  MatIcon,
  init_icon
} from "./chunk-VB6RTMV7.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-S2VHKD3G.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\components\footer\footer.html
var footer_default;
var init_footer = __esm({
  "angular:jit:template:src\\app\\components\\footer\\footer.html"() {
    footer_default = '<footer class="mt-20 border-t border-gray-200 bg-white  ">\r\n    <div class="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row\r\n                items-center justify-between gap-6">\r\n\r\n\r\n        <div class="text-center md:text-left">\r\n            <h4 class="text-lg font-semibold text-[#0055a5]">\r\n                User Management App\r\n            </h4>\r\n            <p class="text-sm text-gray-400">\r\n                Angular Project \u2013 Letizia Marra\r\n            </p>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n        <div class="flex gap-4 md:w-[190px] md:justify-end ">\r\n            <a href="https://github.com/leti74" target="_blank" class="p-2 rounded-lg hover:bg-gray-100 transition">\r\n                <mat-icon class="text-gray-500 hover:text-[#0055a5]">\r\n                    code\r\n                </mat-icon>\r\n            </a>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</footer>';
  }
});

// angular:jit:style:src\app\components\footer\footer.css
var footer_default2;
var init_footer2 = __esm({
  "angular:jit:style:src\\app\\components\\footer\\footer.css"() {
    footer_default2 = "/* src/app/components/footer/footer.css */\n/*# sourceMappingURL=footer.css.map */\n";
  }
});

// src/app/components/footer/footer.ts
var Footer;
var init_footer3 = __esm({
  "src/app/components/footer/footer.ts"() {
    "use strict";
    init_tslib_es6();
    init_footer();
    init_footer2();
    init_core();
    init_icon();
    init_router();
    Footer = class Footer2 {
    };
    Footer = __decorate([
      Component({
        selector: "app-footer",
        imports: [MatIcon, RouterLink],
        template: footer_default,
        styles: [footer_default2]
      })
    ], Footer);
  }
});

export {
  Footer,
  init_footer3 as init_footer
};
//# sourceMappingURL=chunk-I4IYPPO6.js.map
