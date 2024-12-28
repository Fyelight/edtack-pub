import { B as BaseStyle, j as script$U } from './server.mjs';
import { openBlock, createElementBlock, mergeProps, createElementVNode, renderSlot } from 'vue';

var theme = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-toolbar {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    padding: ".concat(dt("toolbar.padding"), ";\n    background: ").concat(dt("toolbar.background"), ";\n    border: 1px solid ").concat(dt("toolbar.border.color"), ";\n    color: ").concat(dt("toolbar.color"), ";\n    border-radius: ").concat(dt("toolbar.border.radius"), ";\n    gap: ").concat(dt("toolbar.gap"), ";\n}\n\n.p-toolbar-start,\n.p-toolbar-center,\n.p-toolbar-end {\n    display: flex;\n    align-items: center;\n}\n");
};
var classes = {
  root: "p-toolbar p-component",
  start: "p-toolbar-start",
  center: "p-toolbar-center",
  end: "p-toolbar-end"
};
var ToolbarStyle = BaseStyle.extend({
  name: "toolbar",
  theme,
  classes
});
var script$1 = {
  name: "BaseToolbar",
  "extends": script$U,
  props: {
    ariaLabelledby: {
      type: String,
      "default": null
    }
  },
  style: ToolbarStyle,
  provide: function provide() {
    return {
      $pcToolbar: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Toolbar",
  "extends": script$1,
  inheritAttrs: false
};
var _hoisted_1 = ["aria-labelledby"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    role: "toolbar",
    "aria-labelledby": _ctx.ariaLabelledby
  }, _ctx.ptmi("root")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("start")
  }, _ctx.ptm("start")), [renderSlot(_ctx.$slots, "start")], 16), createElementVNode("div", mergeProps({
    "class": _ctx.cx("center")
  }, _ctx.ptm("center")), [renderSlot(_ctx.$slots, "center")], 16), createElementVNode("div", mergeProps({
    "class": _ctx.cx("end")
  }, _ctx.ptm("end")), [renderSlot(_ctx.$slots, "end")], 16)], 16, _hoisted_1);
}
script.render = render;

export { script as s };
