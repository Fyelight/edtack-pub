import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><h2>Icons by UnoCSS</h2><div class="i-logos-vue text-6xl"></div><h3>Iconset: MDI</h3><div class="mt-6 grid grid-cols-3"><div class="i-mdi-information text-4xl text-green-600-500-500"></div><div class="i-mdi-alarm text-4xl text-blue-500"></div><div class="i-mdi-github-circle text-4xl text-purple-500"></div></div><h3>Iconset: TWEMOJI</h3><div class="mt-6 grid grid-cols-3"><div class="i-twemoji-1st-place-medal text-4xl"></div><div class="i-twemoji-2nd-place-medal text-4xl"></div><div class="i-twemoji-3rd-place-medal text-4xl"></div></div><h3>Iconset: Prime</h3><div class="mt-6 grid grid-cols-3"><div class="i-prime-home text-4xl"></div><div class="i-prime-comments text-4xl text-green-400"></div><div class="i-prime-check-circle"></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ui/icons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const icons = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { icons as default };
