import { d as script$M, s as script$H } from './server.mjs';
import { ref, computed, watch, useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { defineStore } from 'pinia';
import { u as useDataStore } from './data-BKmN_Ove.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const useThemeStore = defineStore("theme", {
  // a function that returns a fresh state
  state: () => ({
    themeName: "aura",
    themeColor: "green"
  }),
  // optional getters
  getters: {
    theme: (state) => {
      return `${state.themeName}-${state.themeColor}`;
    }
  },
  // optional actions
  actions: {
    setTheme(themeName) {
      this.themeName = themeName;
    },
    setColor(colorName) {
      this.themeColor = colorName;
    }
  }
});
const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("sfxcode");
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  watch(name, () => {
    count.value = 0;
  });
  return { count, name, doubleCount, increment };
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "stores",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    const dataStore = useDataStore();
    const counterStore = useCounterStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputText = script$M;
      const _component_Button = script$H;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-e9130fde><h2 data-v-e9130fde>Store Settings</h2><h5 class="font-bold text-2xl mb-4" data-v-e9130fde> Primevue Theme Store </h5><div class="grid grid-cols-2 gap-4" data-v-e9130fde><div data-v-e9130fde>Theme Name</div><div data-v-e9130fde>${ssrInterpolate(unref(themeStore).themeName)}</div><div data-v-e9130fde>Theme Color</div><div data-v-e9130fde>${ssrInterpolate(unref(themeStore).themeColor)}</div></div><h5 class="font-bold text-2xl mb-4" data-v-e9130fde> Data Store (Option Store) </h5><span class="text-xs" data-v-e9130fde>Example of a Data Store</span><div class="grid grid-cols-2 mt-6 gap-4" data-v-e9130fde><div data-v-e9130fde>Products</div><div data-v-e9130fde>${ssrInterpolate(unref(dataStore).products.length)}</div></div><h5 class="font-bold text-2xl mb-4" data-v-e9130fde> Counter Store (Setup Store) </h5><span class="text-xs" data-v-e9130fde>Example of a Data Store</span><div class="mt-6" data-v-e9130fde><div data-v-e9130fde>`);
      _push(ssrRenderComponent(_component_InputText, {
        modelValue: unref(counterStore).name,
        "onUpdate:modelValue": ($event) => unref(counterStore).name = $event
      }, null, _parent));
      _push(`</div></div><div class="mt-3" data-v-e9130fde>${ssrInterpolate(unref(counterStore).name)} clicked ${ssrInterpolate(unref(counterStore).count)} times. Doubled value: ${ssrInterpolate(unref(counterStore).doubleCount)}</div><div class="mt-3" data-v-e9130fde>`);
      _push(ssrRenderComponent(_component_Button, {
        label: unref(counterStore).name,
        onClick: ($event) => unref(counterStore).increment()
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/data/stores.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stores = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e9130fde"]]);

export { stores as default };
