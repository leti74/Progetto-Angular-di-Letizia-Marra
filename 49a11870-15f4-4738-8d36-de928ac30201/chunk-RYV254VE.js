import {
  ArrayDataSource,
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  DomPortalOutlet,
  PortalModule,
  SelectionModel,
  TemplatePortal,
  _RecycleViewRepeaterStrategy,
  _VIEW_REPEATER_STRATEGY,
  init_collections,
  init_data_source,
  init_portal,
  init_recycle_view_repeater_strategy,
  isDataSource
} from "./chunk-N23UCZVK.js";
import {
  ErrorStateMatcher,
  FormGroupDirective,
  MAT_FORM_FIELD,
  MatFormFieldControl,
  MatFormFieldModule,
  NgControl,
  NgForm,
  Validators,
  _ErrorStateTracker,
  init_error_options,
  init_error_state,
  init_form_field2,
  init_form_field_module,
  init_forms
} from "./chunk-I4C45BTD.js";
import {
  MatRipple,
  MatRippleModule,
  _StructuralStylesLoader,
  init_ripple,
  init_ripple_module,
  init_structural_styles
} from "./chunk-BY3MFIMF.js";
import {
  RtlScrollAxisType,
  _animationsDisabled,
  _isTestEnvironment,
  coerceCssPixelValue,
  getRtlScrollAxisType,
  init_animation,
  init_coercion,
  init_css_pixel_value,
  init_scrolling2,
  init_test_environment,
  supportsScrollBehavior
} from "./chunk-YZYR4KU5.js";
import {
  A,
  A11yModule,
  ActiveDescendantKeyManager,
  BidiModule,
  DOWN_ARROW,
  Directionality,
  ENTER,
  ESCAPE,
  FocusMonitor,
  FocusTrapFactory,
  InteractivityChecker,
  LEFT_ARROW,
  LiveAnnouncer,
  MatCommonModule,
  Platform,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _VisuallyHiddenLoader,
  _getEventTarget,
  _getFocusedElementPierceShadowDom,
  addAriaReferencedId,
  coerceArray,
  coerceElement,
  coerceNumberProperty,
  hasModifierKey,
  init_a11y,
  init_a11y_module,
  init_array,
  init_bidi,
  init_common_module,
  init_directionality,
  init_element,
  init_focus_monitor,
  init_id_generator,
  init_keycodes,
  init_keycodes2,
  init_platform2,
  init_private,
  init_shadow_dom,
  init_style_loader,
  removeAriaReferencedId
} from "./chunk-DVI52OKY.js";
import {
  Location,
  NgClass,
  init_common
} from "./chunk-LASEEYUI.js";
import {
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  FactoryTarget,
  HostAttributeToken,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  Renderer2,
  RendererFactory2,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  core_exports,
  defer,
  distinctUntilChanged,
  effect,
  filter,
  forwardRef,
  init_core,
  init_esm,
  init_operators,
  inject,
  isObservable,
  isSignal,
  map,
  merge,
  numberAttribute,
  of,
  pairwise,
  shareReplay,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  untracked,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-HWYXDFSJ.js";
import {
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-TTULUY32.js";

// node_modules/@angular/cdk/fesm2022/scrolling.mjs
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === "horizontal") {
    return direction === "start" ? rect.left : rect.right;
  }
  return direction === "start" ? rect.top : rect.bottom;
}
var VIRTUAL_SCROLL_STRATEGY, FixedSizeVirtualScrollStrategy, CdkFixedSizeVirtualScroll, DEFAULT_SCROLL_TIME, ScrollDispatcher, CdkScrollable, DEFAULT_RESIZE_TIME, ViewportRuler, VIRTUAL_SCROLLABLE, CdkVirtualScrollable, SCROLL_SCHEDULER, CdkVirtualScrollViewport, CdkVirtualForOf, CdkVirtualScrollableElement, CdkVirtualScrollableWindow, CdkScrollableModule, ScrollingModule;
var init_scrolling = __esm({
  "node_modules/@angular/cdk/fesm2022/scrolling.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_element();
    init_platform2();
    init_directionality();
    init_scrolling2();
    init_bidi();
    init_recycle_view_repeater_strategy();
    init_data_source();
    VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
    FixedSizeVirtualScrollStrategy = class {
      _scrolledIndexChange = new Subject();
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
      /** The attached viewport. */
      _viewport = null;
      /** The size of the items in the virtually scrolling list. */
      _itemSize;
      /** The minimum amount of buffer rendered beyond the viewport (in pixels). */
      _minBufferPx;
      /** The number of buffer items to render beyond the edge of the viewport (in pixels). */
      _maxBufferPx;
      /**
       * @param itemSize The size of the items in the virtually scrolling list.
       * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       */
      constructor(itemSize, minBufferPx, maxBufferPx) {
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
      }
      /**
       * Attaches this scroll strategy to a viewport.
       * @param viewport The viewport to attach this strategy to.
       */
      attach(viewport) {
        this._viewport = viewport;
        this._updateTotalContentSize();
        this._updateRenderedRange();
      }
      /** Detaches this scroll strategy from the currently attached viewport. */
      detach() {
        this._scrolledIndexChange.complete();
        this._viewport = null;
      }
      /**
       * Update the item size and buffer size.
       * @param itemSize The size of the items in the virtually scrolling list.
       * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       */
      updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
        if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
        }
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
        this._updateTotalContentSize();
        this._updateRenderedRange();
      }
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      onContentScrolled() {
        this._updateRenderedRange();
      }
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      onDataLengthChanged() {
        this._updateTotalContentSize();
        this._updateRenderedRange();
      }
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      onContentRendered() {
      }
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      onRenderedOffsetChanged() {
      }
      /**
       * Scroll to the offset for the given index.
       * @param index The index of the element to scroll to.
       * @param behavior The ScrollBehavior to use when scrolling.
       */
      scrollToIndex(index, behavior) {
        if (this._viewport) {
          this._viewport.scrollToOffset(index * this._itemSize, behavior);
        }
      }
      /** Update the viewport's total content size. */
      _updateTotalContentSize() {
        if (!this._viewport) {
          return;
        }
        this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
      }
      /** Update the viewport's rendered range. */
      _updateRenderedRange() {
        if (!this._viewport) {
          return;
        }
        const renderedRange = this._viewport.getRenderedRange();
        const newRange = { start: renderedRange.start, end: renderedRange.end };
        const viewportSize = this._viewport.getViewportSize();
        const dataLength = this._viewport.getDataLength();
        let scrollOffset = this._viewport.measureScrollOffset();
        let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
        if (newRange.end > dataLength) {
          const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
          const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
          if (firstVisibleIndex != newVisibleIndex) {
            firstVisibleIndex = newVisibleIndex;
            scrollOffset = newVisibleIndex * this._itemSize;
            newRange.start = Math.floor(firstVisibleIndex);
          }
          newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
        }
        const startBuffer = scrollOffset - newRange.start * this._itemSize;
        if (startBuffer < this._minBufferPx && newRange.start != 0) {
          const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
          newRange.start = Math.max(0, newRange.start - expandStart);
          newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
        } else {
          const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
          if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
            const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
            if (expandEnd > 0) {
              newRange.end = Math.min(dataLength, newRange.end + expandEnd);
              newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
            }
          }
        }
        this._viewport.setRenderedRange(newRange);
        this._viewport.setRenderedContentOffset(Math.round(this._itemSize * newRange.start));
        this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
      }
    };
    CdkFixedSizeVirtualScroll = class _CdkFixedSizeVirtualScroll {
      /** The size of the items in the list (in pixels). */
      get itemSize() {
        return this._itemSize;
      }
      set itemSize(value) {
        this._itemSize = coerceNumberProperty(value);
      }
      _itemSize = 20;
      /**
       * The minimum amount of buffer rendered beyond the viewport (in pixels).
       * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
       */
      get minBufferPx() {
        return this._minBufferPx;
      }
      set minBufferPx(value) {
        this._minBufferPx = coerceNumberProperty(value);
      }
      _minBufferPx = 100;
      /**
       * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
       */
      get maxBufferPx() {
        return this._maxBufferPx;
      }
      set maxBufferPx(value) {
        this._maxBufferPx = coerceNumberProperty(value);
      }
      _maxBufferPx = 200;
      /** The scroll strategy used by this directive. */
      _scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
      ngOnChanges() {
        this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkFixedSizeVirtualScroll, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkFixedSizeVirtualScroll, isStandalone: true, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: { itemSize: "itemSize", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx" }, providers: [
        {
          provide: VIRTUAL_SCROLL_STRATEGY,
          useFactory: _fixedSizeVirtualScrollStrategyFactory,
          deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
        }
      ], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkFixedSizeVirtualScroll, decorators: [{
      type: Directive,
      args: [{
        selector: "cdk-virtual-scroll-viewport[itemSize]",
        providers: [
          {
            provide: VIRTUAL_SCROLL_STRATEGY,
            useFactory: _fixedSizeVirtualScrollStrategyFactory,
            deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
          }
        ]
      }]
    }], propDecorators: { itemSize: [{
      type: Input
    }], minBufferPx: [{
      type: Input
    }], maxBufferPx: [{
      type: Input
    }] } });
    DEFAULT_SCROLL_TIME = 20;
    ScrollDispatcher = class _ScrollDispatcher {
      _ngZone = inject(NgZone);
      _platform = inject(Platform);
      _renderer = inject(RendererFactory2).createRenderer(null, null);
      _cleanupGlobalListener;
      constructor() {
      }
      /** Subject for notifying that a registered scrollable reference element has been scrolled. */
      _scrolled = new Subject();
      /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */
      _scrolledCount = 0;
      /**
       * Map of all the scrollable references that are registered with the service and their
       * scroll event subscriptions.
       */
      scrollContainers = /* @__PURE__ */ new Map();
      /**
       * Registers a scrollable instance with the service and listens for its scrolled events. When the
       * scrollable is scrolled, the service emits the event to its scrolled observable.
       * @param scrollable Scrollable instance to be registered.
       */
      register(scrollable) {
        if (!this.scrollContainers.has(scrollable)) {
          this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
        }
      }
      /**
       * De-registers a Scrollable reference and unsubscribes from its scroll event observable.
       * @param scrollable Scrollable instance to be deregistered.
       */
      deregister(scrollable) {
        const scrollableReference = this.scrollContainers.get(scrollable);
        if (scrollableReference) {
          scrollableReference.unsubscribe();
          this.scrollContainers.delete(scrollable);
        }
      }
      /**
       * Returns an observable that emits an event whenever any of the registered Scrollable
       * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
       * to override the default "throttle" time.
       *
       * **Note:** in order to avoid hitting change detection for every scroll event,
       * all of the events emitted from this stream will be run outside the Angular zone.
       * If you need to update any data bindings as a result of a scroll event, you have
       * to run the callback using `NgZone.run`.
       */
      scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
        if (!this._platform.isBrowser) {
          return of();
        }
        return new Observable((observer) => {
          if (!this._cleanupGlobalListener) {
            this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()));
          }
          const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
          this._scrolledCount++;
          return () => {
            subscription.unsubscribe();
            this._scrolledCount--;
            if (!this._scrolledCount) {
              this._cleanupGlobalListener?.();
              this._cleanupGlobalListener = void 0;
            }
          };
        });
      }
      ngOnDestroy() {
        this._cleanupGlobalListener?.();
        this._cleanupGlobalListener = void 0;
        this.scrollContainers.forEach((_, container) => this.deregister(container));
        this._scrolled.complete();
      }
      /**
       * Returns an observable that emits whenever any of the
       * scrollable ancestors of an element are scrolled.
       * @param elementOrElementRef Element whose ancestors to listen for.
       * @param auditTimeInMs Time to throttle the scroll events.
       */
      ancestorScrolled(elementOrElementRef, auditTimeInMs) {
        const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
        return this.scrolled(auditTimeInMs).pipe(filter((target) => !target || ancestors.indexOf(target) > -1));
      }
      /** Returns all registered Scrollables that contain the provided element. */
      getAncestorScrollContainers(elementOrElementRef) {
        const scrollingContainers = [];
        this.scrollContainers.forEach((_subscription, scrollable) => {
          if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
            scrollingContainers.push(scrollable);
          }
        });
        return scrollingContainers;
      }
      /** Returns true if the element is contained within the provided Scrollable. */
      _scrollableContainsElement(scrollable, elementOrElementRef) {
        let element = coerceElement(elementOrElementRef);
        let scrollableElement = scrollable.getElementRef().nativeElement;
        do {
          if (element == scrollableElement) {
            return true;
          }
        } while (element = element.parentElement);
        return false;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ScrollDispatcher, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ScrollDispatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: ScrollDispatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkScrollable = class _CdkScrollable {
      elementRef = inject(ElementRef);
      scrollDispatcher = inject(ScrollDispatcher);
      ngZone = inject(NgZone);
      dir = inject(Directionality, { optional: true });
      _scrollElement = this.elementRef.nativeElement;
      _destroyed = new Subject();
      _renderer = inject(Renderer2);
      _cleanupScroll;
      _elementScrolled = new Subject();
      constructor() {
      }
      ngOnInit() {
        this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", (event) => this._elementScrolled.next(event)));
        this.scrollDispatcher.register(this);
      }
      ngOnDestroy() {
        this._cleanupScroll?.();
        this._elementScrolled.complete();
        this.scrollDispatcher.deregister(this);
        this._destroyed.next();
        this._destroyed.complete();
      }
      /** Returns observable that emits when a scroll event is fired on the host element. */
      elementScrolled() {
        return this._elementScrolled;
      }
      /** Gets the ElementRef for the viewport. */
      getElementRef() {
        return this.elementRef;
      }
      /**
       * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
       * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
       * left and right always refer to the left and right side of the scrolling container irrespective
       * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
       * in an RTL context.
       * @param options specified the offsets to scroll to.
       */
      scrollTo(options) {
        const el = this.elementRef.nativeElement;
        const isRtl = this.dir && this.dir.value == "rtl";
        if (options.left == null) {
          options.left = isRtl ? options.end : options.start;
        }
        if (options.right == null) {
          options.right = isRtl ? options.start : options.end;
        }
        if (options.bottom != null) {
          options.top = el.scrollHeight - el.clientHeight - options.bottom;
        }
        if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
          if (options.left != null) {
            options.right = el.scrollWidth - el.clientWidth - options.left;
          }
          if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
            options.left = options.right;
          } else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
            options.left = options.right ? -options.right : options.right;
          }
        } else {
          if (options.right != null) {
            options.left = el.scrollWidth - el.clientWidth - options.right;
          }
        }
        this._applyScrollToOptions(options);
      }
      _applyScrollToOptions(options) {
        const el = this.elementRef.nativeElement;
        if (supportsScrollBehavior()) {
          el.scrollTo(options);
        } else {
          if (options.top != null) {
            el.scrollTop = options.top;
          }
          if (options.left != null) {
            el.scrollLeft = options.left;
          }
        }
      }
      /**
       * Measures the scroll offset relative to the specified edge of the viewport. This method can be
       * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
       * about what scrollLeft means in RTL. The values returned by this method are normalized such that
       * left and right always refer to the left and right side of the scrolling container irrespective
       * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
       * in an RTL context.
       * @param from The edge to measure from.
       */
      measureScrollOffset(from) {
        const LEFT = "left";
        const RIGHT = "right";
        const el = this.elementRef.nativeElement;
        if (from == "top") {
          return el.scrollTop;
        }
        if (from == "bottom") {
          return el.scrollHeight - el.clientHeight - el.scrollTop;
        }
        const isRtl = this.dir && this.dir.value == "rtl";
        if (from == "start") {
          from = isRtl ? RIGHT : LEFT;
        } else if (from == "end") {
          from = isRtl ? LEFT : RIGHT;
        }
        if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
          if (from == LEFT) {
            return el.scrollWidth - el.clientWidth - el.scrollLeft;
          } else {
            return el.scrollLeft;
          }
        } else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
          if (from == LEFT) {
            return el.scrollLeft + el.scrollWidth - el.clientWidth;
          } else {
            return -el.scrollLeft;
          }
        } else {
          if (from == LEFT) {
            return el.scrollLeft;
          } else {
            return el.scrollWidth - el.clientWidth - el.scrollLeft;
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkScrollable, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkScrollable, isStandalone: true, selector: "[cdk-scrollable], [cdkScrollable]", ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkScrollable, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdk-scrollable], [cdkScrollable]"
      }]
    }], ctorParameters: () => [] });
    DEFAULT_RESIZE_TIME = 20;
    ViewportRuler = class _ViewportRuler {
      _platform = inject(Platform);
      _listeners;
      /** Cached viewport dimensions. */
      _viewportSize;
      /** Stream of viewport change events. */
      _change = new Subject();
      /** Used to reference correct document/window */
      _document = inject(DOCUMENT);
      constructor() {
        const ngZone = inject(NgZone);
        const renderer = inject(RendererFactory2).createRenderer(null, null);
        ngZone.runOutsideAngular(() => {
          if (this._platform.isBrowser) {
            const changeListener = (event) => this._change.next(event);
            this._listeners = [
              renderer.listen("window", "resize", changeListener),
              renderer.listen("window", "orientationchange", changeListener)
            ];
          }
          this.change().subscribe(() => this._viewportSize = null);
        });
      }
      ngOnDestroy() {
        this._listeners?.forEach((cleanup) => cleanup());
        this._change.complete();
      }
      /** Returns the viewport's width and height. */
      getViewportSize() {
        if (!this._viewportSize) {
          this._updateViewportSize();
        }
        const output = { width: this._viewportSize.width, height: this._viewportSize.height };
        if (!this._platform.isBrowser) {
          this._viewportSize = null;
        }
        return output;
      }
      /** Gets a DOMRect for the viewport's bounds. */
      getViewportRect() {
        const scrollPosition = this.getViewportScrollPosition();
        const { width, height } = this.getViewportSize();
        return {
          top: scrollPosition.top,
          left: scrollPosition.left,
          bottom: scrollPosition.top + height,
          right: scrollPosition.left + width,
          height,
          width
        };
      }
      /** Gets the (top, left) scroll position of the viewport. */
      getViewportScrollPosition() {
        if (!this._platform.isBrowser) {
          return { top: 0, left: 0 };
        }
        const document = this._document;
        const window2 = this._getWindow();
        const documentElement = document.documentElement;
        const documentRect = documentElement.getBoundingClientRect();
        const top = -documentRect.top || document.body.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
        const left = -documentRect.left || document.body.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
        return { top, left };
      }
      /**
       * Returns a stream that emits whenever the size of the viewport changes.
       * This stream emits outside of the Angular zone.
       * @param throttleTime Time in milliseconds to throttle the stream.
       */
      change(throttleTime = DEFAULT_RESIZE_TIME) {
        return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
      }
      /** Use defaultView of injected document if available or fallback to global window reference */
      _getWindow() {
        return this._document.defaultView || window;
      }
      /** Updates the cached viewport size. */
      _updateViewportSize() {
        const window2 = this._getWindow();
        this._viewportSize = this._platform.isBrowser ? { width: window2.innerWidth, height: window2.innerHeight } : { width: 0, height: 0 };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ViewportRuler, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ViewportRuler, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: ViewportRuler, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
    CdkVirtualScrollable = class _CdkVirtualScrollable extends CdkScrollable {
      constructor() {
        super();
      }
      /**
       * Measure the viewport size for the provided orientation.
       *
       * @param orientation The orientation to measure the size from.
       */
      measureViewportSize(orientation) {
        const viewportEl = this.elementRef.nativeElement;
        return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkVirtualScrollable, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkVirtualScrollable, isStandalone: true, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkVirtualScrollable, decorators: [{
      type: Directive
    }], ctorParameters: () => [] });
    SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
    CdkVirtualScrollViewport = class _CdkVirtualScrollViewport extends CdkVirtualScrollable {
      elementRef = inject(ElementRef);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _scrollStrategy = inject(VIRTUAL_SCROLL_STRATEGY, {
        optional: true
      });
      scrollable = inject(VIRTUAL_SCROLLABLE, { optional: true });
      _platform = inject(Platform);
      /** Emits when the viewport is detached from a CdkVirtualForOf. */
      _detachedSubject = new Subject();
      /** Emits when the rendered range changes. */
      _renderedRangeSubject = new Subject();
      /** The direction the viewport scrolls. */
      get orientation() {
        return this._orientation;
      }
      set orientation(orientation) {
        if (this._orientation !== orientation) {
          this._orientation = orientation;
          this._calculateSpacerSize();
        }
      }
      _orientation = "vertical";
      /**
       * Whether rendered items should persist in the DOM after scrolling out of view. By default, items
       * will be removed.
       */
      appendOnly = false;
      // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
      // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
      // depending on how the strategy calculates the scrolled index, it may come at a cost to
      // performance.
      /** Emits when the index of the first element visible in the viewport changes. */
      scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
      /** The element that wraps the rendered content. */
      _contentWrapper;
      /** A stream that emits whenever the rendered range changes. */
      renderedRangeStream = this._renderedRangeSubject;
      /**
       * The total size of all content (in pixels), including content that is not currently rendered.
       */
      _totalContentSize = 0;
      /** A string representing the `style.width` property value to be used for the spacer element. */
      _totalContentWidth = signal("", ...ngDevMode ? [{ debugName: "_totalContentWidth" }] : []);
      /** A string representing the `style.height` property value to be used for the spacer element. */
      _totalContentHeight = signal("", ...ngDevMode ? [{ debugName: "_totalContentHeight" }] : []);
      /**
       * The CSS transform applied to the rendered subset of items so that they appear within the bounds
       * of the visible viewport.
       */
      _renderedContentTransform;
      /** The currently rendered range of indices. */
      _renderedRange = { start: 0, end: 0 };
      /** The length of the data bound to this viewport (in number of items). */
      _dataLength = 0;
      /** The size of the viewport (in pixels). */
      _viewportSize = 0;
      /** the currently attached CdkVirtualScrollRepeater. */
      _forOf;
      /** The last rendered content offset that was set. */
      _renderedContentOffset = 0;
      /**
       * Whether the last rendered content offset was to the end of the content (and therefore needs to
       * be rewritten as an offset to the start of the content).
       */
      _renderedContentOffsetNeedsRewrite = false;
      _changeDetectionNeeded = signal(false, ...ngDevMode ? [{ debugName: "_changeDetectionNeeded" }] : []);
      /** A list of functions to run after the next change detection cycle. */
      _runAfterChangeDetection = [];
      /** Subscription to changes in the viewport size. */
      _viewportChanges = Subscription.EMPTY;
      _injector = inject(Injector);
      _isDestroyed = false;
      constructor() {
        super();
        const viewportRuler = inject(ViewportRuler);
        if (!this._scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        }
        this._viewportChanges = viewportRuler.change().subscribe(() => {
          this.checkViewportSize();
        });
        if (!this.scrollable) {
          this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
          this.scrollable = this;
        }
        const ref = effect(() => {
          if (this._changeDetectionNeeded()) {
            this._doChangeDetection();
          }
        }, ...ngDevMode ? [{ debugName: "ref", injector: inject(ApplicationRef).injector }] : [
          // Using ApplicationRef injector is important here because we want this to be a root
          // effect that runs before change detection of any application views (since we're depending on markForCheck marking parents dirty)
          { injector: inject(ApplicationRef).injector }
        ]);
        inject(DestroyRef).onDestroy(() => void ref.destroy());
      }
      ngOnInit() {
        if (!this._platform.isBrowser) {
          return;
        }
        if (this.scrollable === this) {
          super.ngOnInit();
        }
        this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
          this._measureViewportSize();
          this._scrollStrategy.attach(this);
          this.scrollable.elementScrolled().pipe(
            // Start off with a fake scroll event so we properly detect our initial position.
            startWith(null),
            // Collect multiple events into one until the next animation frame. This way if
            // there are multiple scroll events in the same frame we only need to recheck
            // our layout once.
            auditTime(0, SCROLL_SCHEDULER),
            // Usually `elementScrolled` is completed when the scrollable is destroyed, but
            // that may not be the case if a `CdkVirtualScrollableElement` is used so we have
            // to unsubscribe here just in case.
            takeUntil(this._destroyed)
          ).subscribe(() => this._scrollStrategy.onContentScrolled());
          this._markChangeDetectionNeeded();
        }));
      }
      ngOnDestroy() {
        this.detach();
        this._scrollStrategy.detach();
        this._renderedRangeSubject.complete();
        this._detachedSubject.complete();
        this._viewportChanges.unsubscribe();
        this._isDestroyed = true;
        super.ngOnDestroy();
      }
      /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */
      attach(forOf) {
        if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("CdkVirtualScrollViewport is already attached.");
        }
        this.ngZone.runOutsideAngular(() => {
          this._forOf = forOf;
          this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
            const newLength = data.length;
            if (newLength !== this._dataLength) {
              this._dataLength = newLength;
              this._scrollStrategy.onDataLengthChanged();
            }
            this._doChangeDetection();
          });
        });
      }
      /** Detaches the current `CdkVirtualForOf`. */
      detach() {
        this._forOf = null;
        this._detachedSubject.next();
      }
      /** Gets the length of the data bound to this viewport (in number of items). */
      getDataLength() {
        return this._dataLength;
      }
      /** Gets the size of the viewport (in pixels). */
      getViewportSize() {
        return this._viewportSize;
      }
      // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
      // cycle happens. I'm being careful to only call it after the render cycle is complete and before
      // setting it to something else, but its error prone and should probably be split into
      // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
      /** Get the current rendered range of items. */
      getRenderedRange() {
        return this._renderedRange;
      }
      measureBoundingClientRectWithScrollOffset(from) {
        return this.getElementRef().nativeElement.getBoundingClientRect()[from];
      }
      /**
       * Sets the total size of all content (in pixels), including content that is not currently
       * rendered.
       */
      setTotalContentSize(size) {
        if (this._totalContentSize !== size) {
          this._totalContentSize = size;
          this._calculateSpacerSize();
          this._markChangeDetectionNeeded();
        }
      }
      /** Sets the currently rendered range of indices. */
      setRenderedRange(range) {
        if (!rangesEqual(this._renderedRange, range)) {
          if (this.appendOnly) {
            range = { start: 0, end: Math.max(this._renderedRange.end, range.end) };
          }
          this._renderedRangeSubject.next(this._renderedRange = range);
          this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
        }
      }
      /**
       * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
       */
      getOffsetToRenderedContentStart() {
        return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
      }
      /**
       * Sets the offset from the start of the viewport to either the start or end of the rendered data
       * (in pixels).
       */
      setRenderedContentOffset(offset, to = "to-start") {
        offset = this.appendOnly && to === "to-start" ? 0 : offset;
        const isRtl = this.dir && this.dir.value == "rtl";
        const isHorizontal = this.orientation == "horizontal";
        const axis = isHorizontal ? "X" : "Y";
        const axisDirection = isHorizontal && isRtl ? -1 : 1;
        let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
        this._renderedContentOffset = offset;
        if (to === "to-end") {
          transform += ` translate${axis}(-100%)`;
          this._renderedContentOffsetNeedsRewrite = true;
        }
        if (this._renderedContentTransform != transform) {
          this._renderedContentTransform = transform;
          this._markChangeDetectionNeeded(() => {
            if (this._renderedContentOffsetNeedsRewrite) {
              this._renderedContentOffset -= this.measureRenderedContentSize();
              this._renderedContentOffsetNeedsRewrite = false;
              this.setRenderedContentOffset(this._renderedContentOffset);
            } else {
              this._scrollStrategy.onRenderedOffsetChanged();
            }
          });
        }
      }
      /**
       * Scrolls to the given offset from the start of the viewport. Please note that this is not always
       * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
       * direction, this would be the equivalent of setting a fictional `scrollRight` property.
       * @param offset The offset to scroll to.
       * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
       */
      scrollToOffset(offset, behavior = "auto") {
        const options = { behavior };
        if (this.orientation === "horizontal") {
          options.start = offset;
        } else {
          options.top = offset;
        }
        this.scrollable.scrollTo(options);
      }
      /**
       * Scrolls to the offset for the given index.
       * @param index The index of the element to scroll to.
       * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
       */
      scrollToIndex(index, behavior = "auto") {
        this._scrollStrategy.scrollToIndex(index, behavior);
      }
      /**
       * Gets the current scroll offset from the start of the scrollable (in pixels).
       * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
       *     in horizontal mode.
       */
      measureScrollOffset(from) {
        let measureScrollOffset;
        if (this.scrollable == this) {
          measureScrollOffset = (_from) => super.measureScrollOffset(_from);
        } else {
          measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
        }
        return Math.max(0, measureScrollOffset(from ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
      }
      /**
       * Measures the offset of the viewport from the scrolling container
       * @param from The edge to measure from.
       */
      measureViewportOffset(from) {
        let fromRect;
        const LEFT = "left";
        const RIGHT = "right";
        const isRtl = this.dir?.value == "rtl";
        if (from == "start") {
          fromRect = isRtl ? RIGHT : LEFT;
        } else if (from == "end") {
          fromRect = isRtl ? LEFT : RIGHT;
        } else if (from) {
          fromRect = from;
        } else {
          fromRect = this.orientation === "horizontal" ? "left" : "top";
        }
        const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
        const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
        return viewportClientRect - scrollerClientRect;
      }
      /** Measure the combined size of all of the rendered items. */
      measureRenderedContentSize() {
        const contentEl = this._contentWrapper.nativeElement;
        return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
      }
      /**
       * Measure the total combined size of the given range. Throws if the range includes items that are
       * not rendered.
       */
      measureRangeSize(range) {
        if (!this._forOf) {
          return 0;
        }
        return this._forOf.measureRangeSize(range, this.orientation);
      }
      /** Update the viewport dimensions and re-render. */
      checkViewportSize() {
        this._measureViewportSize();
        this._scrollStrategy.onDataLengthChanged();
      }
      /** Measure the viewport size. */
      _measureViewportSize() {
        this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
      }
      /** Queue up change detection to run. */
      _markChangeDetectionNeeded(runAfter) {
        if (runAfter) {
          this._runAfterChangeDetection.push(runAfter);
        }
        if (untracked(this._changeDetectionNeeded)) {
          return;
        }
        this.ngZone.runOutsideAngular(() => {
          Promise.resolve().then(() => {
            this.ngZone.run(() => {
              this._changeDetectionNeeded.set(true);
            });
          });
        });
      }
      /** Run change detection. */
      _doChangeDetection() {
        if (this._isDestroyed) {
          return;
        }
        this.ngZone.run(() => {
          this._changeDetectorRef.markForCheck();
          this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
          afterNextRender(() => {
            this._changeDetectionNeeded.set(false);
            const runAfterChangeDetection = this._runAfterChangeDetection;
            this._runAfterChangeDetection = [];
            for (const fn of runAfterChangeDetection) {
              fn();
            }
          }, { injector: this._injector });
        });
      }
      /** Calculates the `style.width` and `style.height` for the spacer element. */
      _calculateSpacerSize() {
        this._totalContentHeight.set(this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`);
        this._totalContentWidth.set(this.orientation === "horizontal" ? `${this._totalContentSize}px` : "");
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkVirtualScrollViewport, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.2.0-next.2", type: _CdkVirtualScrollViewport, isStandalone: true, selector: "cdk-virtual-scroll-viewport", inputs: { orientation: "orientation", appendOnly: ["appendOnly", "appendOnly", booleanAttribute] }, outputs: { scrolledIndexChange: "scrolledIndexChange" }, host: { properties: { "class.cdk-virtual-scroll-orientation-horizontal": 'orientation === "horizontal"', "class.cdk-virtual-scroll-orientation-vertical": 'orientation !== "horizontal"' }, classAttribute: "cdk-virtual-scroll-viewport" }, providers: [
        {
          provide: CdkScrollable,
          useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
          deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], _CdkVirtualScrollViewport]
        }
      ], viewQueries: [{ propertyName: "_contentWrapper", first: true, predicate: ["contentWrapper"], descendants: true, static: true }], usesInheritance: true, ngImport: core_exports, template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth()" [style.height]="_totalContentHeight()"></div>\n', styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkVirtualScrollViewport, decorators: [{
      type: Component,
      args: [{ selector: "cdk-virtual-scroll-viewport", host: {
        "class": "cdk-virtual-scroll-viewport",
        "[class.cdk-virtual-scroll-orientation-horizontal]": 'orientation === "horizontal"',
        "[class.cdk-virtual-scroll-orientation-vertical]": 'orientation !== "horizontal"'
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
        {
          provide: CdkScrollable,
          useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
          deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], CdkVirtualScrollViewport]
        }
      ], template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth()" [style.height]="_totalContentHeight()"></div>\n', styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"] }]
    }], ctorParameters: () => [], propDecorators: { orientation: [{
      type: Input
    }], appendOnly: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], scrolledIndexChange: [{
      type: Output
    }], _contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", { static: true }]
    }] } });
    CdkVirtualForOf = class _CdkVirtualForOf {
      _viewContainerRef = inject(ViewContainerRef);
      _template = inject(TemplateRef);
      _differs = inject(IterableDiffers);
      _viewRepeater = inject(_VIEW_REPEATER_STRATEGY);
      _viewport = inject(CdkVirtualScrollViewport, { skipSelf: true });
      /** Emits when the rendered view of the data changes. */
      viewChange = new Subject();
      /** Subject that emits when a new DataSource instance is given. */
      _dataSourceChanges = new Subject();
      /** The DataSource to display. */
      get cdkVirtualForOf() {
        return this._cdkVirtualForOf;
      }
      set cdkVirtualForOf(value) {
        this._cdkVirtualForOf = value;
        if (isDataSource(value)) {
          this._dataSourceChanges.next(value);
        } else {
          this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
        }
      }
      _cdkVirtualForOf;
      /**
       * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
       * the item and produces a value to be used as the item's identity when tracking changes.
       */
      get cdkVirtualForTrackBy() {
        return this._cdkVirtualForTrackBy;
      }
      set cdkVirtualForTrackBy(fn) {
        this._needsUpdate = true;
        this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
      }
      _cdkVirtualForTrackBy;
      /** The template used to stamp out new elements. */
      set cdkVirtualForTemplate(value) {
        if (value) {
          this._needsUpdate = true;
          this._template = value;
        }
      }
      /**
       * The size of the cache used to store templates that are not being used for re-use later.
       * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
       */
      get cdkVirtualForTemplateCacheSize() {
        return this._viewRepeater.viewCacheSize;
      }
      set cdkVirtualForTemplateCacheSize(size) {
        this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
      }
      /** Emits whenever the data in the current DataSource changes. */
      dataStream = this._dataSourceChanges.pipe(
        // Start off with null `DataSource`.
        startWith(null),
        // Bundle up the previous and current data sources so we can work with both.
        pairwise(),
        // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        switchMap(([prev, cur]) => this._changeDataSource(prev, cur)),
        // Replay the last emitted data when someone subscribes.
        shareReplay(1)
      );
      /** The differ used to calculate changes to the data. */
      _differ = null;
      /** The most recent data emitted from the DataSource. */
      _data;
      /** The currently rendered items. */
      _renderedItems;
      /** The currently rendered range of indices. */
      _renderedRange;
      /** Whether the rendered data should be updated during the next ngDoCheck cycle. */
      _needsUpdate = false;
      _destroyed = new Subject();
      constructor() {
        const ngZone = inject(NgZone);
        this.dataStream.subscribe((data) => {
          this._data = data;
          this._onRenderedDataChange();
        });
        this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range) => {
          this._renderedRange = range;
          if (this.viewChange.observers.length) {
            ngZone.run(() => this.viewChange.next(this._renderedRange));
          }
          this._onRenderedDataChange();
        });
        this._viewport.attach(this);
      }
      /**
       * Measures the combined size (width for horizontal orientation, height for vertical) of all items
       * in the specified range. Throws an error if the range includes items that are not currently
       * rendered.
       */
      measureRangeSize(range, orientation) {
        if (range.start >= range.end) {
          return 0;
        }
        if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error(`Error: attempted to measure an item that isn't rendered.`);
        }
        const renderedStartIndex = range.start - this._renderedRange.start;
        const rangeLen = range.end - range.start;
        let firstNode;
        let lastNode;
        for (let i = 0; i < rangeLen; i++) {
          const view = this._viewContainerRef.get(i + renderedStartIndex);
          if (view && view.rootNodes.length) {
            firstNode = lastNode = view.rootNodes[0];
            break;
          }
        }
        for (let i = rangeLen - 1; i > -1; i--) {
          const view = this._viewContainerRef.get(i + renderedStartIndex);
          if (view && view.rootNodes.length) {
            lastNode = view.rootNodes[view.rootNodes.length - 1];
            break;
          }
        }
        return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
      }
      ngDoCheck() {
        if (this._differ && this._needsUpdate) {
          const changes = this._differ.diff(this._renderedItems);
          if (!changes) {
            this._updateContext();
          } else {
            this._applyChanges(changes);
          }
          this._needsUpdate = false;
        }
      }
      ngOnDestroy() {
        this._viewport.detach();
        this._dataSourceChanges.next(void 0);
        this._dataSourceChanges.complete();
        this.viewChange.complete();
        this._destroyed.next();
        this._destroyed.complete();
        this._viewRepeater.detach();
      }
      /** React to scroll state changes in the viewport. */
      _onRenderedDataChange() {
        if (!this._renderedRange) {
          return;
        }
        this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
        if (!this._differ) {
          this._differ = this._differs.find(this._renderedItems).create((index, item) => {
            return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
          });
        }
        this._needsUpdate = true;
      }
      /** Swap out one `DataSource` for another. */
      _changeDataSource(oldDs, newDs) {
        if (oldDs) {
          oldDs.disconnect(this);
        }
        this._needsUpdate = true;
        return newDs ? newDs.connect(this) : of();
      }
      /** Update the `CdkVirtualForOfContext` for all views. */
      _updateContext() {
        const count = this._data.length;
        let i = this._viewContainerRef.length;
        while (i--) {
          const view = this._viewContainerRef.get(i);
          view.context.index = this._renderedRange.start + i;
          view.context.count = count;
          this._updateComputedContextProperties(view.context);
          view.detectChanges();
        }
      }
      /** Apply changes to the DOM. */
      _applyChanges(changes) {
        this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
        changes.forEachIdentityChange((record) => {
          const view = this._viewContainerRef.get(record.currentIndex);
          view.context.$implicit = record.item;
        });
        const count = this._data.length;
        let i = this._viewContainerRef.length;
        while (i--) {
          const view = this._viewContainerRef.get(i);
          view.context.index = this._renderedRange.start + i;
          view.context.count = count;
          this._updateComputedContextProperties(view.context);
        }
      }
      /** Update the computed properties on the `CdkVirtualForOfContext`. */
      _updateComputedContextProperties(context) {
        context.first = context.index === 0;
        context.last = context.index === context.count - 1;
        context.even = context.index % 2 === 0;
        context.odd = !context.even;
      }
      _getEmbeddedViewArgs(record, index) {
        return {
          templateRef: this._template,
          context: {
            $implicit: record.item,
            // It's guaranteed that the iterable is not "undefined" or "null" because we only
            // generate views for elements if the "cdkVirtualForOf" iterable has elements.
            cdkVirtualForOf: this._cdkVirtualForOf,
            index: -1,
            count: -1,
            first: false,
            last: false,
            odd: false,
            even: false
          },
          index
        };
      }
      static ngTemplateContextGuard(directive, context) {
        return true;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkVirtualForOf, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkVirtualForOf, isStandalone: true, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: { cdkVirtualForOf: "cdkVirtualForOf", cdkVirtualForTrackBy: "cdkVirtualForTrackBy", cdkVirtualForTemplate: "cdkVirtualForTemplate", cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize" }, providers: [{ provide: _VIEW_REPEATER_STRATEGY, useClass: _RecycleViewRepeaterStrategy }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkVirtualForOf, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkVirtualFor][cdkVirtualForOf]",
        providers: [{ provide: _VIEW_REPEATER_STRATEGY, useClass: _RecycleViewRepeaterStrategy }]
      }]
    }], ctorParameters: () => [], propDecorators: { cdkVirtualForOf: [{
      type: Input
    }], cdkVirtualForTrackBy: [{
      type: Input
    }], cdkVirtualForTemplate: [{
      type: Input
    }], cdkVirtualForTemplateCacheSize: [{
      type: Input
    }] } });
    CdkVirtualScrollableElement = class _CdkVirtualScrollableElement extends CdkVirtualScrollable {
      constructor() {
        super();
      }
      measureBoundingClientRectWithScrollOffset(from) {
        return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkVirtualScrollableElement, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkVirtualScrollableElement, isStandalone: true, selector: "[cdkVirtualScrollingElement]", host: { classAttribute: "cdk-virtual-scrollable" }, providers: [{ provide: VIRTUAL_SCROLLABLE, useExisting: _CdkVirtualScrollableElement }], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkVirtualScrollableElement, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkVirtualScrollingElement]",
        providers: [{ provide: VIRTUAL_SCROLLABLE, useExisting: CdkVirtualScrollableElement }],
        host: {
          "class": "cdk-virtual-scrollable"
        }
      }]
    }], ctorParameters: () => [] });
    CdkVirtualScrollableWindow = class _CdkVirtualScrollableWindow extends CdkVirtualScrollable {
      constructor() {
        super();
        const document = inject(DOCUMENT);
        this.elementRef = new ElementRef(document.documentElement);
        this._scrollElement = document;
      }
      measureBoundingClientRectWithScrollOffset(from) {
        return this.getElementRef().nativeElement.getBoundingClientRect()[from];
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkVirtualScrollableWindow, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkVirtualScrollableWindow, isStandalone: true, selector: "cdk-virtual-scroll-viewport[scrollWindow]", providers: [{ provide: VIRTUAL_SCROLLABLE, useExisting: _CdkVirtualScrollableWindow }], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkVirtualScrollableWindow, decorators: [{
      type: Directive,
      args: [{
        selector: "cdk-virtual-scroll-viewport[scrollWindow]",
        providers: [{ provide: VIRTUAL_SCROLLABLE, useExisting: CdkVirtualScrollableWindow }]
      }]
    }], ctorParameters: () => [] });
    CdkScrollableModule = class _CdkScrollableModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkScrollableModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkScrollableModule, imports: [CdkScrollable], exports: [CdkScrollable] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkScrollableModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkScrollableModule, decorators: [{
      type: NgModule,
      args: [{
        exports: [CdkScrollable],
        imports: [CdkScrollable]
      }]
    }] });
    ScrollingModule = class _ScrollingModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ScrollingModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ScrollingModule, imports: [
        BidiModule,
        CdkScrollableModule,
        CdkVirtualScrollViewport,
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollableWindow,
        CdkVirtualScrollableElement
      ], exports: [
        BidiModule,
        CdkScrollableModule,
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        CdkVirtualScrollableWindow,
        CdkVirtualScrollableElement
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ScrollingModule, imports: [
        BidiModule,
        CdkScrollableModule,
        BidiModule,
        CdkScrollableModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: ScrollingModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          BidiModule,
          CdkScrollableModule,
          CdkVirtualScrollViewport,
          CdkFixedSizeVirtualScroll,
          CdkVirtualForOf,
          CdkVirtualScrollableWindow,
          CdkVirtualScrollableElement
        ],
        exports: [
          BidiModule,
          CdkScrollableModule,
          CdkFixedSizeVirtualScroll,
          CdkVirtualForOf,
          CdkVirtualScrollViewport,
          CdkVirtualScrollableWindow,
          CdkVirtualScrollableElement
        ]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/overlay-module.mjs
function createBlockScrollStrategy(injector) {
  return new BlockScrollStrategy(injector.get(ViewportRuler), injector.get(DOCUMENT));
}
function getMatScrollStrategyAlreadyAttachedError() {
  return Error(`Scroll strategy has already been attached.`);
}
function createCloseScrollStrategy(injector, config) {
  return new CloseScrollStrategy(injector.get(ScrollDispatcher), injector.get(NgZone), injector.get(ViewportRuler), config);
}
function isElementScrolledOutsideView(element, scrollContainers) {
  return scrollContainers.some((containerBounds) => {
    const outsideAbove = element.bottom < containerBounds.top;
    const outsideBelow = element.top > containerBounds.bottom;
    const outsideLeft = element.right < containerBounds.left;
    const outsideRight = element.left > containerBounds.right;
    return outsideAbove || outsideBelow || outsideLeft || outsideRight;
  });
}
function isElementClippedByScrolling(element, scrollContainers) {
  return scrollContainers.some((scrollContainerRect) => {
    const clippedAbove = element.top < scrollContainerRect.top;
    const clippedBelow = element.bottom > scrollContainerRect.bottom;
    const clippedLeft = element.left < scrollContainerRect.left;
    const clippedRight = element.right > scrollContainerRect.right;
    return clippedAbove || clippedBelow || clippedLeft || clippedRight;
  });
}
function createRepositionScrollStrategy(injector, config) {
  return new RepositionScrollStrategy(injector.get(ScrollDispatcher), injector.get(ViewportRuler), injector.get(NgZone), config);
}
function validateVerticalPosition(property, value) {
  if (value !== "top" && value !== "bottom" && value !== "center") {
    throw Error(`ConnectedPosition: Invalid ${property} "${value}". Expected "top", "bottom" or "center".`);
  }
}
function validateHorizontalPosition(property, value) {
  if (value !== "start" && value !== "end" && value !== "center") {
    throw Error(`ConnectedPosition: Invalid ${property} "${value}". Expected "start", "end" or "center".`);
  }
}
function containsPierceShadowDom(parent, child) {
  const supportsShadowRoot = typeof ShadowRoot !== "undefined" && ShadowRoot;
  let current = child;
  while (current) {
    if (current === parent) {
      return true;
    }
    current = supportsShadowRoot && current instanceof ShadowRoot ? current.host : current.parentNode;
  }
  return false;
}
function createFlexibleConnectedPositionStrategy(injector, origin) {
  return new FlexibleConnectedPositionStrategy(origin, injector.get(ViewportRuler), injector.get(DOCUMENT), injector.get(Platform), injector.get(OverlayContainer));
}
function extendStyles(destination, source) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      destination[key] = source[key];
    }
  }
  return destination;
}
function getPixelValue(input) {
  if (typeof input !== "number" && input != null) {
    const [value, units] = input.split(cssUnitPattern);
    return !units || units === "px" ? parseFloat(value) : null;
  }
  return input || null;
}
function getRoundedBoundingClientRect(clientRect) {
  return {
    top: Math.floor(clientRect.top),
    right: Math.floor(clientRect.right),
    bottom: Math.floor(clientRect.bottom),
    left: Math.floor(clientRect.left),
    width: Math.floor(clientRect.width),
    height: Math.floor(clientRect.height)
  };
}
function compareScrollVisibility(a, b) {
  if (a === b) {
    return true;
  }
  return a.isOriginClipped === b.isOriginClipped && a.isOriginOutsideView === b.isOriginOutsideView && a.isOverlayClipped === b.isOverlayClipped && a.isOverlayOutsideView === b.isOverlayOutsideView;
}
function createGlobalPositionStrategy(_injector) {
  return new GlobalPositionStrategy();
}
function createOverlayRef(injector, config) {
  injector.get(_CdkPrivateStyleLoader).load(_CdkOverlayStyleLoader);
  const overlayContainer = injector.get(OverlayContainer);
  const doc = injector.get(DOCUMENT);
  const idGenerator = injector.get(_IdGenerator);
  const appRef = injector.get(ApplicationRef);
  const directionality = injector.get(Directionality);
  const host = doc.createElement("div");
  const pane = doc.createElement("div");
  pane.id = idGenerator.getId("cdk-overlay-");
  pane.classList.add("cdk-overlay-pane");
  host.appendChild(pane);
  overlayContainer.getContainerElement().appendChild(host);
  const portalOutlet = new DomPortalOutlet(pane, appRef, injector);
  const overlayConfig = new OverlayConfig(config);
  const renderer = injector.get(Renderer2, null, { optional: true }) || injector.get(RendererFactory2).createRenderer(null, null);
  overlayConfig.direction = overlayConfig.direction || directionality.value;
  return new OverlayRef(portalOutlet, host, pane, overlayConfig, injector.get(NgZone), injector.get(OverlayKeyboardDispatcher), doc, injector.get(Location), injector.get(OverlayOutsideClickDispatcher), config?.disableAnimations ?? injector.get(ANIMATION_MODULE_TYPE, null, { optional: true }) === "NoopAnimations", injector.get(EnvironmentInjector), renderer);
}
function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector);
}
var scrollBehaviorSupported, BlockScrollStrategy, CloseScrollStrategy, NoopScrollStrategy, RepositionScrollStrategy, ScrollStrategyOptions, OverlayConfig, ConnectedOverlayPositionChange, BaseOverlayDispatcher, OverlayKeyboardDispatcher, OverlayOutsideClickDispatcher, _CdkOverlayStyleLoader, OverlayContainer, BackdropRef, OverlayRef, boundingBoxClass, cssUnitPattern, FlexibleConnectedPositionStrategy, wrapperClass, GlobalPositionStrategy, OverlayPositionBuilder, Overlay, defaultPositionList, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY, CdkOverlayOrigin, CdkConnectedOverlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER, OverlayModule;
var init_overlay_module = __esm({
  "node_modules/@angular/cdk/fesm2022/overlay-module.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common();
    init_platform2();
    init_shadow_dom();
    init_test_environment();
    init_style_loader();
    init_esm();
    init_css_pixel_value();
    init_array();
    init_scrolling();
    init_portal();
    init_scrolling2();
    init_operators();
    init_id_generator();
    init_directionality();
    init_keycodes2();
    init_keycodes();
    init_bidi();
    scrollBehaviorSupported = supportsScrollBehavior();
    BlockScrollStrategy = class {
      _viewportRuler;
      _previousHTMLStyles = { top: "", left: "" };
      _previousScrollPosition;
      _isEnabled = false;
      _document;
      constructor(_viewportRuler, document) {
        this._viewportRuler = _viewportRuler;
        this._document = document;
      }
      /** Attaches this scroll strategy to an overlay. */
      attach() {
      }
      /** Blocks page-level scroll while the attached overlay is open. */
      enable() {
        if (this._canBeEnabled()) {
          const root = this._document.documentElement;
          this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
          this._previousHTMLStyles.left = root.style.left || "";
          this._previousHTMLStyles.top = root.style.top || "";
          root.style.left = coerceCssPixelValue(-this._previousScrollPosition.left);
          root.style.top = coerceCssPixelValue(-this._previousScrollPosition.top);
          root.classList.add("cdk-global-scrollblock");
          this._isEnabled = true;
        }
      }
      /** Unblocks page-level scroll while the attached overlay is open. */
      disable() {
        if (this._isEnabled) {
          const html = this._document.documentElement;
          const body = this._document.body;
          const htmlStyle = html.style;
          const bodyStyle = body.style;
          const previousHtmlScrollBehavior = htmlStyle.scrollBehavior || "";
          const previousBodyScrollBehavior = bodyStyle.scrollBehavior || "";
          this._isEnabled = false;
          htmlStyle.left = this._previousHTMLStyles.left;
          htmlStyle.top = this._previousHTMLStyles.top;
          html.classList.remove("cdk-global-scrollblock");
          if (scrollBehaviorSupported) {
            htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = "auto";
          }
          window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
          if (scrollBehaviorSupported) {
            htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
            bodyStyle.scrollBehavior = previousBodyScrollBehavior;
          }
        }
      }
      _canBeEnabled() {
        const html = this._document.documentElement;
        if (html.classList.contains("cdk-global-scrollblock") || this._isEnabled) {
          return false;
        }
        const rootElement = this._document.documentElement;
        const viewport = this._viewportRuler.getViewportSize();
        return rootElement.scrollHeight > viewport.height || rootElement.scrollWidth > viewport.width;
      }
    };
    CloseScrollStrategy = class {
      _scrollDispatcher;
      _ngZone;
      _viewportRuler;
      _config;
      _scrollSubscription = null;
      _overlayRef;
      _initialScrollPosition;
      constructor(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
      }
      /** Attaches this scroll strategy to an overlay. */
      attach(overlayRef) {
        if (this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
      }
      /** Enables the closing of the attached overlay on scroll. */
      enable() {
        if (this._scrollSubscription) {
          return;
        }
        const stream = this._scrollDispatcher.scrolled(0).pipe(filter((scrollable) => {
          return !scrollable || !this._overlayRef.overlayElement.contains(scrollable.getElementRef().nativeElement);
        }));
        if (this._config && this._config.threshold && this._config.threshold > 1) {
          this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
          this._scrollSubscription = stream.subscribe(() => {
            const scrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            if (Math.abs(scrollPosition - this._initialScrollPosition) > this._config.threshold) {
              this._detach();
            } else {
              this._overlayRef.updatePosition();
            }
          });
        } else {
          this._scrollSubscription = stream.subscribe(this._detach);
        }
      }
      /** Disables the closing the attached overlay on scroll. */
      disable() {
        if (this._scrollSubscription) {
          this._scrollSubscription.unsubscribe();
          this._scrollSubscription = null;
        }
      }
      detach() {
        this.disable();
        this._overlayRef = null;
      }
      /** Detaches the overlay ref and disables the scroll strategy. */
      _detach = () => {
        this.disable();
        if (this._overlayRef.hasAttached()) {
          this._ngZone.run(() => this._overlayRef.detach());
        }
      };
    };
    NoopScrollStrategy = class {
      /** Does nothing, as this scroll strategy is a no-op. */
      enable() {
      }
      /** Does nothing, as this scroll strategy is a no-op. */
      disable() {
      }
      /** Does nothing, as this scroll strategy is a no-op. */
      attach() {
      }
    };
    RepositionScrollStrategy = class {
      _scrollDispatcher;
      _viewportRuler;
      _ngZone;
      _config;
      _scrollSubscription = null;
      _overlayRef;
      constructor(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
      }
      /** Attaches this scroll strategy to an overlay. */
      attach(overlayRef) {
        if (this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
      }
      /** Enables repositioning of the attached overlay on scroll. */
      enable() {
        if (!this._scrollSubscription) {
          const throttle = this._config ? this._config.scrollThrottle : 0;
          this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(() => {
            this._overlayRef.updatePosition();
            if (this._config && this._config.autoClose) {
              const overlayRect = this._overlayRef.overlayElement.getBoundingClientRect();
              const { width, height } = this._viewportRuler.getViewportSize();
              const parentRects = [{ width, height, bottom: height, right: width, top: 0, left: 0 }];
              if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                this.disable();
                this._ngZone.run(() => this._overlayRef.detach());
              }
            }
          });
        }
      }
      /** Disables repositioning of the attached overlay on scroll. */
      disable() {
        if (this._scrollSubscription) {
          this._scrollSubscription.unsubscribe();
          this._scrollSubscription = null;
        }
      }
      detach() {
        this.disable();
        this._overlayRef = null;
      }
    };
    ScrollStrategyOptions = class _ScrollStrategyOptions {
      _injector = inject(Injector);
      constructor() {
      }
      /** Do nothing on scroll. */
      noop = () => new NoopScrollStrategy();
      /**
       * Close the overlay as soon as the user scrolls.
       * @param config Configuration to be used inside the scroll strategy.
       */
      close = (config) => createCloseScrollStrategy(this._injector, config);
      /** Block scrolling. */
      block = () => createBlockScrollStrategy(this._injector);
      /**
       * Update the overlay's position on scroll.
       * @param config Configuration to be used inside the scroll strategy.
       * Allows debouncing the reposition calls.
       */
      reposition = (config) => createRepositionScrollStrategy(this._injector, config);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ScrollStrategyOptions, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ScrollStrategyOptions, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: ScrollStrategyOptions, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    OverlayConfig = class {
      /** Strategy with which to position the overlay. */
      positionStrategy;
      /** Strategy to be used when handling scroll events while the overlay is open. */
      scrollStrategy = new NoopScrollStrategy();
      /** Custom class to add to the overlay pane. */
      panelClass = "";
      /** Whether the overlay has a backdrop. */
      hasBackdrop = false;
      /** Custom class to add to the backdrop */
      backdropClass = "cdk-overlay-dark-backdrop";
      /** Whether to disable any built-in animations. */
      disableAnimations;
      /** The width of the overlay panel. If a number is provided, pixel units are assumed. */
      width;
      /** The height of the overlay panel. If a number is provided, pixel units are assumed. */
      height;
      /** The min-width of the overlay panel. If a number is provided, pixel units are assumed. */
      minWidth;
      /** The min-height of the overlay panel. If a number is provided, pixel units are assumed. */
      minHeight;
      /** The max-width of the overlay panel. If a number is provided, pixel units are assumed. */
      maxWidth;
      /** The max-height of the overlay panel. If a number is provided, pixel units are assumed. */
      maxHeight;
      /**
       * Direction of the text in the overlay panel. If a `Directionality` instance
       * is passed in, the overlay will handle changes to its value automatically.
       */
      direction;
      /**
       * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
       * Note that this usually doesn't include clicking on links (unless the user is using
       * the `HashLocationStrategy`).
       */
      disposeOnNavigation = false;
      constructor(config) {
        if (config) {
          const configKeys = Object.keys(config);
          for (const key of configKeys) {
            if (config[key] !== void 0) {
              this[key] = config[key];
            }
          }
        }
      }
    };
    ConnectedOverlayPositionChange = class {
      connectionPair;
      scrollableViewProperties;
      constructor(connectionPair, scrollableViewProperties) {
        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
      }
    };
    BaseOverlayDispatcher = class _BaseOverlayDispatcher {
      /** Currently attached overlays in the order they were attached. */
      _attachedOverlays = [];
      _document = inject(DOCUMENT);
      _isAttached;
      constructor() {
      }
      ngOnDestroy() {
        this.detach();
      }
      /** Add a new overlay to the list of attached overlay refs. */
      add(overlayRef) {
        this.remove(overlayRef);
        this._attachedOverlays.push(overlayRef);
      }
      /** Remove an overlay from the list of attached overlay refs. */
      remove(overlayRef) {
        const index = this._attachedOverlays.indexOf(overlayRef);
        if (index > -1) {
          this._attachedOverlays.splice(index, 1);
        }
        if (this._attachedOverlays.length === 0) {
          this.detach();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _BaseOverlayDispatcher, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _BaseOverlayDispatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: BaseOverlayDispatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    OverlayKeyboardDispatcher = class _OverlayKeyboardDispatcher extends BaseOverlayDispatcher {
      _ngZone = inject(NgZone);
      _renderer = inject(RendererFactory2).createRenderer(null, null);
      _cleanupKeydown;
      /** Add a new overlay to the list of attached overlay refs. */
      add(overlayRef) {
        super.add(overlayRef);
        if (!this._isAttached) {
          this._ngZone.runOutsideAngular(() => {
            this._cleanupKeydown = this._renderer.listen("body", "keydown", this._keydownListener);
          });
          this._isAttached = true;
        }
      }
      /** Detaches the global keyboard event listener. */
      detach() {
        if (this._isAttached) {
          this._cleanupKeydown?.();
          this._isAttached = false;
        }
      }
      /** Keyboard event listener that will be attached to the body. */
      _keydownListener = (event) => {
        const overlays = this._attachedOverlays;
        for (let i = overlays.length - 1; i > -1; i--) {
          if (overlays[i]._keydownEvents.observers.length > 0) {
            this._ngZone.run(() => overlays[i]._keydownEvents.next(event));
            break;
          }
        }
      };
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayKeyboardDispatcher, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayKeyboardDispatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: OverlayKeyboardDispatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    OverlayOutsideClickDispatcher = class _OverlayOutsideClickDispatcher extends BaseOverlayDispatcher {
      _platform = inject(Platform);
      _ngZone = inject(NgZone);
      _renderer = inject(RendererFactory2).createRenderer(null, null);
      _cursorOriginalValue;
      _cursorStyleIsSet = false;
      _pointerDownEventTarget;
      _cleanups;
      /** Add a new overlay to the list of attached overlay refs. */
      add(overlayRef) {
        super.add(overlayRef);
        if (!this._isAttached) {
          const body = this._document.body;
          const eventOptions = { capture: true };
          const renderer = this._renderer;
          this._cleanups = this._ngZone.runOutsideAngular(() => [
            renderer.listen(body, "pointerdown", this._pointerDownListener, eventOptions),
            renderer.listen(body, "click", this._clickListener, eventOptions),
            renderer.listen(body, "auxclick", this._clickListener, eventOptions),
            renderer.listen(body, "contextmenu", this._clickListener, eventOptions)
          ]);
          if (this._platform.IOS && !this._cursorStyleIsSet) {
            this._cursorOriginalValue = body.style.cursor;
            body.style.cursor = "pointer";
            this._cursorStyleIsSet = true;
          }
          this._isAttached = true;
        }
      }
      /** Detaches the global keyboard event listener. */
      detach() {
        if (this._isAttached) {
          this._cleanups?.forEach((cleanup) => cleanup());
          this._cleanups = void 0;
          if (this._platform.IOS && this._cursorStyleIsSet) {
            this._document.body.style.cursor = this._cursorOriginalValue;
            this._cursorStyleIsSet = false;
          }
          this._isAttached = false;
        }
      }
      /** Store pointerdown event target to track origin of click. */
      _pointerDownListener = (event) => {
        this._pointerDownEventTarget = _getEventTarget(event);
      };
      /** Click event listener that will be attached to the body propagate phase. */
      _clickListener = (event) => {
        const target = _getEventTarget(event);
        const origin = event.type === "click" && this._pointerDownEventTarget ? this._pointerDownEventTarget : target;
        this._pointerDownEventTarget = null;
        const overlays = this._attachedOverlays.slice();
        for (let i = overlays.length - 1; i > -1; i--) {
          const overlayRef = overlays[i];
          if (overlayRef._outsidePointerEvents.observers.length < 1 || !overlayRef.hasAttached()) {
            continue;
          }
          if (containsPierceShadowDom(overlayRef.overlayElement, target) || containsPierceShadowDom(overlayRef.overlayElement, origin)) {
            break;
          }
          const outsidePointerEvents = overlayRef._outsidePointerEvents;
          if (this._ngZone) {
            this._ngZone.run(() => outsidePointerEvents.next(event));
          } else {
            outsidePointerEvents.next(event);
          }
        }
      };
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayOutsideClickDispatcher, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayOutsideClickDispatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: OverlayOutsideClickDispatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    _CdkOverlayStyleLoader = class __CdkOverlayStyleLoader {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: __CdkOverlayStyleLoader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: __CdkOverlayStyleLoader, isStandalone: true, selector: "ng-component", host: { attributes: { "cdk-overlay-style-loader": "" } }, ngImport: core_exports, template: "", isInline: true, styles: [".cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed}@layer cdk-overlay{.cdk-overlay-container{z-index:1000}}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute}@layer cdk-overlay{.cdk-global-overlay-wrapper{z-index:1000}}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;display:flex;max-width:100%;max-height:100%}@layer cdk-overlay{.cdk-overlay-pane{z-index:1000}}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0;touch-action:manipulation}@layer cdk-overlay{.cdk-overlay-backdrop{z-index:1000;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}}@media(prefers-reduced-motion){.cdk-overlay-backdrop{transition-duration:1ms}}.cdk-overlay-backdrop-showing{opacity:1}@media(forced-colors: active){.cdk-overlay-backdrop-showing{opacity:.6}}@layer cdk-overlay{.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing,.cdk-high-contrast-active .cdk-overlay-transparent-backdrop{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;display:flex;flex-direction:column;min-width:1px;min-height:1px}@layer cdk-overlay{.cdk-overlay-connected-position-bounding-box{z-index:1000}}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkOverlayStyleLoader, decorators: [{
      type: Component,
      args: [{ template: "", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: { "cdk-overlay-style-loader": "" }, styles: [".cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed}@layer cdk-overlay{.cdk-overlay-container{z-index:1000}}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute}@layer cdk-overlay{.cdk-global-overlay-wrapper{z-index:1000}}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;display:flex;max-width:100%;max-height:100%}@layer cdk-overlay{.cdk-overlay-pane{z-index:1000}}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0;touch-action:manipulation}@layer cdk-overlay{.cdk-overlay-backdrop{z-index:1000;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}}@media(prefers-reduced-motion){.cdk-overlay-backdrop{transition-duration:1ms}}.cdk-overlay-backdrop-showing{opacity:1}@media(forced-colors: active){.cdk-overlay-backdrop-showing{opacity:.6}}@layer cdk-overlay{.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing,.cdk-high-contrast-active .cdk-overlay-transparent-backdrop{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;display:flex;flex-direction:column;min-width:1px;min-height:1px}@layer cdk-overlay{.cdk-overlay-connected-position-bounding-box{z-index:1000}}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}\n"] }]
    }] });
    OverlayContainer = class _OverlayContainer {
      _platform = inject(Platform);
      _containerElement;
      _document = inject(DOCUMENT);
      _styleLoader = inject(_CdkPrivateStyleLoader);
      constructor() {
      }
      ngOnDestroy() {
        this._containerElement?.remove();
      }
      /**
       * This method returns the overlay container element. It will lazily
       * create the element the first time it is called to facilitate using
       * the container in non-browser environments.
       * @returns the container element
       */
      getContainerElement() {
        this._loadStyles();
        if (!this._containerElement) {
          this._createContainer();
        }
        return this._containerElement;
      }
      /**
       * Create the overlay container element, which is simply a div
       * with the 'cdk-overlay-container' class on the document body.
       */
      _createContainer() {
        const containerClass = "cdk-overlay-container";
        if (this._platform.isBrowser || _isTestEnvironment()) {
          const oppositePlatformContainers = this._document.querySelectorAll(`.${containerClass}[platform="server"], .${containerClass}[platform="test"]`);
          for (let i = 0; i < oppositePlatformContainers.length; i++) {
            oppositePlatformContainers[i].remove();
          }
        }
        const container = this._document.createElement("div");
        container.classList.add(containerClass);
        if (_isTestEnvironment()) {
          container.setAttribute("platform", "test");
        } else if (!this._platform.isBrowser) {
          container.setAttribute("platform", "server");
        }
        this._document.body.appendChild(container);
        this._containerElement = container;
      }
      /** Loads the structural styles necessary for the overlay to work. */
      _loadStyles() {
        this._styleLoader.load(_CdkOverlayStyleLoader);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayContainer, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayContainer, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: OverlayContainer, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    BackdropRef = class {
      _renderer;
      _ngZone;
      element;
      _cleanupClick;
      _cleanupTransitionEnd;
      _fallbackTimeout;
      constructor(document, _renderer, _ngZone, onClick) {
        this._renderer = _renderer;
        this._ngZone = _ngZone;
        this.element = document.createElement("div");
        this.element.classList.add("cdk-overlay-backdrop");
        this._cleanupClick = _renderer.listen(this.element, "click", onClick);
      }
      detach() {
        this._ngZone.runOutsideAngular(() => {
          const element = this.element;
          clearTimeout(this._fallbackTimeout);
          this._cleanupTransitionEnd?.();
          this._cleanupTransitionEnd = this._renderer.listen(element, "transitionend", this.dispose);
          this._fallbackTimeout = setTimeout(this.dispose, 500);
          element.style.pointerEvents = "none";
          element.classList.remove("cdk-overlay-backdrop-showing");
        });
      }
      dispose = () => {
        clearTimeout(this._fallbackTimeout);
        this._cleanupClick?.();
        this._cleanupTransitionEnd?.();
        this._cleanupClick = this._cleanupTransitionEnd = this._fallbackTimeout = void 0;
        this.element.remove();
      };
    };
    OverlayRef = class {
      _portalOutlet;
      _host;
      _pane;
      _config;
      _ngZone;
      _keyboardDispatcher;
      _document;
      _location;
      _outsideClickDispatcher;
      _animationsDisabled;
      _injector;
      _renderer;
      _backdropClick = new Subject();
      _attachments = new Subject();
      _detachments = new Subject();
      _positionStrategy;
      _scrollStrategy;
      _locationChanges = Subscription.EMPTY;
      _backdropRef = null;
      _detachContentMutationObserver;
      _detachContentAfterRenderRef;
      /**
       * Reference to the parent of the `_host` at the time it was detached. Used to restore
       * the `_host` to its original position in the DOM when it gets re-attached.
       */
      _previousHostParent;
      /** Stream of keydown events dispatched to this overlay. */
      _keydownEvents = new Subject();
      /** Stream of mouse outside events dispatched to this overlay. */
      _outsidePointerEvents = new Subject();
      /** Reference to the currently-running `afterNextRender` call. */
      _afterNextRenderRef;
      constructor(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location, _outsideClickDispatcher, _animationsDisabled2 = false, _injector, _renderer) {
        this._portalOutlet = _portalOutlet;
        this._host = _host;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._location = _location;
        this._outsideClickDispatcher = _outsideClickDispatcher;
        this._animationsDisabled = _animationsDisabled2;
        this._injector = _injector;
        this._renderer = _renderer;
        if (_config.scrollStrategy) {
          this._scrollStrategy = _config.scrollStrategy;
          this._scrollStrategy.attach(this);
        }
        this._positionStrategy = _config.positionStrategy;
      }
      /** The overlay's HTML element */
      get overlayElement() {
        return this._pane;
      }
      /** The overlay's backdrop HTML element. */
      get backdropElement() {
        return this._backdropRef?.element || null;
      }
      /**
       * Wrapper around the panel element. Can be used for advanced
       * positioning where a wrapper with specific styling is
       * required around the overlay pane.
       */
      get hostElement() {
        return this._host;
      }
      /**
       * Attaches content, given via a Portal, to the overlay.
       * If the overlay is configured to have a backdrop, it will be created.
       *
       * @param portal Portal instance to which to attach the overlay.
       * @returns The portal attachment result.
       */
      attach(portal) {
        if (!this._host.parentElement && this._previousHostParent) {
          this._previousHostParent.appendChild(this._host);
        }
        const attachResult = this._portalOutlet.attach(portal);
        if (this._positionStrategy) {
          this._positionStrategy.attach(this);
        }
        this._updateStackingOrder();
        this._updateElementSize();
        this._updateElementDirection();
        if (this._scrollStrategy) {
          this._scrollStrategy.enable();
        }
        this._afterNextRenderRef?.destroy();
        this._afterNextRenderRef = afterNextRender(() => {
          if (this.hasAttached()) {
            this.updatePosition();
          }
        }, { injector: this._injector });
        this._togglePointerEvents(true);
        if (this._config.hasBackdrop) {
          this._attachBackdrop();
        }
        if (this._config.panelClass) {
          this._toggleClasses(this._pane, this._config.panelClass, true);
        }
        this._attachments.next();
        this._completeDetachContent();
        this._keyboardDispatcher.add(this);
        if (this._config.disposeOnNavigation) {
          this._locationChanges = this._location.subscribe(() => this.dispose());
        }
        this._outsideClickDispatcher.add(this);
        if (typeof attachResult?.onDestroy === "function") {
          attachResult.onDestroy(() => {
            if (this.hasAttached()) {
              this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach()));
            }
          });
        }
        return attachResult;
      }
      /**
       * Detaches an overlay from a portal.
       * @returns The portal detachment result.
       */
      detach() {
        if (!this.hasAttached()) {
          return;
        }
        this.detachBackdrop();
        this._togglePointerEvents(false);
        if (this._positionStrategy && this._positionStrategy.detach) {
          this._positionStrategy.detach();
        }
        if (this._scrollStrategy) {
          this._scrollStrategy.disable();
        }
        const detachmentResult = this._portalOutlet.detach();
        this._detachments.next();
        this._completeDetachContent();
        this._keyboardDispatcher.remove(this);
        this._detachContentWhenEmpty();
        this._locationChanges.unsubscribe();
        this._outsideClickDispatcher.remove(this);
        return detachmentResult;
      }
      /** Cleans up the overlay from the DOM. */
      dispose() {
        const isAttached = this.hasAttached();
        if (this._positionStrategy) {
          this._positionStrategy.dispose();
        }
        this._disposeScrollStrategy();
        this._backdropRef?.dispose();
        this._locationChanges.unsubscribe();
        this._keyboardDispatcher.remove(this);
        this._portalOutlet.dispose();
        this._attachments.complete();
        this._backdropClick.complete();
        this._keydownEvents.complete();
        this._outsidePointerEvents.complete();
        this._outsideClickDispatcher.remove(this);
        this._host?.remove();
        this._afterNextRenderRef?.destroy();
        this._previousHostParent = this._pane = this._host = this._backdropRef = null;
        if (isAttached) {
          this._detachments.next();
        }
        this._detachments.complete();
        this._completeDetachContent();
      }
      /** Whether the overlay has attached content. */
      hasAttached() {
        return this._portalOutlet.hasAttached();
      }
      /** Gets an observable that emits when the backdrop has been clicked. */
      backdropClick() {
        return this._backdropClick;
      }
      /** Gets an observable that emits when the overlay has been attached. */
      attachments() {
        return this._attachments;
      }
      /** Gets an observable that emits when the overlay has been detached. */
      detachments() {
        return this._detachments;
      }
      /** Gets an observable of keydown events targeted to this overlay. */
      keydownEvents() {
        return this._keydownEvents;
      }
      /** Gets an observable of pointer events targeted outside this overlay. */
      outsidePointerEvents() {
        return this._outsidePointerEvents;
      }
      /** Gets the current overlay configuration, which is immutable. */
      getConfig() {
        return this._config;
      }
      /** Updates the position of the overlay based on the position strategy. */
      updatePosition() {
        if (this._positionStrategy) {
          this._positionStrategy.apply();
        }
      }
      /** Switches to a new position strategy and updates the overlay position. */
      updatePositionStrategy(strategy) {
        if (strategy === this._positionStrategy) {
          return;
        }
        if (this._positionStrategy) {
          this._positionStrategy.dispose();
        }
        this._positionStrategy = strategy;
        if (this.hasAttached()) {
          strategy.attach(this);
          this.updatePosition();
        }
      }
      /** Update the size properties of the overlay. */
      updateSize(sizeConfig) {
        this._config = __spreadValues(__spreadValues({}, this._config), sizeConfig);
        this._updateElementSize();
      }
      /** Sets the LTR/RTL direction for the overlay. */
      setDirection(dir) {
        this._config = __spreadProps(__spreadValues({}, this._config), { direction: dir });
        this._updateElementDirection();
      }
      /** Add a CSS class or an array of classes to the overlay pane. */
      addPanelClass(classes) {
        if (this._pane) {
          this._toggleClasses(this._pane, classes, true);
        }
      }
      /** Remove a CSS class or an array of classes from the overlay pane. */
      removePanelClass(classes) {
        if (this._pane) {
          this._toggleClasses(this._pane, classes, false);
        }
      }
      /**
       * Returns the layout direction of the overlay panel.
       */
      getDirection() {
        const direction = this._config.direction;
        if (!direction) {
          return "ltr";
        }
        return typeof direction === "string" ? direction : direction.value;
      }
      /** Switches to a new scroll strategy. */
      updateScrollStrategy(strategy) {
        if (strategy === this._scrollStrategy) {
          return;
        }
        this._disposeScrollStrategy();
        this._scrollStrategy = strategy;
        if (this.hasAttached()) {
          strategy.attach(this);
          strategy.enable();
        }
      }
      /** Updates the text direction of the overlay panel. */
      _updateElementDirection() {
        this._host.setAttribute("dir", this.getDirection());
      }
      /** Updates the size of the overlay element based on the overlay config. */
      _updateElementSize() {
        if (!this._pane) {
          return;
        }
        const style = this._pane.style;
        style.width = coerceCssPixelValue(this._config.width);
        style.height = coerceCssPixelValue(this._config.height);
        style.minWidth = coerceCssPixelValue(this._config.minWidth);
        style.minHeight = coerceCssPixelValue(this._config.minHeight);
        style.maxWidth = coerceCssPixelValue(this._config.maxWidth);
        style.maxHeight = coerceCssPixelValue(this._config.maxHeight);
      }
      /** Toggles the pointer events for the overlay pane element. */
      _togglePointerEvents(enablePointer) {
        this._pane.style.pointerEvents = enablePointer ? "" : "none";
      }
      /** Attaches a backdrop for this overlay. */
      _attachBackdrop() {
        const showingClass = "cdk-overlay-backdrop-showing";
        this._backdropRef?.dispose();
        this._backdropRef = new BackdropRef(this._document, this._renderer, this._ngZone, (event) => {
          this._backdropClick.next(event);
        });
        if (this._animationsDisabled) {
          this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation");
        }
        if (this._config.backdropClass) {
          this._toggleClasses(this._backdropRef.element, this._config.backdropClass, true);
        }
        this._host.parentElement.insertBefore(this._backdropRef.element, this._host);
        if (!this._animationsDisabled && typeof requestAnimationFrame !== "undefined") {
          this._ngZone.runOutsideAngular(() => {
            requestAnimationFrame(() => this._backdropRef?.element.classList.add(showingClass));
          });
        } else {
          this._backdropRef.element.classList.add(showingClass);
        }
      }
      /**
       * Updates the stacking order of the element, moving it to the top if necessary.
       * This is required in cases where one overlay was detached, while another one,
       * that should be behind it, was destroyed. The next time both of them are opened,
       * the stacking will be wrong, because the detached element's pane will still be
       * in its original DOM position.
       */
      _updateStackingOrder() {
        if (this._host.nextSibling) {
          this._host.parentNode.appendChild(this._host);
        }
      }
      /** Detaches the backdrop (if any) associated with the overlay. */
      detachBackdrop() {
        if (this._animationsDisabled) {
          this._backdropRef?.dispose();
          this._backdropRef = null;
        } else {
          this._backdropRef?.detach();
        }
      }
      /** Toggles a single CSS class or an array of classes on an element. */
      _toggleClasses(element, cssClasses, isAdd) {
        const classes = coerceArray(cssClasses || []).filter((c) => !!c);
        if (classes.length) {
          isAdd ? element.classList.add(...classes) : element.classList.remove(...classes);
        }
      }
      /** Detaches the overlay once the content finishes animating and is removed from the DOM. */
      _detachContentWhenEmpty() {
        let rethrow = false;
        try {
          this._detachContentAfterRenderRef = afterNextRender(() => {
            rethrow = true;
            this._detachContent();
          }, {
            injector: this._injector
          });
        } catch (e) {
          if (rethrow) {
            throw e;
          }
          this._detachContent();
        }
        if (globalThis.MutationObserver && this._pane) {
          this._detachContentMutationObserver ||= new globalThis.MutationObserver(() => {
            this._detachContent();
          });
          this._detachContentMutationObserver.observe(this._pane, { childList: true });
        }
      }
      _detachContent() {
        if (!this._pane || !this._host || this._pane.children.length === 0) {
          if (this._pane && this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, false);
          }
          if (this._host && this._host.parentElement) {
            this._previousHostParent = this._host.parentElement;
            this._host.remove();
          }
          this._completeDetachContent();
        }
      }
      _completeDetachContent() {
        this._detachContentAfterRenderRef?.destroy();
        this._detachContentAfterRenderRef = void 0;
        this._detachContentMutationObserver?.disconnect();
      }
      /** Disposes of a scroll strategy. */
      _disposeScrollStrategy() {
        const scrollStrategy = this._scrollStrategy;
        scrollStrategy?.disable();
        scrollStrategy?.detach?.();
      }
    };
    boundingBoxClass = "cdk-overlay-connected-position-bounding-box";
    cssUnitPattern = /([A-Za-z%]+)$/;
    FlexibleConnectedPositionStrategy = class {
      _viewportRuler;
      _document;
      _platform;
      _overlayContainer;
      /** The overlay to which this strategy is attached. */
      _overlayRef;
      /** Whether we're performing the very first positioning of the overlay. */
      _isInitialRender;
      /** Last size used for the bounding box. Used to avoid resizing the overlay after open. */
      _lastBoundingBoxSize = { width: 0, height: 0 };
      /** Whether the overlay was pushed in a previous positioning. */
      _isPushed = false;
      /** Whether the overlay can be pushed on-screen on the initial open. */
      _canPush = true;
      /** Whether the overlay can grow via flexible width/height after the initial open. */
      _growAfterOpen = false;
      /** Whether the overlay's width and height can be constrained to fit within the viewport. */
      _hasFlexibleDimensions = true;
      /** Whether the overlay position is locked. */
      _positionLocked = false;
      /** Cached origin dimensions */
      _originRect;
      /** Cached overlay dimensions */
      _overlayRect;
      /** Cached viewport dimensions */
      _viewportRect;
      /** Cached container dimensions */
      _containerRect;
      /** Amount of space that must be maintained between the overlay and the edge of the viewport. */
      _viewportMargin = 0;
      /** The Scrollable containers used to check scrollable view properties on position change. */
      _scrollables = [];
      /** Ordered list of preferred positions, from most to least desirable. */
      _preferredPositions = [];
      /** The origin element against which the overlay will be positioned. */
      _origin;
      /** The overlay pane element. */
      _pane;
      /** Whether the strategy has been disposed of already. */
      _isDisposed;
      /**
       * Parent element for the overlay panel used to constrain the overlay panel's size to fit
       * within the viewport.
       */
      _boundingBox;
      /** The last position to have been calculated as the best fit position. */
      _lastPosition;
      /** The last calculated scroll visibility. Only tracked  */
      _lastScrollVisibility;
      /** Subject that emits whenever the position changes. */
      _positionChanges = new Subject();
      /** Subscription to viewport size changes. */
      _resizeSubscription = Subscription.EMPTY;
      /** Default offset for the overlay along the x axis. */
      _offsetX = 0;
      /** Default offset for the overlay along the y axis. */
      _offsetY = 0;
      /** Selector to be used when finding the elements on which to set the transform origin. */
      _transformOriginSelector;
      /** Keeps track of the CSS classes that the position strategy has applied on the overlay panel. */
      _appliedPanelClasses = [];
      /** Amount by which the overlay was pushed in each axis during the last time it was positioned. */
      _previousPushAmount;
      /** Observable sequence of position changes. */
      positionChanges = this._positionChanges;
      /** Ordered list of preferred positions, from most to least desirable. */
      get positions() {
        return this._preferredPositions;
      }
      constructor(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
        this.setOrigin(connectedTo);
      }
      /** Attaches this position strategy to an overlay. */
      attach(overlayRef) {
        if (this._overlayRef && overlayRef !== this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("This position strategy is already attached to an overlay");
        }
        this._validatePositions();
        overlayRef.hostElement.classList.add(boundingBoxClass);
        this._overlayRef = overlayRef;
        this._boundingBox = overlayRef.hostElement;
        this._pane = overlayRef.overlayElement;
        this._isDisposed = false;
        this._isInitialRender = true;
        this._lastPosition = null;
        this._resizeSubscription.unsubscribe();
        this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
          this._isInitialRender = true;
          this.apply();
        });
      }
      /**
       * Updates the position of the overlay element, using whichever preferred position relative
       * to the origin best fits on-screen.
       *
       * The selection of a position goes as follows:
       *  - If any positions fit completely within the viewport as-is,
       *      choose the first position that does so.
       *  - If flexible dimensions are enabled and at least one satisfies the given minimum width/height,
       *      choose the position with the greatest available size modified by the positions' weight.
       *  - If pushing is enabled, take the position that went off-screen the least and push it
       *      on-screen.
       *  - If none of the previous criteria were met, use the position that goes off-screen the least.
       * @docs-private
       */
      apply() {
        if (this._isDisposed || !this._platform.isBrowser) {
          return;
        }
        if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
          this.reapplyLastPosition();
          return;
        }
        this._clearPanelClasses();
        this._resetOverlayElementStyles();
        this._resetBoundingBoxStyles();
        this._viewportRect = this._getNarrowedViewportRect();
        this._originRect = this._getOriginRect();
        this._overlayRect = this._pane.getBoundingClientRect();
        this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
        const originRect = this._originRect;
        const overlayRect = this._overlayRect;
        const viewportRect = this._viewportRect;
        const containerRect = this._containerRect;
        const flexibleFits = [];
        let fallback;
        for (let pos of this._preferredPositions) {
          let originPoint = this._getOriginPoint(originRect, containerRect, pos);
          let overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
          let overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
          if (overlayFit.isCompletelyWithinViewport) {
            this._isPushed = false;
            this._applyPosition(pos, originPoint);
            return;
          }
          if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
            flexibleFits.push({
              position: pos,
              origin: originPoint,
              overlayRect,
              boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
            });
            continue;
          }
          if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
            fallback = { overlayFit, overlayPoint, originPoint, position: pos, overlayRect };
          }
        }
        if (flexibleFits.length) {
          let bestFit = null;
          let bestScore = -1;
          for (const fit of flexibleFits) {
            const score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);
            if (score > bestScore) {
              bestScore = score;
              bestFit = fit;
            }
          }
          this._isPushed = false;
          this._applyPosition(bestFit.position, bestFit.origin);
          return;
        }
        if (this._canPush) {
          this._isPushed = true;
          this._applyPosition(fallback.position, fallback.originPoint);
          return;
        }
        this._applyPosition(fallback.position, fallback.originPoint);
      }
      detach() {
        this._clearPanelClasses();
        this._lastPosition = null;
        this._previousPushAmount = null;
        this._resizeSubscription.unsubscribe();
      }
      /** Cleanup after the element gets destroyed. */
      dispose() {
        if (this._isDisposed) {
          return;
        }
        if (this._boundingBox) {
          extendStyles(this._boundingBox.style, {
            top: "",
            left: "",
            right: "",
            bottom: "",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: ""
          });
        }
        if (this._pane) {
          this._resetOverlayElementStyles();
        }
        if (this._overlayRef) {
          this._overlayRef.hostElement.classList.remove(boundingBoxClass);
        }
        this.detach();
        this._positionChanges.complete();
        this._overlayRef = this._boundingBox = null;
        this._isDisposed = true;
      }
      /**
       * This re-aligns the overlay element with the trigger in its last calculated position,
       * even if a position higher in the "preferred positions" list would now fit. This
       * allows one to re-align the panel without changing the orientation of the panel.
       */
      reapplyLastPosition() {
        if (this._isDisposed || !this._platform.isBrowser) {
          return;
        }
        const lastPosition = this._lastPosition;
        if (lastPosition) {
          this._originRect = this._getOriginRect();
          this._overlayRect = this._pane.getBoundingClientRect();
          this._viewportRect = this._getNarrowedViewportRect();
          this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
          const originPoint = this._getOriginPoint(this._originRect, this._containerRect, lastPosition);
          this._applyPosition(lastPosition, originPoint);
        } else {
          this.apply();
        }
      }
      /**
       * Sets the list of Scrollable containers that host the origin element so that
       * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
       * Scrollable must be an ancestor element of the strategy's origin element.
       */
      withScrollableContainers(scrollables) {
        this._scrollables = scrollables;
        return this;
      }
      /**
       * Adds new preferred positions.
       * @param positions List of positions options for this overlay.
       */
      withPositions(positions) {
        this._preferredPositions = positions;
        if (positions.indexOf(this._lastPosition) === -1) {
          this._lastPosition = null;
        }
        this._validatePositions();
        return this;
      }
      /**
       * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
       * @param margin Required margin between the overlay and the viewport edge in pixels.
       */
      withViewportMargin(margin) {
        this._viewportMargin = margin;
        return this;
      }
      /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */
      withFlexibleDimensions(flexibleDimensions = true) {
        this._hasFlexibleDimensions = flexibleDimensions;
        return this;
      }
      /** Sets whether the overlay can grow after the initial open via flexible width/height. */
      withGrowAfterOpen(growAfterOpen = true) {
        this._growAfterOpen = growAfterOpen;
        return this;
      }
      /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */
      withPush(canPush = true) {
        this._canPush = canPush;
        return this;
      }
      /**
       * Sets whether the overlay's position should be locked in after it is positioned
       * initially. When an overlay is locked in, it won't attempt to reposition itself
       * when the position is re-applied (e.g. when the user scrolls away).
       * @param isLocked Whether the overlay should locked in.
       */
      withLockedPosition(isLocked = true) {
        this._positionLocked = isLocked;
        return this;
      }
      /**
       * Sets the origin, relative to which to position the overlay.
       * Using an element origin is useful for building components that need to be positioned
       * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
       * used for cases like contextual menus which open relative to the user's pointer.
       * @param origin Reference to the new origin.
       */
      setOrigin(origin) {
        this._origin = origin;
        return this;
      }
      /**
       * Sets the default offset for the overlay's connection point on the x-axis.
       * @param offset New offset in the X axis.
       */
      withDefaultOffsetX(offset) {
        this._offsetX = offset;
        return this;
      }
      /**
       * Sets the default offset for the overlay's connection point on the y-axis.
       * @param offset New offset in the Y axis.
       */
      withDefaultOffsetY(offset) {
        this._offsetY = offset;
        return this;
      }
      /**
       * Configures that the position strategy should set a `transform-origin` on some elements
       * inside the overlay, depending on the current position that is being applied. This is
       * useful for the cases where the origin of an animation can change depending on the
       * alignment of the overlay.
       * @param selector CSS selector that will be used to find the target
       *    elements onto which to set the transform origin.
       */
      withTransformOriginOn(selector) {
        this._transformOriginSelector = selector;
        return this;
      }
      /**
       * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
       */
      _getOriginPoint(originRect, containerRect, pos) {
        let x;
        if (pos.originX == "center") {
          x = originRect.left + originRect.width / 2;
        } else {
          const startX = this._isRtl() ? originRect.right : originRect.left;
          const endX = this._isRtl() ? originRect.left : originRect.right;
          x = pos.originX == "start" ? startX : endX;
        }
        if (containerRect.left < 0) {
          x -= containerRect.left;
        }
        let y;
        if (pos.originY == "center") {
          y = originRect.top + originRect.height / 2;
        } else {
          y = pos.originY == "top" ? originRect.top : originRect.bottom;
        }
        if (containerRect.top < 0) {
          y -= containerRect.top;
        }
        return { x, y };
      }
      /**
       * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
       * origin point to which the overlay should be connected.
       */
      _getOverlayPoint(originPoint, overlayRect, pos) {
        let overlayStartX;
        if (pos.overlayX == "center") {
          overlayStartX = -overlayRect.width / 2;
        } else if (pos.overlayX === "start") {
          overlayStartX = this._isRtl() ? -overlayRect.width : 0;
        } else {
          overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
        }
        let overlayStartY;
        if (pos.overlayY == "center") {
          overlayStartY = -overlayRect.height / 2;
        } else {
          overlayStartY = pos.overlayY == "top" ? 0 : -overlayRect.height;
        }
        return {
          x: originPoint.x + overlayStartX,
          y: originPoint.y + overlayStartY
        };
      }
      /** Gets how well an overlay at the given point will fit within the viewport. */
      _getOverlayFit(point, rawOverlayRect, viewport, position) {
        const overlay = getRoundedBoundingClientRect(rawOverlayRect);
        let { x, y } = point;
        let offsetX = this._getOffset(position, "x");
        let offsetY = this._getOffset(position, "y");
        if (offsetX) {
          x += offsetX;
        }
        if (offsetY) {
          y += offsetY;
        }
        let leftOverflow = 0 - x;
        let rightOverflow = x + overlay.width - viewport.width;
        let topOverflow = 0 - y;
        let bottomOverflow = y + overlay.height - viewport.height;
        let visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
        let visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
        let visibleArea = visibleWidth * visibleHeight;
        return {
          visibleArea,
          isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
          fitsInViewportVertically: visibleHeight === overlay.height,
          fitsInViewportHorizontally: visibleWidth == overlay.width
        };
      }
      /**
       * Whether the overlay can fit within the viewport when it may resize either its width or height.
       * @param fit How well the overlay fits in the viewport at some position.
       * @param point The (x, y) coordinates of the overlay at some position.
       * @param viewport The geometry of the viewport.
       */
      _canFitWithFlexibleDimensions(fit, point, viewport) {
        if (this._hasFlexibleDimensions) {
          const availableHeight = viewport.bottom - point.y;
          const availableWidth = viewport.right - point.x;
          const minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
          const minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
          const verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
          const horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
          return verticalFit && horizontalFit;
        }
        return false;
      }
      /**
       * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
       * the viewport, the top-left corner will be pushed on-screen (with overflow occurring on the
       * right and bottom).
       *
       * @param start Starting point from which the overlay is pushed.
       * @param rawOverlayRect Dimensions of the overlay.
       * @param scrollPosition Current viewport scroll position.
       * @returns The point at which to position the overlay after pushing. This is effectively a new
       *     originPoint.
       */
      _pushOverlayOnScreen(start, rawOverlayRect, scrollPosition) {
        if (this._previousPushAmount && this._positionLocked) {
          return {
            x: start.x + this._previousPushAmount.x,
            y: start.y + this._previousPushAmount.y
          };
        }
        const overlay = getRoundedBoundingClientRect(rawOverlayRect);
        const viewport = this._viewportRect;
        const overflowRight = Math.max(start.x + overlay.width - viewport.width, 0);
        const overflowBottom = Math.max(start.y + overlay.height - viewport.height, 0);
        const overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
        const overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0);
        let pushX = 0;
        let pushY = 0;
        if (overlay.width <= viewport.width) {
          pushX = overflowLeft || -overflowRight;
        } else {
          pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
        }
        if (overlay.height <= viewport.height) {
          pushY = overflowTop || -overflowBottom;
        } else {
          pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
        }
        this._previousPushAmount = { x: pushX, y: pushY };
        return {
          x: start.x + pushX,
          y: start.y + pushY
        };
      }
      /**
       * Applies a computed position to the overlay and emits a position change.
       * @param position The position preference
       * @param originPoint The point on the origin element where the overlay is connected.
       */
      _applyPosition(position, originPoint) {
        this._setTransformOrigin(position);
        this._setOverlayElementStyles(originPoint, position);
        this._setBoundingBoxStyles(originPoint, position);
        if (position.panelClass) {
          this._addPanelClasses(position.panelClass);
        }
        if (this._positionChanges.observers.length) {
          const scrollVisibility = this._getScrollVisibility();
          if (position !== this._lastPosition || !this._lastScrollVisibility || !compareScrollVisibility(this._lastScrollVisibility, scrollVisibility)) {
            const changeEvent = new ConnectedOverlayPositionChange(position, scrollVisibility);
            this._positionChanges.next(changeEvent);
          }
          this._lastScrollVisibility = scrollVisibility;
        }
        this._lastPosition = position;
        this._isInitialRender = false;
      }
      /** Sets the transform origin based on the configured selector and the passed-in position.  */
      _setTransformOrigin(position) {
        if (!this._transformOriginSelector) {
          return;
        }
        const elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);
        let xOrigin;
        let yOrigin = position.overlayY;
        if (position.overlayX === "center") {
          xOrigin = "center";
        } else if (this._isRtl()) {
          xOrigin = position.overlayX === "start" ? "right" : "left";
        } else {
          xOrigin = position.overlayX === "start" ? "left" : "right";
        }
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.transformOrigin = `${xOrigin} ${yOrigin}`;
        }
      }
      /**
       * Gets the position and size of the overlay's sizing container.
       *
       * This method does no measuring and applies no styles so that we can cheaply compute the
       * bounds for all positions and choose the best fit based on these results.
       */
      _calculateBoundingBoxRect(origin, position) {
        const viewport = this._viewportRect;
        const isRtl = this._isRtl();
        let height, top, bottom;
        if (position.overlayY === "top") {
          top = origin.y;
          height = viewport.height - top + this._viewportMargin;
        } else if (position.overlayY === "bottom") {
          bottom = viewport.height - origin.y + this._viewportMargin * 2;
          height = viewport.height - bottom + this._viewportMargin;
        } else {
          const smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
          const previousHeight = this._lastBoundingBoxSize.height;
          height = smallestDistanceToViewportEdge * 2;
          top = origin.y - smallestDistanceToViewportEdge;
          if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
            top = origin.y - previousHeight / 2;
          }
        }
        const isBoundedByRightViewportEdge = position.overlayX === "start" && !isRtl || position.overlayX === "end" && isRtl;
        const isBoundedByLeftViewportEdge = position.overlayX === "end" && !isRtl || position.overlayX === "start" && isRtl;
        let width, left, right;
        if (isBoundedByLeftViewportEdge) {
          right = viewport.width - origin.x + this._viewportMargin * 2;
          width = origin.x - this._viewportMargin;
        } else if (isBoundedByRightViewportEdge) {
          left = origin.x;
          width = viewport.right - origin.x;
        } else {
          const smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
          const previousWidth = this._lastBoundingBoxSize.width;
          width = smallestDistanceToViewportEdge * 2;
          left = origin.x - smallestDistanceToViewportEdge;
          if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
            left = origin.x - previousWidth / 2;
          }
        }
        return { top, left, bottom, right, width, height };
      }
      /**
       * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
       * origin's connection point and stretches to the bounds of the viewport.
       *
       * @param origin The point on the origin element where the overlay is connected.
       * @param position The position preference
       */
      _setBoundingBoxStyles(origin, position) {
        const boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
        if (!this._isInitialRender && !this._growAfterOpen) {
          boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
          boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
        }
        const styles = {};
        if (this._hasExactPosition()) {
          styles.top = styles.left = "0";
          styles.bottom = styles.right = styles.maxHeight = styles.maxWidth = "";
          styles.width = styles.height = "100%";
        } else {
          const maxHeight = this._overlayRef.getConfig().maxHeight;
          const maxWidth = this._overlayRef.getConfig().maxWidth;
          styles.height = coerceCssPixelValue(boundingBoxRect.height);
          styles.top = coerceCssPixelValue(boundingBoxRect.top);
          styles.bottom = coerceCssPixelValue(boundingBoxRect.bottom);
          styles.width = coerceCssPixelValue(boundingBoxRect.width);
          styles.left = coerceCssPixelValue(boundingBoxRect.left);
          styles.right = coerceCssPixelValue(boundingBoxRect.right);
          if (position.overlayX === "center") {
            styles.alignItems = "center";
          } else {
            styles.alignItems = position.overlayX === "end" ? "flex-end" : "flex-start";
          }
          if (position.overlayY === "center") {
            styles.justifyContent = "center";
          } else {
            styles.justifyContent = position.overlayY === "bottom" ? "flex-end" : "flex-start";
          }
          if (maxHeight) {
            styles.maxHeight = coerceCssPixelValue(maxHeight);
          }
          if (maxWidth) {
            styles.maxWidth = coerceCssPixelValue(maxWidth);
          }
        }
        this._lastBoundingBoxSize = boundingBoxRect;
        extendStyles(this._boundingBox.style, styles);
      }
      /** Resets the styles for the bounding box so that a new positioning can be computed. */
      _resetBoundingBoxStyles() {
        extendStyles(this._boundingBox.style, {
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          height: "",
          width: "",
          alignItems: "",
          justifyContent: ""
        });
      }
      /** Resets the styles for the overlay pane so that a new positioning can be computed. */
      _resetOverlayElementStyles() {
        extendStyles(this._pane.style, {
          top: "",
          left: "",
          bottom: "",
          right: "",
          position: "",
          transform: ""
        });
      }
      /** Sets positioning styles to the overlay element. */
      _setOverlayElementStyles(originPoint, position) {
        const styles = {};
        const hasExactPosition = this._hasExactPosition();
        const hasFlexibleDimensions = this._hasFlexibleDimensions;
        const config = this._overlayRef.getConfig();
        if (hasExactPosition) {
          const scrollPosition = this._viewportRuler.getViewportScrollPosition();
          extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
          extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
        } else {
          styles.position = "static";
        }
        let transformString = "";
        let offsetX = this._getOffset(position, "x");
        let offsetY = this._getOffset(position, "y");
        if (offsetX) {
          transformString += `translateX(${offsetX}px) `;
        }
        if (offsetY) {
          transformString += `translateY(${offsetY}px)`;
        }
        styles.transform = transformString.trim();
        if (config.maxHeight) {
          if (hasExactPosition) {
            styles.maxHeight = coerceCssPixelValue(config.maxHeight);
          } else if (hasFlexibleDimensions) {
            styles.maxHeight = "";
          }
        }
        if (config.maxWidth) {
          if (hasExactPosition) {
            styles.maxWidth = coerceCssPixelValue(config.maxWidth);
          } else if (hasFlexibleDimensions) {
            styles.maxWidth = "";
          }
        }
        extendStyles(this._pane.style, styles);
      }
      /** Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing. */
      _getExactOverlayY(position, originPoint, scrollPosition) {
        let styles = { top: "", bottom: "" };
        let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
          overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        if (position.overlayY === "bottom") {
          const documentHeight = this._document.documentElement.clientHeight;
          styles.bottom = `${documentHeight - (overlayPoint.y + this._overlayRect.height)}px`;
        } else {
          styles.top = coerceCssPixelValue(overlayPoint.y);
        }
        return styles;
      }
      /** Gets the exact left/right for the overlay when not using flexible sizing or when pushing. */
      _getExactOverlayX(position, originPoint, scrollPosition) {
        let styles = { left: "", right: "" };
        let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
          overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        let horizontalStyleProperty;
        if (this._isRtl()) {
          horizontalStyleProperty = position.overlayX === "end" ? "left" : "right";
        } else {
          horizontalStyleProperty = position.overlayX === "end" ? "right" : "left";
        }
        if (horizontalStyleProperty === "right") {
          const documentWidth = this._document.documentElement.clientWidth;
          styles.right = `${documentWidth - (overlayPoint.x + this._overlayRect.width)}px`;
        } else {
          styles.left = coerceCssPixelValue(overlayPoint.x);
        }
        return styles;
      }
      /**
       * Gets the view properties of the trigger and overlay, including whether they are clipped
       * or completely outside the view of any of the strategy's scrollables.
       */
      _getScrollVisibility() {
        const originBounds = this._getOriginRect();
        const overlayBounds = this._pane.getBoundingClientRect();
        const scrollContainerBounds = this._scrollables.map((scrollable) => {
          return scrollable.getElementRef().nativeElement.getBoundingClientRect();
        });
        return {
          isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
          isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
          isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
          isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
        };
      }
      /** Subtracts the amount that an element is overflowing on an axis from its length. */
      _subtractOverflows(length, ...overflows) {
        return overflows.reduce((currentValue, currentOverflow) => {
          return currentValue - Math.max(currentOverflow, 0);
        }, length);
      }
      /** Narrows the given viewport rect by the current _viewportMargin. */
      _getNarrowedViewportRect() {
        const width = this._document.documentElement.clientWidth;
        const height = this._document.documentElement.clientHeight;
        const scrollPosition = this._viewportRuler.getViewportScrollPosition();
        return {
          top: scrollPosition.top + this._viewportMargin,
          left: scrollPosition.left + this._viewportMargin,
          right: scrollPosition.left + width - this._viewportMargin,
          bottom: scrollPosition.top + height - this._viewportMargin,
          width: width - 2 * this._viewportMargin,
          height: height - 2 * this._viewportMargin
        };
      }
      /** Whether the we're dealing with an RTL context */
      _isRtl() {
        return this._overlayRef.getDirection() === "rtl";
      }
      /** Determines whether the overlay uses exact or flexible positioning. */
      _hasExactPosition() {
        return !this._hasFlexibleDimensions || this._isPushed;
      }
      /** Retrieves the offset of a position along the x or y axis. */
      _getOffset(position, axis) {
        if (axis === "x") {
          return position.offsetX == null ? this._offsetX : position.offsetX;
        }
        return position.offsetY == null ? this._offsetY : position.offsetY;
      }
      /** Validates that the current position match the expected values. */
      _validatePositions() {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._preferredPositions.length) {
            throw Error("FlexibleConnectedPositionStrategy: At least one position is required.");
          }
          this._preferredPositions.forEach((pair) => {
            validateHorizontalPosition("originX", pair.originX);
            validateVerticalPosition("originY", pair.originY);
            validateHorizontalPosition("overlayX", pair.overlayX);
            validateVerticalPosition("overlayY", pair.overlayY);
          });
        }
      }
      /** Adds a single CSS class or an array of classes on the overlay panel. */
      _addPanelClasses(cssClasses) {
        if (this._pane) {
          coerceArray(cssClasses).forEach((cssClass) => {
            if (cssClass !== "" && this._appliedPanelClasses.indexOf(cssClass) === -1) {
              this._appliedPanelClasses.push(cssClass);
              this._pane.classList.add(cssClass);
            }
          });
        }
      }
      /** Clears the classes that the position strategy has applied from the overlay panel. */
      _clearPanelClasses() {
        if (this._pane) {
          this._appliedPanelClasses.forEach((cssClass) => {
            this._pane.classList.remove(cssClass);
          });
          this._appliedPanelClasses = [];
        }
      }
      /** Returns the DOMRect of the current origin. */
      _getOriginRect() {
        const origin = this._origin;
        if (origin instanceof ElementRef) {
          return origin.nativeElement.getBoundingClientRect();
        }
        if (origin instanceof Element) {
          return origin.getBoundingClientRect();
        }
        const width = origin.width || 0;
        const height = origin.height || 0;
        return {
          top: origin.y,
          bottom: origin.y + height,
          left: origin.x,
          right: origin.x + width,
          height,
          width
        };
      }
    };
    wrapperClass = "cdk-global-overlay-wrapper";
    GlobalPositionStrategy = class {
      /** The overlay to which this strategy is attached. */
      _overlayRef;
      _cssPosition = "static";
      _topOffset = "";
      _bottomOffset = "";
      _alignItems = "";
      _xPosition = "";
      _xOffset = "";
      _width = "";
      _height = "";
      _isDisposed = false;
      attach(overlayRef) {
        const config = overlayRef.getConfig();
        this._overlayRef = overlayRef;
        if (this._width && !config.width) {
          overlayRef.updateSize({ width: this._width });
        }
        if (this._height && !config.height) {
          overlayRef.updateSize({ height: this._height });
        }
        overlayRef.hostElement.classList.add(wrapperClass);
        this._isDisposed = false;
      }
      /**
       * Sets the top position of the overlay. Clears any previously set vertical position.
       * @param value New top offset.
       */
      top(value = "") {
        this._bottomOffset = "";
        this._topOffset = value;
        this._alignItems = "flex-start";
        return this;
      }
      /**
       * Sets the left position of the overlay. Clears any previously set horizontal position.
       * @param value New left offset.
       */
      left(value = "") {
        this._xOffset = value;
        this._xPosition = "left";
        return this;
      }
      /**
       * Sets the bottom position of the overlay. Clears any previously set vertical position.
       * @param value New bottom offset.
       */
      bottom(value = "") {
        this._topOffset = "";
        this._bottomOffset = value;
        this._alignItems = "flex-end";
        return this;
      }
      /**
       * Sets the right position of the overlay. Clears any previously set horizontal position.
       * @param value New right offset.
       */
      right(value = "") {
        this._xOffset = value;
        this._xPosition = "right";
        return this;
      }
      /**
       * Sets the overlay to the start of the viewport, depending on the overlay direction.
       * This will be to the left in LTR layouts and to the right in RTL.
       * @param offset Offset from the edge of the screen.
       */
      start(value = "") {
        this._xOffset = value;
        this._xPosition = "start";
        return this;
      }
      /**
       * Sets the overlay to the end of the viewport, depending on the overlay direction.
       * This will be to the right in LTR layouts and to the left in RTL.
       * @param offset Offset from the edge of the screen.
       */
      end(value = "") {
        this._xOffset = value;
        this._xPosition = "end";
        return this;
      }
      /**
       * Sets the overlay width and clears any previously set width.
       * @param value New width for the overlay
       * @deprecated Pass the `width` through the `OverlayConfig`.
       * @breaking-change 8.0.0
       */
      width(value = "") {
        if (this._overlayRef) {
          this._overlayRef.updateSize({ width: value });
        } else {
          this._width = value;
        }
        return this;
      }
      /**
       * Sets the overlay height and clears any previously set height.
       * @param value New height for the overlay
       * @deprecated Pass the `height` through the `OverlayConfig`.
       * @breaking-change 8.0.0
       */
      height(value = "") {
        if (this._overlayRef) {
          this._overlayRef.updateSize({ height: value });
        } else {
          this._height = value;
        }
        return this;
      }
      /**
       * Centers the overlay horizontally with an optional offset.
       * Clears any previously set horizontal position.
       *
       * @param offset Overlay offset from the horizontal center.
       */
      centerHorizontally(offset = "") {
        this.left(offset);
        this._xPosition = "center";
        return this;
      }
      /**
       * Centers the overlay vertically with an optional offset.
       * Clears any previously set vertical position.
       *
       * @param offset Overlay offset from the vertical center.
       */
      centerVertically(offset = "") {
        this.top(offset);
        this._alignItems = "center";
        return this;
      }
      /**
       * Apply the position to the element.
       * @docs-private
       */
      apply() {
        if (!this._overlayRef || !this._overlayRef.hasAttached()) {
          return;
        }
        const styles = this._overlayRef.overlayElement.style;
        const parentStyles = this._overlayRef.hostElement.style;
        const config = this._overlayRef.getConfig();
        const { width, height, maxWidth, maxHeight } = config;
        const shouldBeFlushHorizontally = (width === "100%" || width === "100vw") && (!maxWidth || maxWidth === "100%" || maxWidth === "100vw");
        const shouldBeFlushVertically = (height === "100%" || height === "100vh") && (!maxHeight || maxHeight === "100%" || maxHeight === "100vh");
        const xPosition = this._xPosition;
        const xOffset = this._xOffset;
        const isRtl = this._overlayRef.getConfig().direction === "rtl";
        let marginLeft = "";
        let marginRight = "";
        let justifyContent = "";
        if (shouldBeFlushHorizontally) {
          justifyContent = "flex-start";
        } else if (xPosition === "center") {
          justifyContent = "center";
          if (isRtl) {
            marginRight = xOffset;
          } else {
            marginLeft = xOffset;
          }
        } else if (isRtl) {
          if (xPosition === "left" || xPosition === "end") {
            justifyContent = "flex-end";
            marginLeft = xOffset;
          } else if (xPosition === "right" || xPosition === "start") {
            justifyContent = "flex-start";
            marginRight = xOffset;
          }
        } else if (xPosition === "left" || xPosition === "start") {
          justifyContent = "flex-start";
          marginLeft = xOffset;
        } else if (xPosition === "right" || xPosition === "end") {
          justifyContent = "flex-end";
          marginRight = xOffset;
        }
        styles.position = this._cssPosition;
        styles.marginLeft = shouldBeFlushHorizontally ? "0" : marginLeft;
        styles.marginTop = shouldBeFlushVertically ? "0" : this._topOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = shouldBeFlushHorizontally ? "0" : marginRight;
        parentStyles.justifyContent = justifyContent;
        parentStyles.alignItems = shouldBeFlushVertically ? "flex-start" : this._alignItems;
      }
      /**
       * Cleans up the DOM changes from the position strategy.
       * @docs-private
       */
      dispose() {
        if (this._isDisposed || !this._overlayRef) {
          return;
        }
        const styles = this._overlayRef.overlayElement.style;
        const parent = this._overlayRef.hostElement;
        const parentStyles = parent.style;
        parent.classList.remove(wrapperClass);
        parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = "";
        this._overlayRef = null;
        this._isDisposed = true;
      }
    };
    OverlayPositionBuilder = class _OverlayPositionBuilder {
      _injector = inject(Injector);
      constructor() {
      }
      /**
       * Creates a global position strategy.
       */
      global() {
        return createGlobalPositionStrategy();
      }
      /**
       * Creates a flexible position strategy.
       * @param origin Origin relative to which to position the overlay.
       */
      flexibleConnectedTo(origin) {
        return createFlexibleConnectedPositionStrategy(this._injector, origin);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayPositionBuilder, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayPositionBuilder, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: OverlayPositionBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    Overlay = class _Overlay {
      scrollStrategies = inject(ScrollStrategyOptions);
      _positionBuilder = inject(OverlayPositionBuilder);
      _injector = inject(Injector);
      constructor() {
      }
      /**
       * Creates an overlay.
       * @param config Configuration applied to the overlay.
       * @returns Reference to the created overlay.
       */
      create(config) {
        return createOverlayRef(this._injector, config);
      }
      /**
       * Gets a position builder that can be used, via fluent API,
       * to construct and configure a position strategy.
       * @returns An overlay position builder.
       */
      position() {
        return this._positionBuilder;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _Overlay, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _Overlay, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: Overlay, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    defaultPositionList = [
      {
        originX: "start",
        originY: "bottom",
        overlayX: "start",
        overlayY: "top"
      },
      {
        originX: "start",
        originY: "top",
        overlayX: "start",
        overlayY: "bottom"
      },
      {
        originX: "end",
        originY: "top",
        overlayX: "end",
        overlayY: "bottom"
      },
      {
        originX: "end",
        originY: "bottom",
        overlayX: "end",
        overlayY: "top"
      }
    ];
    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new InjectionToken("cdk-connected-overlay-scroll-strategy", {
      providedIn: "root",
      factory: () => {
        const injector = inject(Injector);
        return () => createRepositionScrollStrategy(injector);
      }
    });
    CdkOverlayOrigin = class _CdkOverlayOrigin {
      elementRef = inject(ElementRef);
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkOverlayOrigin, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkOverlayOrigin, isStandalone: true, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkOverlayOrigin, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]",
        exportAs: "cdkOverlayOrigin"
      }]
    }], ctorParameters: () => [] });
    CdkConnectedOverlay = class _CdkConnectedOverlay {
      _dir = inject(Directionality, { optional: true });
      _injector = inject(Injector);
      _overlayRef;
      _templatePortal;
      _backdropSubscription = Subscription.EMPTY;
      _attachSubscription = Subscription.EMPTY;
      _detachSubscription = Subscription.EMPTY;
      _positionSubscription = Subscription.EMPTY;
      _offsetX;
      _offsetY;
      _position;
      _scrollStrategyFactory = inject(CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY);
      _disposeOnNavigation = false;
      _ngZone = inject(NgZone);
      /** Origin for the connected overlay. */
      origin;
      /** Registered connected position pairs. */
      positions;
      /**
       * This input overrides the positions input if specified. It lets users pass
       * in arbitrary positioning strategies.
       */
      positionStrategy;
      /** The offset in pixels for the overlay connection point on the x-axis */
      get offsetX() {
        return this._offsetX;
      }
      set offsetX(offsetX) {
        this._offsetX = offsetX;
        if (this._position) {
          this._updatePositionStrategy(this._position);
        }
      }
      /** The offset in pixels for the overlay connection point on the y-axis */
      get offsetY() {
        return this._offsetY;
      }
      set offsetY(offsetY) {
        this._offsetY = offsetY;
        if (this._position) {
          this._updatePositionStrategy(this._position);
        }
      }
      /** The width of the overlay panel. */
      width;
      /** The height of the overlay panel. */
      height;
      /** The min width of the overlay panel. */
      minWidth;
      /** The min height of the overlay panel. */
      minHeight;
      /** The custom class to be set on the backdrop element. */
      backdropClass;
      /** The custom class to add to the overlay pane element. */
      panelClass;
      /** Margin between the overlay and the viewport edges. */
      viewportMargin = 0;
      /** Strategy to be used when handling scroll events while the overlay is open. */
      scrollStrategy;
      /** Whether the overlay is open. */
      open = false;
      /** Whether the overlay can be closed by user interaction. */
      disableClose = false;
      /** CSS selector which to set the transform origin. */
      transformOriginSelector;
      /** Whether or not the overlay should attach a backdrop. */
      hasBackdrop = false;
      /** Whether or not the overlay should be locked when scrolling. */
      lockPosition = false;
      /** Whether the overlay's width and height can be constrained to fit within the viewport. */
      flexibleDimensions = false;
      /** Whether the overlay can grow after the initial open when flexible positioning is turned on. */
      growAfterOpen = false;
      /** Whether the overlay can be pushed on-screen if none of the provided positions fit. */
      push = false;
      /** Whether the overlay should be disposed of when the user goes backwards/forwards in history. */
      get disposeOnNavigation() {
        return this._disposeOnNavigation;
      }
      set disposeOnNavigation(value) {
        this._disposeOnNavigation = value;
      }
      /** Event emitted when the backdrop is clicked. */
      backdropClick = new EventEmitter();
      /** Event emitted when the position has changed. */
      positionChange = new EventEmitter();
      /** Event emitted when the overlay has been attached. */
      attach = new EventEmitter();
      /** Event emitted when the overlay has been detached. */
      detach = new EventEmitter();
      /** Emits when there are keyboard events that are targeted at the overlay. */
      overlayKeydown = new EventEmitter();
      /** Emits when there are mouse outside click events that are targeted at the overlay. */
      overlayOutsideClick = new EventEmitter();
      // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
      constructor() {
        const templateRef = inject(TemplateRef);
        const viewContainerRef = inject(ViewContainerRef);
        this._templatePortal = new TemplatePortal(templateRef, viewContainerRef);
        this.scrollStrategy = this._scrollStrategyFactory();
      }
      /** The associated overlay reference. */
      get overlayRef() {
        return this._overlayRef;
      }
      /** The element's layout direction. */
      get dir() {
        return this._dir ? this._dir.value : "ltr";
      }
      ngOnDestroy() {
        this._attachSubscription.unsubscribe();
        this._detachSubscription.unsubscribe();
        this._backdropSubscription.unsubscribe();
        this._positionSubscription.unsubscribe();
        this._overlayRef?.dispose();
      }
      ngOnChanges(changes) {
        if (this._position) {
          this._updatePositionStrategy(this._position);
          this._overlayRef?.updateSize({
            width: this.width,
            minWidth: this.minWidth,
            height: this.height,
            minHeight: this.minHeight
          });
          if (changes["origin"] && this.open) {
            this._position.apply();
          }
        }
        if (changes["open"]) {
          this.open ? this.attachOverlay() : this.detachOverlay();
        }
      }
      /** Creates an overlay */
      _createOverlay() {
        if (!this.positions || !this.positions.length) {
          this.positions = defaultPositionList;
        }
        const overlayRef = this._overlayRef = createOverlayRef(this._injector, this._buildConfig());
        this._attachSubscription = overlayRef.attachments().subscribe(() => this.attach.emit());
        this._detachSubscription = overlayRef.detachments().subscribe(() => this.detach.emit());
        overlayRef.keydownEvents().subscribe((event) => {
          this.overlayKeydown.next(event);
          if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
            event.preventDefault();
            this.detachOverlay();
          }
        });
        this._overlayRef.outsidePointerEvents().subscribe((event) => {
          const origin = this._getOriginElement();
          const target = _getEventTarget(event);
          if (!origin || origin !== target && !origin.contains(target)) {
            this.overlayOutsideClick.next(event);
          }
        });
      }
      /** Builds the overlay config based on the directive's inputs */
      _buildConfig() {
        const positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();
        const overlayConfig = new OverlayConfig({
          direction: this._dir || "ltr",
          positionStrategy,
          scrollStrategy: this.scrollStrategy,
          hasBackdrop: this.hasBackdrop,
          disposeOnNavigation: this.disposeOnNavigation
        });
        if (this.width || this.width === 0) {
          overlayConfig.width = this.width;
        }
        if (this.height || this.height === 0) {
          overlayConfig.height = this.height;
        }
        if (this.minWidth || this.minWidth === 0) {
          overlayConfig.minWidth = this.minWidth;
        }
        if (this.minHeight || this.minHeight === 0) {
          overlayConfig.minHeight = this.minHeight;
        }
        if (this.backdropClass) {
          overlayConfig.backdropClass = this.backdropClass;
        }
        if (this.panelClass) {
          overlayConfig.panelClass = this.panelClass;
        }
        return overlayConfig;
      }
      /** Updates the state of a position strategy, based on the values of the directive inputs. */
      _updatePositionStrategy(positionStrategy) {
        const positions = this.positions.map((currentPosition) => ({
          originX: currentPosition.originX,
          originY: currentPosition.originY,
          overlayX: currentPosition.overlayX,
          overlayY: currentPosition.overlayY,
          offsetX: currentPosition.offsetX || this.offsetX,
          offsetY: currentPosition.offsetY || this.offsetY,
          panelClass: currentPosition.panelClass || void 0
        }));
        return positionStrategy.setOrigin(this._getOrigin()).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector);
      }
      /** Returns the position strategy of the overlay to be set on the overlay config */
      _createPositionStrategy() {
        const strategy = createFlexibleConnectedPositionStrategy(this._injector, this._getOrigin());
        this._updatePositionStrategy(strategy);
        return strategy;
      }
      _getOrigin() {
        if (this.origin instanceof CdkOverlayOrigin) {
          return this.origin.elementRef;
        } else {
          return this.origin;
        }
      }
      _getOriginElement() {
        if (this.origin instanceof CdkOverlayOrigin) {
          return this.origin.elementRef.nativeElement;
        }
        if (this.origin instanceof ElementRef) {
          return this.origin.nativeElement;
        }
        if (typeof Element !== "undefined" && this.origin instanceof Element) {
          return this.origin;
        }
        return null;
      }
      /** Attaches the overlay. */
      attachOverlay() {
        if (!this._overlayRef) {
          this._createOverlay();
        } else {
          this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
        }
        if (!this._overlayRef.hasAttached()) {
          this._overlayRef.attach(this._templatePortal);
        }
        if (this.hasBackdrop) {
          this._backdropSubscription = this._overlayRef.backdropClick().subscribe((event) => {
            this.backdropClick.emit(event);
          });
        } else {
          this._backdropSubscription.unsubscribe();
        }
        this._positionSubscription.unsubscribe();
        if (this.positionChange.observers.length > 0) {
          this._positionSubscription = this._position.positionChanges.pipe(takeWhile(() => this.positionChange.observers.length > 0)).subscribe((position) => {
            this._ngZone.run(() => this.positionChange.emit(position));
            if (this.positionChange.observers.length === 0) {
              this._positionSubscription.unsubscribe();
            }
          });
        }
        this.open = true;
      }
      /** Detaches the overlay. */
      detachOverlay() {
        this._overlayRef?.detach();
        this._backdropSubscription.unsubscribe();
        this._positionSubscription.unsubscribe();
        this.open = false;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkConnectedOverlay, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.2.0-next.2", type: _CdkConnectedOverlay, isStandalone: true, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: { origin: ["cdkConnectedOverlayOrigin", "origin"], positions: ["cdkConnectedOverlayPositions", "positions"], positionStrategy: ["cdkConnectedOverlayPositionStrategy", "positionStrategy"], offsetX: ["cdkConnectedOverlayOffsetX", "offsetX"], offsetY: ["cdkConnectedOverlayOffsetY", "offsetY"], width: ["cdkConnectedOverlayWidth", "width"], height: ["cdkConnectedOverlayHeight", "height"], minWidth: ["cdkConnectedOverlayMinWidth", "minWidth"], minHeight: ["cdkConnectedOverlayMinHeight", "minHeight"], backdropClass: ["cdkConnectedOverlayBackdropClass", "backdropClass"], panelClass: ["cdkConnectedOverlayPanelClass", "panelClass"], viewportMargin: ["cdkConnectedOverlayViewportMargin", "viewportMargin"], scrollStrategy: ["cdkConnectedOverlayScrollStrategy", "scrollStrategy"], open: ["cdkConnectedOverlayOpen", "open"], disableClose: ["cdkConnectedOverlayDisableClose", "disableClose"], transformOriginSelector: ["cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"], hasBackdrop: ["cdkConnectedOverlayHasBackdrop", "hasBackdrop", booleanAttribute], lockPosition: ["cdkConnectedOverlayLockPosition", "lockPosition", booleanAttribute], flexibleDimensions: ["cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions", booleanAttribute], growAfterOpen: ["cdkConnectedOverlayGrowAfterOpen", "growAfterOpen", booleanAttribute], push: ["cdkConnectedOverlayPush", "push", booleanAttribute], disposeOnNavigation: ["cdkConnectedOverlayDisposeOnNavigation", "disposeOnNavigation", booleanAttribute] }, outputs: { backdropClick: "backdropClick", positionChange: "positionChange", attach: "attach", detach: "detach", overlayKeydown: "overlayKeydown", overlayOutsideClick: "overlayOutsideClick" }, exportAs: ["cdkConnectedOverlay"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkConnectedOverlay, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]",
        exportAs: "cdkConnectedOverlay"
      }]
    }], ctorParameters: () => [], propDecorators: { origin: [{
      type: Input,
      args: ["cdkConnectedOverlayOrigin"]
    }], positions: [{
      type: Input,
      args: ["cdkConnectedOverlayPositions"]
    }], positionStrategy: [{
      type: Input,
      args: ["cdkConnectedOverlayPositionStrategy"]
    }], offsetX: [{
      type: Input,
      args: ["cdkConnectedOverlayOffsetX"]
    }], offsetY: [{
      type: Input,
      args: ["cdkConnectedOverlayOffsetY"]
    }], width: [{
      type: Input,
      args: ["cdkConnectedOverlayWidth"]
    }], height: [{
      type: Input,
      args: ["cdkConnectedOverlayHeight"]
    }], minWidth: [{
      type: Input,
      args: ["cdkConnectedOverlayMinWidth"]
    }], minHeight: [{
      type: Input,
      args: ["cdkConnectedOverlayMinHeight"]
    }], backdropClass: [{
      type: Input,
      args: ["cdkConnectedOverlayBackdropClass"]
    }], panelClass: [{
      type: Input,
      args: ["cdkConnectedOverlayPanelClass"]
    }], viewportMargin: [{
      type: Input,
      args: ["cdkConnectedOverlayViewportMargin"]
    }], scrollStrategy: [{
      type: Input,
      args: ["cdkConnectedOverlayScrollStrategy"]
    }], open: [{
      type: Input,
      args: ["cdkConnectedOverlayOpen"]
    }], disableClose: [{
      type: Input,
      args: ["cdkConnectedOverlayDisableClose"]
    }], transformOriginSelector: [{
      type: Input,
      args: ["cdkConnectedOverlayTransformOriginOn"]
    }], hasBackdrop: [{
      type: Input,
      args: [{ alias: "cdkConnectedOverlayHasBackdrop", transform: booleanAttribute }]
    }], lockPosition: [{
      type: Input,
      args: [{ alias: "cdkConnectedOverlayLockPosition", transform: booleanAttribute }]
    }], flexibleDimensions: [{
      type: Input,
      args: [{ alias: "cdkConnectedOverlayFlexibleDimensions", transform: booleanAttribute }]
    }], growAfterOpen: [{
      type: Input,
      args: [{ alias: "cdkConnectedOverlayGrowAfterOpen", transform: booleanAttribute }]
    }], push: [{
      type: Input,
      args: [{ alias: "cdkConnectedOverlayPush", transform: booleanAttribute }]
    }], disposeOnNavigation: [{
      type: Input,
      args: [{ alias: "cdkConnectedOverlayDisposeOnNavigation", transform: booleanAttribute }]
    }], backdropClick: [{
      type: Output
    }], positionChange: [{
      type: Output
    }], attach: [{
      type: Output
    }], detach: [{
      type: Output
    }], overlayKeydown: [{
      type: Output
    }], overlayOutsideClick: [{
      type: Output
    }] } });
    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
      provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
      useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    OverlayModule = class _OverlayModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayModule, imports: [BidiModule, PortalModule, ScrollingModule, CdkConnectedOverlay, CdkOverlayOrigin], exports: [CdkConnectedOverlay, CdkOverlayOrigin, ScrollingModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayModule, providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER], imports: [BidiModule, PortalModule, ScrollingModule, ScrollingModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: OverlayModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [BidiModule, PortalModule, ScrollingModule, CdkConnectedOverlay, CdkOverlayOrigin],
        exports: [CdkConnectedOverlay, CdkOverlayOrigin, ScrollingModule],
        providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/dialog.mjs
function throwDialogContentAlreadyAttachedError() {
  throw Error("Attempting to attach dialog content after content is already attached");
}
function getDirectionality(value) {
  const valueSignal = signal(value, ...ngDevMode ? [{ debugName: "valueSignal" }] : []);
  const change = new EventEmitter();
  return {
    valueSignal,
    get value() {
      return valueSignal();
    },
    change,
    ngOnDestroy() {
      change.complete();
    }
  };
}
function reverseForEach(items, callback) {
  let i = items.length;
  while (i--) {
    callback(items[i]);
  }
}
var DialogConfig, CdkDialogContainer, DialogRef, DIALOG_SCROLL_STRATEGY, DIALOG_DATA, DEFAULT_DIALOG_CONFIG, Dialog, DialogModule;
var init_dialog = __esm({
  "node_modules/@angular/cdk/fesm2022/dialog.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_portal();
    init_a11y_module();
    init_focus_monitor();
    init_platform2();
    init_shadow_dom();
    init_keycodes2();
    init_keycodes();
    init_operators();
    init_overlay_module();
    init_id_generator();
    init_directionality();
    DialogConfig = class {
      /**
       * Where the attached component should live in Angular's *logical* component tree.
       * This affects what is available for injection and the change detection order for the
       * component instantiated inside of the dialog. This does not affect where the dialog
       * content will be rendered.
       */
      viewContainerRef;
      /**
       * Injector used for the instantiation of the component to be attached. If provided,
       * takes precedence over the injector indirectly provided by `ViewContainerRef`.
       */
      injector;
      /** ID for the dialog. If omitted, a unique one will be generated. */
      id;
      /** The ARIA role of the dialog element. */
      role = "dialog";
      /** Optional CSS class or classes applied to the overlay panel. */
      panelClass = "";
      /** Whether the dialog has a backdrop. */
      hasBackdrop = true;
      /** Optional CSS class or classes applied to the overlay backdrop. */
      backdropClass = "";
      /** Whether the dialog closes with the escape key or pointer events outside the panel element. */
      disableClose = false;
      /** Function used to determine whether the dialog is allowed to close. */
      closePredicate;
      /** Width of the dialog. */
      width = "";
      /** Height of the dialog. */
      height = "";
      /** Min-width of the dialog. If a number is provided, assumes pixel units. */
      minWidth;
      /** Min-height of the dialog. If a number is provided, assumes pixel units. */
      minHeight;
      /** Max-width of the dialog. If a number is provided, assumes pixel units. */
      maxWidth;
      /** Max-height of the dialog. If a number is provided, assumes pixel units. */
      maxHeight;
      /** Strategy to use when positioning the dialog. Defaults to centering it on the page. */
      positionStrategy;
      /** Data being injected into the child component. */
      data = null;
      /** Layout direction for the dialog's content. */
      direction;
      /** ID of the element that describes the dialog. */
      ariaDescribedBy = null;
      /** ID of the element that labels the dialog. */
      ariaLabelledBy = null;
      /** Dialog label applied via `aria-label` */
      ariaLabel = null;
      /**
       * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
       * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
       * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
       */
      ariaModal = false;
      /**
       * Where the dialog should focus on open.
       * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
       * AutoFocusTarget instead.
       */
      autoFocus = "first-tabbable";
      /**
       * Whether the dialog should restore focus to the previously-focused element upon closing.
       * Has the following behavior based on the type that is passed in:
       * - `boolean` - when true, will return focus to the element that was focused before the dialog
       *    was opened, otherwise won't restore focus at all.
       * - `string` - focus will be restored to the first element that matches the CSS selector.
       * - `HTMLElement` - focus will be restored to the specific element.
       */
      restoreFocus = true;
      /**
       * Scroll strategy to be used for the dialog. This determines how
       * the dialog responds to scrolling underneath the panel element.
       */
      scrollStrategy;
      /**
       * Whether the dialog should close when the user navigates backwards or forwards through browser
       * history. This does not apply to navigation via anchor element unless using URL-hash based
       * routing (`HashLocationStrategy` in the Angular router).
       */
      closeOnNavigation = true;
      /**
       * Whether the dialog should close when the dialog service is destroyed. This is useful if
       * another service is wrapping the dialog and is managing the destruction instead.
       */
      closeOnDestroy = true;
      /**
       * Whether the dialog should close when the underlying overlay is detached. This is useful if
       * another service is wrapping the dialog and is managing the destruction instead. E.g. an
       * external detachment can happen as a result of a scroll strategy triggering it or when the
       * browser location changes.
       */
      closeOnOverlayDetachments = true;
      /**
       * Whether the built-in overlay animations should be disabled.
       */
      disableAnimations = false;
      /**
       * Providers that will be exposed to the contents of the dialog. Can also
       * be provided as a function in order to generate the providers lazily.
       */
      providers;
      /**
       * Component into which the dialog content will be rendered. Defaults to `CdkDialogContainer`.
       * A configuration object can be passed in to customize the providers that will be exposed
       * to the dialog container.
       */
      container;
      /**
       * Context that will be passed to template-based dialogs.
       * A function can be passed in to resolve the context lazily.
       */
      templateContext;
    };
    CdkDialogContainer = class _CdkDialogContainer extends BasePortalOutlet {
      _elementRef = inject(ElementRef);
      _focusTrapFactory = inject(FocusTrapFactory);
      _config;
      _interactivityChecker = inject(InteractivityChecker);
      _ngZone = inject(NgZone);
      _focusMonitor = inject(FocusMonitor);
      _renderer = inject(Renderer2);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _injector = inject(Injector);
      _platform = inject(Platform);
      _document = inject(DOCUMENT);
      /** The portal outlet inside of this container into which the dialog content will be loaded. */
      _portalOutlet;
      _focusTrapped = new Subject();
      /** The class that traps and manages focus within the dialog. */
      _focusTrap = null;
      /** Element that was focused before the dialog was opened. Save this to restore upon close. */
      _elementFocusedBeforeDialogWasOpened = null;
      /**
       * Type of interaction that led to the dialog being closed. This is used to determine
       * whether the focus style will be applied when returning focus to its original location
       * after the dialog is closed.
       */
      _closeInteractionType = null;
      /**
       * Queue of the IDs of the dialog's label element, based on their definition order. The first
       * ID will be used as the `aria-labelledby` value. We use a queue here to handle the case
       * where there are two or more titles in the DOM at a time and the first one is destroyed while
       * the rest are present.
       */
      _ariaLabelledByQueue = [];
      _isDestroyed = false;
      constructor() {
        super();
        this._config = inject(DialogConfig, { optional: true }) || new DialogConfig();
        if (this._config.ariaLabelledBy) {
          this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
        }
      }
      _addAriaLabelledBy(id) {
        this._ariaLabelledByQueue.push(id);
        this._changeDetectorRef.markForCheck();
      }
      _removeAriaLabelledBy(id) {
        const index = this._ariaLabelledByQueue.indexOf(id);
        if (index > -1) {
          this._ariaLabelledByQueue.splice(index, 1);
          this._changeDetectorRef.markForCheck();
        }
      }
      _contentAttached() {
        this._initializeFocusTrap();
        this._captureInitialFocus();
      }
      /**
       * Can be used by child classes to customize the initial focus
       * capturing behavior (e.g. if it's tied to an animation).
       */
      _captureInitialFocus() {
        this._trapFocus();
      }
      ngOnDestroy() {
        this._focusTrapped.complete();
        this._isDestroyed = true;
        this._restoreFocus();
      }
      /**
       * Attach a ComponentPortal as content to this dialog container.
       * @param portal Portal to be attached as the dialog content.
       */
      attachComponentPortal(portal) {
        if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwDialogContentAlreadyAttachedError();
        }
        const result = this._portalOutlet.attachComponentPortal(portal);
        this._contentAttached();
        return result;
      }
      /**
       * Attach a TemplatePortal as content to this dialog container.
       * @param portal Portal to be attached as the dialog content.
       */
      attachTemplatePortal(portal) {
        if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwDialogContentAlreadyAttachedError();
        }
        const result = this._portalOutlet.attachTemplatePortal(portal);
        this._contentAttached();
        return result;
      }
      /**
       * Attaches a DOM portal to the dialog container.
       * @param portal Portal to be attached.
       * @deprecated To be turned into a method.
       * @breaking-change 10.0.0
       */
      attachDomPortal = (portal) => {
        if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwDialogContentAlreadyAttachedError();
        }
        const result = this._portalOutlet.attachDomPortal(portal);
        this._contentAttached();
        return result;
      };
      // TODO(crisbeto): this shouldn't be exposed, but there are internal references to it.
      /** Captures focus if it isn't already inside the dialog. */
      _recaptureFocus() {
        if (!this._containsFocus()) {
          this._trapFocus();
        }
      }
      /**
       * Focuses the provided element. If the element is not focusable, it will add a tabIndex
       * attribute to forcefully focus it. The attribute is removed after focus is moved.
       * @param element The element to focus.
       */
      _forceFocus(element, options) {
        if (!this._interactivityChecker.isFocusable(element)) {
          element.tabIndex = -1;
          this._ngZone.runOutsideAngular(() => {
            const callback = () => {
              deregisterBlur();
              deregisterMousedown();
              element.removeAttribute("tabindex");
            };
            const deregisterBlur = this._renderer.listen(element, "blur", callback);
            const deregisterMousedown = this._renderer.listen(element, "mousedown", callback);
          });
        }
        element.focus(options);
      }
      /**
       * Focuses the first element that matches the given selector within the focus trap.
       * @param selector The CSS selector for the element to set focus to.
       */
      _focusByCssSelector(selector, options) {
        let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
        if (elementToFocus) {
          this._forceFocus(elementToFocus, options);
        }
      }
      /**
       * Moves the focus inside the focus trap. When autoFocus is not set to 'dialog', if focus
       * cannot be moved then focus will go to the dialog container.
       */
      _trapFocus(options) {
        if (this._isDestroyed) {
          return;
        }
        afterNextRender(() => {
          const element = this._elementRef.nativeElement;
          switch (this._config.autoFocus) {
            case false:
            case "dialog":
              if (!this._containsFocus()) {
                element.focus(options);
              }
              break;
            case true:
            case "first-tabbable":
              const focusedSuccessfully = this._focusTrap?.focusInitialElement(options);
              if (!focusedSuccessfully) {
                this._focusDialogContainer(options);
              }
              break;
            case "first-heading":
              this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]', options);
              break;
            default:
              this._focusByCssSelector(this._config.autoFocus, options);
              break;
          }
          this._focusTrapped.next();
        }, { injector: this._injector });
      }
      /** Restores focus to the element that was focused before the dialog opened. */
      _restoreFocus() {
        const focusConfig = this._config.restoreFocus;
        let focusTargetElement = null;
        if (typeof focusConfig === "string") {
          focusTargetElement = this._document.querySelector(focusConfig);
        } else if (typeof focusConfig === "boolean") {
          focusTargetElement = focusConfig ? this._elementFocusedBeforeDialogWasOpened : null;
        } else if (focusConfig) {
          focusTargetElement = focusConfig;
        }
        if (this._config.restoreFocus && focusTargetElement && typeof focusTargetElement.focus === "function") {
          const activeElement = _getFocusedElementPierceShadowDom();
          const element = this._elementRef.nativeElement;
          if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
            if (this._focusMonitor) {
              this._focusMonitor.focusVia(focusTargetElement, this._closeInteractionType);
              this._closeInteractionType = null;
            } else {
              focusTargetElement.focus();
            }
          }
        }
        if (this._focusTrap) {
          this._focusTrap.destroy();
        }
      }
      /** Focuses the dialog container. */
      _focusDialogContainer(options) {
        this._elementRef.nativeElement.focus?.(options);
      }
      /** Returns whether focus is inside the dialog. */
      _containsFocus() {
        const element = this._elementRef.nativeElement;
        const activeElement = _getFocusedElementPierceShadowDom();
        return element === activeElement || element.contains(activeElement);
      }
      /** Sets up the focus trap. */
      _initializeFocusTrap() {
        if (this._platform.isBrowser) {
          this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
          if (this._document) {
            this._elementFocusedBeforeDialogWasOpened = _getFocusedElementPierceShadowDom();
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkDialogContainer, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkDialogContainer, isStandalone: true, selector: "cdk-dialog-container", host: { attributes: { "tabindex": "-1" }, properties: { "attr.id": "_config.id || null", "attr.role": "_config.role", "attr.aria-modal": "_config.ariaModal", "attr.aria-labelledby": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]", "attr.aria-label": "_config.ariaLabel", "attr.aria-describedby": "_config.ariaDescribedBy || null" }, classAttribute: "cdk-dialog-container" }, viewQueries: [{ propertyName: "_portalOutlet", first: true, predicate: CdkPortalOutlet, descendants: true, static: true }], usesInheritance: true, ngImport: core_exports, template: "<ng-template cdkPortalOutlet />\n", styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}\n"], dependencies: [{ kind: "directive", type: CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }], changeDetection: ChangeDetectionStrategy.Default, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkDialogContainer, decorators: [{
      type: Component,
      args: [{ selector: "cdk-dialog-container", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.Default, imports: [CdkPortalOutlet], host: {
        "class": "cdk-dialog-container",
        "tabindex": "-1",
        "[attr.id]": "_config.id || null",
        "[attr.role]": "_config.role",
        "[attr.aria-modal]": "_config.ariaModal",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null"
      }, template: "<ng-template cdkPortalOutlet />\n", styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}\n"] }]
    }], ctorParameters: () => [], propDecorators: { _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, { static: true }]
    }] } });
    DialogRef = class {
      overlayRef;
      config;
      /**
       * Instance of component opened into the dialog. Will be
       * null when the dialog is opened using a `TemplateRef`.
       */
      componentInstance;
      /**
       * `ComponentRef` of the component opened into the dialog. Will be
       * null when the dialog is opened using a `TemplateRef`.
       */
      componentRef;
      /** Instance of the container that is rendering out the dialog content. */
      containerInstance;
      /** Whether the user is allowed to close the dialog. */
      disableClose;
      /** Emits when the dialog has been closed. */
      closed = new Subject();
      /** Emits when the backdrop of the dialog is clicked. */
      backdropClick;
      /** Emits when on keyboard events within the dialog. */
      keydownEvents;
      /** Emits on pointer events that happen outside of the dialog. */
      outsidePointerEvents;
      /** Unique ID for the dialog. */
      id;
      /** Subscription to external detachments of the dialog. */
      _detachSubscription;
      constructor(overlayRef, config) {
        this.overlayRef = overlayRef;
        this.config = config;
        this.disableClose = config.disableClose;
        this.backdropClick = overlayRef.backdropClick();
        this.keydownEvents = overlayRef.keydownEvents();
        this.outsidePointerEvents = overlayRef.outsidePointerEvents();
        this.id = config.id;
        this.keydownEvents.subscribe((event) => {
          if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
            event.preventDefault();
            this.close(void 0, { focusOrigin: "keyboard" });
          }
        });
        this.backdropClick.subscribe(() => {
          if (!this.disableClose && this._canClose()) {
            this.close(void 0, { focusOrigin: "mouse" });
          } else {
            this.containerInstance._recaptureFocus?.();
          }
        });
        this._detachSubscription = overlayRef.detachments().subscribe(() => {
          if (config.closeOnOverlayDetachments !== false) {
            this.close();
          }
        });
      }
      /**
       * Close the dialog.
       * @param result Optional result to return to the dialog opener.
       * @param options Additional options to customize the closing behavior.
       */
      close(result, options) {
        if (this._canClose(result)) {
          const closedSubject = this.closed;
          this.containerInstance._closeInteractionType = options?.focusOrigin || "program";
          this._detachSubscription.unsubscribe();
          this.overlayRef.dispose();
          closedSubject.next(result);
          closedSubject.complete();
          this.componentInstance = this.containerInstance = null;
        }
      }
      /** Updates the position of the dialog based on the current position strategy. */
      updatePosition() {
        this.overlayRef.updatePosition();
        return this;
      }
      /**
       * Updates the dialog's width and height.
       * @param width New width of the dialog.
       * @param height New height of the dialog.
       */
      updateSize(width = "", height = "") {
        this.overlayRef.updateSize({ width, height });
        return this;
      }
      /** Add a CSS class or an array of classes to the overlay pane. */
      addPanelClass(classes) {
        this.overlayRef.addPanelClass(classes);
        return this;
      }
      /** Remove a CSS class or an array of classes from the overlay pane. */
      removePanelClass(classes) {
        this.overlayRef.removePanelClass(classes);
        return this;
      }
      /** Whether the dialog is allowed to close. */
      _canClose(result) {
        const config = this.config;
        return !!this.containerInstance && (!config.closePredicate || config.closePredicate(result, config, this.componentInstance));
      }
    };
    DIALOG_SCROLL_STRATEGY = new InjectionToken("DialogScrollStrategy", {
      providedIn: "root",
      factory: () => {
        const injector = inject(Injector);
        return () => createBlockScrollStrategy(injector);
      }
    });
    DIALOG_DATA = new InjectionToken("DialogData");
    DEFAULT_DIALOG_CONFIG = new InjectionToken("DefaultDialogConfig");
    Dialog = class _Dialog {
      _injector = inject(Injector);
      _defaultOptions = inject(DEFAULT_DIALOG_CONFIG, { optional: true });
      _parentDialog = inject(_Dialog, { optional: true, skipSelf: true });
      _overlayContainer = inject(OverlayContainer);
      _idGenerator = inject(_IdGenerator);
      _openDialogsAtThisLevel = [];
      _afterAllClosedAtThisLevel = new Subject();
      _afterOpenedAtThisLevel = new Subject();
      _ariaHiddenElements = /* @__PURE__ */ new Map();
      _scrollStrategy = inject(DIALOG_SCROLL_STRATEGY);
      /** Keeps track of the currently-open dialogs. */
      get openDialogs() {
        return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
      }
      /** Stream that emits when a dialog has been opened. */
      get afterOpened() {
        return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
      }
      /**
       * Stream that emits when all open dialog have finished closing.
       * Will emit on subscribe if there are no open dialogs to begin with.
       */
      afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
      constructor() {
      }
      open(componentOrTemplateRef, config) {
        const defaults = this._defaultOptions || new DialogConfig();
        config = __spreadValues(__spreadValues({}, defaults), config);
        config.id = config.id || this._idGenerator.getId("cdk-dialog-");
        if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
        }
        const overlayConfig = this._getOverlayConfig(config);
        const overlayRef = createOverlayRef(this._injector, overlayConfig);
        const dialogRef = new DialogRef(overlayRef, config);
        const dialogContainer = this._attachContainer(overlayRef, dialogRef, config);
        dialogRef.containerInstance = dialogContainer;
        if (!this.openDialogs.length) {
          const overlayContainer = this._overlayContainer.getContainerElement();
          if (dialogContainer._focusTrapped) {
            dialogContainer._focusTrapped.pipe(take(1)).subscribe(() => {
              this._hideNonDialogContentFromAssistiveTechnology(overlayContainer);
            });
          } else {
            this._hideNonDialogContentFromAssistiveTechnology(overlayContainer);
          }
        }
        this._attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config);
        this.openDialogs.push(dialogRef);
        dialogRef.closed.subscribe(() => this._removeOpenDialog(dialogRef, true));
        this.afterOpened.next(dialogRef);
        return dialogRef;
      }
      /**
       * Closes all of the currently-open dialogs.
       */
      closeAll() {
        reverseForEach(this.openDialogs, (dialog) => dialog.close());
      }
      /**
       * Finds an open dialog by its id.
       * @param id ID to use when looking up the dialog.
       */
      getDialogById(id) {
        return this.openDialogs.find((dialog) => dialog.id === id);
      }
      ngOnDestroy() {
        reverseForEach(this._openDialogsAtThisLevel, (dialog) => {
          if (dialog.config.closeOnDestroy === false) {
            this._removeOpenDialog(dialog, false);
          }
        });
        reverseForEach(this._openDialogsAtThisLevel, (dialog) => dialog.close());
        this._afterAllClosedAtThisLevel.complete();
        this._afterOpenedAtThisLevel.complete();
        this._openDialogsAtThisLevel = [];
      }
      /**
       * Creates an overlay config from a dialog config.
       * @param config The dialog configuration.
       * @returns The overlay configuration.
       */
      _getOverlayConfig(config) {
        const state = new OverlayConfig({
          positionStrategy: config.positionStrategy || createGlobalPositionStrategy().centerHorizontally().centerVertically(),
          scrollStrategy: config.scrollStrategy || this._scrollStrategy(),
          panelClass: config.panelClass,
          hasBackdrop: config.hasBackdrop,
          direction: config.direction,
          minWidth: config.minWidth,
          minHeight: config.minHeight,
          maxWidth: config.maxWidth,
          maxHeight: config.maxHeight,
          width: config.width,
          height: config.height,
          disposeOnNavigation: config.closeOnNavigation,
          disableAnimations: config.disableAnimations
        });
        if (config.backdropClass) {
          state.backdropClass = config.backdropClass;
        }
        return state;
      }
      /**
       * Attaches a dialog container to a dialog's already-created overlay.
       * @param overlay Reference to the dialog's underlying overlay.
       * @param config The dialog configuration.
       * @returns A promise resolving to a ComponentRef for the attached container.
       */
      _attachContainer(overlay, dialogRef, config) {
        const userInjector = config.injector || config.viewContainerRef?.injector;
        const providers = [
          { provide: DialogConfig, useValue: config },
          { provide: DialogRef, useValue: dialogRef },
          { provide: OverlayRef, useValue: overlay }
        ];
        let containerType;
        if (config.container) {
          if (typeof config.container === "function") {
            containerType = config.container;
          } else {
            containerType = config.container.type;
            providers.push(...config.container.providers(config));
          }
        } else {
          containerType = CdkDialogContainer;
        }
        const containerPortal = new ComponentPortal(containerType, config.viewContainerRef, Injector.create({ parent: userInjector || this._injector, providers }));
        const containerRef = overlay.attach(containerPortal);
        return containerRef.instance;
      }
      /**
       * Attaches the user-provided component to the already-created dialog container.
       * @param componentOrTemplateRef The type of component being loaded into the dialog,
       *     or a TemplateRef to instantiate as the content.
       * @param dialogRef Reference to the dialog being opened.
       * @param dialogContainer Component that is going to wrap the dialog content.
       * @param config Configuration used to open the dialog.
       */
      _attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config) {
        if (componentOrTemplateRef instanceof TemplateRef) {
          const injector = this._createInjector(config, dialogRef, dialogContainer, void 0);
          let context = { $implicit: config.data, dialogRef };
          if (config.templateContext) {
            context = __spreadValues(__spreadValues({}, context), typeof config.templateContext === "function" ? config.templateContext() : config.templateContext);
          }
          dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, context, injector));
        } else {
          const injector = this._createInjector(config, dialogRef, dialogContainer, this._injector);
          const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector));
          dialogRef.componentRef = contentRef;
          dialogRef.componentInstance = contentRef.instance;
        }
      }
      /**
       * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
       * of a dialog to close itself and, optionally, to return a value.
       * @param config Config object that is used to construct the dialog.
       * @param dialogRef Reference to the dialog being opened.
       * @param dialogContainer Component that is going to wrap the dialog content.
       * @param fallbackInjector Injector to use as a fallback when a lookup fails in the custom
       * dialog injector, if the user didn't provide a custom one.
       * @returns The custom injector that can be used inside the dialog.
       */
      _createInjector(config, dialogRef, dialogContainer, fallbackInjector) {
        const userInjector = config.injector || config.viewContainerRef?.injector;
        const providers = [
          { provide: DIALOG_DATA, useValue: config.data },
          { provide: DialogRef, useValue: dialogRef }
        ];
        if (config.providers) {
          if (typeof config.providers === "function") {
            providers.push(...config.providers(dialogRef, config, dialogContainer));
          } else {
            providers.push(...config.providers);
          }
        }
        if (config.direction && (!userInjector || !userInjector.get(Directionality, null, { optional: true }))) {
          providers.push({
            provide: Directionality,
            useValue: getDirectionality(config.direction)
          });
        }
        return Injector.create({ parent: userInjector || fallbackInjector, providers });
      }
      /**
       * Removes a dialog from the array of open dialogs.
       * @param dialogRef Dialog to be removed.
       * @param emitEvent Whether to emit an event if this is the last dialog.
       */
      _removeOpenDialog(dialogRef, emitEvent) {
        const index = this.openDialogs.indexOf(dialogRef);
        if (index > -1) {
          this.openDialogs.splice(index, 1);
          if (!this.openDialogs.length) {
            this._ariaHiddenElements.forEach((previousValue, element) => {
              if (previousValue) {
                element.setAttribute("aria-hidden", previousValue);
              } else {
                element.removeAttribute("aria-hidden");
              }
            });
            this._ariaHiddenElements.clear();
            if (emitEvent) {
              this._getAfterAllClosed().next();
            }
          }
        }
      }
      /** Hides all of the content that isn't an overlay from assistive technology. */
      _hideNonDialogContentFromAssistiveTechnology(overlayContainer) {
        if (overlayContainer.parentElement) {
          const siblings = overlayContainer.parentElement.children;
          for (let i = siblings.length - 1; i > -1; i--) {
            const sibling = siblings[i];
            if (sibling !== overlayContainer && sibling.nodeName !== "SCRIPT" && sibling.nodeName !== "STYLE" && !sibling.hasAttribute("aria-live")) {
              this._ariaHiddenElements.set(sibling, sibling.getAttribute("aria-hidden"));
              sibling.setAttribute("aria-hidden", "true");
            }
          }
        }
      }
      _getAfterAllClosed() {
        const parent = this._parentDialog;
        return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _Dialog, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _Dialog, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: Dialog, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    DialogModule = class _DialogModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _DialogModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _DialogModule, imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer], exports: [
        // Re-export the PortalModule so that people extending the `CdkDialogContainer`
        // don't have to remember to import it or be faced with an unhelpful error.
        PortalModule,
        CdkDialogContainer
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _DialogModule, providers: [Dialog], imports: [
        OverlayModule,
        PortalModule,
        A11yModule,
        // Re-export the PortalModule so that people extending the `CdkDialogContainer`
        // don't have to remember to import it or be faced with an unhelpful error.
        PortalModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: DialogModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer],
        exports: [
          // Re-export the PortalModule so that people extending the `CdkDialogContainer`
          // don't have to remember to import it or be faced with an unhelpful error.
          PortalModule,
          CdkDialogContainer
        ],
        providers: [Dialog]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/overlay.mjs
var FullscreenOverlayContainer;
var init_overlay = __esm({
  "node_modules/@angular/cdk/fesm2022/overlay.mjs"() {
    "use strict";
    init_overlay_module();
    init_overlay_module();
    init_core();
    init_core();
    FullscreenOverlayContainer = class _FullscreenOverlayContainer extends OverlayContainer {
      _renderer = inject(RendererFactory2).createRenderer(null, null);
      _fullScreenEventName;
      _cleanupFullScreenListener;
      constructor() {
        super();
      }
      ngOnDestroy() {
        super.ngOnDestroy();
        this._cleanupFullScreenListener?.();
      }
      _createContainer() {
        const eventName = this._getEventName();
        super._createContainer();
        this._adjustParentForFullscreenChange();
        if (eventName) {
          this._cleanupFullScreenListener?.();
          this._cleanupFullScreenListener = this._renderer.listen("document", eventName, () => {
            this._adjustParentForFullscreenChange();
          });
        }
      }
      _adjustParentForFullscreenChange() {
        if (this._containerElement) {
          const fullscreenElement = this.getFullscreenElement();
          const parent = fullscreenElement || this._document.body;
          parent.appendChild(this._containerElement);
        }
      }
      _getEventName() {
        if (!this._fullScreenEventName) {
          const _document = this._document;
          if (_document.fullscreenEnabled) {
            this._fullScreenEventName = "fullscreenchange";
          } else if (_document.webkitFullscreenEnabled) {
            this._fullScreenEventName = "webkitfullscreenchange";
          } else if (_document.mozFullScreenEnabled) {
            this._fullScreenEventName = "mozfullscreenchange";
          } else if (_document.msFullscreenEnabled) {
            this._fullScreenEventName = "MSFullscreenChange";
          }
        }
        return this._fullScreenEventName;
      }
      /**
       * When the page is put into fullscreen mode, a specific element is specified.
       * Only that element and its children are visible when in fullscreen mode.
       */
      getFullscreenElement() {
        const _document = this._document;
        return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _FullscreenOverlayContainer, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _FullscreenOverlayContainer, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: FullscreenOverlayContainer, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/material/fesm2022/dialog-module.mjs
function parseCssTime(time) {
  if (time == null) {
    return null;
  }
  if (typeof time === "number") {
    return time;
  }
  if (time.endsWith("ms")) {
    return coerceNumberProperty(time.substring(0, time.length - 2));
  }
  if (time.endsWith("s")) {
    return coerceNumberProperty(time.substring(0, time.length - 1)) * 1e3;
  }
  if (time === "0") {
    return 0;
  }
  return null;
}
function _closeDialogVia(ref, interactionType, result) {
  ref._closeInteractionType = interactionType;
  return ref.close(result);
}
function getClosestDialog(element, openDialogs) {
  let parent = element.nativeElement.parentElement;
  while (parent && !parent.classList.contains("mat-mdc-dialog-container")) {
    parent = parent.parentElement;
  }
  return parent ? openDialogs.find((dialog) => dialog.id === parent.id) : null;
}
var MatDialogConfig, OPEN_CLASS, OPENING_CLASS, CLOSING_CLASS, OPEN_ANIMATION_DURATION, CLOSE_ANIMATION_DURATION, MatDialogContainer, TRANSITION_DURATION_PROPERTY, MatDialogState, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MatDialog, MatDialogClose, MatDialogLayoutSection, MatDialogTitle, MatDialogContent, MatDialogActions, DIRECTIVES, MatDialogModule;
var init_dialog_module = __esm({
  "node_modules/@angular/material/fesm2022/dialog-module.mjs"() {
    "use strict";
    init_dialog();
    init_overlay();
    init_portal();
    init_core();
    init_core();
    init_coercion();
    init_animation();
    init_esm();
    init_operators();
    init_keycodes();
    init_a11y();
    init_scrolling();
    init_scrolling();
    init_common_module();
    MatDialogConfig = class {
      /**
       * Where the attached component should live in Angular's *logical* component tree.
       * This affects what is available for injection and the change detection order for the
       * component instantiated inside of the dialog. This does not affect where the dialog
       * content will be rendered.
       */
      viewContainerRef;
      /**
       * Injector used for the instantiation of the component to be attached. If provided,
       * takes precedence over the injector indirectly provided by `ViewContainerRef`.
       */
      injector;
      /** ID for the dialog. If omitted, a unique one will be generated. */
      id;
      /** The ARIA role of the dialog element. */
      role = "dialog";
      /** Custom class for the overlay pane. */
      panelClass = "";
      /** Whether the dialog has a backdrop. */
      hasBackdrop = true;
      /** Custom class for the backdrop. */
      backdropClass = "";
      /** Whether the user can use escape or clicking on the backdrop to close the modal. */
      disableClose = false;
      /** Function used to determine whether the dialog is allowed to close. */
      closePredicate;
      /** Width of the dialog. */
      width = "";
      /** Height of the dialog. */
      height = "";
      /** Min-width of the dialog. If a number is provided, assumes pixel units. */
      minWidth;
      /** Min-height of the dialog. If a number is provided, assumes pixel units. */
      minHeight;
      /** Max-width of the dialog. If a number is provided, assumes pixel units. */
      maxWidth;
      /** Max-height of the dialog. If a number is provided, assumes pixel units. */
      maxHeight;
      /** Position overrides. */
      position;
      /** Data being injected into the child component. */
      data = null;
      /** Layout direction for the dialog's content. */
      direction;
      /** ID of the element that describes the dialog. */
      ariaDescribedBy = null;
      /** ID of the element that labels the dialog. */
      ariaLabelledBy = null;
      /** Aria label to assign to the dialog element. */
      ariaLabel = null;
      /**
       * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
       * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
       * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
       */
      ariaModal = false;
      /**
       * Where the dialog should focus on open.
       * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
       * AutoFocusTarget instead.
       */
      autoFocus = "first-tabbable";
      /**
       * Whether the dialog should restore focus to the
       * previously-focused element, after it's closed.
       */
      restoreFocus = true;
      /** Whether to wait for the opening animation to finish before trapping focus. */
      delayFocusTrap = true;
      /** Scroll strategy to be used for the dialog. */
      scrollStrategy;
      /**
       * Whether the dialog should close when the user goes backwards/forwards in history.
       * Note that this usually doesn't include clicking on links (unless the user is using
       * the `HashLocationStrategy`).
       */
      closeOnNavigation = true;
      /**
       * Duration of the enter animation in ms.
       * Should be a number, string type is deprecated.
       * @breaking-change 17.0.0 Remove string signature.
       */
      enterAnimationDuration;
      /**
       * Duration of the exit animation in ms.
       * Should be a number, string type is deprecated.
       * @breaking-change 17.0.0 Remove string signature.
       */
      exitAnimationDuration;
    };
    OPEN_CLASS = "mdc-dialog--open";
    OPENING_CLASS = "mdc-dialog--opening";
    CLOSING_CLASS = "mdc-dialog--closing";
    OPEN_ANIMATION_DURATION = 150;
    CLOSE_ANIMATION_DURATION = 75;
    MatDialogContainer = class _MatDialogContainer extends CdkDialogContainer {
      /** Emits when an animation state changes. */
      _animationStateChanged = new EventEmitter();
      /** Whether animations are enabled. */
      _animationsEnabled = !_animationsDisabled();
      /** Number of actions projected in the dialog. */
      _actionSectionCount = 0;
      /** Host element of the dialog container component. */
      _hostElement = this._elementRef.nativeElement;
      /** Duration of the dialog open animation. */
      _enterAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.enterAnimationDuration) ?? OPEN_ANIMATION_DURATION : 0;
      /** Duration of the dialog close animation. */
      _exitAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.exitAnimationDuration) ?? CLOSE_ANIMATION_DURATION : 0;
      /** Current timer for dialog animations. */
      _animationTimer = null;
      _contentAttached() {
        super._contentAttached();
        this._startOpenAnimation();
      }
      /** Starts the dialog open animation if enabled. */
      _startOpenAnimation() {
        this._animationStateChanged.emit({ state: "opening", totalTime: this._enterAnimationDuration });
        if (this._animationsEnabled) {
          this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._enterAnimationDuration}ms`);
          this._requestAnimationFrame(() => this._hostElement.classList.add(OPENING_CLASS, OPEN_CLASS));
          this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen);
        } else {
          this._hostElement.classList.add(OPEN_CLASS);
          Promise.resolve().then(() => this._finishDialogOpen());
        }
      }
      /**
       * Starts the exit animation of the dialog if enabled. This method is
       * called by the dialog ref.
       */
      _startExitAnimation() {
        this._animationStateChanged.emit({ state: "closing", totalTime: this._exitAnimationDuration });
        this._hostElement.classList.remove(OPEN_CLASS);
        if (this._animationsEnabled) {
          this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._exitAnimationDuration}ms`);
          this._requestAnimationFrame(() => this._hostElement.classList.add(CLOSING_CLASS));
          this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose);
        } else {
          Promise.resolve().then(() => this._finishDialogClose());
        }
      }
      /**
       * Updates the number action sections.
       * @param delta Increase/decrease in the number of sections.
       */
      _updateActionSectionCount(delta) {
        this._actionSectionCount += delta;
        this._changeDetectorRef.markForCheck();
      }
      /**
       * Completes the dialog open by clearing potential animation classes, trapping
       * focus and emitting an opened event.
       */
      _finishDialogOpen = () => {
        this._clearAnimationClasses();
        this._openAnimationDone(this._enterAnimationDuration);
      };
      /**
       * Completes the dialog close by clearing potential animation classes, restoring
       * focus and emitting a closed event.
       */
      _finishDialogClose = () => {
        this._clearAnimationClasses();
        this._animationStateChanged.emit({ state: "closed", totalTime: this._exitAnimationDuration });
      };
      /** Clears all dialog animation classes. */
      _clearAnimationClasses() {
        this._hostElement.classList.remove(OPENING_CLASS, CLOSING_CLASS);
      }
      _waitForAnimationToComplete(duration, callback) {
        if (this._animationTimer !== null) {
          clearTimeout(this._animationTimer);
        }
        this._animationTimer = setTimeout(callback, duration);
      }
      /** Runs a callback in `requestAnimationFrame`, if available. */
      _requestAnimationFrame(callback) {
        this._ngZone.runOutsideAngular(() => {
          if (typeof requestAnimationFrame === "function") {
            requestAnimationFrame(callback);
          } else {
            callback();
          }
        });
      }
      _captureInitialFocus() {
        if (!this._config.delayFocusTrap) {
          this._trapFocus();
        }
      }
      /**
       * Callback for when the open dialog animation has finished. Intended to
       * be called by sub-classes that use different animation implementations.
       */
      _openAnimationDone(totalTime) {
        if (this._config.delayFocusTrap) {
          this._trapFocus();
        }
        this._animationStateChanged.next({ state: "opened", totalTime });
      }
      ngOnDestroy() {
        super.ngOnDestroy();
        if (this._animationTimer !== null) {
          clearTimeout(this._animationTimer);
        }
      }
      attachComponentPortal(portal) {
        const ref = super.attachComponentPortal(portal);
        ref.location.nativeElement.classList.add("mat-mdc-dialog-component-host");
        return ref;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatDialogContainer, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatDialogContainer, isStandalone: true, selector: "mat-dialog-container", host: { attributes: { "tabindex": "-1" }, properties: { "attr.aria-modal": "_config.ariaModal", "id": "_config.id", "attr.role": "_config.role", "attr.aria-labelledby": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]", "attr.aria-label": "_config.ariaLabel", "attr.aria-describedby": "_config.ariaDescribedBy || null", "class._mat-animation-noopable": "!_animationsEnabled", "class.mat-mdc-dialog-container-with-actions": "_actionSectionCount > 0" }, classAttribute: "mat-mdc-dialog-container mdc-dialog" }, usesInheritance: true, ngImport: core_exports, template: '<div class="mat-mdc-dialog-inner-container mdc-dialog__container">\n  <div class="mat-mdc-dialog-surface mdc-dialog__surface">\n    <ng-template cdkPortalOutlet />\n  </div>\n</div>\n', styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mat-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;box-sizing:border-box;min-height:52px;margin:0;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}\n'], dependencies: [{ kind: "directive", type: CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }], changeDetection: ChangeDetectionStrategy.Default, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatDialogContainer, decorators: [{
      type: Component,
      args: [{ selector: "mat-dialog-container", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.Default, imports: [CdkPortalOutlet], host: {
        "class": "mat-mdc-dialog-container mdc-dialog",
        "tabindex": "-1",
        "[attr.aria-modal]": "_config.ariaModal",
        "[id]": "_config.id",
        "[attr.role]": "_config.role",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null",
        "[class._mat-animation-noopable]": "!_animationsEnabled",
        "[class.mat-mdc-dialog-container-with-actions]": "_actionSectionCount > 0"
      }, template: '<div class="mat-mdc-dialog-inner-container mdc-dialog__container">\n  <div class="mat-mdc-dialog-surface mdc-dialog__surface">\n    <ng-template cdkPortalOutlet />\n  </div>\n</div>\n', styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mat-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;box-sizing:border-box;min-height:52px;margin:0;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}\n'] }]
    }] });
    TRANSITION_DURATION_PROPERTY = "--mat-dialog-transition-duration";
    (function(MatDialogState2) {
      MatDialogState2[MatDialogState2["OPEN"] = 0] = "OPEN";
      MatDialogState2[MatDialogState2["CLOSING"] = 1] = "CLOSING";
      MatDialogState2[MatDialogState2["CLOSED"] = 2] = "CLOSED";
    })(MatDialogState || (MatDialogState = {}));
    MatDialogRef = class {
      _ref;
      _config;
      _containerInstance;
      /** The instance of component opened into the dialog. */
      componentInstance;
      /**
       * `ComponentRef` of the component opened into the dialog. Will be
       * null when the dialog is opened using a `TemplateRef`.
       */
      componentRef;
      /** Whether the user is allowed to close the dialog. */
      disableClose;
      /** Unique ID for the dialog. */
      id;
      /** Subject for notifying the user that the dialog has finished opening. */
      _afterOpened = new Subject();
      /** Subject for notifying the user that the dialog has started closing. */
      _beforeClosed = new Subject();
      /** Result to be passed to afterClosed. */
      _result;
      /** Handle to the timeout that's running as a fallback in case the exit animation doesn't fire. */
      _closeFallbackTimeout;
      /** Current state of the dialog. */
      _state = MatDialogState.OPEN;
      // TODO(crisbeto): we shouldn't have to declare this property, because `DialogRef.close`
      // already has a second `options` parameter that we can use. The problem is that internal tests
      // have assertions like `expect(MatDialogRef.close).toHaveBeenCalledWith(foo)` which will break,
      // because it'll be called with two arguments by things like `MatDialogClose`.
      /** Interaction that caused the dialog to close. */
      _closeInteractionType;
      constructor(_ref, _config, _containerInstance) {
        this._ref = _ref;
        this._config = _config;
        this._containerInstance = _containerInstance;
        this.disableClose = _config.disableClose;
        this.id = _ref.id;
        _ref.addPanelClass("mat-mdc-dialog-panel");
        _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "opened"), take(1)).subscribe(() => {
          this._afterOpened.next();
          this._afterOpened.complete();
        });
        _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closed"), take(1)).subscribe(() => {
          clearTimeout(this._closeFallbackTimeout);
          this._finishDialogClose();
        });
        _ref.overlayRef.detachments().subscribe(() => {
          this._beforeClosed.next(this._result);
          this._beforeClosed.complete();
          this._finishDialogClose();
        });
        merge(this.backdropClick(), this.keydownEvents().pipe(filter((event) => event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)))).subscribe((event) => {
          if (!this.disableClose) {
            event.preventDefault();
            _closeDialogVia(this, event.type === "keydown" ? "keyboard" : "mouse");
          }
        });
      }
      /**
       * Close the dialog.
       * @param dialogResult Optional result to return to the dialog opener.
       */
      close(dialogResult) {
        const closePredicate = this._config.closePredicate;
        if (closePredicate && !closePredicate(dialogResult, this._config, this.componentInstance)) {
          return;
        }
        this._result = dialogResult;
        this._containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closing"), take(1)).subscribe((event) => {
          this._beforeClosed.next(dialogResult);
          this._beforeClosed.complete();
          this._ref.overlayRef.detachBackdrop();
          this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
        });
        this._state = MatDialogState.CLOSING;
        this._containerInstance._startExitAnimation();
      }
      /**
       * Gets an observable that is notified when the dialog is finished opening.
       */
      afterOpened() {
        return this._afterOpened;
      }
      /**
       * Gets an observable that is notified when the dialog is finished closing.
       */
      afterClosed() {
        return this._ref.closed;
      }
      /**
       * Gets an observable that is notified when the dialog has started closing.
       */
      beforeClosed() {
        return this._beforeClosed;
      }
      /**
       * Gets an observable that emits when the overlay's backdrop has been clicked.
       */
      backdropClick() {
        return this._ref.backdropClick;
      }
      /**
       * Gets an observable that emits when keydown events are targeted on the overlay.
       */
      keydownEvents() {
        return this._ref.keydownEvents;
      }
      /**
       * Updates the dialog's position.
       * @param position New dialog position.
       */
      updatePosition(position) {
        let strategy = this._ref.config.positionStrategy;
        if (position && (position.left || position.right)) {
          position.left ? strategy.left(position.left) : strategy.right(position.right);
        } else {
          strategy.centerHorizontally();
        }
        if (position && (position.top || position.bottom)) {
          position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
        } else {
          strategy.centerVertically();
        }
        this._ref.updatePosition();
        return this;
      }
      /**
       * Updates the dialog's width and height.
       * @param width New width of the dialog.
       * @param height New height of the dialog.
       */
      updateSize(width = "", height = "") {
        this._ref.updateSize(width, height);
        return this;
      }
      /** Add a CSS class or an array of classes to the overlay pane. */
      addPanelClass(classes) {
        this._ref.addPanelClass(classes);
        return this;
      }
      /** Remove a CSS class or an array of classes from the overlay pane. */
      removePanelClass(classes) {
        this._ref.removePanelClass(classes);
        return this;
      }
      /** Gets the current state of the dialog's lifecycle. */
      getState() {
        return this._state;
      }
      /**
       * Finishes the dialog close by updating the state of the dialog
       * and disposing the overlay.
       */
      _finishDialogClose() {
        this._state = MatDialogState.CLOSED;
        this._ref.close(this._result, { focusOrigin: this._closeInteractionType });
        this.componentInstance = null;
      }
    };
    MAT_DIALOG_DATA = new InjectionToken("MatMdcDialogData");
    MAT_DIALOG_DEFAULT_OPTIONS = new InjectionToken("mat-mdc-dialog-default-options");
    MAT_DIALOG_SCROLL_STRATEGY = new InjectionToken("mat-mdc-dialog-scroll-strategy", {
      providedIn: "root",
      factory: () => {
        const injector = inject(Injector);
        return () => createBlockScrollStrategy(injector);
      }
    });
    MatDialog = class _MatDialog {
      _defaultOptions = inject(MAT_DIALOG_DEFAULT_OPTIONS, { optional: true });
      _scrollStrategy = inject(MAT_DIALOG_SCROLL_STRATEGY);
      _parentDialog = inject(_MatDialog, { optional: true, skipSelf: true });
      _idGenerator = inject(_IdGenerator);
      _injector = inject(Injector);
      _dialog = inject(Dialog);
      _animationsDisabled = _animationsDisabled();
      _openDialogsAtThisLevel = [];
      _afterAllClosedAtThisLevel = new Subject();
      _afterOpenedAtThisLevel = new Subject();
      dialogConfigClass = MatDialogConfig;
      _dialogRefConstructor;
      _dialogContainerType;
      _dialogDataToken;
      /** Keeps track of the currently-open dialogs. */
      get openDialogs() {
        return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
      }
      /** Stream that emits when a dialog has been opened. */
      get afterOpened() {
        return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
      }
      _getAfterAllClosed() {
        const parent = this._parentDialog;
        return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
      }
      /**
       * Stream that emits when all open dialog have finished closing.
       * Will emit on subscribe if there are no open dialogs to begin with.
       */
      afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
      constructor() {
        this._dialogRefConstructor = MatDialogRef;
        this._dialogContainerType = MatDialogContainer;
        this._dialogDataToken = MAT_DIALOG_DATA;
      }
      open(componentOrTemplateRef, config) {
        let dialogRef;
        config = __spreadValues(__spreadValues({}, this._defaultOptions || new MatDialogConfig()), config);
        config.id = config.id || this._idGenerator.getId("mat-mdc-dialog-");
        config.scrollStrategy = config.scrollStrategy || this._scrollStrategy();
        const cdkRef = this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, config), {
          positionStrategy: createGlobalPositionStrategy(this._injector).centerHorizontally().centerVertically(),
          // Disable closing since we need to sync it up to the animation ourselves.
          disableClose: true,
          // Closing is tied to our animation so the close predicate has to be implemented separately.
          closePredicate: void 0,
          // Disable closing on destroy, because this service cleans up its open dialogs as well.
          // We want to do the cleanup here, rather than the CDK service, because the CDK destroys
          // the dialogs immediately whereas we want it to wait for the animations to finish.
          closeOnDestroy: false,
          // Disable closing on detachments so that we can sync up the animation.
          // The Material dialog ref handles this manually.
          closeOnOverlayDetachments: false,
          disableAnimations: this._animationsDisabled || config.enterAnimationDuration?.toLocaleString() === "0" || config.exitAnimationDuration?.toString() === "0",
          container: {
            type: this._dialogContainerType,
            providers: () => [
              // Provide our config as the CDK config as well since it has the same interface as the
              // CDK one, but it contains the actual values passed in by the user for things like
              // `disableClose` which we disable for the CDK dialog since we handle it ourselves.
              { provide: this.dialogConfigClass, useValue: config },
              { provide: DialogConfig, useValue: config }
            ]
          },
          templateContext: () => ({ dialogRef }),
          providers: (ref, cdkConfig, dialogContainer) => {
            dialogRef = new this._dialogRefConstructor(ref, config, dialogContainer);
            dialogRef.updatePosition(config?.position);
            return [
              { provide: this._dialogContainerType, useValue: dialogContainer },
              { provide: this._dialogDataToken, useValue: cdkConfig.data },
              { provide: this._dialogRefConstructor, useValue: dialogRef }
            ];
          }
        }));
        dialogRef.componentRef = cdkRef.componentRef;
        dialogRef.componentInstance = cdkRef.componentInstance;
        this.openDialogs.push(dialogRef);
        this.afterOpened.next(dialogRef);
        dialogRef.afterClosed().subscribe(() => {
          const index = this.openDialogs.indexOf(dialogRef);
          if (index > -1) {
            this.openDialogs.splice(index, 1);
            if (!this.openDialogs.length) {
              this._getAfterAllClosed().next();
            }
          }
        });
        return dialogRef;
      }
      /**
       * Closes all of the currently-open dialogs.
       */
      closeAll() {
        this._closeDialogs(this.openDialogs);
      }
      /**
       * Finds an open dialog by its id.
       * @param id ID to use when looking up the dialog.
       */
      getDialogById(id) {
        return this.openDialogs.find((dialog) => dialog.id === id);
      }
      ngOnDestroy() {
        this._closeDialogs(this._openDialogsAtThisLevel);
        this._afterAllClosedAtThisLevel.complete();
        this._afterOpenedAtThisLevel.complete();
      }
      _closeDialogs(dialogs) {
        let i = dialogs.length;
        while (i--) {
          dialogs[i].close();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatDialog, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatDialog, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatDialog, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    MatDialogClose = class _MatDialogClose {
      dialogRef = inject(MatDialogRef, { optional: true });
      _elementRef = inject(ElementRef);
      _dialog = inject(MatDialog);
      /** Screen-reader label for the button. */
      ariaLabel;
      /** Default to "button" to prevents accidental form submits. */
      type = "button";
      /** Dialog close input. */
      dialogResult;
      _matDialogClose;
      constructor() {
      }
      ngOnInit() {
        if (!this.dialogRef) {
          this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
        }
      }
      ngOnChanges(changes) {
        const proxiedChange = changes["_matDialogClose"] || changes["_matDialogCloseResult"];
        if (proxiedChange) {
          this.dialogResult = proxiedChange.currentValue;
        }
      }
      _onButtonClick(event) {
        _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? "keyboard" : "mouse", this.dialogResult);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatDialogClose, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatDialogClose, isStandalone: true, selector: "[mat-dialog-close], [matDialogClose]", inputs: { ariaLabel: ["aria-label", "ariaLabel"], type: "type", dialogResult: ["mat-dialog-close", "dialogResult"], _matDialogClose: ["matDialogClose", "_matDialogClose"] }, host: { listeners: { "click": "_onButtonClick($event)" }, properties: { "attr.aria-label": "ariaLabel || null", "attr.type": "type" } }, exportAs: ["matDialogClose"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatDialogClose, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-dialog-close], [matDialogClose]",
        exportAs: "matDialogClose",
        host: {
          "(click)": "_onButtonClick($event)",
          "[attr.aria-label]": "ariaLabel || null",
          "[attr.type]": "type"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }], type: [{
      type: Input
    }], dialogResult: [{
      type: Input,
      args: ["mat-dialog-close"]
    }], _matDialogClose: [{
      type: Input,
      args: ["matDialogClose"]
    }] } });
    MatDialogLayoutSection = class _MatDialogLayoutSection {
      _dialogRef = inject(MatDialogRef, { optional: true });
      _elementRef = inject(ElementRef);
      _dialog = inject(MatDialog);
      constructor() {
      }
      ngOnInit() {
        if (!this._dialogRef) {
          this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
        }
        if (this._dialogRef) {
          Promise.resolve().then(() => {
            this._onAdd();
          });
        }
      }
      ngOnDestroy() {
        const instance = this._dialogRef?._containerInstance;
        if (instance) {
          Promise.resolve().then(() => {
            this._onRemove();
          });
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatDialogLayoutSection, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatDialogLayoutSection, isStandalone: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatDialogLayoutSection, decorators: [{
      type: Directive
    }], ctorParameters: () => [] });
    MatDialogTitle = class _MatDialogTitle extends MatDialogLayoutSection {
      id = inject(_IdGenerator).getId("mat-mdc-dialog-title-");
      _onAdd() {
        this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);
      }
      _onRemove() {
        this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatDialogTitle, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatDialogTitle, isStandalone: true, selector: "[mat-dialog-title], [matDialogTitle]", inputs: { id: "id" }, host: { properties: { "id": "id" }, classAttribute: "mat-mdc-dialog-title mdc-dialog__title" }, exportAs: ["matDialogTitle"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatDialogTitle, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-dialog-title], [matDialogTitle]",
        exportAs: "matDialogTitle",
        host: {
          "class": "mat-mdc-dialog-title mdc-dialog__title",
          "[id]": "id"
        }
      }]
    }], propDecorators: { id: [{
      type: Input
    }] } });
    MatDialogContent = class _MatDialogContent {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatDialogContent, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatDialogContent, isStandalone: true, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]", host: { classAttribute: "mat-mdc-dialog-content mdc-dialog__content" }, hostDirectives: [{ directive: CdkScrollable }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatDialogContent, decorators: [{
      type: Directive,
      args: [{
        selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
        host: { "class": "mat-mdc-dialog-content mdc-dialog__content" },
        hostDirectives: [CdkScrollable]
      }]
    }] });
    MatDialogActions = class _MatDialogActions extends MatDialogLayoutSection {
      /**
       * Horizontal alignment of action buttons.
       */
      align;
      _onAdd() {
        this._dialogRef._containerInstance?._updateActionSectionCount?.(1);
      }
      _onRemove() {
        this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatDialogActions, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatDialogActions, isStandalone: true, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: { align: "align" }, host: { properties: { "class.mat-mdc-dialog-actions-align-start": 'align === "start"', "class.mat-mdc-dialog-actions-align-center": 'align === "center"', "class.mat-mdc-dialog-actions-align-end": 'align === "end"' }, classAttribute: "mat-mdc-dialog-actions mdc-dialog__actions" }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatDialogActions, decorators: [{
      type: Directive,
      args: [{
        selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
        host: {
          "class": "mat-mdc-dialog-actions mdc-dialog__actions",
          "[class.mat-mdc-dialog-actions-align-start]": 'align === "start"',
          "[class.mat-mdc-dialog-actions-align-center]": 'align === "center"',
          "[class.mat-mdc-dialog-actions-align-end]": 'align === "end"'
        }
      }]
    }], propDecorators: { align: [{
      type: Input
    }] } });
    DIRECTIVES = [
      MatDialogContainer,
      MatDialogClose,
      MatDialogTitle,
      MatDialogActions,
      MatDialogContent
    ];
    MatDialogModule = class _MatDialogModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatDialogModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatDialogModule, imports: [
        DialogModule,
        OverlayModule,
        PortalModule,
        MatCommonModule,
        MatDialogContainer,
        MatDialogClose,
        MatDialogTitle,
        MatDialogActions,
        MatDialogContent
      ], exports: [
        MatCommonModule,
        MatDialogContainer,
        MatDialogClose,
        MatDialogTitle,
        MatDialogActions,
        MatDialogContent
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatDialogModule, providers: [MatDialog], imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatDialogModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, ...DIRECTIVES],
        exports: [MatCommonModule, ...DIRECTIVES],
        providers: [MatDialog]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/dialog.mjs
