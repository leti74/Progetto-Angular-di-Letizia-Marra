import {
  Router,
  RouterLink,
  RouterLinkActive,
  init_router
} from "./chunk-4UNSYY46.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-EVWX3VIH.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-P55P3FLF.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-BY3MFIMF.js";
import {
  init_platform
} from "./chunk-YZYR4KU5.js";
import {
  MatCommonModule,
  Platform,
  init_common_module
} from "./chunk-DVI52OKY.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  FactoryTarget,
  Input,
  NgModule,
  ViewEncapsulation,
  __decorate,
  core_exports,
  init_core,
  init_tslib_es6,
  inject,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-HWYXDFSJ.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\components\header\header.html
var header_default;
var init_header = __esm({
  "angular:jit:template:src\\app\\components\\header\\header.html"() {
    header_default = '@if(authService.isAuthenticated()){\r\n<mat-toolbar class="toolbar">\r\n\r\n    <a class=" logo ml-3">Logo</a>\r\n\r\n    <span class="example-spacer"></span>\r\n\r\n    <div class="header-actions">\r\n\r\n        <a routerLink="/users" routerLinkActive="active-link">Users</a>\r\n\r\n\r\n        <a routerLink="/posts" routerLinkActive="active-link">Posts</a>\r\n\r\n        <button routerLink="/login" class="logout-link" (click)="logout()">Logout</button>\r\n\r\n    </div>\r\n</mat-toolbar>\r\n}@else {\r\n<mat-toolbar class="toolbar">\r\n\r\n    <a routerLink="/login" class=" logo ml-3">Login Page</a>\r\n\r\n\r\n</mat-toolbar>\r\n}';
  }
});

// angular:jit:style:src\app\components\header\header.css
var header_default2;
var init_header2 = __esm({
  "angular:jit:style:src\\app\\components\\header\\header.css"() {
    header_default2 = '/* src/app/components/header/header.css */\n.example-spacer {\n  flex: 1 1 auto;\n}\n.toolbar {\n  background-color: #0066cc;\n  color: #ffffff;\n  padding: 0 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 64px;\n  font-family:\n    "Segoe UI",\n    "Open Sans",\n    "Roboto",\n    sans-serif;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.header-actions {\n  display: flex;\n  gap: 1.5rem;\n}\n.header-actions a {\n  text-decoration: none;\n  color: #ffffff;\n  font-weight: 500;\n  font-size: 0.95rem;\n  position: relative;\n  transition: color 0.2s ease-in-out;\n}\n.header-actions a:hover {\n  cursor: pointer;\n}\n.header-actions a::after {\n  content: "";\n  position: absolute;\n  bottom: -6px;\n  left: 0;\n  width: 0%;\n  height: 2px;\n  background-color: #ffffff;\n  transition: width 0.25s ease-in-out;\n}\n.header-actions a:hover::after,\n.header-actions a.active-link::after {\n  width: 100%;\n}\n.logo {\n  font-size: 1.25rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  text-decoration: none;\n  color: #ffffff;\n  transition: opacity 0.2s ease-in-out;\n}\n.logout-link {\n  color: #ffe600 !important;\n  font-weight: 600 !important;\n  font-size: 0.95rem;\n}\n@media (max-width: 768px) {\n  .toolbar {\n    flex-wrap: wrap;\n    height: auto;\n    padding: 0.75rem 1rem;\n  }\n  .header-actions {\n    width: 100%;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 1rem;\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n  }\n  .logo {\n    width: 100%;\n    text-align: center;\n    margin-bottom: 0.25rem;\n  }\n}\n/*# sourceMappingURL=header.css.map */\n';
  }
});

