import { defineComponent, h, useSSRContext } from 'vue';

const _sfc_main = defineComponent({
  name: "DocumentDrivenNotFound",
  render() {
    return h("div", "Document not found");
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+content@2.13.4_nuxt@3.14.1592_rollup@4.27.3_vue@3.5.13/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DocumentDrivenNotFound = Object.assign(_sfc_main, { __name: "DocumentDrivenNotFound" });

export { DocumentDrivenNotFound as default };
