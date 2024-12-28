import { ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { u as useGetGenerativeModelGP } from './useGetGenerativeModelGP-Cvs8JkZr.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@google/generative-ai';

const _sfc_main$1 = {
  __name: "AIAnswer",
  __ssrInlineRender: true,
  props: {
    answer: {
      type: String,
      default: "Answer will be displayed here."
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.answer) {
        _push(`<p>${ssrInterpolate(__props.answer)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AIAnswer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  data() {
    return {
      answer: "",
      // Holds the answer
      isLoading: false,
      // For managing loading state
      selectedLevel: "",
      // User-selected level
      selectedSubject: "",
      // User-selected subject
      numberInput: null,
      // User-inputted number
      levels: ["Primary 1", "Secondary 1", "Junior College 1"],
      // Available levels
      subjects: ["Math", "Science", "English", "History", "Geography"],
      // Available subjects
      format: "return a list in json with id, title, options and the correct answer\n"
    };
  },
  methods: {
    // Function to create a detailed prompt based on user input
    createPrompt(numberInput, selectedLevel, selectedSubject) {
      return `You are an expert teacher skilled in producing detailed, authentic, and correct student examination questions.
        For the Singapore syllabus, how would you create ${numberInput} MCQ questions of 5 options about ${selectedLevel} ${selectedSubject}, with varying difficulties.
        Make it so there are matching options such as "statement 1, 2, 3 are true" or "all of the above are true" type of questions. ` + this.format;
    },
    // Function to fetch the answer from the generative model
    async fetchAnswer() {
      this.isLoading = true;
      this.answer = "";
      const prompt = this.createPrompt(this.numberInput, this.selectedLevel, this.selectedSubject);
      try {
        this.answer = await useGetGenerativeModelGP(prompt);
      } catch (error) {
        console.error("Error fetching answer:", error);
        this.answer = "An error occurred while generating the answer.";
      } finally {
        this.isLoading = false;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AIAnswer = _sfc_main$1;
  _push(`<!--[--><h1 class="mb-5" data-v-dfb61e98>Generate Challenge</h1><form class="mb-5" data-v-dfb61e98><div class="form-group" data-v-dfb61e98><label for="level" data-v-dfb61e98>Select Level</label><select id="level" class="form-control" data-v-dfb61e98><option value="" disabled data-v-dfb61e98${ssrIncludeBooleanAttr(Array.isArray($data.selectedLevel) ? ssrLooseContain($data.selectedLevel, "") : ssrLooseEqual($data.selectedLevel, "")) ? " selected" : ""}>Select Level</option><!--[-->`);
  ssrRenderList($data.levels, (level) => {
    _push(`<option${ssrRenderAttr("value", level)} data-v-dfb61e98>${ssrInterpolate(level)}</option>`);
  });
  _push(`<!--]--></select></div><div class="form-group" data-v-dfb61e98><label for="subject" data-v-dfb61e98>Select Subject</label><select id="subject" class="form-control" data-v-dfb61e98><option value="" disabled data-v-dfb61e98${ssrIncludeBooleanAttr(Array.isArray($data.selectedSubject) ? ssrLooseContain($data.selectedSubject, "") : ssrLooseEqual($data.selectedSubject, "")) ? " selected" : ""}>Select Subject</option><!--[-->`);
  ssrRenderList($data.subjects, (subject) => {
    _push(`<option${ssrRenderAttr("value", subject)} data-v-dfb61e98>${ssrInterpolate(subject)}</option>`);
  });
  _push(`<!--]--></select></div><div class="form-group" data-v-dfb61e98><label for="numberInput" data-v-dfb61e98>Enter the desired number of questions</label><input${ssrRenderAttr("value", $data.numberInput)} type="number" id="numberInput" class="form-control" min="1" placeholder="Enter a number" data-v-dfb61e98></div><button type="submit"${ssrIncludeBooleanAttr(!$data.selectedLevel || !$data.selectedSubject || !$data.numberInput || $data.isLoading) ? " disabled" : ""} data-v-dfb61e98>${ssrInterpolate($data.isLoading ? "Asking Gemini..." : "Ask")}</button></form>`);
  if ($data.answer) {
    _push(`<div class="mb-10" data-v-dfb61e98>`);
    _push(ssrRenderComponent(_component_AIAnswer, { answer: $data.answer }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dfb61e98"]]);

export { index as default };
