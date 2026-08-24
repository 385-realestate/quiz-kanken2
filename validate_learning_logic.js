const fs = require('fs');
const vm = require('vm');

const elements = new Map();
function element(selector) {
  if (!elements.has(selector)) {
    elements.set(selector, {
      textContent: '', value: '', hidden: false, disabled: false, style: {}, children: [],
      classList: { toggle() {}, add() {} }, addEventListener() {},
    });
  }
  return elements.get(selector);
}

const storage = {};
const context = {
  document: { querySelector: element, querySelectorAll: () => [] },
  localStorage: {
    getItem: key => storage[key] || null,
    setItem: (key, value) => { storage[key] = value; },
    removeItem: key => { delete storage[key]; },
  },
  navigator: {}, window: { addEventListener() {} }, alert() {}, confirm: () => true,
  Date, Set, JSON, Math, Array, String,
};
vm.createContext(context);
vm.runInContext(fs.readFileSync(__dirname + '/app.js', 'utf8'), context);

const passed = vm.runInContext(`(() => {
  const question = { id: 'test-001' };
  state.questions = [];
  state.results = [];
  state.retryIds = new Set();
  recordResult(question, false);
  recordResult(question, false);
  const onlyOneSameSessionRetry = state.questions.length === 1;
  const wrongAnswerIsDueNow = reviewDue(loadProgress()[question.id]);
  recordResult(question, true);
  const correctRetryIsScheduledLater = !reviewDue(loadProgress()[question.id]);
  return onlyOneSameSessionRetry && wrongAnswerIsDueNow && correctRetryIsScheduledLater;
})()`, context);

if (!passed) {
  console.error('spaced repetition validation failed');
  process.exit(1);
}
console.log('spaced repetition validation passed');
