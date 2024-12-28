import { useSSRContext, defineComponent, mergeProps, unref, withAsyncContext, computed, toValue, reactive } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { R as hash } from '../nitro/nitro.mjs';
import { s as script$H, f as fetchDefaults, c as useRequestFetch } from './server.mjs';
import { u as useAsyncData } from './asyncData-9RaI5sxX.mjs';
import { u as useCounter, a as useTimeAgo } from './index-D2Eqydq5.mjs';
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
import 'node:http';
import 'node:https';
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

function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = [{}, arg1];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError"));
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(new DOMException("Request aborted due to timeout.", "AbortError")), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PageView",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/pageview", "$KCIBJSUiAg")), __temp = await __temp, __restore(), __temp);
    const time = useTimeAgo(computed(() => {
      var _a2;
      return (_a2 = data.value) == null ? void 0 : _a2.startAt;
    }));
    const pageview = (_a = data.value) == null ? void 0 : _a.pageview;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-gray:80 text-2xl" }, _attrs))}><span font-500 text-gray>${ssrInterpolate(unref(pageview))}</span> page views since <span text-gray>${ssrInterpolate(unref(time))}</span></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageView.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "PageView" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "server",
  __ssrInlineRender: true,
  setup(__props) {
    const count = useCounter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageView = __nuxt_component_0;
      const _component_Button = script$H;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><h2>Server API Usage</h2>`);
      _push(ssrRenderComponent(_component_PageView, null, null, _parent));
      _push(`<h2>Counter (useState)</h2><div class="grid grid-cols-3 w-80 mt-8">`);
      _push(ssrRenderComponent(_component_Button, {
        icon: "pi pi-plus",
        class: "p-button-rounded p-button-info",
        onClick: ($event) => unref(count).inc()
      }, null, _parent));
      _push(`<span class="text-4xl">${ssrInterpolate(unref(count).count)}</span>`);
      _push(ssrRenderComponent(_component_Button, {
        icon: "pi pi-minus",
        class: "p-button-rounded p-button-success",
        onClick: ($event) => unref(count).dec()
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/data/server.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