var init_dialog2 = __esm({
  "node_modules/@angular/material/fesm2022/dialog.mjs"() {
    "use strict";
    init_dialog_module();
  }
});

// node_modules/@angular/material/fesm2022/pseudo-checkbox.mjs
var MatPseudoCheckbox;
var init_pseudo_checkbox = __esm({
  "node_modules/@angular/material/fesm2022/pseudo-checkbox.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_animation();
    MatPseudoCheckbox = class _MatPseudoCheckbox {
      _animationsDisabled = _animationsDisabled();
      /** Display state of the checkbox. */
      state = "unchecked";
      /** Whether the checkbox is disabled. */
      disabled = false;
      /**
       * Appearance of the pseudo checkbox. Default appearance of 'full' renders a checkmark/mixedmark
       * indicator inside a square box. 'minimal' appearance only renders the checkmark/mixedmark.
       */
      appearance = "full";
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatPseudoCheckbox, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatPseudoCheckbox, isStandalone: true, selector: "mat-pseudo-checkbox", inputs: { state: "state", disabled: "disabled", appearance: "appearance" }, host: { properties: { "class.mat-pseudo-checkbox-indeterminate": 'state === "indeterminate"', "class.mat-pseudo-checkbox-checked": 'state === "checked"', "class.mat-pseudo-checkbox-disabled": "disabled", "class.mat-pseudo-checkbox-minimal": 'appearance === "minimal"', "class.mat-pseudo-checkbox-full": 'appearance === "full"', "class._mat-animation-noopable": "_animationsDisabled" }, classAttribute: "mat-pseudo-checkbox" }, ngImport: core_exports, template: "", isInline: true, styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n'], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatPseudoCheckbox, decorators: [{
      type: Component,
      args: [{ encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "mat-pseudo-checkbox", template: "", host: {
        "class": "mat-pseudo-checkbox",
        "[class.mat-pseudo-checkbox-indeterminate]": 'state === "indeterminate"',
        "[class.mat-pseudo-checkbox-checked]": 'state === "checked"',
        "[class.mat-pseudo-checkbox-disabled]": "disabled",
        "[class.mat-pseudo-checkbox-minimal]": 'appearance === "minimal"',
        "[class.mat-pseudo-checkbox-full]": 'appearance === "full"',
        "[class._mat-animation-noopable]": "_animationsDisabled"
      }, styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n'] }]
    }], ctorParameters: () => [], propDecorators: { state: [{
      type: Input
    }], disabled: [{
      type: Input
    }], appearance: [{
      type: Input
    }] } });
  }
});

