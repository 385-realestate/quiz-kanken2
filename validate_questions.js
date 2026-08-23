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

let radDup = 0;
QUESTIONS.filter(q => q.category === 'radical').forEach(q => {
  const set = new Set(q.choices);
  if (set.size !== q.choices.length) { console.log('radical choice dup:', q.id, q.choices); radDup++; }
  if (!q.choices.includes(q.answer)) { console.log('radical answer missing from choices:', q.id); radDup++; }
});
console.log('radical choice problems:', radDup);

let structDup = 0;
QUESTIONS.filter(q => q.category === 'structure').forEach(q => {
  if (!q.choices.includes(q.answer)) { console.log('structure answer missing from choices:', q.id); structDup++; }
});
console.log('structure choice problems:', structDup);

const byCategory = {};
QUESTIONS.forEach(q => { byCategory[q.category] = (byCategory[q.category] || 0) + 1; });
console.log('category counts:', byCategory);

const totalProblems = dupPrompt + idSequenceProblems + writingDup + readAmb + radDup + structDup;
if (totalProblems > 0) {
  console.error('validation failed:', totalProblems, 'problem(s)');
  process.exitCode = 1;
} else {
  console.log('validation passed: all extended checks are clean.');
}
