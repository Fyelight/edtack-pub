import __nuxt_component_0 from './ContentDoc-DPJhLxFd.mjs';
import __nuxt_component_1 from './ContentRenderer-Y8gqmv_H.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as useRoute } from './server.mjs';
import './ContentQuery-BP34xA2F.mjs';
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
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import '@primeuix/styled';
import 'node:url';
import 'consola/core';
import 'ipx';
import './asyncData-9RaI5sxX.mjs';
import './query-CgI7t6Iq.mjs';
import './preview-K77awpMj.mjs';
import './ContentRendererMarkdown-Bpk30i16.mjs';
import '../_/index.mjs';
import 'property-information';
import './node-hwMnPqaI.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const route = useRoute();
    const slug = (_a = route.params.slug) == null ? void 0 : _a.toString();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentDoc = __nuxt_component_0;
      const _component_ContentRenderer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "markdown" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ContentDoc, { path: unref(slug) }, {
        default: withCtx(({ doc }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card"${_scopeId}><h2${_scopeId}>${ssrInterpolate(doc.title)}</h2><p${_scopeId}>${ssrInterpolate(doc.description)}</p><p class="font-bold"${_scopeId}> Author: ${ssrInterpolate(doc.author)}</p><hr${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ContentRenderer, { value: doc }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "card" }, [
                createVNode("h2", null, toDisplayString(doc.title), 1),
                createVNode("p", null, toDisplayString(doc.description), 1),
                createVNode("p", { class: "font-bold" }, " Author: " + toDisplayString(doc.author), 1),
                createVNode("hr"),
                createVNode(_component_ContentRenderer, { value: doc }, null, 8, ["value"])
              ])
            ];
          }
        }),
        "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-2xl"${_scopeId}> Content Page (${ssrInterpolate(unref(slug))}) not found </h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-2xl" }, " Content Page (" + toDisplayString(unref(slug)) + ") not found ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cms/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
