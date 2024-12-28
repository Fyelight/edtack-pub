import { mergeProps, useSSRContext, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useGetGenerativeModelGP } from './useGetGenerativeModelGP-Cvs8JkZr.mjs';
import '@google/generative-ai';

const _sfc_main$2 = {
  props: {
    question: Object,
    questionIndex: Number,
    selectedAnswer: String
    // Receive the selected answer from the parent
  },
  data() {
    return {
      content: "",
      explanation: null
    };
  },
  methods: {
    selectAnswer(answer) {
      this.$emit("answer-selected", answer);
    },
    toggleExplain() {
      if (this.explanation) {
        this.explanation = null;
      } else {
        this.explanation = this.question.explanation;
      }
    }
  },
  created() {
    this.content = this.question.title.replace(/\n/g, "<br />");
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "question" }, _attrs))} data-v-ca0f1046><div data-v-ca0f1046>${$data.content ?? ""}</div><div class="explanation" data-v-ca0f1046>`);
  if ($data.explanation) {
    _push(`<div data-v-ca0f1046>${$data.explanation ?? ""}</div>`);
  } else {
    _push(`<span class="explanation" data-v-ca0f1046>Explain</span>`);
  }
  _push(`</div><!--[-->`);
  ssrRenderList($props.question.options, (option, index2) => {
    _push(`<div data-v-ca0f1046><label data-v-ca0f1046><input type="radio"${ssrRenderAttr("value", option)}${ssrRenderAttr("name", "question-" + $props.questionIndex)}${ssrIncludeBooleanAttr($props.selectedAnswer === option) ? " checked" : ""} data-v-ca0f1046> ${ssrInterpolate(option)}</label></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/challenge/QuizQuestion.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const QuizQuestion = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-ca0f1046"]]), { __name: "ChallengeQuizQuestion" });
const _sfc_main$1 = {
  components: {
    QuizQuestion
  },
  props: {
    quiz: {
      type: Object
    }
  },
  data() {
    return {
      questions: this.quiz,
      questions2: [{
        "id": 1,
        "title": "Which of the following is a characteristic of living organisms?",
        "options": ["Reproduction", "Nutrition", "Excretion", "All of the above"],
        "correctAnswer": "All of the above"
      }, {
        "id": 2,
        "title": "What is the function of the cell membrane?",
        "options": ["To regulate the movement of substances into and out of the cell", "To synthesize proteins", "To store genetic information", "To carry out respiration"],
        "correctAnswer": "To regulate the movement of substances into and out of the cell"
      }],
      userAnswers: [],
      quizFinished: false,
      score: 0,
      name: this.$route.query.name
    };
  },
  methods: {
    submitQuiz() {
      this.quizFinished = true;
      this.calculateScore();
    },
    updateAnswer(index2, answer) {
      this.userAnswers[index2] = answer;
    },
    isCorrect(index2) {
      return this.userAnswers[index2] + "" === this.questions[index2].correctAnswer;
    },
    calculateScore() {
      this.score = this.userAnswers.reduce((total, answer, index2) => {
        return total + (answer === this.questions[index2].correctAnswer ? 1 : 0);
      }, 0);
    },
    restartQuiz() {
      this.userAnswers = [];
      this.score = 0;
      this.quizFinished = false;
    },
    getOptionStyle(option, correctAnswer, userAnswer) {
      if (option === correctAnswer) {
        return { color: "green", fontWeight: "bold" };
      }
      if (option === userAnswer) {
        return { color: "red", fontWeight: "bold" };
      }
      return {};
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_QuizQuestion = resolveComponent("QuizQuestion");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "quiz-container" }, _attrs))} data-v-38bab687><h1 data-v-38bab687>${ssrInterpolate($data.name)}</h1>`);
  if (!$data.quizFinished) {
    _push(`<div data-v-38bab687><!--[-->`);
    ssrRenderList($data.questions, (question, index2) => {
      _push(`<div class="question" data-v-38bab687>`);
      _push(ssrRenderComponent(_component_QuizQuestion, {
        question,
        questionIndex: index2,
        selectedAnswer: $data.userAnswers[index2],
        onAnswerSelected: ($event) => $options.updateAnswer(index2, $event)
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--><button data-v-38bab687>Submit Quiz</button></div>`);
  } else {
    _push(`<div data-v-38bab687><h3 data-v-38bab687>Results</h3><!--[-->`);
    ssrRenderList($data.questions, (question, index2) => {
      _push(`<div data-v-38bab687><p data-v-38bab687><strong data-v-38bab687>Question:</strong> ${ssrInterpolate(question.title)}</p><!--[-->`);
      ssrRenderList(question.options, (option, optionIndex) => {
        _push(`<div data-v-38bab687><p style="${ssrRenderStyle($options.getOptionStyle(option, question.correctAnswer, $data.userAnswers[index2]))}" data-v-38bab687><strong data-v-38bab687>${ssrInterpolate(option)}</strong></p></div>`);
      });
      _push(`<!--]--><p data-v-38bab687><strong data-v-38bab687>Your Answer:</strong> ${ssrInterpolate($data.userAnswers[index2] || "Not Answered")}</p><p data-v-38bab687><strong data-v-38bab687>Correct Answer:</strong> ${ssrInterpolate(question.correctAnswer)}</p>`);
      if (!$options.isCorrect(index2)) {
        _push(`<p data-v-38bab687><strong data-v-38bab687>Explanation:</strong> ${ssrInterpolate(question.explanation)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if ($options.isCorrect(index2)) {
        _push(`<p style="${ssrRenderStyle({ "color": "green" })}" data-v-38bab687> Correct! Well done! </p>`);
      } else {
        _push(`<p style="${ssrRenderStyle({ "color": "red" })}" data-v-38bab687> Incorrect. Better luck next time! </p>`);
      }
      _push(`</div>`);
    });
    _push(`<!--]--><div data-v-38bab687><h4 data-v-38bab687>Your Score: ${ssrInterpolate($data.score)} / ${ssrInterpolate($data.questions.length)}</h4></div><button data-v-38bab687>Try Again</button></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/challenge/QuizPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const QuizPage = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-38bab687"]]), { __name: "ChallengeQuizPage" });
const _sfc_main = {
  components: { QuizPage },
  data() {
    return {
      quiz: null,
      // Holds the answer
      isLoading: false,
      // For managing loading state
      selectedLevel: "",
      // User-selected level
      selectedInnerLvl: null,
      // inner levels of education
      selectedSubject: "",
      // User-selected subject
      numberInput: null,
      // User-inputted number
      levels: ["Primary", "Secondary", "Junior College"],
      // Available levels
      primaryLvls: [1, 2, 3, 4, 5, 6],
      secondaryLvls: [1, 2, 3, 4],
      jcLvls: [1, 2],
      subjects: ["Math", "Science", "English", "History", "Geography"],
      // Available subjects
      primarySubjects: ["Math", "Science", "English"],
      // Available subjects
      secondarySubjects: ["E Math", "A Math", "Physics", "Chemistry", "Biology", "Combined Physics", "Combined Chemistry", "Combined Biology", "English", "History", "Geography", "Social Studies", "Combined History", "Combined Geography", "Combined Social Studies"],
      // Available subjects
      jcSubjects: ["H1 Math", "H2 Math", "H1 Physics", "H2 Physics", "H1 Chemistry", "H2 Chemistry", "H1 Biology", "H2 Biology", "H1 General Paper", "H1 History", "H2 History", "H1 Geography", "H2 Geography", "H1 Economics", "H2 Economics"],
      // Available subjects
      format: ` using this JSON schema:
                QuizQuestion = {'id': string, 'title': string, 'options': Array, 'correctAnswer': string}
                Return: Array<QuizQuestion>`
    };
  },
  computed: {
    filteredInnerLevels() {
      switch (this.selectedLevel) {
        case "Primary":
          return this.primaryLvls;
        case "Secondary":
          return this.secondaryLvls;
        case "Junior College":
          return this.jcLvls;
        default:
          return [];
      }
    },
    filteredSubjects() {
      switch (this.selectedLevel) {
        case "Primary":
          return this.primarySubjects;
        case "Secondary":
          return this.secondarySubjects;
        case "Junior College":
          return this.jcSubjects;
        default:
          return [];
      }
    }
  },
  methods: {
    // Function to create a detailed prompt based on user input
    createPrompt(numberInput, selectedLevel, selectedInnerLvl, selectedSubject) {
      return `You are an expert teacher skilled in producing detailed, authentic, and correct student examination questions.
        For the Singapore syllabus, how would you create ${numberInput} MCQ questions of 5 options without the alphabet index of about ${selectedLevel} ${selectedInnerLvl} ${selectedSubject}, with varying difficulties.
        Make it so there are matching options such as "statement 1, 2, 3 are true" or "all of the above are true" type of questions and give detailed steps on how to
        achieve the correct solution. Give the correct answer option in full.`;
    },
    // Function to fetch the answer from the generative model
    async fetchAnswer() {
      this.isLoading = true;
      this.quiz = "";
      const prompt = this.createPrompt(this.numberInput, this.selectedLevel, this.selectedInnerLvl, this.selectedSubject);
      try {
        this.quiz = await useGetGenerativeModelGP(prompt);
      } catch (error) {
        console.error("Error fetching quiz:", error);
        this.quiz = "An error occurred while generating the quiz.";
      } finally {
        this.isLoading = false;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_QuizPage = resolveComponent("QuizPage");
  _push(`<!--[--><h1 class="mb-5" data-v-409b4f5c> Generate Challenge </h1><form class="mb-5" data-v-409b4f5c><div class="form-group" data-v-409b4f5c><label for="level" data-v-409b4f5c>Select Level</label><select id="level" class="form-control" data-v-409b4f5c><option value="" disabled data-v-409b4f5c${ssrIncludeBooleanAttr(Array.isArray($data.selectedLevel) ? ssrLooseContain($data.selectedLevel, "") : ssrLooseEqual($data.selectedLevel, "")) ? " selected" : ""}> Select Level </option><!--[-->`);
  ssrRenderList($data.levels, (level) => {
    _push(`<option${ssrRenderAttr("value", level)} data-v-409b4f5c>${ssrInterpolate(level)}</option>`);
  });
  _push(`<!--]--></select><select id="innerLevel" class="form-control" data-v-409b4f5c><option value="" disabled data-v-409b4f5c${ssrIncludeBooleanAttr(Array.isArray(_ctx.selectedInnerLevel) ? ssrLooseContain(_ctx.selectedInnerLevel, "") : ssrLooseEqual(_ctx.selectedInnerLevel, "")) ? " selected" : ""}> Select Level </option><!--[-->`);
  ssrRenderList($options.filteredInnerLevels, (innerLevel) => {
    _push(`<option${ssrRenderAttr("value", innerLevel)} data-v-409b4f5c>${ssrInterpolate(innerLevel)}</option>`);
  });
  _push(`<!--]--></select></div><div class="form-group" data-v-409b4f5c><label for="subject" data-v-409b4f5c>Select Subject</label><select id="subject" class="form-control" data-v-409b4f5c><option value="" disabled data-v-409b4f5c${ssrIncludeBooleanAttr(Array.isArray($data.selectedSubject) ? ssrLooseContain($data.selectedSubject, "") : ssrLooseEqual($data.selectedSubject, "")) ? " selected" : ""}> Select Subject </option><!--[-->`);
  ssrRenderList($options.filteredSubjects, (subject) => {
    _push(`<option${ssrRenderAttr("value", subject)} data-v-409b4f5c>${ssrInterpolate(subject)}</option>`);
  });
  _push(`<!--]--></select></div><div class="form-group" data-v-409b4f5c><label for="numberInput" data-v-409b4f5c>Enter the desired number of questions</label><input id="numberInput"${ssrRenderAttr("value", $data.numberInput)} type="number" class="form-control" min="1" placeholder="Enter a number" data-v-409b4f5c></div><button type="submit"${ssrIncludeBooleanAttr(!$data.selectedLevel || !$data.selectedSubject || !$data.numberInput || $data.isLoading) ? " disabled" : ""} data-v-409b4f5c>${ssrInterpolate($data.isLoading ? "Asking Gemini..." : "Ask")}</button></form>`);
  if ($data.quiz) {
    _push(`<div class="mb-10" data-v-409b4f5c>`);
    _push(ssrRenderComponent(_component_QuizPage, { quiz: $data.quiz }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenge/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-409b4f5c"]]);

export { index as default };
