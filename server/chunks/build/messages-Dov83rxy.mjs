import { B as BaseStyle, M as useConfirm, s as script$H, R as Ripple, x as script$F, j as script$U } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext, resolveComponent, resolveDirective, openBlock, createBlock, Transition, withDirectives, createElementVNode, renderSlot, createElementBlock, normalizeClass, resolveDynamicComponent, createCommentVNode, vShow } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useMessages } from './messages-BLbUm5JL.mjs';
import 'node:http';
import 'node:https';
import '../nitro/nitro.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import '@primeuix/styled';
import 'node:url';
import 'consola/core';
import 'ipx';
import 'pinia';
import '@unhead/shared';
import 'unhead';
import 'vue-router';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/observer';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/inputs';
import '@formkit/themes';
import '@formkit/dev';
import '@primeuix/utils';
import '@primeuix/utils/object';
import '@primeuix/utils/dom';
import '@primeuix/utils/eventbus';
import 'uuid';
import '@primeuix/utils/uuid';
import '@primeuix/utils/zindex';
import 'vue-sidebar-menu';

var theme = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-message {\n    border-radius: ".concat(dt("message.border.radius"), ";\n    outline-width: ").concat(dt("message.border.width"), ";\n    outline-style: solid;\n}\n\n.p-message-content {\n    display: flex;\n    align-items: center;\n    padding: ").concat(dt("message.content.padding"), ";\n    gap: ").concat(dt("message.content.gap"), ";\n    height: 100%;\n}\n\n.p-message-icon {\n    flex-shrink: 0;\n}\n\n.p-message-close-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    margin-inline-start: auto;\n    overflow: hidden;\n    position: relative;\n    width: ").concat(dt("message.close.button.width"), ";\n    height: ").concat(dt("message.close.button.height"), ";\n    border-radius: ").concat(dt("message.close.button.border.radius"), ";\n    background: transparent;\n    transition: background ").concat(dt("message.transition.duration"), ", color ").concat(dt("message.transition.duration"), ", outline-color ").concat(dt("message.transition.duration"), ", box-shadow ").concat(dt("message.transition.duration"), ", opacity 0.3s;\n    outline-color: transparent;\n    color: inherit;\n    padding: 0;\n    border: none;\n    cursor: pointer;\n    user-select: none;\n}\n\n.p-message-close-icon {\n    font-size: ").concat(dt("message.close.icon.size"), ";\n    width: ").concat(dt("message.close.icon.size"), ";\n    height: ").concat(dt("message.close.icon.size"), ";\n}\n\n.p-message-close-button:focus-visible {\n    outline-width: ").concat(dt("message.close.button.focus.ring.width"), ";\n    outline-style: ").concat(dt("message.close.button.focus.ring.style"), ";\n    outline-offset: ").concat(dt("message.close.button.focus.ring.offset"), ";\n}\n\n.p-message-info {\n    background: ").concat(dt("message.info.background"), ";\n    outline-color: ").concat(dt("message.info.border.color"), ";\n    color: ").concat(dt("message.info.color"), ";\n    box-shadow: ").concat(dt("message.info.shadow"), ";\n}\n\n.p-message-info .p-message-close-button:focus-visible {\n    outline-color: ").concat(dt("message.info.close.button.focus.ring.color"), ";\n    box-shadow: ").concat(dt("message.info.close.button.focus.ring.shadow"), ";\n}\n\n.p-message-info .p-message-close-button:hover {\n    background: ").concat(dt("message.info.close.button.hover.background"), ";\n}\n\n.p-message-info.p-message-outlined {\n    color: ").concat(dt("message.info.outlined.color"), ";\n    outline-color: ").concat(dt("message.info.outlined.border.color"), ";\n}\n\n.p-message-info.p-message-simple {\n    color: ").concat(dt("message.info.simple.color"), ";\n}\n\n.p-message-success {\n    background: ").concat(dt("message.success.background"), ";\n    outline-color: ").concat(dt("message.success.border.color"), ";\n    color: ").concat(dt("message.success.color"), ";\n    box-shadow: ").concat(dt("message.success.shadow"), ";\n}\n\n.p-message-success .p-message-close-button:focus-visible {\n    outline-color: ").concat(dt("message.success.close.button.focus.ring.color"), ";\n    box-shadow: ").concat(dt("message.success.close.button.focus.ring.shadow"), ";\n}\n\n.p-message-success .p-message-close-button:hover {\n    background: ").concat(dt("message.success.close.button.hover.background"), ";\n}\n\n.p-message-success.p-message-outlined {\n    color: ").concat(dt("message.success.outlined.color"), ";\n    outline-color: ").concat(dt("message.success.outlined.border.color"), ";\n}\n\n.p-message-success.p-message-simple {\n    color: ").concat(dt("message.success.simple.color"), ";\n}\n\n.p-message-warn {\n    background: ").concat(dt("message.warn.background"), ";\n    outline-color: ").concat(dt("message.warn.border.color"), ";\n    color: ").concat(dt("message.warn.color"), ";\n    box-shadow: ").concat(dt("message.warn.shadow"), ";\n}\n\n.p-message-warn .p-message-close-button:focus-visible {\n    outline-color: ").concat(dt("message.warn.close.button.focus.ring.color"), ";\n    box-shadow: ").concat(dt("message.warn.close.button.focus.ring.shadow"), ";\n}\n\n.p-message-warn .p-message-close-button:hover {\n    background: ").concat(dt("message.warn.close.button.hover.background"), ";\n}\n\n.p-message-warn.p-message-outlined {\n    color: ").concat(dt("message.warn.outlined.color"), ";\n    outline-color: ").concat(dt("message.warn.outlined.border.color"), ";\n}\n\n.p-message-warn.p-message-simple {\n    color: ").concat(dt("message.warn.simple.color"), ";\n}\n\n.p-message-error {\n    background: ").concat(dt("message.error.background"), ";\n    outline-color: ").concat(dt("message.error.border.color"), ";\n    color: ").concat(dt("message.error.color"), ";\n    box-shadow: ").concat(dt("message.error.shadow"), ";\n}\n\n.p-message-error .p-message-close-button:focus-visible {\n    outline-color: ").concat(dt("message.error.close.button.focus.ring.color"), ";\n    box-shadow: ").concat(dt("message.error.close.button.focus.ring.shadow"), ";\n}\n\n.p-message-error .p-message-close-button:hover {\n    background: ").concat(dt("message.error.close.button.hover.background"), ";\n}\n\n.p-message-error.p-message-outlined {\n    color: ").concat(dt("message.error.outlined.color"), ";\n    outline-color: ").concat(dt("message.error.outlined.border.color"), ";\n}\n\n.p-message-error.p-message-simple {\n    color: ").concat(dt("message.error.simple.color"), ";\n}\n\n.p-message-secondary {\n    background: ").concat(dt("message.secondary.background"), ";\n    outline-color: ").concat(dt("message.secondary.border.color"), ";\n    color: ").concat(dt("message.secondary.color"), ";\n    box-shadow: ").concat(dt("message.secondary.shadow"), ";\n}\n\n.p-message-secondary .p-message-close-button:focus-visible {\n    outline-color: ").concat(dt("message.secondary.close.button.focus.ring.color"), ";\n    box-shadow: ").concat(dt("message.secondary.close.button.focus.ring.shadow"), ";\n}\n\n.p-message-secondary .p-message-close-button:hover {\n    background: ").concat(dt("message.secondary.close.button.hover.background"), ";\n}\n\n.p-message-secondary.p-message-outlined {\n    color: ").concat(dt("message.secondary.outlined.color"), ";\n    outline-color: ").concat(dt("message.secondary.outlined.border.color"), ";\n}\n\n.p-message-secondary.p-message-simple {\n    color: ").concat(dt("message.secondary.simple.color"), ";\n}\n\n.p-message-contrast {\n    background: ").concat(dt("message.contrast.background"), ";\n    outline-color: ").concat(dt("message.contrast.border.color"), ";\n    color: ").concat(dt("message.contrast.color"), ";\n    box-shadow: ").concat(dt("message.contrast.shadow"), ";\n}\n\n.p-message-contrast .p-message-close-button:focus-visible {\n    outline-color: ").concat(dt("message.contrast.close.button.focus.ring.color"), ";\n    box-shadow: ").concat(dt("message.contrast.close.button.focus.ring.shadow"), ";\n}\n\n.p-message-contrast .p-message-close-button:hover {\n    background: ").concat(dt("message.contrast.close.button.hover.background"), ";\n}\n\n.p-message-contrast.p-message-outlined {\n    color: ").concat(dt("message.contrast.outlined.color"), ";\n    outline-color: ").concat(dt("message.contrast.outlined.border.color"), ";\n}\n\n.p-message-contrast.p-message-simple {\n    color: ").concat(dt("message.contrast.simple.color"), ";\n}\n\n.p-message-text {\n    font-size: ").concat(dt("message.text.font.size"), ";\n    font-weight: ").concat(dt("message.text.font.weight"), ";\n}\n\n.p-message-icon {\n    font-size: ").concat(dt("message.icon.size"), ";\n    width: ").concat(dt("message.icon.size"), ";\n    height: ").concat(dt("message.icon.size"), ";\n}\n\n.p-message-enter-from {\n    opacity: 0;\n}\n\n.p-message-enter-active {\n    transition: opacity 0.3s;\n}\n\n.p-message.p-message-leave-from {\n    max-height: 1000px;\n}\n\n.p-message.p-message-leave-to {\n    max-height: 0;\n    opacity: 0;\n    margin: 0;\n}\n\n.p-message-leave-active {\n    overflow: hidden;\n    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;\n}\n\n.p-message-leave-active .p-message-close-button {\n    opacity: 0;\n}\n\n.p-message-sm .p-message-content {\n    padding: ").concat(dt("message.content.sm.padding"), ";\n}\n\n.p-message-sm .p-message-text {\n    font-size: ").concat(dt("message.text.sm.font.size"), ";\n}\n\n.p-message-sm .p-message-icon {\n    font-size: ").concat(dt("message.icon.sm.size"), ";\n    width: ").concat(dt("message.icon.sm.size"), ";\n    height: ").concat(dt("message.icon.sm.size"), ";\n}\n\n.p-message-sm .p-message-close-icon {\n    font-size: ").concat(dt("message.close.icon.sm.size"), ";\n    width: ").concat(dt("message.close.icon.sm.size"), ";\n    height: ").concat(dt("message.close.icon.sm.size"), ";\n}\n\n.p-message-lg .p-message-content {\n    padding: ").concat(dt("message.content.lg.padding"), ";\n}\n\n.p-message-lg .p-message-text {\n    font-size: ").concat(dt("message.text.lg.font.size"), ";\n}\n\n.p-message-lg .p-message-icon {\n    font-size: ").concat(dt("message.icon.lg.size"), ";\n    width: ").concat(dt("message.icon.lg.size"), ";\n    height: ").concat(dt("message.icon.lg.size"), ";\n}\n\n.p-message-lg .p-message-close-icon {\n    font-size: ").concat(dt("message.close.icon.lg.size"), ";\n    width: ").concat(dt("message.close.icon.lg.size"), ";\n    height: ").concat(dt("message.close.icon.lg.size"), ";\n}\n\n.p-message-outlined {\n    background: transparent;\n    outline-width: ").concat(dt("message.outlined.border.width"), ";\n}\n\n.p-message-simple {\n    background: transparent;\n    outline-color: transparent;\n    box-shadow: none;\n}\n\n.p-message-simple .p-message-content {\n    padding: ").concat(dt("message.simple.content.padding"), ";\n}\n\n.p-message-outlined .p-message-close-button:hover,\n.p-message-simple .p-message-close-button:hover {\n    background: transparent;\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ["p-message p-component p-message-" + props.severity, {
      "p-message-outlined": props.variant === "outlined",
      "p-message-simple": props.variant === "simple",
      "p-message-sm": props.size === "small",
      "p-message-lg": props.size === "large"
    }];
  },
  content: "p-message-content",
  icon: "p-message-icon",
  text: "p-message-text",
  closeButton: "p-message-close-button",
  closeIcon: "p-message-close-icon"
};
var MessageStyle = BaseStyle.extend({
  name: "message",
  theme,
  classes
});
var script$1 = {
  name: "BaseMessage",
  "extends": script$U,
  props: {
    severity: {
      type: String,
      "default": "info"
    },
    closable: {
      type: Boolean,
      "default": false
    },
    life: {
      type: Number,
      "default": null
    },
    icon: {
      type: String,
      "default": void 0
    },
    closeIcon: {
      type: String,
      "default": void 0
    },
    closeButtonProps: {
      type: null,
      "default": null
    },
    size: {
      type: String,
      "default": null
    },
    variant: {
      type: String,
      "default": null
    }
  },
  style: MessageStyle,
  provide: function provide() {
    return {
      $pcMessage: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Message",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["close", "life-end"],
  timeout: null,
  data: function data() {
    return {
      visible: true
    };
  },
  mounted: function mounted() {
    var _this = this;
    if (this.life) {
      setTimeout(function() {
        _this.visible = false;
        _this.$emit("life-end");
      }, this.life);
    }
  },
  methods: {
    close: function close(event) {
      this.visible = false;
      this.$emit("close", event);
    }
  },
  computed: {
    closeAriaLabel: function closeAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    }
  },
  directives: {
    ripple: Ripple
  },
  components: {
    TimesIcon: script$F
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1 = ["aria-label"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TimesIcon = resolveComponent("TimesIcon");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createBlock(Transition, mergeProps({
    name: "p-message",
    appear: ""
  }, _ctx.ptmi("transition")), {
    "default": withCtx(function() {
      return [withDirectives(createElementVNode("div", mergeProps({
        "class": _ctx.cx("root"),
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": "true"
      }, _ctx.ptm("root")), [_ctx.$slots.container ? renderSlot(_ctx.$slots, "container", {
        key: 0,
        closeCallback: $options.close
      }) : (openBlock(), createElementBlock("div", mergeProps({
        key: 1,
        "class": _ctx.cx("content")
      }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "icon", {
        "class": normalizeClass(_ctx.cx("icon"))
      }, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.icon ? "span" : null), mergeProps({
          "class": [_ctx.cx("icon"), _ctx.icon]
        }, _ctx.ptm("icon")), null, 16, ["class"]))];
      }), _ctx.$slots["default"] ? (openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        "class": _ctx.cx("text")
      }, _ctx.ptm("text")), [renderSlot(_ctx.$slots, "default")], 16)) : createCommentVNode("", true), _ctx.closable ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
        key: 1,
        "class": _ctx.cx("closeButton"),
        "aria-label": $options.closeAriaLabel,
        type: "button",
        onClick: _cache[0] || (_cache[0] = function($event) {
          return $options.close($event);
        })
      }, _objectSpread(_objectSpread({}, _ctx.closeButtonProps), _ctx.ptm("closeButton"))), [renderSlot(_ctx.$slots, "closeicon", {}, function() {
        return [_ctx.closeIcon ? (openBlock(), createElementBlock("i", mergeProps({
          key: 0,
          "class": [_ctx.cx("closeIcon"), _ctx.closeIcon]
        }, _ctx.ptm("closeIcon")), null, 16)) : (openBlock(), createBlock(_component_TimesIcon, mergeProps({
          key: 1,
          "class": [_ctx.cx("closeIcon"), _ctx.closeIcon]
        }, _ctx.ptm("closeIcon")), null, 16, ["class"]))];
      })], 16, _hoisted_1)), [[_directive_ripple]]) : createCommentVNode("", true)], 16))], 16), [[vShow, $data.visible]])];
    }),
    _: 3
  }, 16);
}
script.render = render;
function useConfirmation() {
  const confirm = useConfirm();
  const { showSuccessMessage, showInfoMessage } = useMessages();
  function doNothing(id) {
  }
  function confirmDelete(idToDelete, acceptCallback, rejectCallback = doNothing) {
    confirm.require({
      message: "Should this entry be deleted ?",
      header: "Are you sure",
      icon: "pi pi-info-circle",
      rejectLabel: "Cancel",
      acceptLabel: "Delete",
      rejectClass: "p-button-secondary p-button-outlined",
      acceptClass: "p-button-danger",
      accept: () => {
        showSuccessMessage("Action confirmed", `Entry with ID ${idToDelete} was deleted`);
        acceptCallback(idToDelete);
      },
      reject: () => {
        showInfoMessage("Action cancelled", "No changes are processed");
        rejectCallback(idToDelete);
      }
    });
  }
  function confirmAction(acceptCallback, acceptMessage = "Action confirmed", acceptMessageDetail = acceptMessage, header = "Attention", message = "Should proceed with this action ?") {
    confirm.require({
      message,
      header,
      icon: "pi pi-info-circle",
      rejectLabel: "Cancel",
      acceptLabel: "Accept",
      rejectClass: "p-button-secondary p-button-outlined",
      acceptClass: "p-button-success",
      accept: () => {
        acceptCallback();
        showInfoMessage(acceptMessage, acceptMessageDetail);
      },
      reject: () => {
        showInfoMessage("Action cancelled");
      }
    });
  }
  return { confirmDelete, confirmAction };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "messages",
  __ssrInlineRender: true,
  setup(__props) {
    const { showSuccessMessage, showInfoMessage, showWarnMessage, showErrorMessage } = useMessages();
    const { confirmAction, confirmDelete } = useConfirmation();
    const lastDeletedId = ref(0);
    function doSomeAction() {
    }
    function doSomeDeleteAction(idToDelete) {
      lastDeletedId.value = idToDelete;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script$H;
      const _component_Message = script;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><h2>PrimeVue Toast Demo</h2><div class="flex flex-row gap-4"><div>`);
      _push(ssrRenderComponent(_component_Button, {
        label: "Success",
        class: "p-button-success",
        onClick: ($event) => unref(showSuccessMessage)("Success Message", "Message Content")
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_Button, {
        label: "Info",
        class: "p-button-info",
        onClick: ($event) => unref(showInfoMessage)("Info Message", "Message Content")
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_Button, {
        label: "Warn",
        class: "p-button-warning",
        onClick: ($event) => unref(showWarnMessage)("Warn Message", "Message Content")
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_Button, {
        label: "Error",
        class: "p-button-danger",
        onClick: ($event) => unref(showErrorMessage)("Error Message", "Message Content")
      }, null, _parent));
      _push(`</div></div><h2>Confirmation</h2><div class="flex flex-row gap-4">`);
      _push(ssrRenderComponent(_component_Button, {
        label: "Trigger action with confirmation",
        class: "p-button-info",
        onClick: ($event) => unref(confirmAction)(doSomeAction)
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        label: "Trigger delete action with confirmation",
        class: "p-button-danger",
        onClick: ($event) => unref(confirmDelete)(1, doSomeDeleteAction)
      }, null, _parent));
      _push(`</div><h2>Messages</h2><div class="flex flex-row gap-4 flex-wrap">`);
      _push(ssrRenderComponent(_component_Message, { severity: "success" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Success Message Content `);
          } else {
            return [
              createTextVNode(" Success Message Content ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Message, { severity: "info" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Info Message Content `);
          } else {
            return [
              createTextVNode(" Info Message Content ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Message, { severity: "warn" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Warning Message Content `);
          } else {
            return [
              createTextVNode(" Warning Message Content ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Message, { severity: "error" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Error Message Content `);
          } else {
            return [
              createTextVNode(" Error Message Content ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/prime/messages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
