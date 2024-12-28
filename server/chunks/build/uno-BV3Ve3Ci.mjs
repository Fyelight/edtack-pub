import { _ as __nuxt_component_0 } from './client-only-Bwxzq3Sq.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "uno",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><h2>UnoCSS</h2><div h-full text-center flex select-none all:transition-400><div ma><div text-6xl font-bold fw100 animate-bounce-alt animate-count-infinite animate-5s> unocss </div><div dark:op30 text-lg fw300 m1> The instant on-demand Atomic CSS engine. </div><div m2 flex justify-center text-2xl dark:op30 hover="op80"><a i-mdi-github-circle text-inherit text-8xl href="https://github.com/antfu/unocss" target="_blank"></a></div></div></div><div bottom-5 right-0 left-0 text-center dark:op30 fw300> on-demand · instant · fully customizable </div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ui/uno.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
