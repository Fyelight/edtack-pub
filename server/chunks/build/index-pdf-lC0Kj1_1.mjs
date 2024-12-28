import { ref, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "index-pdf",
  __ssrInlineRender: true,
  props: {
    isChallenge: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const currentTool = ref("pen");
    const currentColor = ref("#000000");
    const lineWidth = ref(2);
    ref({});
    const drawingCanvasRefs = ref({});
    const answers = ref([]);
    const submitted = ref(false);
    const isCompact = ref(false);
    const questions = ref([
      {
        text: "What is the capital of France?",
        type: "mcq",
        options: ["London", "Berlin", "Paris", "Madrid"],
        modelAnswer: "Paris"
      },
      {
        text: "Explain the process of photosynthesis.",
        type: "open_ended",
        modelAnswer: "Photosynthesis is the process by which green plants convert sunlight into chemical energy..."
      },
      {
        text: "Draw a simple diagram of a cell and label its main parts.",
        type: "drawing",
        instructions: "Use the pen tool to draw a cell. Use the arrow tool to label the nucleus, cell membrane, and cytoplasm.",
        background: {
          type: "image",
          url: "/placeholder.svg?height=400&width=600"
        }
      },
      {
        text: "What is the main function of mitochondria?",
        type: "mcq",
        options: ["Protein synthesis", "Energy production", "Cell division", "Waste removal"],
        modelAnswer: "Energy production"
      },
      {
        text: "Describe the water cycle in your own words.",
        type: "open_ended",
        modelAnswer: "The water cycle involves evaporation, condensation, and precipitation..."
      }
    ]);
    watch([currentColor, lineWidth], () => {
      Object.values(drawingCanvasRefs.value).forEach((canvas) => {
        const ctx = canvas.getContext("2d");
        ctx.strokeStyle = currentColor.value;
        ctx.lineWidth = lineWidth.value;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pdf-editor flex flex-col md:flex-row" }, _attrs))} data-v-394c788b><div class="toolbar flex flex-row lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 p-4 bg-gray-100 border lg:border-r border-gray-300" data-v-394c788b><button class="${ssrRenderClass([{ "selected-tool": currentTool.value === "pen" }, "tool-button"])}" data-tooltip="Pen" data-v-394c788b><i class="fas fa-pen" data-v-394c788b></i></button><button class="${ssrRenderClass([{ "selected-tool": currentTool.value === "line" }, "tool-button"])}" data-tooltip="Line" data-v-394c788b><i class="fas fa-minus" data-v-394c788b></i></button><button class="${ssrRenderClass([{ "selected-tool": currentTool.value === "arrow" }, "tool-button"])}" data-tooltip="Arrow" data-v-394c788b><i class="fas fa-long-arrow-alt-right" data-v-394c788b></i></button><button class="${ssrRenderClass([{ "selected-tool": currentTool.value === "protractor" }, "tool-button"])}" data-tooltip="Protractor" data-v-394c788b><i class="fas fa-circle-notch" data-v-394c788b></i></button><button class="${ssrRenderClass([{ "selected-tool": currentTool.value === "ruler" }, "tool-button"])}" data-tooltip="Ruler" data-v-394c788b><i class="fas fa-ruler" data-v-394c788b></i></button><input${ssrRenderAttr("value", currentColor.value)} type="color" class="w-8 h-8 mt-2" title="Color picker" data-v-394c788b><input${ssrRenderAttr("value", lineWidth.value)} type="range" min="1" max="20" class="w-8 h-20 lg:mt-2 transform -rotate-90" title="Line width" data-v-394c788b></div><div class="flex-grow overflow-y-auto h-screen" data-v-394c788b><div class="max-w-4xl mx-auto px-4 py-8" data-v-394c788b><h1 class="text-2xl font-bold mb-4" data-v-394c788b>${ssrInterpolate(__props.isChallenge ? "Challenge" : "Problem")} Editor </h1><div class="questions-container" data-v-394c788b><!--[-->`);
      ssrRenderList(questions.value, (question, index) => {
        _push(`<div${ssrRenderAttr("id", `question-${index + 1}`)} class="question-item mb-8" data-v-394c788b><h2 class="text-xl font-semibold mb-2" data-v-394c788b> Question ${ssrInterpolate(index + 1)}</h2><p class="font-medium mb-2" data-v-394c788b>${ssrInterpolate(question.text)}</p>`);
        if (question.type === "mcq") {
          _push(`<div class="mcq-container" data-v-394c788b><!--[-->`);
          ssrRenderList(question.options, (option) => {
            _push(`<div class="flex items-center mb-2" data-v-394c788b><input${ssrRenderAttr("id", `${index}-${option}`)}${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value[index], option)) ? " checked" : ""} type="radio"${ssrRenderAttr("value", option)} class="mr-2" data-v-394c788b><label${ssrRenderAttr("for", `${index}-${option}`)} data-v-394c788b>${ssrInterpolate(option)}</label></div>`);
          });
          _push(`<!--]-->`);
          if (submitted.value && question.modelAnswer) {
            _push(`<p class="mt-2 text-green-600" data-v-394c788b> Model Answer: ${ssrInterpolate(question.modelAnswer)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else if (question.type === "open_ended") {
          _push(`<div class="open-ended-container" data-v-394c788b><textarea rows="4" class="w-full p-2 border rounded" data-v-394c788b>${ssrInterpolate(answers.value[index])}</textarea>`);
          if (submitted.value && question.modelAnswer) {
            _push(`<p class="mt-2 text-green-600" data-v-394c788b> Model Answer: ${ssrInterpolate(question.modelAnswer)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else if (question.type === "drawing") {
          _push(`<div class="drawing-container" data-v-394c788b><p class="text-sm text-gray-600 mb-2" data-v-394c788b>${ssrInterpolate(question.instructions)}</p><div class="canvas-container relative border border-gray-300 overflow-hidden" style="${ssrRenderStyle({ width: "100%", height: "400px" })}" data-v-394c788b><canvas class="background-canvas absolute top-0 left-0" data-v-394c788b></canvas><canvas class="drawing-canvas absolute top-0 left-0" data-v-394c788b></canvas></div><div class="mt-2" data-v-394c788b><button class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-2" data-v-394c788b> Clear Canvas </button><button class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600" data-v-394c788b> Save Drawing </button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" data-v-394c788b> Save All Answers </button></div></div><div class="question-nav flex flex-col space-y-2 p-4 bg-gray-100 border-l border-gray-300 sticky top-0 h-screen w-48 overflow-y-auto" data-v-394c788b><h3 class="font-semibold mb-2" data-v-394c788b> Questions </h3><!--[-->`);
      ssrRenderList(questions.value, (question, index) => {
        _push(`<button class="text-left px-2 py-1 rounded hover:bg-gray-200" data-v-394c788b>${ssrInterpolate(isCompact.value ? `Q. ${index + 1}` : `Question ${index + 1}`)}</button>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenge/index-pdf.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const indexPdf = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-394c788b"]]);

export { indexPdf as default };