// node_modules/@angular/material/fesm2022/toolbar.mjs
function throwToolbarMixedModesError() {
  throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.");
}
var MatToolbarRow, MatToolbar, MatToolbarModule;
var init_toolbar = __esm({
  "node_modules/@angular/material/fesm2022/toolbar.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_platform();
    init_common_module();
    MatToolbarRow = class _MatToolbarRow {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatToolbarRow, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatToolbarRow, isStandalone: true, selector: "mat-toolbar-row", host: { classAttribute: "mat-toolbar-row" }, exportAs: ["matToolbarRow"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatToolbarRow, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-toolbar-row",
        exportAs: "matToolbarRow",
        host: { "class": "mat-toolbar-row" }
      }]
    }] });
    MatToolbar = class _MatToolbar {
      _elementRef = inject(ElementRef);
      _platform = inject(Platform);
      _document = inject(DOCUMENT);
      // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
      /**
       * Theme color of the toolbar. This API is supported in M2 themes only, it has
       * no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/toolbar/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color;
      /** Reference to all toolbar row elements that have been projected. */
      _toolbarRows;
      constructor() {
      }
      ngAfterViewInit() {
        if (this._platform.isBrowser) {
          this._checkToolbarMixedModes();
          this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
        }
      }
      /**
       * Throws an exception when developers are attempting to combine the different toolbar row modes.
       */
      _checkToolbarMixedModes() {
        if (this._toolbarRows.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
          const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter((node) => !(node.classList && node.classList.contains("mat-toolbar-row"))).filter((node) => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some((node) => !!(node.textContent && node.textContent.trim()));
          if (isCombinedUsage) {
            throwToolbarMixedModesError();
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatToolbar, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatToolbar, isStandalone: true, selector: "mat-toolbar", inputs: { color: "color" }, host: { properties: { "class": 'color ? "mat-" + color : ""', "class.mat-toolbar-multiple-rows": "_toolbarRows.length > 0", "class.mat-toolbar-single-row": "_toolbarRows.length === 0" }, classAttribute: "mat-toolbar" }, queries: [{ propertyName: "_toolbarRows", predicate: MatToolbarRow, descendants: true }], exportAs: ["matToolbar"], ngImport: core_exports, template: '<ng-content></ng-content>\n<ng-content select="mat-toolbar-row"></ng-content>\n', styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatToolbar, decorators: [{
      type: Component,
      args: [{ selector: "mat-toolbar", exportAs: "matToolbar", host: {
        "class": "mat-toolbar",
        "[class]": 'color ? "mat-" + color : ""',
        "[class.mat-toolbar-multiple-rows]": "_toolbarRows.length > 0",
        "[class.mat-toolbar-single-row]": "_toolbarRows.length === 0"
      }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: '<ng-content></ng-content>\n<ng-content select="mat-toolbar-row"></ng-content>\n', styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}\n"] }]
    }], ctorParameters: () => [], propDecorators: { color: [{
      type: Input
    }], _toolbarRows: [{
      type: ContentChildren,
      args: [MatToolbarRow, { descendants: true }]
    }] } });
    MatToolbarModule = class _MatToolbarModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatToolbarModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatToolbarModule, imports: [MatCommonModule, MatToolbar, MatToolbarRow], exports: [MatToolbar, MatToolbarRow, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatToolbarModule, imports: [MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatToolbarModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatToolbar, MatToolbarRow],
        exports: [MatToolbar, MatToolbarRow, MatCommonModule]
      }]
    }] });
  }
});

// src/app/components/header/header.ts
var Header;
var init_header3 = __esm({
  "src/app/components/header/header.ts"() {
    "use strict";
    init_tslib_es6();
    init_header();
    init_header2();
    init_core();
    init_icon();
    init_button();
    init_toolbar();
    init_router();
    init_auth_service();
    Header = class Header2 {
      authService;
      router;
      constructor(authService, router) {
        this.authService = authService;
        this.router = router;
      }
      logout() {
        this.authService.logout();
        this.router.navigate(["login"]);
      }
      static ctorParameters = () => [
        { type: AuthService },
        { type: Router }
      ];
    };
    Header = __decorate([
      Component({
        selector: "app-header",
        imports: [MatIconModule, MatButtonModule, MatToolbarModule, RouterLink, RouterLinkActive, RouterLinkActive],
        template: header_default,
        styles: [header_default2]
      })
    ], Header);
  }
});

export {
  Header,
  init_header3 as init_header
};
//# sourceMappingURL=chunk-7U7XSBEG.js.map
