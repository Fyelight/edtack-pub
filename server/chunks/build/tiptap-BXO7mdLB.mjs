import { s as script$H } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, useSSRContext, watch, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { s as script } from './index-Bp034qIm.mjs';
import { EditorContent } from '@tiptap/vue-3';
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

const _sfc_main$1 = {
  __name: "TiptapTipTap",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: "",
      required: true
    },
    editable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const editor = ref();
    watch(
      () => props.modelValue,
      (value) => {
        const isSame = editor.value.getHTML() === value;
        if (!isSame)
          editor.value.commands.setContent(value, false);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Toolbar = script;
      const _component_Button = script$H;
      if (unref(editor)) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-6f2cbafb>`);
        _push(ssrRenderComponent(_component_Toolbar, { id: "toolbar" }, {
          start: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Button, {
                id: "bold",
                size: "small",
                label: "B",
                class: { "p-button-outlined": !unref(editor).isActive("bold") },
                onClick: ($event) => unref(editor).chain().focus().toggleBold().run()
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                id: "italic",
                size: "small",
                label: "I",
                class: { "p-button-outlined": !unref(editor).isActive("italic") },
                onClick: ($event) => unref(editor).chain().focus().toggleItalic().run()
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                id: "strike",
                size: "small",
                label: "T",
                class: { "p-button-outlined": !unref(editor).isActive("strike") },
                onClick: ($event) => unref(editor).chain().focus().toggleStrike().run()
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                size: "small",
                label: "Clear",
                class: "p-button-outlined",
                onClick: ($event) => unref(editor).chain().focus().unsetAllMarks().run()
              }, null, _parent2, _scopeId));
              _push2(`<span class="separator" data-v-6f2cbafb${_scopeId}></span>`);
              _push2(ssrRenderComponent(_component_Button, {
                size: "small",
                label: "P",
                class: { "p-button-outlined": !unref(editor).isActive("paragraph") },
                onClick: ($event) => unref(editor).chain().focus().setParagraph().run()
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                size: "small",
                label: "H1",
                class: { "p-button-outlined": !unref(editor).isActive("heading", { level: 1 }) },
                onClick: ($event) => unref(editor).chain().focus().toggleHeading({ level: 1 }).run()
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                size: "small",
                label: "H2",
                class: { "p-button-outlined": !unref(editor).isActive("heading", { level: 2 }) },
                onClick: ($event) => unref(editor).chain().focus().toggleHeading({ level: 2 }).run()
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                size: "small",
                label: "H3",
                class: { "p-button-outlined": !unref(editor).isActive("heading", { level: 3 }) },
                onClick: ($event) => unref(editor).chain().focus().toggleHeading({ level: 3 }).run()
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                size: "small",
                label: "H4",
                class: { "p-button-outlined": !unref(editor).isActive("heading", { level: 4 }) },
                onClick: ($event) => unref(editor).chain().focus().toggleHeading({ level: 4 }).run()
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                size: "small",
                label: "H5",
                class: { "p-button-outlined": !unref(editor).isActive("heading", { level: 5 }) },
                onClick: ($event) => unref(editor).chain().focus().toggleHeading({ level: 5 }).run()
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                size: "small",
                label: "H6",
                class: { "p-button-outlined": !unref(editor).isActive("heading", { level: 6 }) },
                onClick: ($event) => unref(editor).chain().focus().toggleHeading({ level: 6 }).run()
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Button, {
                  id: "bold",
                  size: "small",
                  label: "B",
                  class: { "p-button-outlined": !unref(editor).isActive("bold") },
                  onClick: ($event) => unref(editor).chain().focus().toggleBold().run()
                }, null, 8, ["class", "onClick"]),
                createVNode(_component_Button, {
                  id: "italic",
                  size: "small",
                  label: "I",
                  class: { "p-button-outlined": !unref(editor).isActive("italic") },
                  onClick: ($event) => unref(editor).chain().focus().toggleItalic().run()
                }, null, 8, ["class", "onClick"]),
                createVNode(_component_Button, {
                  id: "strike",
                  size: "small",
                  label: "T",
                  class: { "p-button-outlined": !unref(editor).isActive("strike") },
                  onClick: ($event) => unref(editor).chain().focus().toggleStrike().run()
                }, null, 8, ["class", "onClick"]),
                createVNode(_component_Button, {
                  size: "small",
                  label: "Clear",
                  class: "p-button-outlined",
                  onClick: ($event) => unref(editor).chain().focus().unsetAllMarks().run()
                }, null, 8, ["onClick"]),
                createVNode("span", { class: "separator" }),
                createVNode(_component_Button, {
                  size: "small",
                  label: "P",
                  class: { "p-button-outlined": !unref(editor).isActive("paragraph") },
                  onClick: ($event) => unref(editor).chain().focus().setParagraph().run()
                }, null, 8, ["class", "onClick"]),
                createVNode(_component_Button, {
                  size: "small",
                  label: "H1",
                  class: { "p-button-outlined": !unref(editor).isActive("heading", { level: 1 }) },
                  onClick: ($event) => unref(editor).chain().focus().toggleHeading({ level: 1 }).run()
                }, null, 8, ["class", "onClick"]),
                createVNode(_component_Button, {
                  size: "small",
                  label: "H2",
                  class: { "p-button-outlined": !unref(editor).isActive("heading", { level: 2 }) },
                  onClick: ($event) => unref(editor).chain().focus().toggleHeading({ level: 2 }).run()
                }, null, 8, ["class", "onClick"]),
                createVNode(_component_Button, {
                  size: "small",
                  label: "H3",
                  class: { "p-button-outlined": !unref(editor).isActive("heading", { level: 3 }) },
                  onClick: ($event) => unref(editor).chain().focus().toggleHeading({ level: 3 }).run()
                }, null, 8, ["class", "onClick"]),
                createVNode(_component_Button, {
                  size: "small",
                  label: "H4",
                  class: { "p-button-outlined": !unref(editor).isActive("heading", { level: 4 }) },
                  onClick: ($event) => unref(editor).chain().focus().toggleHeading({ level: 4 }).run()
                }, null, 8, ["class", "onClick"]),
                createVNode(_component_Button, {
                  size: "small",
                  label: "H5",
                  class: { "p-button-outlined": !unref(editor).isActive("heading", { level: 5 }) },
                  onClick: ($event) => unref(editor).chain().focus().toggleHeading({ level: 5 }).run()
                }, null, 8, ["class", "onClick"]),
                createVNode(_component_Button, {
                  size: "small",
                  label: "H6",
                  class: { "p-button-outlined": !unref(editor).isActive("heading", { level: 6 }) },
                  onClick: ($event) => unref(editor).chain().focus().toggleHeading({ level: 6 }).run()
                }, null, 8, ["class", "onClick"])
              ];
            }
          }),
          center: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Button, {
                size: "small",
                icon: "pi pi-list",
                "icon-only": "",
                class: { "p-button-outlined": !unref(editor).isActive("bulletList") },
                onClick: ($event) => unref(editor).chain().focus().toggleBulletList().run()
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                size: "small",
                icon: "pi pi-code",
                "icon-only": "",
                class: { "p-button-outlined": !unref(editor).isActive("codeBlock") },
                onClick: ($event) => unref(editor).chain().focus().toggleCodeBlock().run()
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                size: "small",
                icon: "pi pi-minus",
                "icon-only": "",
                class: "p-button-outlined",
                onClick: ($event) => unref(editor).chain().focus().setHorizontalRule().run()
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                size: "small",
                icon: "pi pi-bolt",
                "icon-only": "",
                class: { "p-button-outlined": !unref(editor).isActive("highlight") },
                onClick: ($event) => unref(editor).chain().focus().toggleHighlight().run()
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                size: "small",
                label: "Quote",
                class: { "p-button-outlined": !unref(editor).isActive("blockquote") },
                onClick: ($event) => unref(editor).chain().focus().toggleBlockquote().run()
              }, null, _parent2, _scopeId));
              _push2(`<span class="separator" data-v-6f2cbafb${_scopeId}></span>`);
              _push2(ssrRenderComponent(_component_Button, {
                size: "small",
                icon: "pi pi-align-left",
                "icon-only": "",
                class: { "p-button-outlined": !unref(editor).isActive({ textAlign: "left" }) },
                onClick: ($event) => unref(editor).chain().focus().setTextAlign("left").run()
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                size: "small",
                icon: "pi pi-align-center",
                "icon-only": "",
                class: { "p-button-outlined": !unref(editor).isActive({ textAlign: "center" }) },
                onClick: ($event) => unref(editor).chain().focus().setTextAlign("center").run()
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                size: "small",
                icon: "pi pi-align-right",
                "icon-only": "",
                class: { "p-button-outlined": !unref(editor).isActive({ textAlign: "right" }) },
                onClick: ($event) => unref(editor).chain().focus().setTextAlign("right").run()
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                size: "small",
                icon: "pi pi-align-justify",
                "icon-only": "",
                class: { "p-button-outlined": !unref(editor).isActive({ textAlign: "justify" }) },
                onClick: ($event) => unref(editor).chain().focus().setTextAlign("justify").run()
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Button, {
                  size: "small",
                  icon: "pi pi-list",
                  "icon-only": "",
                  class: { "p-button-outlined": !unref(editor).isActive("bulletList") },
                  onClick: ($event) => unref(editor).chain().focus().toggleBulletList().run()
                }, null, 8, ["class", "onClick"]),
                createVNode(_component_Button, {
                  size: "small",
                  icon: "pi pi-code",
                  "icon-only": "",
                  class: { "p-button-outlined": !unref(editor).isActive("codeBlock") },
                  onClick: ($event) => unref(editor).chain().focus().toggleCodeBlock().run()
                }, null, 8, ["class", "onClick"]),
                createVNode(_component_Button, {
                  size: "small",
                  icon: "pi pi-minus",
                  "icon-only": "",
                  class: "p-button-outlined",
                  onClick: ($event) => unref(editor).chain().focus().setHorizontalRule().run()
                }, null, 8, ["onClick"]),
                createVNode(_component_Button, {
                  size: "small",
                  icon: "pi pi-bolt",
                  "icon-only": "",
                  class: { "p-button-outlined": !unref(editor).isActive("highlight") },
                  onClick: ($event) => unref(editor).chain().focus().toggleHighlight().run()
                }, null, 8, ["class", "onClick"]),
                createVNode(_component_Button, {
                  size: "small",
                  label: "Quote",
                  class: { "p-button-outlined": !unref(editor).isActive("blockquote") },
                  onClick: ($event) => unref(editor).chain().focus().toggleBlockquote().run()
                }, null, 8, ["class", "onClick"]),
                createVNode("span", { class: "separator" }),
                createVNode(_component_Button, {
                  size: "small",
                  icon: "pi pi-align-left",
                  "icon-only": "",
                  class: { "p-button-outlined": !unref(editor).isActive({ textAlign: "left" }) },
                  onClick: ($event) => unref(editor).chain().focus().setTextAlign("left").run()
                }, null, 8, ["class", "onClick"]),
                createVNode(_component_Button, {
                  size: "small",
                  icon: "pi pi-align-center",
                  "icon-only": "",
                  class: { "p-button-outlined": !unref(editor).isActive({ textAlign: "center" }) },
                  onClick: ($event) => unref(editor).chain().focus().setTextAlign("center").run()
                }, null, 8, ["class", "onClick"]),
                createVNode(_component_Button, {
                  size: "small",
                  icon: "pi pi-align-right",
                  "icon-only": "",
                  class: { "p-button-outlined": !unref(editor).isActive({ textAlign: "right" }) },
                  onClick: ($event) => unref(editor).chain().focus().setTextAlign("right").run()
                }, null, 8, ["class", "onClick"]),
                createVNode(_component_Button, {
                  size: "small",
                  icon: "pi pi-align-justify",
                  "icon-only": "",
                  class: { "p-button-outlined": !unref(editor).isActive({ textAlign: "justify" }) },
                  onClick: ($event) => unref(editor).chain().focus().setTextAlign("justify").run()
                }, null, 8, ["class", "onClick"])
              ];
            }
          }),
          end: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Button, {
                size: "small",
                severity: "secondary",
                label: "Undo",
                disabled: !unref(editor).can().chain().focus().undo().run(),
                onClick: ($event) => unref(editor).chain().focus().undo().run()
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                size: "small",
                severity: "secondary",
                label: "Redo",
                disabled: !unref(editor).can().chain().focus().redo().run(),
                onClick: ($event) => unref(editor).chain().focus().redo().run()
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Button, {
                  size: "small",
                  severity: "secondary",
                  label: "Undo",
                  disabled: !unref(editor).can().chain().focus().undo().run(),
                  onClick: ($event) => unref(editor).chain().focus().undo().run()
                }, null, 8, ["disabled", "onClick"]),
                createVNode(_component_Button, {
                  size: "small",
                  severity: "secondary",
                  label: "Redo",
                  disabled: !unref(editor).can().chain().focus().redo().run(),
                  onClick: ($event) => unref(editor).chain().focus().redo().run()
                }, null, 8, ["disabled", "onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(EditorContent), {
          editor: unref(editor),
          class: "p-tiptap p-inputtext"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tiptap/TipTap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TipTap = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6f2cbafb"]]);
const startText = "<p>I’m running <strong>Tiptap</strong> with <strong>Vue.js</strong> and <strong>Nuxt</strong>. 🎉</p><hr><blockquote><p>Use TipTap ...</p></blockquote>\n";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tiptap",
  __ssrInlineRender: true,
  setup(__props) {
    const editorValue = ref(startText);
    function resetText() {
      editorValue.value = startText;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script$H;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><h2>TipTap as alternative Editor</h2><div class="pb-2">`);
      _push(ssrRenderComponent(_component_Button, {
        size: "small",
        label: "Reset",
        onClick: resetText
      }, null, _parent));
      _push(`</div><div class="p-tiptap">`);
      _push(ssrRenderComponent(TipTap, {
        modelValue: unref(editorValue),
        "onUpdate:modelValue": ($event) => isRef(editorValue) ? editorValue.value = $event : null
      }, null, _parent));
      _push(`</div><div class="pt-8">`);
      {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ui/tiptap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
