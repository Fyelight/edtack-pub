import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { b as useI18n } from './server.mjs';
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

const testNumber = 42.4242;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "i18n",
  __ssrInlineRender: true,
  setup(__props) {
    const { d, t, n, locale, locales, setLocale } = useI18n();
    const testDate = /* @__PURE__ */ new Date();
    const availableLocales = computed(() => {
      var _a;
      return (_a = locales.value) == null ? void 0 : _a.filter((l) => l.code !== locale.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><h2>Localization</h2> Switch Locale to <!--[-->`);
      ssrRenderList(unref(availableLocales), (currentLocale) => {
        _push(`<a href="#">${ssrInterpolate(currentLocale.name)}</a>`);
      });
      _push(`<!--]--><p>${ssrInterpolate(unref(t)("save"))}</p><p>${ssrInterpolate(unref(d)(unref(testDate), "short"))}</p><p>${ssrInterpolate(unref(n)(testNumber, "currency"))}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/data/i18n.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
