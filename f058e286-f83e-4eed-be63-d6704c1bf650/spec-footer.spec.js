import {
  Footer,
  init_footer
} from "./chunk-I4IYPPO6.js";
import "./chunk-FY6Y2KGG.js";
import "./chunk-VB6RTMV7.js";
import "./chunk-KUL5L7HB.js";
import "./chunk-TBTPVLY7.js";
import "./chunk-5TDDVODP.js";
import "./chunk-GAHZEPWQ.js";
import {
  TestBed,
  init_testing
} from "./chunk-S2VHKD3G.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/components/footer/footer.spec.ts
var require_footer_spec = __commonJS({
  "src/app/components/footer/footer.spec.ts"(exports) {
    init_testing();
    init_footer();
    describe("Footer", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Footer]
        }).compileComponents();
        fixture = TestBed.createComponent(Footer);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_footer_spec();
//# sourceMappingURL=spec-footer.spec.js.map
