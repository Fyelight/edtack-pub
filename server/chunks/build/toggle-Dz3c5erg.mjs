import { b as useI18n, F as FormKitLazyProvider, g as script$4, e as _sfc_main$z, h as _sfc_main$y } from './server.mjs';
import { defineComponent, ref, reactive, mergeProps, unref, withCtx, isRef, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { u as useFormKitSchema } from './useFormKitSchema-CHjihIgs.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useMessages } from './messages-BLbUm5JL.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "toggle",
  __ssrInlineRender: true,
  setup(__props) {
    const { addElement } = useFormKitSchema();
    const { t } = useI18n();
    const horizontal = ref(false);
    const edit = ref(true);
    const schema = reactive(
      [
        addElement("h2", ["Register ", "$email"]),
        addElement("h3", "Header Text H3"),
        {
          $formkit: "primeInputText",
          name: "name",
          label: "Name",
          validation: "required"
        },
        {
          $formkit: "primeInputText",
          name: "email",
          label: "Email",
          help: "This will be used for your account.",
          validation: "required|email",
          iconPrefix: "pi pi-book"
        },
        {
          $formkit: "primeTextarea",
          name: "text",
          label: "Text",
          validation: "",
          rows: "6"
        },
        {
          $formkit: "primeInputNumber",
          name: "number",
          label: "Balance",
          validation: "max:10000",
          useGrouping: true,
          minFractionDigits: 2
        },
        {
          $formkit: "primeDatePicker",
          name: "date",
          label: "Date"
        },
        addElement("h3", "Useful Links"),
        {
          $formkit: "primeOutputLink",
          name: "field",
          label: "Google",
          value: "https://www.google.de",
          iconSuffix: "pi pi-check",
          prefix: "-> "
        }
      ]
    );
    const outputSchema = reactive(
      [
        addElement("h2", ["Register ", "$email"]),
        addElement("h3", "Header Text H3"),
        {
          $formkit: "primeOutputText",
          name: "name",
          label: "Name",
          validation: "required"
        },
        {
          $formkit: "primeOutputText",
          name: "email",
          label: "Email",
          iconPrefix: "pi pi-book"
        },
        {
          $formkit: "primeOutputText",
          name: "text",
          label: "Text",
          class: "text-justify"
        },
        {
          $formkit: "primeOutputNumber",
          name: "number",
          label: "Balance",
          format: "currency"
        },
        {
          $formkit: "primeOutputDate",
          name: "date",
          label: "Date"
        },
        addElement("h3", "Useful Links"),
        {
          $formkit: "primeOutputLink",
          name: "field",
          value: "https://www.google.de",
          label: "Google",
          iconSuffix: "pi pi-check",
          prefix: "-> "
        }
      ]
    );
    const data = ref({ name: "Tom", email: "tom@coding-universe.com", date: /* @__PURE__ */ new Date(), number: 2222.33, text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." });
    const { showSuccessMessage } = useMessages();
    async function submitHandler() {
      showSuccessMessage("Form Submitted ...", "Form submitted successfully");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ToggleSwitch = script$4;
      const _component_FormKitDataEdit = _sfc_main$z;
      const _component_FormKitDataView = _sfc_main$y;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card gap-10" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FormKitLazyProvider), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="basis-1/2 md:basis-1/3"${_scopeId}><h2${_scopeId}>Data Edit</h2><div class="flex gap-2 mb-4"${_scopeId}> Edit Mode `);
            _push2(ssrRenderComponent(_component_ToggleSwitch, {
              modelValue: unref(edit),
              "onUpdate:modelValue": ($event) => isRef(edit) ? edit.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(` Horizontal `);
            _push2(ssrRenderComponent(_component_ToggleSwitch, {
              modelValue: unref(horizontal),
              "onUpdate:modelValue": ($event) => isRef(horizontal) ? horizontal.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="max-w-100"${_scopeId}>`);
            if (unref(edit)) {
              _push2(ssrRenderComponent(_component_FormKitDataEdit, {
                data: unref(data),
                schema: unref(schema),
                "submit-label": unref(t)("save"),
                "form-class": unref(horizontal) ? "form-horizontal" : "",
                "debug-data": true,
                onDataSaved: submitHandler
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!unref(edit)) {
              _push2(ssrRenderComponent(_component_FormKitDataView, {
                data: unref(data),
                schema: unref(outputSchema),
                "form-class": unref(horizontal) ? "form-horizontal" : "",
                "debug-data": true
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "basis-1/2 md:basis-1/3" }, [
                createVNode("h2", null, "Data Edit"),
                createVNode("div", { class: "flex gap-2 mb-4" }, [
                  createTextVNode(" Edit Mode "),
                  createVNode(_component_ToggleSwitch, {
                    modelValue: unref(edit),
                    "onUpdate:modelValue": ($event) => isRef(edit) ? edit.value = $event : null
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createTextVNode(" Horizontal "),
                  createVNode(_component_ToggleSwitch, {
                    modelValue: unref(horizontal),
                    "onUpdate:modelValue": ($event) => isRef(horizontal) ? horizontal.value = $event : null
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "max-w-100" }, [
                  unref(edit) ? (openBlock(), createBlock(_component_FormKitDataEdit, {
                    key: 0,
                    data: unref(data),
                    schema: unref(schema),
                    "submit-label": unref(t)("save"),
                    "form-class": unref(horizontal) ? "form-horizontal" : "",
                    "debug-data": true,
                    onDataSaved: submitHandler
                  }, null, 8, ["data", "schema", "submit-label", "form-class"])) : createCommentVNode("", true),
                  !unref(edit) ? (openBlock(), createBlock(_component_FormKitDataView, {
                    key: 1,
                    data: unref(data),
                    schema: unref(outputSchema),
                    "form-class": unref(horizontal) ? "form-horizontal" : "",
                    "debug-data": true
                  }, null, 8, ["data", "schema", "form-class"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/form/toggle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
