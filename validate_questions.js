const fs = require('fs');
const code = fs.readFileSync(__dirname + '/questions.js', 'utf8');
const QUESTIONS = (function () {
  return eval(code + '\nQUESTIONS;');
})();

const prompts = new Set();
let dupPrompt = 0;
QUESTIONS.forEach(q => { if (prompts.has(q.prompt)) dupPrompt++; prompts.add(q.prompt); });
console.log('total:', QUESTIONS.length);
console.log('duplicate prompts:', dupPrompt);

let idSequenceProblems = 0;
QUESTIONS.forEach((q, index) => {
  const expectedSuffix = String(index + 1).padStart(3, '0');
  if (!q.id.endsWith(`-${expectedSuffix}`)) {
    console.log('id sequence problem:', q.id, 'expected suffix:', expectedSuffix);
    idSequenceProblems++;
  }
});
console.log('id sequence problems:', idSequenceProblems);

const wmap = {};
let writingDup = 0;
QUESTIONS.filter(q => q.category === 'writing').forEach(q => {
  const readingKey = q.prompt.split('\n')[1];
  if (wmap[readingKey] && wmap[readingKey] !== q.answer) {
    console.log('writing ambiguity:', readingKey, wmap[readingKey], '/', q.answer);
    writingDup++;
  }
  wmap[readingKey] = q.answer;
});
console.log('writing reading ambiguities:', writingDup);

const rmap = {};
let readAmb = 0;
QUESTIONS.filter(q => q.category === 'reading').forEach(q => {
  const word = q.prompt.split('\n')[1];
  if (rmap[word] && rmap[word] !== q.answer) {
    console.log('reading ambiguity:', word, rmap[word], '/', q.answer);
    readAmb++;
  }
  rmap[word] = q.answer;
});
console.log('reading ambiguities:', readAmb);

let idiomChoiceProblems = 0;
QUESTIONS.filter(q => q.category === 'idiom').forEach(q => {
  if (q.choices.length !== 4 || new Set(q.choices).size !== 4 || !q.choices.includes(q.answer)) {
    console.log('idiom choice problem:', q.id, q.choices);
    idiomChoiceProblems++;
  }
});
console.log('idiom choice problems:', idiomChoiceProblems);

let radDup = 0;
QUESTIONS.filter(q => q.category === 'radical').forEach(q => {
  const set = new Set(q.choices);
  if (q.choices.length !== 4 || set.size !== 4 || !q.choices.includes(q.answer)) {
    console.log('radical choice problem:', q.id, q.choices);
    radDup++;
  }
});
console.log('radical choice problems:', radDup);

let structDup = 0;
QUESTIONS.filter(q => q.category === 'structure').forEach(q => {
  if (q.choices.length !== 4 || new Set(q.choices).size !== 4 || !q.choices.includes(q.answer)) {
    console.log('structure choice problem:', q.id, q.choices);
    structDup++;
  }
});
console.log('structure choice problems:', structDup);

let correctionProblems = 0;
QUESTIONS.filter(q => q.category === 'correction').forEach(q => {
  const match = q.answer.match(/^誤 (.+) → 正 (.+)$/);
  if (!match || !q.prompt.includes(match?.[1] || '') || !q.example.includes(match?.[2] || '')) {
    console.log('correction grading problem:', q.id, q.answer);
    correctionProblems++;
  }
});
console.log('correction grading problems:', correctionProblems);

const byCategory = {};
QUESTIONS.forEach(q => { byCategory[q.category] = (byCategory[q.category] || 0) + 1; });
console.log('category counts:', byCategory);

const totalProblems = dupPrompt + idSequenceProblems + writingDup + readAmb + idiomChoiceProblems + radDup + structDup + correctionProblems;
if (totalProblems > 0) {
  console.error('validation failed:', totalProblems, 'problem(s)');
  process.exitCode = 1;
} else {
  console.log('validation passed: all extended checks are clean.');
}
