import {
  Button,
  init_button
} from "./chunk-5AKHN6KG.js";
import {
  By,
  init_platform_browser
} from "./chunk-P55P3FLF.js";
import "./chunk-2DJU6ICH.js";
import "./chunk-BY3MFIMF.js";
import "./chunk-YZYR4KU5.js";
import "./chunk-DVI52OKY.js";
import "./chunk-LASEEYUI.js";
import "./chunk-H5MBOYMX.js";
import "./chunk-IWXHUCHX.js";
import {
  TestBed,
  init_testing
} from "./chunk-HWYXDFSJ.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/components/button/button.spec.ts
var require_button_spec = __commonJS({
  "src/app/components/button/button.spec.ts"(exports) {
    init_testing();
    init_button();
    init_platform_browser();
    describe("ButtonComponent (Signals)", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Button]
        }).compileComponents();
        fixture = TestBed.createComponent(Button);
        component = fixture.componentInstance;
        component.label = (() => "Click Me");
        component.icon = (() => "add");
        component.type = (() => "submit");
        fixture.detectChanges();
      }));
      it("should create the button component", () => {
        expect(component).toBeTruthy();
      });
      it("should display label and icon correctly", () => {
        const buttonEl = fixture.debugElement.query(By.css("button"));
        expect(buttonEl.nativeElement.textContent).toContain("Click Me");
        const iconEl = fixture.debugElement.query(By.css("mat-icon"));
        expect(iconEl.nativeElement.textContent).toBe("add");
      });
      it("should emit btnClick when button is clicked", () => {
        spyOn(component.btnClick, "emit");
        const buttonEl = fixture.debugElement.query(By.css("button"));
        buttonEl.nativeElement.click();
        expect(component.btnClick.emit).toHaveBeenCalled();
      });
      it("should apply the correct type to the button", () => {
        const buttonEl = fixture.debugElement.query(By.css("button"));
        expect(buttonEl.nativeElement.type).toBe("submit");
      });
    });
  }
});
export default require_button_spec();
//# sourceMappingURL=spec-button.spec.js.map