// node_modules/@angular/material/fesm2022/option.mjs
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
  if (optionGroups.length) {
    let optionsArray = options.toArray();
    let groups = optionGroups.toArray();
    let groupCounter = 0;
    for (let i = 0; i < optionIndex + 1; i++) {
      if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
        groupCounter++;
      }
    }
    return groupCounter;
  }
  return 0;
}
function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }
  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }
  return currentScrollPosition;
}
var MAT_OPTION_PARENT_COMPONENT, MAT_OPTGROUP, MatOptgroup, MatOptionSelectionChange, MatOption;
var init_option = __esm({
  "node_modules/@angular/material/fesm2022/option.mjs"() {
    "use strict";
    init_a11y();
    init_keycodes();
    init_core();
    init_core();
    init_esm();
    init_ripple();
    init_pseudo_checkbox();
    init_structural_styles();
    init_private();
    MAT_OPTION_PARENT_COMPONENT = new InjectionToken("MAT_OPTION_PARENT_COMPONENT");
    MAT_OPTGROUP = new InjectionToken("MatOptgroup");
    MatOptgroup = class _MatOptgroup {
      /** Label for the option group. */
      label;
      /** whether the option group is disabled. */
      disabled = false;
      /** Unique id for the underlying label. */
      _labelId = inject(_IdGenerator).getId("mat-optgroup-label-");
      /** Whether the group is in inert a11y mode. */
      _inert;
      constructor() {
        const parent = inject(MAT_OPTION_PARENT_COMPONENT, { optional: true });
        this._inert = parent?.inertGroups ?? false;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatOptgroup, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.2.0-next.2", type: _MatOptgroup, isStandalone: true, selector: "mat-optgroup", inputs: { label: "label", disabled: ["disabled", "disabled", booleanAttribute] }, host: { properties: { "attr.role": '_inert ? null : "group"', "attr.aria-disabled": "_inert ? null : disabled.toString()", "attr.aria-labelledby": "_inert ? null : _labelId" }, classAttribute: "mat-mdc-optgroup" }, providers: [{ provide: MAT_OPTGROUP, useExisting: _MatOptgroup }], exportAs: ["matOptgroup"], ngImport: core_exports, template: '<span\n  class="mat-mdc-optgroup-label"\n  role="presentation"\n  [class.mdc-list-item--disabled]="disabled"\n  [id]="_labelId">\n  <span class="mdc-list-item__primary-text">{{ label }} <ng-content></ng-content></span>\n</span>\n\n<ng-content select="mat-option, ng-container"></ng-content>\n', styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal;color:inherit}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatOptgroup, decorators: [{
      type: Component,
      args: [{ selector: "mat-optgroup", exportAs: "matOptgroup", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
        "class": "mat-mdc-optgroup",
        "[attr.role]": '_inert ? null : "group"',
        "[attr.aria-disabled]": "_inert ? null : disabled.toString()",
        "[attr.aria-labelledby]": "_inert ? null : _labelId"
      }, providers: [{ provide: MAT_OPTGROUP, useExisting: MatOptgroup }], template: '<span\n  class="mat-mdc-optgroup-label"\n  role="presentation"\n  [class.mdc-list-item--disabled]="disabled"\n  [id]="_labelId">\n  <span class="mdc-list-item__primary-text">{{ label }} <ng-content></ng-content></span>\n</span>\n\n<ng-content select="mat-option, ng-container"></ng-content>\n', styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal;color:inherit}\n"] }]
    }], ctorParameters: () => [], propDecorators: { label: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    MatOptionSelectionChange = class {
      source;
      isUserInput;
      constructor(source, isUserInput = false) {
        this.source = source;
        this.isUserInput = isUserInput;
      }
    };
    MatOption = class _MatOption {
      _element = inject(ElementRef);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _parent = inject(MAT_OPTION_PARENT_COMPONENT, { optional: true });
      group = inject(MAT_OPTGROUP, { optional: true });
      _signalDisableRipple = false;
      _selected = false;
      _active = false;
      _mostRecentViewValue = "";
      /** Whether the wrapping component is in multiple selection mode. */
      get multiple() {
        return this._parent && this._parent.multiple;
      }
      /** Whether or not the option is currently selected. */
      get selected() {
        return this._selected;
      }
      /** The form value of the option. */
      value;
      /** The unique ID of the option. */
      id = inject(_IdGenerator).getId("mat-option-");
      /** Whether the option is disabled. */
      get disabled() {
        return this.group && this.group.disabled || this._disabled();
      }
      set disabled(value) {
        this._disabled.set(value);
      }
      _disabled = signal(false, ...ngDevMode ? [{ debugName: "_disabled" }] : []);
      /** Whether ripples for the option are disabled. */
      get disableRipple() {
        return this._signalDisableRipple ? this._parent.disableRipple() : !!this._parent?.disableRipple;
      }
      /** Whether to display checkmark for single-selection. */
      get hideSingleSelectionIndicator() {
        return !!(this._parent && this._parent.hideSingleSelectionIndicator);
      }
      /** Event emitted when the option is selected or deselected. */
      // tslint:disable-next-line:no-output-on-prefix
      onSelectionChange = new EventEmitter();
      /** Element containing the option's text. */
      _text;
      /** Emits when the state of the option changes and any parents have to be notified. */
      _stateChanges = new Subject();
      constructor() {
        const styleLoader = inject(_CdkPrivateStyleLoader);
        styleLoader.load(_StructuralStylesLoader);
        styleLoader.load(_VisuallyHiddenLoader);
        this._signalDisableRipple = !!this._parent && isSignal(this._parent.disableRipple);
      }
      /**
       * Whether or not the option is currently active and ready to be selected.
       * An active option displays styles as if it is focused, but the
       * focus is actually retained somewhere else. This comes in handy
       * for components like autocomplete where focus must remain on the input.
       */
      get active() {
        return this._active;
      }
      /**
       * The displayed value of the option. It is necessary to show the selected option in the
       * select's trigger.
       */
      get viewValue() {
        return (this._text?.nativeElement.textContent || "").trim();
      }
      /** Selects the option. */
      select(emitEvent = true) {
        if (!this._selected) {
          this._selected = true;
          this._changeDetectorRef.markForCheck();
          if (emitEvent) {
            this._emitSelectionChangeEvent();
          }
        }
      }
      /** Deselects the option. */
      deselect(emitEvent = true) {
        if (this._selected) {
          this._selected = false;
          this._changeDetectorRef.markForCheck();
          if (emitEvent) {
            this._emitSelectionChangeEvent();
          }
        }
      }
      /** Sets focus onto this option. */
      focus(_origin, options) {
        const element = this._getHostElement();
        if (typeof element.focus === "function") {
          element.focus(options);
        }
      }
      /**
       * This method sets display styles on the option to make it appear
       * active. This is used by the ActiveDescendantKeyManager so key
       * events will display the proper options as active on arrow key events.
       */
      setActiveStyles() {
        if (!this._active) {
          this._active = true;
          this._changeDetectorRef.markForCheck();
        }
      }
      /**
       * This method removes display styles on the option that made it appear
       * active. This is used by the ActiveDescendantKeyManager so key
       * events will display the proper options as active on arrow key events.
       */
      setInactiveStyles() {
        if (this._active) {
          this._active = false;
          this._changeDetectorRef.markForCheck();
        }
      }
      /** Gets the label to be used when determining whether the option should be focused. */
      getLabel() {
        return this.viewValue;
      }
      /** Ensures the option is selected when activated from the keyboard. */
      _handleKeydown(event) {
        if ((event.keyCode === ENTER || event.keyCode === SPACE) && !hasModifierKey(event)) {
          this._selectViaInteraction();
          event.preventDefault();
        }
      }
      /**
       * `Selects the option while indicating the selection came from the user. Used to
       * determine if the select's view -> model callback should be invoked.`
       */
      _selectViaInteraction() {
        if (!this.disabled) {
          this._selected = this.multiple ? !this._selected : true;
          this._changeDetectorRef.markForCheck();
          this._emitSelectionChangeEvent(true);
        }
      }
      /** Returns the correct tabindex for the option depending on disabled state. */
      // This method is only used by `MatLegacyOption`. Keeping it here to avoid breaking the types.
      // That's because `MatLegacyOption` use `MatOption` type in a few places such as
      // `MatOptionSelectionChange`. It is safe to delete this when `MatLegacyOption` is deleted.
      _getTabIndex() {
        return this.disabled ? "-1" : "0";
      }
      /** Gets the host DOM element. */
      _getHostElement() {
        return this._element.nativeElement;
      }
      ngAfterViewChecked() {
        if (this._selected) {
          const viewValue = this.viewValue;
          if (viewValue !== this._mostRecentViewValue) {
            if (this._mostRecentViewValue) {
              this._stateChanges.next();
            }
            this._mostRecentViewValue = viewValue;
          }
        }
      }
      ngOnDestroy() {
        this._stateChanges.complete();
      }
      /** Emits the selection change event. */
      _emitSelectionChangeEvent(isUserInput = false) {
        this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatOption, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.2.0-next.2", type: _MatOption, isStandalone: true, selector: "mat-option", inputs: { value: "value", id: "id", disabled: ["disabled", "disabled", booleanAttribute] }, outputs: { onSelectionChange: "onSelectionChange" }, host: { attributes: { "role": "option" }, listeners: { "click": "_selectViaInteraction()", "keydown": "_handleKeydown($event)" }, properties: { "class.mdc-list-item--selected": "selected", "class.mat-mdc-option-multiple": "multiple", "class.mat-mdc-option-active": "active", "class.mdc-list-item--disabled": "disabled", "id": "id", "attr.aria-selected": "selected", "attr.aria-disabled": "disabled.toString()" }, classAttribute: "mat-mdc-option mdc-list-item" }, viewQueries: [{ propertyName: "_text", first: true, predicate: ["text"], descendants: true, static: true }], exportAs: ["matOption"], ngImport: core_exports, template: `<!-- Set aria-hidden="true" to this DOM node and other decorative nodes in this file. This might
 be contributing to issue where sometimes VoiceOver focuses on a TextNode in the a11y tree instead
 of the Option node (#23202). Most assistive technology will generally ignore non-role,
 non-text-content elements. Adding aria-hidden seems to make VoiceOver behave more consistently. -->
@if (multiple) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        [state]="selected ? 'checked' : 'unchecked'"
        aria-hidden="true"></mat-pseudo-checkbox>
}

<ng-content select="mat-icon"></ng-content>

<span class="mdc-list-item__primary-text" #text><ng-content></ng-content></span>

<!-- Render checkmark at the end for single-selection. -->
@if (!multiple && selected && !hideSingleSelectionIndicator) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"></mat-pseudo-checkbox>
}

<!-- See a11y notes inside optgroup.ts for context behind this element. -->
@if (group && group._inert) {
    <span class="cdk-visually-hidden">({{ group.label }})</span>
}

<div class="mat-mdc-option-ripple mat-focus-indicator" aria-hidden="true" mat-ripple
     [matRippleTrigger]="_getHostElement()" [matRippleDisabled]="disabled || disableRipple">
</div>
`, styles: ['.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}@media(forced-colors: active){.mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{right:auto;left:16px}}.mat-mdc-option-multiple{--mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-focus-indicator::before{content:""}\n'], dependencies: [{ kind: "component", type: MatPseudoCheckbox, selector: "mat-pseudo-checkbox", inputs: ["state", "disabled", "appearance"] }, { kind: "directive", type: MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatOption, decorators: [{
      type: Component,
      args: [{ selector: "mat-option", exportAs: "matOption", host: {
        "role": "option",
        "[class.mdc-list-item--selected]": "selected",
        "[class.mat-mdc-option-multiple]": "multiple",
        "[class.mat-mdc-option-active]": "active",
        "[class.mdc-list-item--disabled]": "disabled",
        "[id]": "id",
        // Set aria-selected to false for non-selected items and true for selected items. Conform to
        // [WAI ARIA Listbox authoring practices guide](
        //  https://www.w3.org/WAI/ARIA/apg/patterns/listbox/), "If any options are selected, each
        // selected option has either aria-selected or aria-checked  set to true. All options that are
        // selectable but not selected have either aria-selected or aria-checked set to false." Align
        // aria-selected implementation of Chips and List components.
        //
        // Set `aria-selected="false"` on not-selected listbox options to fix VoiceOver announcing
        // every option as "selected" (#21491).
        "[attr.aria-selected]": "selected",
        "[attr.aria-disabled]": "disabled.toString()",
        "(click)": "_selectViaInteraction()",
        "(keydown)": "_handleKeydown($event)",
        "class": "mat-mdc-option mdc-list-item"
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, imports: [MatPseudoCheckbox, MatRipple], template: `<!-- Set aria-hidden="true" to this DOM node and other decorative nodes in this file. This might
 be contributing to issue where sometimes VoiceOver focuses on a TextNode in the a11y tree instead
 of the Option node (#23202). Most assistive technology will generally ignore non-role,
 non-text-content elements. Adding aria-hidden seems to make VoiceOver behave more consistently. -->
@if (multiple) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        [state]="selected ? 'checked' : 'unchecked'"
        aria-hidden="true"></mat-pseudo-checkbox>
}

<ng-content select="mat-icon"></ng-content>

<span class="mdc-list-item__primary-text" #text><ng-content></ng-content></span>

<!-- Render checkmark at the end for single-selection. -->
@if (!multiple && selected && !hideSingleSelectionIndicator) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"></mat-pseudo-checkbox>
}

<!-- See a11y notes inside optgroup.ts for context behind this element. -->
@if (group && group._inert) {
    <span class="cdk-visually-hidden">({{ group.label }})</span>
}

<div class="mat-mdc-option-ripple mat-focus-indicator" aria-hidden="true" mat-ripple
     [matRippleTrigger]="_getHostElement()" [matRippleDisabled]="disabled || disableRipple">
</div>
`, styles: ['.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}@media(forced-colors: active){.mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{right:auto;left:16px}}.mat-mdc-option-multiple{--mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-focus-indicator::before{content:""}\n'] }]
    }], ctorParameters: () => [], propDecorators: { value: [{
      type: Input
    }], id: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], onSelectionChange: [{
      type: Output
    }], _text: [{
      type: ViewChild,
      args: ["text", { static: true }]
    }] } });
  }
});

// node_modules/@angular/material/fesm2022/pseudo-checkbox-module.mjs
var MatPseudoCheckboxModule;
var init_pseudo_checkbox_module = __esm({
  "node_modules/@angular/material/fesm2022/pseudo-checkbox-module.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_pseudo_checkbox();
    init_common_module();
    MatPseudoCheckboxModule = class _MatPseudoCheckboxModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatPseudoCheckboxModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatPseudoCheckboxModule, imports: [MatCommonModule, MatPseudoCheckbox], exports: [MatPseudoCheckbox] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatPseudoCheckboxModule, imports: [MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatPseudoCheckboxModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatPseudoCheckbox],
        exports: [MatPseudoCheckbox]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/option-module.mjs
var MatOptionModule;
var init_option_module = __esm({
  "node_modules/@angular/material/fesm2022/option-module.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_ripple_module();
    init_pseudo_checkbox_module();
    init_common_module();
    init_option();
    MatOptionModule = class _MatOptionModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatOptionModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatOptionModule, imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption, MatOptgroup], exports: [MatOption, MatOptgroup] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatOptionModule, imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatOptionModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption, MatOptgroup],
        exports: [MatOption, MatOptgroup]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/select-module.mjs
function getMatSelectDynamicMultipleError() {
  return Error("Cannot change `multiple` mode of select after initialization.");
}
function getMatSelectNonArrayValueError() {
  return Error("Value must be an array in multiple-selection mode.");
}
function getMatSelectNonFunctionValueError() {
  return Error("`compareWith` must be a function.");
}
function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector);
}
var MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_CONFIG, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MAT_SELECT_TRIGGER, MatSelectChange, MatSelect, MatSelectTrigger, MatSelectModule;
var init_select_module = __esm({
  "node_modules/@angular/material/fesm2022/select-module.mjs"() {
    "use strict";
    init_overlay();
    init_core();
    init_core();
    init_scrolling();
    init_a11y();
    init_bidi();
    init_collections();
    init_keycodes();
    init_forms();
    init_esm();
    init_operators();
    init_common();
    init_form_field2();
    init_animation();
    init_option();
    init_error_options();
    init_error_state();
    init_option_module();
    init_common_module();
    init_form_field_module();
    MAT_SELECT_SCROLL_STRATEGY = new InjectionToken("mat-select-scroll-strategy", {
      providedIn: "root",
      factory: () => {
        const injector = inject(Injector);
        return () => createRepositionScrollStrategy(injector);
      }
    });
    MAT_SELECT_CONFIG = new InjectionToken("MAT_SELECT_CONFIG");
    MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
      provide: MAT_SELECT_SCROLL_STRATEGY,
      deps: [],
      useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    MAT_SELECT_TRIGGER = new InjectionToken("MatSelectTrigger");
    MatSelectChange = class {
      source;
      value;
      constructor(source, value) {
        this.source = source;
        this.value = value;
      }
    };
    MatSelect = class _MatSelect {
      _viewportRuler = inject(ViewportRuler);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _elementRef = inject(ElementRef);
      _dir = inject(Directionality, { optional: true });
      _idGenerator = inject(_IdGenerator);
      _renderer = inject(Renderer2);
      _parentFormField = inject(MAT_FORM_FIELD, { optional: true });
      ngControl = inject(NgControl, { self: true, optional: true });
      _liveAnnouncer = inject(LiveAnnouncer);
      _defaultOptions = inject(MAT_SELECT_CONFIG, { optional: true });
      _animationsDisabled = _animationsDisabled();
      _initialized = new Subject();
      _cleanupDetach;
      /** All of the defined select options. */
      options;
      // TODO(crisbeto): this is only necessary for the non-MDC select, but it's technically a
      // public API so we have to keep it. It should be deprecated and removed eventually.
      /** All of the defined groups of options. */
      optionGroups;
      /** User-supplied override of the trigger element. */
      customTrigger;
      /**
       * This position config ensures that the top "start" corner of the overlay
       * is aligned with with the top "start" of the origin by default (overlapping
       * the trigger completely). If the panel cannot fit below the trigger, it
       * will fall back to a position above the trigger.
       */
      _positions = [
        {
          originX: "start",
          originY: "bottom",
          overlayX: "start",
          overlayY: "top"
        },
        {
          originX: "end",
          originY: "bottom",
          overlayX: "end",
          overlayY: "top"
        },
        {
          originX: "start",
          originY: "top",
          overlayX: "start",
          overlayY: "bottom",
          panelClass: "mat-mdc-select-panel-above"
        },
        {
          originX: "end",
          originY: "top",
          overlayX: "end",
          overlayY: "bottom",
          panelClass: "mat-mdc-select-panel-above"
        }
      ];
      /** Scrolls a particular option into the view. */
      _scrollOptionIntoView(index) {
        const option = this.options.toArray()[index];
        if (option) {
          const panel = this.panel.nativeElement;
          const labelCount = _countGroupLabelsBeforeOption(index, this.options, this.optionGroups);
          const element = option._getHostElement();
          if (index === 0 && labelCount === 1) {
            panel.scrollTop = 0;
          } else {
            panel.scrollTop = _getOptionScrollPosition(element.offsetTop, element.offsetHeight, panel.scrollTop, panel.offsetHeight);
          }
        }
      }
      /** Called when the panel has been opened and the overlay has settled on its final position. */
      _positioningSettled() {
        this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
      }
      /** Creates a change event object that should be emitted by the select. */
      _getChangeEvent(value) {
        return new MatSelectChange(this, value);
      }
      /** Factory function used to create a scroll strategy for this select. */
      _scrollStrategyFactory = inject(MAT_SELECT_SCROLL_STRATEGY);
      /** Whether or not the overlay panel is open. */
      _panelOpen = false;
      /** Comparison function to specify which option is displayed. Defaults to object equality. */
      _compareWith = (o1, o2) => o1 === o2;
      /** Unique id for this input. */
      _uid = this._idGenerator.getId("mat-select-");
      /** Current `aria-labelledby` value for the select trigger. */
      _triggerAriaLabelledBy = null;
      /**
       * Keeps track of the previous form control assigned to the select.
       * Used to detect if it has changed.
       */
      _previousControl;
      /** Emits whenever the component is destroyed. */
      _destroy = new Subject();
      /** Tracks the error state of the select. */
      _errorStateTracker;
      /**
       * Emits whenever the component state changes and should cause the parent
       * form-field to update. Implemented as part of `MatFormFieldControl`.
       * @docs-private
       */
      stateChanges = new Subject();
      /**
       * Disable the automatic labeling to avoid issues like #27241.
       * @docs-private
       */
      disableAutomaticLabeling = true;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      userAriaDescribedBy;
      /** Deals with the selection logic. */
      _selectionModel;
      /** Manages keyboard events for options in the panel. */
      _keyManager;
      /** Ideal origin for the overlay panel. */
      _preferredOverlayOrigin;
      /** Width of the overlay panel. */
      _overlayWidth;
      /** `View -> model callback called when value changes` */
      _onChange = () => {
      };
      /** `View -> model callback called when select has been touched` */
      _onTouched = () => {
      };
      /** ID for the DOM node containing the select's value. */
      _valueId = this._idGenerator.getId("mat-select-value-");
      /** Strategy that will be used to handle scrolling while the select panel is open. */
      _scrollStrategy;
      _overlayPanelClass = this._defaultOptions?.overlayPanelClass || "";
      /** Whether the select is focused. */
      get focused() {
        return this._focused || this._panelOpen;
      }
      _focused = false;
      /** A name for this control that can be used by `mat-form-field`. */
      controlType = "mat-select";
      /** Trigger that opens the select. */
      trigger;
      /** Panel containing the select options. */
      panel;
      /** Overlay pane containing the options. */
      _overlayDir;
      /** Classes to be passed to the select panel. Supports the same syntax as `ngClass`. */
      panelClass;
      /** Whether the select is disabled. */
      disabled = false;
      /** Whether ripples in the select are disabled. */
      get disableRipple() {
        return this._disableRipple();
      }
      set disableRipple(value) {
        this._disableRipple.set(value);
      }
      _disableRipple = signal(false, ...ngDevMode ? [{ debugName: "_disableRipple" }] : []);
      /** Tab index of the select. */
      tabIndex = 0;
      /** Whether checkmark indicator for single-selection options is hidden. */
      get hideSingleSelectionIndicator() {
        return this._hideSingleSelectionIndicator;
      }
      set hideSingleSelectionIndicator(value) {
        this._hideSingleSelectionIndicator = value;
        this._syncParentProperties();
      }
      _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
      /** Placeholder to be shown if no value has been selected. */
      get placeholder() {
        return this._placeholder;
      }
      set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
      }
      _placeholder;
      /** Whether the component is required. */
      get required() {
        return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
      }
      set required(value) {
        this._required = value;
        this.stateChanges.next();
      }
      _required;
      /** Whether the user should be allowed to select multiple options. */
      get multiple() {
        return this._multiple;
      }
      set multiple(value) {
        if (this._selectionModel && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMatSelectDynamicMultipleError();
        }
        this._multiple = value;
      }
      _multiple = false;
      /** Whether to center the active option over the trigger. */
      disableOptionCentering = this._defaultOptions?.disableOptionCentering ?? false;
      /**
       * Function to compare the option values with the selected values. The first argument
       * is a value from an option. The second is a value from the selection. A boolean
       * should be returned.
       */
      get compareWith() {
        return this._compareWith;
      }
      set compareWith(fn) {
        if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMatSelectNonFunctionValueError();
        }
        this._compareWith = fn;
        if (this._selectionModel) {
          this._initializeSelection();
        }
      }
      /** Value of the select control. */
      get value() {
        return this._value;
      }
      set value(newValue) {
        const hasAssigned = this._assignValue(newValue);
        if (hasAssigned) {
          this._onChange(newValue);
        }
      }
      _value;
      /** Aria label of the select. */
      ariaLabel = "";
      /** Input that can be used to specify the `aria-labelledby` attribute. */
      ariaLabelledby;
      /** Object used to control when error messages are shown. */
      get errorStateMatcher() {
        return this._errorStateTracker.matcher;
      }
      set errorStateMatcher(value) {
        this._errorStateTracker.matcher = value;
      }
      /** Time to wait in milliseconds after the last keystroke before moving focus to an item. */
      typeaheadDebounceInterval;
      /**
       * Function used to sort the values in a select in multiple mode.
       * Follows the same logic as `Array.prototype.sort`.
       */
      sortComparator;
      /** Unique id of the element. */
      get id() {
        return this._id;
      }
      set id(value) {
        this._id = value || this._uid;
        this.stateChanges.next();
      }
      _id;
      /** Whether the select is in an error state. */
      get errorState() {
        return this._errorStateTracker.errorState;
      }
      set errorState(value) {
        this._errorStateTracker.errorState = value;
      }
      /**
       * Width of the panel. If set to `auto`, the panel will match the trigger width.
       * If set to null or an empty string, the panel will grow to match the longest option's text.
       */
      panelWidth = this._defaultOptions && typeof this._defaultOptions.panelWidth !== "undefined" ? this._defaultOptions.panelWidth : "auto";
      /**
       * By default selecting an option with a `null` or `undefined` value will reset the select's
       * value. Enable this option if the reset behavior doesn't match your requirements and instead
       * the nullable options should become selected. The value of this input can be controlled app-wide
       * using the `MAT_SELECT_CONFIG` injection token.
       */
      canSelectNullableOptions = this._defaultOptions?.canSelectNullableOptions ?? false;
      /** Combined stream of all of the child options' change events. */
      optionSelectionChanges = defer(() => {
        const options = this.options;
        if (options) {
          return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map((option) => option.onSelectionChange))));
        }
        return this._initialized.pipe(switchMap(() => this.optionSelectionChanges));
      });
      /** Event emitted when the select panel has been toggled. */
      openedChange = new EventEmitter();
      /** Event emitted when the select has been opened. */
      _openedStream = this.openedChange.pipe(filter((o) => o), map(() => {
      }));
      /** Event emitted when the select has been closed. */
      _closedStream = this.openedChange.pipe(filter((o) => !o), map(() => {
      }));
      /** Event emitted when the selected value has been changed by the user. */
      selectionChange = new EventEmitter();
      /**
       * Event that emits whenever the raw value of the select changes. This is here primarily
       * to facilitate the two-way binding for the `value` input.
       * @docs-private
       */
      valueChange = new EventEmitter();
      constructor() {
        const defaultErrorStateMatcher = inject(ErrorStateMatcher);
        const parentForm = inject(NgForm, { optional: true });
        const parentFormGroup = inject(FormGroupDirective, { optional: true });
        const tabIndex = inject(new HostAttributeToken("tabindex"), { optional: true });
        if (this.ngControl) {
          this.ngControl.valueAccessor = this;
        }
        if (this._defaultOptions?.typeaheadDebounceInterval != null) {
          this.typeaheadDebounceInterval = this._defaultOptions.typeaheadDebounceInterval;
        }
        this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
        this._scrollStrategy = this._scrollStrategyFactory();
        this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
        this.id = this.id;
      }
      ngOnInit() {
        this._selectionModel = new SelectionModel(this.multiple);
        this.stateChanges.next();
        this._viewportRuler.change().pipe(takeUntil(this._destroy)).subscribe(() => {
          if (this.panelOpen) {
            this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
            this._changeDetectorRef.detectChanges();
          }
        });
      }
      ngAfterContentInit() {
        this._initialized.next();
        this._initialized.complete();
        this._initKeyManager();
        this._selectionModel.changed.pipe(takeUntil(this._destroy)).subscribe((event) => {
          event.added.forEach((option) => option.select());
          event.removed.forEach((option) => option.deselect());
        });
        this.options.changes.pipe(startWith(null), takeUntil(this._destroy)).subscribe(() => {
          this._resetOptions();
          this._initializeSelection();
        });
      }
      ngDoCheck() {
        const newAriaLabelledby = this._getTriggerAriaLabelledby();
        const ngControl = this.ngControl;
        if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
          const element = this._elementRef.nativeElement;
          this._triggerAriaLabelledBy = newAriaLabelledby;
          if (newAriaLabelledby) {
            element.setAttribute("aria-labelledby", newAriaLabelledby);
          } else {
            element.removeAttribute("aria-labelledby");
          }
        }
        if (ngControl) {
          if (this._previousControl !== ngControl.control) {
            if (this._previousControl !== void 0 && ngControl.disabled !== null && ngControl.disabled !== this.disabled) {
              this.disabled = ngControl.disabled;
            }
            this._previousControl = ngControl.control;
          }
          this.updateErrorState();
        }
      }
      ngOnChanges(changes) {
        if (changes["disabled"] || changes["userAriaDescribedBy"]) {
          this.stateChanges.next();
        }
        if (changes["typeaheadDebounceInterval"] && this._keyManager) {
          this._keyManager.withTypeAhead(this.typeaheadDebounceInterval);
        }
      }
      ngOnDestroy() {
        this._cleanupDetach?.();
        this._keyManager?.destroy();
        this._destroy.next();
        this._destroy.complete();
        this.stateChanges.complete();
        this._clearFromModal();
      }
      /** Toggles the overlay panel open or closed. */
      toggle() {
        this.panelOpen ? this.close() : this.open();
      }
      /** Opens the overlay panel. */
      open() {
        if (!this._canOpen()) {
          return;
        }
        if (this._parentFormField) {
          this._preferredOverlayOrigin = this._parentFormField.getConnectedOverlayOrigin();
        }
        this._cleanupDetach?.();
        this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
        this._applyModalPanelOwnership();
        this._panelOpen = true;
        this._overlayDir.positionChange.pipe(take(1)).subscribe(() => {
          this._changeDetectorRef.detectChanges();
          this._positioningSettled();
        });
        this._overlayDir.attachOverlay();
        this._keyManager.withHorizontalOrientation(null);
        this._highlightCorrectOption();
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
        Promise.resolve().then(() => this.openedChange.emit(true));
      }
      /**
       * Track which modal we have modified the `aria-owns` attribute of. When the combobox trigger is
       * inside an aria-modal, we apply aria-owns to the parent modal with the `id` of the options
       * panel. Track the modal we have changed so we can undo the changes on destroy.
       */
      _trackedModal = null;
      /**
       * If the autocomplete trigger is inside of an `aria-modal` element, connect
       * that modal to the options panel with `aria-owns`.
       *
       * For some browser + screen reader combinations, when navigation is inside
       * of an `aria-modal` element, the screen reader treats everything outside
       * of that modal as hidden or invisible.
       *
       * This causes a problem when the combobox trigger is _inside_ of a modal, because the
       * options panel is rendered _outside_ of that modal, preventing screen reader navigation
       * from reaching the panel.
       *
       * We can work around this issue by applying `aria-owns` to the modal with the `id` of
       * the options panel. This effectively communicates to assistive technology that the
       * options panel is part of the same interaction as the modal.
       *
       * At time of this writing, this issue is present in VoiceOver.
       * See https://github.com/angular/components/issues/20694
       */
      _applyModalPanelOwnership() {
        const modal = this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');
        if (!modal) {
          return;
        }
        const panelId = `${this.id}-panel`;
        if (this._trackedModal) {
          removeAriaReferencedId(this._trackedModal, "aria-owns", panelId);
        }
        addAriaReferencedId(modal, "aria-owns", panelId);
        this._trackedModal = modal;
      }
      /** Clears the reference to the listbox overlay element from the modal it was added to. */
      _clearFromModal() {
        if (!this._trackedModal) {
          return;
        }
        const panelId = `${this.id}-panel`;
        removeAriaReferencedId(this._trackedModal, "aria-owns", panelId);
        this._trackedModal = null;
      }
      /** Closes the overlay panel and focuses the host element. */
      close() {
        if (this._panelOpen) {
          this._panelOpen = false;
          this._exitAndDetach();
          this._keyManager.withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr");
          this._changeDetectorRef.markForCheck();
          this._onTouched();
          this.stateChanges.next();
          Promise.resolve().then(() => this.openedChange.emit(false));
        }
      }
      /** Triggers the exit animation and detaches the overlay at the end. */
      _exitAndDetach() {
        if (this._animationsDisabled || !this.panel) {
          this._detachOverlay();
          return;
        }
        this._cleanupDetach?.();
        this._cleanupDetach = () => {
          cleanupEvent();
          clearTimeout(exitFallbackTimer);
          this._cleanupDetach = void 0;
        };
        const panel = this.panel.nativeElement;
        const cleanupEvent = this._renderer.listen(panel, "animationend", (event) => {
          if (event.animationName === "_mat-select-exit") {
            this._cleanupDetach?.();
            this._detachOverlay();
          }
        });
        const exitFallbackTimer = setTimeout(() => {
          this._cleanupDetach?.();
          this._detachOverlay();
        }, 200);
        panel.classList.add("mat-select-panel-exit");
      }
      /** Detaches the current overlay directive. */
      _detachOverlay() {
        this._overlayDir.detachOverlay();
        this._changeDetectorRef.markForCheck();
      }
      /**
       * Sets the select's value. Part of the ControlValueAccessor interface
       * required to integrate with Angular's core forms API.
       *
       * @param value New value to be written to the model.
       */
      writeValue(value) {
        this._assignValue(value);
      }
      /**
       * Saves a callback function to be invoked when the select's value
       * changes from user input. Part of the ControlValueAccessor interface
       * required to integrate with Angular's core forms API.
       *
       * @param fn Callback to be triggered when the value changes.
       */
      registerOnChange(fn) {
        this._onChange = fn;
      }
      /**
       * Saves a callback function to be invoked when the select is blurred
       * by the user. Part of the ControlValueAccessor interface required
       * to integrate with Angular's core forms API.
       *
       * @param fn Callback to be triggered when the component has been touched.
       */
      registerOnTouched(fn) {
        this._onTouched = fn;
      }
      /**
       * Disables the select. Part of the ControlValueAccessor interface required
       * to integrate with Angular's core forms API.
       *
       * @param isDisabled Sets whether the component is disabled.
       */
      setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
      }
      /** Whether or not the overlay panel is open. */
      get panelOpen() {
        return this._panelOpen;
      }
      /** The currently selected option. */
      get selected() {
        return this.multiple ? this._selectionModel?.selected || [] : this._selectionModel?.selected[0];
      }
      /** The value displayed in the trigger. */
      get triggerValue() {
        if (this.empty) {
          return "";
        }
        if (this._multiple) {
          const selectedOptions = this._selectionModel.selected.map((option) => option.viewValue);
          if (this._isRtl()) {
            selectedOptions.reverse();
          }
          return selectedOptions.join(", ");
        }
        return this._selectionModel.selected[0].viewValue;
      }
      /** Refreshes the error state of the select. */
      updateErrorState() {
        this._errorStateTracker.updateErrorState();
      }
      /** Whether the element is in RTL mode. */
      _isRtl() {
        return this._dir ? this._dir.value === "rtl" : false;
      }
      /** Handles all keydown events on the select. */
      _handleKeydown(event) {
        if (!this.disabled) {
          this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
        }
      }
      /** Handles keyboard events while the select is closed. */
      _handleClosedKeydown(event) {
        const keyCode = event.keyCode;
        const isArrowKey = keyCode === DOWN_ARROW || keyCode === UP_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW;
        const isOpenKey = keyCode === ENTER || keyCode === SPACE;
        const manager = this._keyManager;
        if (!manager.isTyping() && isOpenKey && !hasModifierKey(event) || (this.multiple || event.altKey) && isArrowKey) {
          event.preventDefault();
          this.open();
        } else if (!this.multiple) {
          const previouslySelectedOption = this.selected;
          manager.onKeydown(event);
          const selectedOption = this.selected;
          if (selectedOption && previouslySelectedOption !== selectedOption) {
            this._liveAnnouncer.announce(selectedOption.viewValue, 1e4);
          }
        }
      }
      /** Handles keyboard events when the selected is open. */
      _handleOpenKeydown(event) {
        const manager = this._keyManager;
        const keyCode = event.keyCode;
        const isArrowKey = keyCode === DOWN_ARROW || keyCode === UP_ARROW;
        const isTyping = manager.isTyping();
        if (isArrowKey && event.altKey) {
          event.preventDefault();
          this.close();
        } else if (!isTyping && (keyCode === ENTER || keyCode === SPACE) && manager.activeItem && !hasModifierKey(event)) {
          event.preventDefault();
          manager.activeItem._selectViaInteraction();
        } else if (!isTyping && this._multiple && keyCode === A && event.ctrlKey) {
          event.preventDefault();
          const hasDeselectedOptions = this.options.some((opt) => !opt.disabled && !opt.selected);
          this.options.forEach((option) => {
            if (!option.disabled) {
              hasDeselectedOptions ? option.select() : option.deselect();
            }
          });
        } else {
          const previouslyFocusedIndex = manager.activeItemIndex;
          manager.onKeydown(event);
          if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
            manager.activeItem._selectViaInteraction();
          }
        }
      }
      /** Handles keyboard events coming from the overlay. */
      _handleOverlayKeydown(event) {
        if (event.keyCode === ESCAPE && !hasModifierKey(event)) {
          event.preventDefault();
          this.close();
        }
      }
      _onFocus() {
        if (!this.disabled) {
          this._focused = true;
          this.stateChanges.next();
        }
      }
      /**
       * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
       * "blur" to the panel when it opens, causing a false positive.
       */
      _onBlur() {
        this._focused = false;
        this._keyManager?.cancelTypeahead();
        if (!this.disabled && !this.panelOpen) {
          this._onTouched();
          this._changeDetectorRef.markForCheck();
          this.stateChanges.next();
        }
      }
      /** Returns the theme to be used on the panel. */
      _getPanelTheme() {
        return this._parentFormField ? `mat-${this._parentFormField.color}` : "";
      }
      /** Whether the select has a value. */
      get empty() {
        return !this._selectionModel || this._selectionModel.isEmpty();
      }
      _initializeSelection() {
        Promise.resolve().then(() => {
          if (this.ngControl) {
            this._value = this.ngControl.value;
          }
          this._setSelectionByValue(this._value);
          this.stateChanges.next();
        });
      }
      /**
       * Sets the selected option based on a value. If no option can be
       * found with the designated value, the select trigger is cleared.
       */
      _setSelectionByValue(value) {
        this.options.forEach((option) => option.setInactiveStyles());
        this._selectionModel.clear();
        if (this.multiple && value) {
          if (!Array.isArray(value) && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw getMatSelectNonArrayValueError();
          }
          value.forEach((currentValue) => this._selectOptionByValue(currentValue));
          this._sortValues();
        } else {
          const correspondingOption = this._selectOptionByValue(value);
          if (correspondingOption) {
            this._keyManager.updateActiveItem(correspondingOption);
          } else if (!this.panelOpen) {
            this._keyManager.updateActiveItem(-1);
          }
        }
        this._changeDetectorRef.markForCheck();
      }
      /**
       * Finds and selects and option based on its value.
       * @returns Option that has the corresponding value.
       */
      _selectOptionByValue(value) {
        const correspondingOption = this.options.find((option) => {
          if (this._selectionModel.isSelected(option)) {
            return false;
          }
          try {
            return (option.value != null || this.canSelectNullableOptions) && this._compareWith(option.value, value);
          } catch (error) {
            if (typeof ngDevMode === "undefined" || ngDevMode) {
              console.warn(error);
            }
            return false;
          }
        });
        if (correspondingOption) {
          this._selectionModel.select(correspondingOption);
        }
        return correspondingOption;
      }
      /** Assigns a specific value to the select. Returns whether the value has changed. */
      _assignValue(newValue) {
        if (newValue !== this._value || this._multiple && Array.isArray(newValue)) {
          if (this.options) {
            this._setSelectionByValue(newValue);
          }
          this._value = newValue;
          return true;
        }
        return false;
      }
      // `skipPredicate` determines if key manager should avoid putting a given option in the tab
      // order. Allow disabled list items to receive focus via keyboard to align with WAI ARIA
      // recommendation.
      //
      // Normally WAI ARIA's instructions are to exclude disabled items from the tab order, but it
      // makes a few exceptions for compound widgets.
      //
      // From [Developing a Keyboard Interface](
      // https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/):
      //   "For the following composite widget elements, keep them focusable when disabled: Options in a
      //   Listbox..."
      //
      // The user can focus disabled options using the keyboard, but the user cannot click disabled
      // options.
      _skipPredicate = (option) => {
        if (this.panelOpen) {
          return false;
        }
        return option.disabled;
      };
      /** Gets how wide the overlay panel should be. */
      _getOverlayWidth(preferredOrigin) {
        if (this.panelWidth === "auto") {
          const refToMeasure = preferredOrigin instanceof CdkOverlayOrigin ? preferredOrigin.elementRef : preferredOrigin || this._elementRef;
          return refToMeasure.nativeElement.getBoundingClientRect().width;
        }
        return this.panelWidth === null ? "" : this.panelWidth;
      }
      /** Syncs the parent state with the individual options. */
      _syncParentProperties() {
        if (this.options) {
          for (const option of this.options) {
            option._changeDetectorRef.markForCheck();
          }
        }
      }
      /** Sets up a key manager to listen to keyboard events on the overlay panel. */
      _initKeyManager() {
        this._keyManager = new ActiveDescendantKeyManager(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate);
        this._keyManager.tabOut.subscribe(() => {
          if (this.panelOpen) {
            if (!this.multiple && this._keyManager.activeItem) {
              this._keyManager.activeItem._selectViaInteraction();
            }
            this.focus();
            this.close();
          }
        });
        this._keyManager.change.subscribe(() => {
          if (this._panelOpen && this.panel) {
            this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
          } else if (!this._panelOpen && !this.multiple && this._keyManager.activeItem) {
            this._keyManager.activeItem._selectViaInteraction();
          }
        });
      }
      /** Drops current option subscriptions and IDs and resets from scratch. */
      _resetOptions() {
        const changedOrDestroyed = merge(this.options.changes, this._destroy);
        this.optionSelectionChanges.pipe(takeUntil(changedOrDestroyed)).subscribe((event) => {
          this._onSelect(event.source, event.isUserInput);
          if (event.isUserInput && !this.multiple && this._panelOpen) {
            this.close();
            this.focus();
          }
        });
        merge(...this.options.map((option) => option._stateChanges)).pipe(takeUntil(changedOrDestroyed)).subscribe(() => {
          this._changeDetectorRef.detectChanges();
          this.stateChanges.next();
        });
      }
      /** Invoked when an option is clicked. */
      _onSelect(option, isUserInput) {
        const wasSelected = this._selectionModel.isSelected(option);
        if (!this.canSelectNullableOptions && option.value == null && !this._multiple) {
          option.deselect();
          this._selectionModel.clear();
          if (this.value != null) {
            this._propagateChanges(option.value);
          }
        } else {
          if (wasSelected !== option.selected) {
            option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
          }
          if (isUserInput) {
            this._keyManager.setActiveItem(option);
          }
          if (this.multiple) {
            this._sortValues();
            if (isUserInput) {
              this.focus();
            }
          }
        }
        if (wasSelected !== this._selectionModel.isSelected(option)) {
          this._propagateChanges();
        }
        this.stateChanges.next();
      }
      /** Sorts the selected values in the selected based on their order in the panel. */
      _sortValues() {
        if (this.multiple) {
          const options = this.options.toArray();
          this._selectionModel.sort((a, b) => {
            return this.sortComparator ? this.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
          });
          this.stateChanges.next();
        }
      }
      /** Emits change event to set the model value. */
      _propagateChanges(fallbackValue) {
        let valueToEmit;
        if (this.multiple) {
          valueToEmit = this.selected.map((option) => option.value);
        } else {
          valueToEmit = this.selected ? this.selected.value : fallbackValue;
        }
        this._value = valueToEmit;
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this.selectionChange.emit(this._getChangeEvent(valueToEmit));
        this._changeDetectorRef.markForCheck();
      }
      /**
       * Highlights the selected item. If no option is selected, it will highlight
       * the first *enabled* option.
       */
      _highlightCorrectOption() {
        if (this._keyManager) {
          if (this.empty) {
            let firstEnabledOptionIndex = -1;
            for (let index = 0; index < this.options.length; index++) {
              const option = this.options.get(index);
              if (!option.disabled) {
                firstEnabledOptionIndex = index;
                break;
              }
            }
            this._keyManager.setActiveItem(firstEnabledOptionIndex);
          } else {
            this._keyManager.setActiveItem(this._selectionModel.selected[0]);
          }
        }
      }
      /** Whether the panel is allowed to open. */
      _canOpen() {
        return !this._panelOpen && !this.disabled && this.options?.length > 0 && !!this._overlayDir;
      }
      /** Focuses the select element. */
      focus(options) {
        this._elementRef.nativeElement.focus(options);
      }
      /** Gets the aria-labelledby for the select panel. */
      _getPanelAriaLabelledby() {
        if (this.ariaLabel) {
          return null;
        }
        const labelId = this._parentFormField?.getLabelId() || null;
        const labelExpression = labelId ? labelId + " " : "";
        return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
      }
      /** Determines the `aria-activedescendant` to be set on the host. */
      _getAriaActiveDescendant() {
        if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
          return this._keyManager.activeItem.id;
        }
        return null;
      }
      /** Gets the aria-labelledby of the select component trigger. */
      _getTriggerAriaLabelledby() {
        if (this.ariaLabel) {
          return null;
        }
        let value = this._parentFormField?.getLabelId() || "";
        if (this.ariaLabelledby) {
          value += " " + this.ariaLabelledby;
        }
        if (!value) {
          value = this._valueId;
        }
        return value;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get describedByIds() {
        const element = this._elementRef.nativeElement;
        const existingDescribedBy = element.getAttribute("aria-describedby");
        return existingDescribedBy?.split(" ") || [];
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      setDescribedByIds(ids) {
        if (ids.length) {
          this._elementRef.nativeElement.setAttribute("aria-describedby", ids.join(" "));
        } else {
          this._elementRef.nativeElement.removeAttribute("aria-describedby");
        }
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      onContainerClick() {
        this.focus();
        this.open();
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get shouldLabelFloat() {
        return this.panelOpen || !this.empty || this.focused && !!this.placeholder;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatSelect, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.2.0-next.2", type: _MatSelect, isStandalone: true, selector: "mat-select", inputs: { userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"], panelClass: "panelClass", disabled: ["disabled", "disabled", booleanAttribute], disableRipple: ["disableRipple", "disableRipple", booleanAttribute], tabIndex: ["tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)], hideSingleSelectionIndicator: ["hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute], placeholder: "placeholder", required: ["required", "required", booleanAttribute], multiple: ["multiple", "multiple", booleanAttribute], disableOptionCentering: ["disableOptionCentering", "disableOptionCentering", booleanAttribute], compareWith: "compareWith", value: "value", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], errorStateMatcher: "errorStateMatcher", typeaheadDebounceInterval: ["typeaheadDebounceInterval", "typeaheadDebounceInterval", numberAttribute], sortComparator: "sortComparator", id: "id", panelWidth: "panelWidth", canSelectNullableOptions: ["canSelectNullableOptions", "canSelectNullableOptions", booleanAttribute] }, outputs: { openedChange: "openedChange", _openedStream: "opened", _closedStream: "closed", selectionChange: "selectionChange", valueChange: "valueChange" }, host: { attributes: { "role": "combobox", "aria-haspopup": "listbox" }, listeners: { "keydown": "_handleKeydown($event)", "focus": "_onFocus()", "blur": "_onBlur()" }, properties: { "attr.id": "id", "attr.tabindex": "disabled ? -1 : tabIndex", "attr.aria-controls": 'panelOpen ? id + "-panel" : null', "attr.aria-expanded": "panelOpen", "attr.aria-label": "ariaLabel || null", "attr.aria-required": "required.toString()", "attr.aria-disabled": "disabled.toString()", "attr.aria-invalid": "errorState", "attr.aria-activedescendant": "_getAriaActiveDescendant()", "class.mat-mdc-select-disabled": "disabled", "class.mat-mdc-select-invalid": "errorState", "class.mat-mdc-select-required": "required", "class.mat-mdc-select-empty": "empty", "class.mat-mdc-select-multiple": "multiple", "class.mat-select-open": "panelOpen" }, classAttribute: "mat-mdc-select" }, providers: [
        { provide: MatFormFieldControl, useExisting: _MatSelect },
        { provide: MAT_OPTION_PARENT_COMPONENT, useExisting: _MatSelect }
      ], queries: [{ propertyName: "customTrigger", first: true, predicate: MAT_SELECT_TRIGGER, descendants: true }, { propertyName: "options", predicate: MatOption, descendants: true }, { propertyName: "optionGroups", predicate: MAT_OPTGROUP, descendants: true }], viewQueries: [{ propertyName: "trigger", first: true, predicate: ["trigger"], descendants: true }, { propertyName: "panel", first: true, predicate: ["panel"], descendants: true }, { propertyName: "_overlayDir", first: true, predicate: CdkConnectedOverlay, descendants: true }], exportAs: ["matSelect"], usesOnChanges: true, ngImport: core_exports, template: `<div cdk-overlay-origin
     class="mat-mdc-select-trigger"
     (click)="open()"
     #fallbackOverlayOrigin="cdkOverlayOrigin"
     #trigger>

  <div class="mat-mdc-select-value" [attr.id]="_valueId">
    @if (empty) {
      <span class="mat-mdc-select-placeholder mat-mdc-select-min-line">{{placeholder}}</span>
    } @else {
      <span class="mat-mdc-select-value-text">
        @if (customTrigger) {
          <ng-content select="mat-select-trigger"></ng-content>
        } @else {
          <span class="mat-mdc-select-min-line">{{triggerValue}}</span>
        }
      </span>
    }
  </div>

  <div class="mat-mdc-select-arrow-wrapper">
    <div class="mat-mdc-select-arrow">
      <!-- Use an inline SVG, because it works better than a CSS triangle in high contrast mode. -->
      <svg viewBox="0 0 24 24" width="24px" height="24px" focusable="false" aria-hidden="true">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    </div>
  </div>
</div>

<ng-template
  cdk-connected-overlay
  cdkConnectedOverlayLockPosition
  cdkConnectedOverlayHasBackdrop
  cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
  [cdkConnectedOverlayDisableClose]="true"
  [cdkConnectedOverlayPanelClass]="_overlayPanelClass"
  [cdkConnectedOverlayScrollStrategy]="_scrollStrategy"
  [cdkConnectedOverlayOrigin]="_preferredOverlayOrigin || fallbackOverlayOrigin"
  [cdkConnectedOverlayPositions]="_positions"
  [cdkConnectedOverlayWidth]="_overlayWidth"
  [cdkConnectedOverlayFlexibleDimensions]="true"
  (detach)="close()"
  (backdropClick)="close()"
  (overlayKeydown)="_handleOverlayKeydown($event)">
  <div
    #panel
    role="listbox"
    tabindex="-1"
    class="mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open {{ _getPanelTheme() }}"
    [class.mat-select-panel-animations-enabled]="!_animationsDisabled"
    [attr.id]="id + '-panel'"
    [attr.aria-multiselectable]="multiple"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby()"
    [ngClass]="panelClass"
    (keydown)="_handleKeydown($event)">
    <ng-content></ng-content>
  </div>
</ng-template>
`, styles: ['@keyframes _mat-select-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}@keyframes _mat-select-exit{from{opacity:1}to{opacity:0}}.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));font-family:var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking))}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-disabled .mat-mdc-select-placeholder{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color, var(--mat-sys-error))}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-select-open .mat-mdc-select-arrow{transform:rotate(180deg)}.mat-form-field-animations-enabled .mat-mdc-select-arrow{transition:transform 80ms linear}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}@media(forced-colors: active){.mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .mat-mdc-select-arrow svg{fill:GrayText}}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:relative;background-color:var(--mat-select-panel-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-select-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-select-panel-animations-enabled{animation:_mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1)}.mat-select-panel-animations-enabled.mat-select-panel-exit{animation:_mat-select-exit 100ms linear}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder,._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform, translateY(-8px))}\n'], dependencies: [{ kind: "directive", type: CdkOverlayOrigin, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"] }, { kind: "directive", type: CdkConnectedOverlay, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush", "cdkConnectedOverlayDisposeOnNavigation"], outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"], exportAs: ["cdkConnectedOverlay"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatSelect, decorators: [{
      type: Component,
      args: [{ selector: "mat-select", exportAs: "matSelect", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
        "role": "combobox",
        "aria-haspopup": "listbox",
        "class": "mat-mdc-select",
        "[attr.id]": "id",
        "[attr.tabindex]": "disabled ? -1 : tabIndex",
        "[attr.aria-controls]": 'panelOpen ? id + "-panel" : null',
        "[attr.aria-expanded]": "panelOpen",
        "[attr.aria-label]": "ariaLabel || null",
        "[attr.aria-required]": "required.toString()",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-invalid]": "errorState",
        "[attr.aria-activedescendant]": "_getAriaActiveDescendant()",
        "[class.mat-mdc-select-disabled]": "disabled",
        "[class.mat-mdc-select-invalid]": "errorState",
        "[class.mat-mdc-select-required]": "required",
        "[class.mat-mdc-select-empty]": "empty",
        "[class.mat-mdc-select-multiple]": "multiple",
        "[class.mat-select-open]": "panelOpen",
        "(keydown)": "_handleKeydown($event)",
        "(focus)": "_onFocus()",
        "(blur)": "_onBlur()"
      }, providers: [
        { provide: MatFormFieldControl, useExisting: MatSelect },
        { provide: MAT_OPTION_PARENT_COMPONENT, useExisting: MatSelect }
      ], imports: [CdkOverlayOrigin, CdkConnectedOverlay, NgClass], template: `<div cdk-overlay-origin
     class="mat-mdc-select-trigger"
     (click)="open()"
     #fallbackOverlayOrigin="cdkOverlayOrigin"
     #trigger>

  <div class="mat-mdc-select-value" [attr.id]="_valueId">
    @if (empty) {
      <span class="mat-mdc-select-placeholder mat-mdc-select-min-line">{{placeholder}}</span>
    } @else {
      <span class="mat-mdc-select-value-text">
        @if (customTrigger) {
          <ng-content select="mat-select-trigger"></ng-content>
        } @else {
          <span class="mat-mdc-select-min-line">{{triggerValue}}</span>
        }
      </span>
    }
  </div>

  <div class="mat-mdc-select-arrow-wrapper">
    <div class="mat-mdc-select-arrow">
      <!-- Use an inline SVG, because it works better than a CSS triangle in high contrast mode. -->
      <svg viewBox="0 0 24 24" width="24px" height="24px" focusable="false" aria-hidden="true">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    </div>
  </div>
</div>

<ng-template
  cdk-connected-overlay
  cdkConnectedOverlayLockPosition
  cdkConnectedOverlayHasBackdrop
  cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
  [cdkConnectedOverlayDisableClose]="true"
  [cdkConnectedOverlayPanelClass]="_overlayPanelClass"
  [cdkConnectedOverlayScrollStrategy]="_scrollStrategy"
  [cdkConnectedOverlayOrigin]="_preferredOverlayOrigin || fallbackOverlayOrigin"
  [cdkConnectedOverlayPositions]="_positions"
  [cdkConnectedOverlayWidth]="_overlayWidth"
  [cdkConnectedOverlayFlexibleDimensions]="true"
  (detach)="close()"
  (backdropClick)="close()"
  (overlayKeydown)="_handleOverlayKeydown($event)">
  <div
    #panel
    role="listbox"
    tabindex="-1"
    class="mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open {{ _getPanelTheme() }}"
    [class.mat-select-panel-animations-enabled]="!_animationsDisabled"
    [attr.id]="id + '-panel'"
    [attr.aria-multiselectable]="multiple"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby()"
    [ngClass]="panelClass"
    (keydown)="_handleKeydown($event)">
    <ng-content></ng-content>
  </div>
</ng-template>
`, styles: ['@keyframes _mat-select-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}@keyframes _mat-select-exit{from{opacity:1}to{opacity:0}}.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));font-family:var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking))}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-disabled .mat-mdc-select-placeholder{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color, var(--mat-sys-error))}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-select-open .mat-mdc-select-arrow{transform:rotate(180deg)}.mat-form-field-animations-enabled .mat-mdc-select-arrow{transition:transform 80ms linear}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}@media(forced-colors: active){.mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .mat-mdc-select-arrow svg{fill:GrayText}}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:relative;background-color:var(--mat-select-panel-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-select-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-select-panel-animations-enabled{animation:_mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1)}.mat-select-panel-animations-enabled.mat-select-panel-exit{animation:_mat-select-exit 100ms linear}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder,._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform, translateY(-8px))}\n'] }]
    }], ctorParameters: () => [], propDecorators: { options: [{
      type: ContentChildren,
      args: [MatOption, { descendants: true }]
    }], optionGroups: [{
      type: ContentChildren,
      args: [MAT_OPTGROUP, { descendants: true }]
    }], customTrigger: [{
      type: ContentChild,
      args: [MAT_SELECT_TRIGGER]
    }], userAriaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }], trigger: [{
      type: ViewChild,
      args: ["trigger"]
    }], panel: [{
      type: ViewChild,
      args: ["panel"]
    }], _overlayDir: [{
      type: ViewChild,
      args: [CdkConnectedOverlay]
    }], panelClass: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disableRipple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }], hideSingleSelectionIndicator: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], placeholder: [{
      type: Input
    }], required: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], multiple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disableOptionCentering: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], compareWith: [{
      type: Input
    }], value: [{
      type: Input
    }], ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }], ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }], errorStateMatcher: [{
      type: Input
    }], typeaheadDebounceInterval: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], sortComparator: [{
      type: Input
    }], id: [{
      type: Input
    }], panelWidth: [{
      type: Input
    }], canSelectNullableOptions: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], openedChange: [{
      type: Output
    }], _openedStream: [{
      type: Output,
      args: ["opened"]
    }], _closedStream: [{
      type: Output,
      args: ["closed"]
    }], selectionChange: [{
      type: Output
    }], valueChange: [{
      type: Output
    }] } });
    MatSelectTrigger = class _MatSelectTrigger {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatSelectTrigger, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatSelectTrigger, isStandalone: true, selector: "mat-select-trigger", providers: [{ provide: MAT_SELECT_TRIGGER, useExisting: _MatSelectTrigger }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatSelectTrigger, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-select-trigger",
        providers: [{ provide: MAT_SELECT_TRIGGER, useExisting: MatSelectTrigger }]
      }]
    }] });
    MatSelectModule = class _MatSelectModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatSelectModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatSelectModule, imports: [OverlayModule, MatOptionModule, MatCommonModule, MatSelect, MatSelectTrigger], exports: [
        CdkScrollableModule,
        MatFormFieldModule,
        MatSelect,
        MatSelectTrigger,
        MatOptionModule,
        MatCommonModule
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatSelectModule, providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER], imports: [
        OverlayModule,
        MatOptionModule,
        MatCommonModule,
        CdkScrollableModule,
        MatFormFieldModule,
        MatOptionModule,
        MatCommonModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatSelectModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [OverlayModule, MatOptionModule, MatCommonModule, MatSelect, MatSelectTrigger],
        exports: [
          CdkScrollableModule,
          MatFormFieldModule,
          MatSelect,
          MatSelectTrigger,
          MatOptionModule,
          MatCommonModule
        ],
        providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/select.mjs
var init_select = __esm({
  "node_modules/@angular/material/fesm2022/select.mjs"() {
    "use strict";
    init_select_module();
  }
});

export {
  MatDialogRef,
  MatDialog,
  init_dialog2 as init_dialog,
  MatSelectModule,
  init_select
};
//# sourceMappingURL=chunk-RYV254VE.js.map
