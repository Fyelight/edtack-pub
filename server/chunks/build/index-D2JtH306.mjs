import { b as useI18n, F as FormKitLazyProvider, e as _sfc_main$z } from './server.mjs';
import { defineComponent, ref, reactive, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { u as useFormKitSchema } from './useFormKitSchema-CHjihIgs.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

function useFormKitRepeater() {
  const { addElement, addComponent, addElementsInOuterDiv } = useFormKitSchema();
  function addInsertButton(label = "Add", innerClass = "", outerClass = "", buttonClass = "p-button-sm", iconClass = "pi pi-plus") {
    return addElementsInOuterDiv([
      addComponent("Button", { onClick: "$addNode($node)", label, class: buttonClass, icon: iconClass }, "$node.value.length == 0")
    ], innerClass, outerClass);
  }
  function addListGroupFunctions(data, addNodeDefaultObject = {}) {
    const swapElements = (array, index1, index2) => {
      array[index1] = array.splice(index2, 1, array[index1])[0];
      return array;
    };
    data.addNode = (parentNode) => () => {
      const newArray = [...parentNode.value, addNodeDefaultObject];
      parentNode.input(newArray, false);
    };
    data.removeNode = (parentNode, index) => () => {
      parentNode.input(parentNode._value.filter((_, i) => i !== index), false);
    };
    data.moveNodeUp = (parentNode, index) => () => {
      const array = [...parentNode.value];
      if (index > 0)
        parentNode.input(swapElements(array, index - 1, index), false);
    };
    data.moveNodeDown = (parentNode, index) => () => {
      const array = [...parentNode.value];
      if (index < array.length - 1)
        parentNode.input(swapElements(array, index, index + 1), false);
    };
    data.copyNode = (parentNode, index) => () => {
      const obj = parentNode.value[index];
      const newArray = [...parentNode.value, { ...obj }];
      parentNode.input(newArray, false);
    };
  }
  function addGroupButtons(innerClass = "", outerClass = "col-4", label = "Actions", help = "", render = "true") {
    const addButtonComponent = (onClick = "", label2 = "", icon = "", severity = "", render2 = "true", styleClass = "p-button-sm") => {
      return addComponent("Button", { onClick, label: label2, icon, class: styleClass, severity }, render2);
    };
    return addElementsInOuterDiv([
      addButtonComponent("$removeNode($node, $index)", "", "pi pi-times", "danger"),
      addButtonComponent("$copyNode($node, $index)", "", "pi pi-plus"),
      addButtonComponent("$moveNodeUp($node, $index)", "", "pi pi-arrow-up", "secondary", "$index != 0"),
      addElement("span", [], { class: "p-space" }, "$index == 0"),
      addButtonComponent("$moveNodeDown($node, $index)", "", "pi pi-arrow-down", "secondary", "$index < $node.value.length -1"),
      addElement("span", [], { class: "p-space" }, "$index == $node.value.length -1")
    ], `p-action-buttons ${innerClass}`, outerClass, label, help, render);
  }
  return { addInsertButton, addGroupButtons, addListGroupFunctions };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { addElement, addList, addListGroup } = useFormKitSchema();
    const { addListGroupFunctions, addGroupButtons, addInsertButton } = useFormKitRepeater();
    const { t } = useI18n();
    const options = [
      { label: "Every page load", value: "refresh" },
      { label: "Ever hour", value: "hourly" },
      { label: "Every day", value: "daily" }
    ];
    const data = ref();
    const schema = reactive(
      [
        addElement("h5", ["Validation with FormKit - Inputs from PrimeVue"]),
        {
          $formkit: "primeInputText",
          name: "email",
          label: "Email",
          help: "This will be used for your account.",
          validation: "required|email",
          outerClass: "col-7"
        },
        addList("additionalMails", [
          addElement("div", ["Additional Mail"], { class: "text-xl" }),
          addInsertButton(),
          addListGroup(
            [
              {
                $formkit: "primeInputText",
                label: "Additional Mail",
                name: "email",
                outerClass: "col-6"
              },
              addGroupButtons("", "col-6")
            ]
          )
        ], true, "true"),
        {
          $formkit: "primeTextarea",
          name: "myText",
          label: "Text",
          rows: "5"
        },
        {
          $formkit: "primeDatePicker",
          name: "myDatePicker",
          label: "Date Picker",
          validation: "",
          showIcon: true
        },
        {
          $formkit: "primePassword",
          name: "password",
          label: "Password",
          help: "Enter your new password.",
          validation: "required|length:5,16",
          outerClass: "col-6"
        },
        {
          $formkit: "primePassword",
          name: "password_confirm",
          label: "Confirm password",
          toggleMask: true,
          feedback: false,
          help: "Enter your new password again to confirm it.",
          validation: "required|confirm",
          validationLabel: "password confirmation",
          outerClass: "col-6"
        },
        {
          $formkit: "primeCheckbox",
          name: "eu_citizen",
          id: "eu",
          suffix: "Are you a european citizen?"
        },
        {
          $formkit: "primeSelect",
          if: "$eu_citizen",
          // 👀 Oooo, conditionals!
          name: "cookie_notice",
          label: "Cookie notice frequency",
          value: "hourly",
          showClear: false,
          filter: false,
          optionLabel: "label",
          optionValue: "value",
          options,
          help: "How often should we display a cookie notice?"
        },
        {
          $formkit: "primeSlider",
          name: "slider",
          label: "Max messages",
          style: "width: 200px;margin-top: 6px;margin-bottom: 4px",
          min: 5,
          step: 5,
          value: 10
        },
        {
          $formkit: "primeKnob",
          name: "knob",
          label: "Use Knob",
          value: 50
        }
      ]
    );
    async function submitHandler() {
      await new Promise((resolve) => setTimeout(resolve, 1e3));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormKitDataEdit = _sfc_main$z;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card flex flex-wrap gap-10" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FormKitLazyProvider), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="basis-1/3 md:basis-1/4"${_scopeId}><h2${_scopeId}>Basic Demo</h2>`);
            if (unref(data)) {
              _push2(`<div class="min-w-25rem"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_FormKitDataEdit, {
                schema: unref(schema),
                data: unref(data),
                "debug-schema": false,
                "debug-data": true,
                "submit-label": unref(t)("save"),
                onDataSaved: submitHandler
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="basis-1/2 md:basis-1/3"${_scopeId}><h2${_scopeId}>Formkit-PrimeVue</h2><div class="text-xl mt-12"${_scopeId}><h4${_scopeId}>GitHub</h4><a href="https://github.com/sfxcode/formkit-primevue"${_scopeId}>formkit-primevue</a><h4${_scopeId}>More examples</h4><a href="https://formkit-primevue.netlify.app/"${_scopeId}>Formkit PrimeVue Demo</a></div></div>`);
          } else {
            return [
              createVNode("div", { class: "basis-1/3 md:basis-1/4" }, [
                createVNode("h2", null, "Basic Demo"),
                unref(data) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "min-w-25rem"
                }, [
                  createVNode(_component_FormKitDataEdit, {
                    schema: unref(schema),
                    data: unref(data),
                    "debug-schema": false,
                    "debug-data": true,
                    "submit-label": unref(t)("save"),
                    onDataSaved: submitHandler
                  }, null, 8, ["schema", "data", "submit-label"])
                ])) : createCommentVNode("", true)
              ]),
              createVNode("div", { class: "basis-1/2 md:basis-1/3" }, [
                createVNode("h2", null, "Formkit-PrimeVue"),
                createVNode("div", { class: "text-xl mt-12" }, [
                  createVNode("h4", null, "GitHub"),
                  createVNode("a", { href: "https://github.com/sfxcode/formkit-primevue" }, "formkit-primevue"),
                  createVNode("h4", null, "More examples"),
                  createVNode("a", { href: "https://formkit-primevue.netlify.app/" }, "Formkit PrimeVue Demo")
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/form/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
