import { _ as __nuxt_component_0$1 } from './server.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const weeklyChallenges = ref([
      { id: 1, name: "Reverse String", difficulty: "Easy", solved: false, credits: 5 },
      { id: 2, name: "Valid Parentheses", difficulty: "Easy", solved: true, credits: 5 },
      { id: 3, name: "Merge Two Sorted Lists", difficulty: "Medium", solved: false, credits: 5 },
      { id: 4, name: "Maximum Subarray", difficulty: "Medium", solved: false, credits: 5 },
      { id: 5, name: "Binary Tree Level Order Traversal", difficulty: "Hard", solved: false, credits: 5 }
    ]);
    const userCredits = ref(100);
    const solvedChallenges = computed(() => {
      return weeklyChallenges.value.filter((challenge) => challenge.solved).length;
    });
    const challengeProgress = computed(() => {
      return solvedChallenges.value / weeklyChallenges.value.length * 100;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "problem-list-container" }, _attrs))} data-v-7a8afce1><h1 class="problem-list-title" data-v-7a8afce1> Edtack </h1><div class="main-content" data-v-7a8afce1><div class="left-content" data-v-7a8afce1><div class="challenges-section" data-v-7a8afce1><h2 class="section-title" data-v-7a8afce1> Weekly Challenges </h2><div class="progress-bar" data-v-7a8afce1><div class="progress" style="${ssrRenderStyle({ width: `${challengeProgress.value}%` })}" data-v-7a8afce1></div></div><p class="progress-text" data-v-7a8afce1>${ssrInterpolate(solvedChallenges.value)} / ${ssrInterpolate(weeklyChallenges.value.length)} completed </p><ul class="challenge-list" data-v-7a8afce1><!--[-->`);
      ssrRenderList(weeklyChallenges.value, (challenge) => {
        _push(`<li class="challenge-item" data-v-7a8afce1>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: `/challenge?name=${challenge.name}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="challenge-name" data-v-7a8afce1${_scopeId}>${ssrInterpolate(challenge.name)}</span>`);
            } else {
              return [
                createVNode("span", { class: "challenge-name" }, toDisplayString(challenge.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="challenge-info" data-v-7a8afce1><span class="${ssrRenderClass([[challenge.difficulty.toLowerCase()], "challenge-difficulty"])}" data-v-7a8afce1>${ssrInterpolate(challenge.difficulty)}</span><span class="challenge-credits" data-v-7a8afce1>+${ssrInterpolate(challenge.credits)} credits</span></div></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="credits-segment" data-v-7a8afce1><h2 class="credits-title" data-v-7a8afce1> Your Credits </h2><div class="credits-amount" data-v-7a8afce1>${ssrInterpolate(userCredits.value)}</div><button class="add-credits-button" data-v-7a8afce1> Add Credits </button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7a8afce1"]]);

export { index as default };
