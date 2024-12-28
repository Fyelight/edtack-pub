import ContentSlot from './ContentSlot-rXnIxS2F.mjs';
import { defineComponent, getCurrentInstance, useSlots, computed, useSSRContext } from 'vue';
import './node-hwMnPqaI.mjs';

const _sfc_main = defineComponent({
  name: "Markdown",
  extends: ContentSlot,
  setup(props) {
    const { parent } = getCurrentInstance();
    const { between, default: fallbackSlot } = useSlots();
    const tags = computed(() => {
      if (typeof props.unwrap === "string") {
        return props.unwrap.split(" ");
      }
      return ["*"];
    });
    return {
      fallbackSlot,
      tags,
      between,
      parent
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+content@2.13.4_nuxt@3.14.1592_rollup@4.27.3_vue@3.5.13/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Markdown = Object.assign(_sfc_main, { __name: "Markdown" });

export { Markdown as default };
