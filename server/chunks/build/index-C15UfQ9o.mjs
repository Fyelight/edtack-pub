import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const difficultyFilter = ref("");
    const solvedFilter = ref("all");
    const problems = ref([
      { id: 1, title: "Two Sum", category: "Array", difficulty: "Easy", tags: ["Array", "Hash Table"], solved: false },
      { id: 2, title: "Add Two Numbers", category: "Linked List", difficulty: "Medium", tags: ["Linked List", "Math"], solved: false },
      { id: 3, title: "Longest Substring Without Repeating Characters", category: "String", difficulty: "Medium", tags: ["Hash Table", "Two Pointers", "String"], solved: true },
      { id: 4, title: "Median of Two Sorted Arrays", category: "Array", difficulty: "Hard", tags: ["Array", "Binary Search", "Divide and Conquer"], solved: false },
      { id: 5, title: "Longest Palindromic Substring", category: "String", difficulty: "Medium", tags: ["String", "Dynamic Programming"], solved: true }
    ]);
    const filteredProblems = computed(() => {
      return problems.value.filter((problem) => {
        const matchesSearch = problem.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || problem.category.toLowerCase().includes(searchQuery.value.toLowerCase()) || problem.tags.some((tag) => tag.toLowerCase().includes(searchQuery.value.toLowerCase()));
        const matchesDifficulty = difficultyFilter.value === "" || problem.difficulty === difficultyFilter.value;
        const matchesSolved = solvedFilter.value === "all" || solvedFilter.value === "solved" && problem.solved || solvedFilter.value === "unsolved" && !problem.solved;
        return matchesSearch && matchesDifficulty && matchesSolved;
      });
    });
    const solvedProblems = computed(() => {
      return problems.value.filter((problem) => problem.solved).length;
    });
    function difficultyClass(difficulty) {
      switch (difficulty) {
        case "Easy":
          return "easy";
        case "Medium":
          return "medium";
        case "Hard":
          return "hard";
        default:
          return "";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "problem-section" }, _attrs))} data-v-db30e3fd><div class="search-filter-container" data-v-db30e3fd><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search problems..." class="search-input" data-v-db30e3fd><select class="difficulty-select" data-v-db30e3fd><option value="" data-v-db30e3fd${ssrIncludeBooleanAttr(Array.isArray(difficultyFilter.value) ? ssrLooseContain(difficultyFilter.value, "") : ssrLooseEqual(difficultyFilter.value, "")) ? " selected" : ""}> All Difficulties </option><option value="Easy" data-v-db30e3fd${ssrIncludeBooleanAttr(Array.isArray(difficultyFilter.value) ? ssrLooseContain(difficultyFilter.value, "Easy") : ssrLooseEqual(difficultyFilter.value, "Easy")) ? " selected" : ""}> Easy </option><option value="Medium" data-v-db30e3fd${ssrIncludeBooleanAttr(Array.isArray(difficultyFilter.value) ? ssrLooseContain(difficultyFilter.value, "Medium") : ssrLooseEqual(difficultyFilter.value, "Medium")) ? " selected" : ""}> Medium </option><option value="Hard" data-v-db30e3fd${ssrIncludeBooleanAttr(Array.isArray(difficultyFilter.value) ? ssrLooseContain(difficultyFilter.value, "Hard") : ssrLooseEqual(difficultyFilter.value, "Hard")) ? " selected" : ""}> Hard </option></select><select class="solved-select" data-v-db30e3fd><option value="all" data-v-db30e3fd${ssrIncludeBooleanAttr(Array.isArray(solvedFilter.value) ? ssrLooseContain(solvedFilter.value, "all") : ssrLooseEqual(solvedFilter.value, "all")) ? " selected" : ""}> All Problems </option><option value="solved" data-v-db30e3fd${ssrIncludeBooleanAttr(Array.isArray(solvedFilter.value) ? ssrLooseContain(solvedFilter.value, "solved") : ssrLooseEqual(solvedFilter.value, "solved")) ? " selected" : ""}> Solved </option><option value="unsolved" data-v-db30e3fd${ssrIncludeBooleanAttr(Array.isArray(solvedFilter.value) ? ssrLooseContain(solvedFilter.value, "unsolved") : ssrLooseEqual(solvedFilter.value, "unsolved")) ? " selected" : ""}> Unsolved </option></select></div><div class="problem-stats" data-v-db30e3fd><span data-v-db30e3fd>Total Problems: ${ssrInterpolate(problems.value.length)}</span><span data-v-db30e3fd>Solved: ${ssrInterpolate(solvedProblems.value)}</span></div><div class="problem-list" data-v-db30e3fd><ul class="problem-items" data-v-db30e3fd><!--[-->`);
      ssrRenderList(filteredProblems.value, (problem) => {
        _push(`<li class="problem-item" data-v-db30e3fd><div class="problem-content" data-v-db30e3fd><div class="problem-info" data-v-db30e3fd><p class="problem-title" data-v-db30e3fd>${ssrInterpolate(problem.title)}</p><p class="problem-category" data-v-db30e3fd>${ssrInterpolate(problem.category)}</p><div class="problem-tags" data-v-db30e3fd><!--[-->`);
        ssrRenderList(problem.tags, (tag) => {
          _push(`<span class="problem-tag" data-v-db30e3fd>${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div></div><div class="problem-actions" data-v-db30e3fd><span class="${ssrRenderClass([[difficultyClass(problem.difficulty)], "difficulty-badge"])}" data-v-db30e3fd>${ssrInterpolate(problem.difficulty)}</span><button class="solve-button"${ssrIncludeBooleanAttr(problem.solved) ? " disabled" : ""} data-v-db30e3fd>${ssrInterpolate(problem.solved ? "Solved" : "Solve")}</button></div></div></li>`);
      });
      _push(`<!--]--></ul></div>`);
      if (filteredProblems.value.length === 0) {
        _push(`<div class="no-results" data-v-db30e3fd> No problems found matching your criteria. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/practice/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-db30e3fd"]]);

export { index as default };
