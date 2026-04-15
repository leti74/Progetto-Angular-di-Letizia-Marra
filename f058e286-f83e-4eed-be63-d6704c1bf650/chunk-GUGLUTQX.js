import {
  MatButtonModule,
  init_button
} from "./chunk-AQVCDG62.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-VB6RTMV7.js";
import {
  Component,
  Input,
  Output,
  __decorate,
  init_core,
  init_tslib_es6,
  input,
  output
} from "./chunk-S2VHKD3G.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\components\button\button.html
var button_default;
var init_button2 = __esm({
  "angular:jit:template:src\\app\\components\\button\\button.html"() {
    button_default = '<button type={{type()}} mat-flat-button color="primary" (click)="buttonClick()" class="rounded-lg!">\r\n    <mat-icon>{{icon()}}</mat-icon> {{label()}}\r\n</button>';
  }
});

// angular:jit:style:src\app\components\button\button.css
var button_default2;
var init_button3 = __esm({
  "angular:jit:style:src\\app\\components\\button\\button.css"() {
    button_default2 = "/* src/app/components/button/button.css */\n/*# sourceMappingURL=button.css.map */\n";
  }
});

// src/app/components/button/button.ts
var Button;
var init_button4 = __esm({
  "src/app/components/button/button.ts"() {
    "use strict";
    init_tslib_es6();
    init_button2();
    init_button3();
    init_core();
    init_button();
    init_icon();
    init_core();
    Button = class Button2 {
      label = input("");
      icon = input("");
      btnClick = output();
      type = input("");
      buttonClick() {
        this.btnClick.emit();
      }
      static propDecorators = {
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false, transform: void 0 }] }],
        icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false, transform: void 0 }] }],
        btnClick: [{ type: Output, args: ["btnClick"] }],
        type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false, transform: void 0 }] }]
      };
    };
    Button = __decorate([
      Component({
        selector: "app-button",
        imports: [MatButtonModule, MatIconModule],
        template: button_default,
        styles: [button_default2]
      })
    ], Button);
  }
});

export {
  Button,
  init_button4 as init_button
};
//# sourceMappingURL=chunk-GUGLUTQX.js.map
