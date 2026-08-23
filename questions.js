const QUESTIONS = [
  {
    "id": "reading-001",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「簡潔」の読みを答えよ。",
    "answer": "かんけつ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-002",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「赴任」",
    "answer": "ふにん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-003",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：脆弱",
    "answer": "ぜいじゃく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-004",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「顕著」の読みを答えよ。",
    "answer": "けんちょ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-005",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「勘案」",
    "answer": "かんあん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-006",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：遂行",
    "answer": "すいこう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-007",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「慈善」の読みを答えよ。",
    "answer": "じぜん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-008",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「克服」",
    "answer": "こくふく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-009",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：貢献",
    "answer": "こうけん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-010",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「懸念」の読みを答えよ。",
    "answer": "けねん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-011",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「妥当」",
    "answer": "だとう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-012",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：模索",
    "answer": "もさく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-013",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「沿革」の読みを答えよ。",
    "answer": "えんかく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-014",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「概略」",
    "answer": "がいりゃく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-015",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：余韻",
    "answer": "よいん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-016",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「享受」の読みを答えよ。",
    "answer": "きょうじゅ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-017",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「精緻」",
    "answer": "せいち",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-018",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：端緒",
    "answer": "たんしょ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-019",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「稚拙」の読みを答えよ。",
    "answer": "ちせつ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-020",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「脈絡」",
    "answer": "みゃくらく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-021",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：朗報",
    "answer": "ろうほう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-022",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「是正」の読みを答えよ。",
    "answer": "ぜせい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-023",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「斬新」",
    "answer": "ざんしん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-024",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：遵守",
    "answer": "じゅんしゅ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-025",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「汎用」の読みを答えよ。",
    "answer": "はんよう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-026",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「踏襲」",
    "answer": "とうしゅう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-027",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：培養",
    "answer": "ばいよう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-028",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「網羅」の読みを答えよ。",
    "answer": "もうら",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-029",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「隔絶」",
    "answer": "かくぜつ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-030",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：均衡",
    "answer": "きんこう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-031",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「抑揚」の読みを答えよ。",
    "answer": "よくよう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-032",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「旺盛」",
    "answer": "おうせい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-033",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：郷愁",
    "answer": "きょうしゅう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-034",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「逸脱」の読みを答えよ。",
    "answer": "いつだつ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-035",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「謙虚」",
    "answer": "けんきょ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-036",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：端的",
    "answer": "たんてき",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-037",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「漠然」の読みを答えよ。",
    "answer": "ばくぜん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-038",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「顧慮」",
    "answer": "こりょ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-039",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：寡黙",
    "answer": "かもく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-040",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「錯綜」の読みを答えよ。",
    "answer": "さくそう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-041",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「推敲」",
    "answer": "すいこう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-042",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：辛辣",
    "answer": "しんらつ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-043",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「緩慢」の読みを答えよ。",
    "answer": "かんまん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-044",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「克明」",
    "answer": "こくめい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-045",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：精励",
    "answer": "せいれい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-046",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「懐柔」の読みを答えよ。",
    "answer": "かいじゅう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-047",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「看破」",
    "answer": "かんぱ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-048",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：勃興",
    "answer": "ぼっこう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-049",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「脅威」の読みを答えよ。",
    "answer": "きょうい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-050",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「斡旋」",
    "answer": "あっせん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-051",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：隠蔽",
    "answer": "いんぺい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-052",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「畏敬」の読みを答えよ。",
    "answer": "いけい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-053",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「臆測」",
    "answer": "おくそく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-054",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：佳境",
    "answer": "かきょう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-055",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「過疎」の読みを答えよ。",
    "answer": "かそ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-056",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「瓦解」",
    "answer": "がかい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-057",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：寡占",
    "answer": "かせん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-058",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「既往」の読みを答えよ。",
    "answer": "きおう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-059",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「窮乏」",
    "answer": "きゅうぼう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-060",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：勤勉",
    "answer": "きんべん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-061",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「愚弄」の読みを答えよ。",
    "answer": "ぐろう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-062",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「契機」",
    "answer": "けいき",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-063",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：懸隔",
    "answer": "けんかく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-064",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「弦楽」の読みを答えよ。",
    "answer": "げんがく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-065",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「孤高」",
    "answer": "ここう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-066",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：傲慢",
    "answer": "ごうまん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-067",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「錯覚」の読みを答えよ。",
    "answer": "さっかく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-068",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「暫定」",
    "answer": "ざんてい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-069",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：恣意",
    "answer": "しい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-070",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「滋養」の読みを答えよ。",
    "answer": "じよう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-071",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「遮蔽」",
    "answer": "しゃへい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-072",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：充填",
    "answer": "じゅうてん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-073",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「醜態」の読みを答えよ。",
    "answer": "しゅうたい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-074",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「粛清」",
    "answer": "しゅくせい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-075",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：掌握",
    "answer": "しょうあく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-076",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「称賛」の読みを答えよ。",
    "answer": "しょうさん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-077",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「沼沢」",
    "answer": "しょうたく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-078",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：侵食",
    "answer": "しんしょく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-079",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「慎重」の読みを答えよ。",
    "answer": "しんちょう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-080",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「甚大」",
    "answer": "じんだい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-081",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：垂涎",
    "answer": "すいぜん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-082",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「脆い」の読みを答えよ。",
    "answer": "もろい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-083",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「精悍」",
    "answer": "せいかん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-084",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：遡及",
    "answer": "そきゅう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-085",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「怠惰」の読みを答えよ。",
    "answer": "たいだ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-086",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「堆積」",
    "answer": "たいせき",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-087",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：卓越",
    "answer": "たくえつ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-088",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「逐次」の読みを答えよ。",
    "answer": "ちくじ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-089",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「陳腐」",
    "answer": "ちんぷ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-090",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：貞操",
    "answer": "ていそう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-091",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「淘汰」の読みを答えよ。",
    "answer": "とうた",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-092",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「難色」",
    "answer": "なんしょく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-093",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：如実",
    "answer": "にょじつ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-094",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「把握」の読みを答えよ。",
    "answer": "はあく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-095",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「煩雑」",
    "answer": "はんざつ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-096",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：悲哀",
    "answer": "ひあい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-097",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「侮辱」の読みを答えよ。",
    "answer": "ぶじょく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-098",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「俸給」",
    "answer": "ほうきゅう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-099",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：飽和",
    "answer": "ほうわ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-100",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「翻弄」の読みを答えよ。",
    "answer": "ほんろう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-101",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「摩擦」",
    "answer": "まさつ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-102",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：冥利",
    "answer": "みょうり",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-103",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「遊戯」の読みを答えよ。",
    "answer": "ゆうぎ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-104",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「猶予」",
    "answer": "ゆうよ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-105",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：窯業",
    "answer": "ようぎょう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-106",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「羅列」の読みを答えよ。",
    "answer": "られつ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-107",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「履歴」",
    "answer": "りれき",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-108",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：廉価",
    "answer": "れんか",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-109",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「露呈」の読みを答えよ。",
    "answer": "ろてい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-110",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「脇役」",
    "answer": "わきやく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-111",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：毀損",
    "answer": "きそん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-112",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「亀裂」の読みを答えよ。",
    "answer": "きれつ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-113",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「弔意」",
    "answer": "ちょうい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-114",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：漸次",
    "answer": "ぜんじ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-115",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「脈拍」の読みを答えよ。",
    "answer": "みゃくはく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-116",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「憧憬」",
    "answer": "どうけい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-117",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：忌避",
    "answer": "きひ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-118",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「窮極」の読みを答えよ。",
    "answer": "きゅうきょく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-119",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「陥穽」",
    "answer": "かんせい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-120",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：絢爛",
    "answer": "けんらん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-121",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「昂揚」の読みを答えよ。",
    "answer": "こうよう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-122",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「錯誤」",
    "answer": "さくご",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-123",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：諧謔",
    "answer": "かいぎゃく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-124",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「矯正」の読みを答えよ。",
    "answer": "きょうせい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-125",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「謹慎」",
    "answer": "きんしん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-126",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：愉悦",
    "answer": "ゆえつ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-127",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「簡潔」の読みを答えよ。",
    "answer": "かんけつ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-128",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「赴任」",
    "answer": "ふにん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-129",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：脆弱",
    "answer": "ぜいじゃく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-130",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「顕著」の読みを答えよ。",
    "answer": "けんちょ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-131",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「勘案」",
    "answer": "かんあん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-132",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：遂行",
    "answer": "すいこう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-133",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「慈善」の読みを答えよ。",
    "answer": "じぜん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-134",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「克服」",
    "answer": "こくふく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-135",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：貢献",
    "answer": "こうけん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-136",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「懸念」の読みを答えよ。",
    "answer": "けねん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-137",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「妥当」",
    "answer": "だとう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-138",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：模索",
    "answer": "もさく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-139",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「沿革」の読みを答えよ。",
    "answer": "えんかく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-140",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「概略」",
    "answer": "がいりゃく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-141",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：余韻",
    "answer": "よいん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-142",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「享受」の読みを答えよ。",
    "answer": "きょうじゅ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-143",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「精緻」",
    "answer": "せいち",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-144",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：端緒",
    "answer": "たんしょ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-145",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「稚拙」の読みを答えよ。",
    "answer": "ちせつ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-146",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「脈絡」",
    "answer": "みゃくらく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-147",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：朗報",
    "answer": "ろうほう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-148",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「是正」の読みを答えよ。",
    "answer": "ぜせい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-149",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「斬新」",
    "answer": "ざんしん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-150",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：遵守",
    "answer": "じゅんしゅ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-151",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「汎用」の読みを答えよ。",
    "answer": "はんよう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-152",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「踏襲」",
    "answer": "とうしゅう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-153",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：培養",
    "answer": "ばいよう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-154",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「網羅」の読みを答えよ。",
    "answer": "もうら",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-155",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「隔絶」",
    "answer": "かくぜつ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-156",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：均衡",
    "answer": "きんこう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-157",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「抑揚」の読みを答えよ。",
    "answer": "よくよう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-158",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「旺盛」",
    "answer": "おうせい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-159",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：郷愁",
    "answer": "きょうしゅう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-160",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「逸脱」の読みを答えよ。",
    "answer": "いつだつ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-161",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「謙虚」",
    "answer": "けんきょ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-162",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：端的",
    "answer": "たんてき",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-163",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「漠然」の読みを答えよ。",
    "answer": "ばくぜん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-164",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「顧慮」",
    "answer": "こりょ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-165",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：寡黙",
    "answer": "かもく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-166",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「錯綜」の読みを答えよ。",
    "answer": "さくそう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-167",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「推敲」",
    "answer": "すいこう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-168",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：辛辣",
    "answer": "しんらつ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-169",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「緩慢」の読みを答えよ。",
    "answer": "かんまん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-170",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「克明」",
    "answer": "こくめい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-171",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：精励",
    "answer": "せいれい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-172",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「懐柔」の読みを答えよ。",
    "answer": "かいじゅう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-173",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「看破」",
    "answer": "かんぱ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-174",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：勃興",
    "answer": "ぼっこう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-175",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「脅威」の読みを答えよ。",
    "answer": "きょうい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-176",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「斡旋」",
    "answer": "あっせん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-177",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：隠蔽",
    "answer": "いんぺい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-178",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「畏敬」の読みを答えよ。",
    "answer": "いけい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-179",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「臆測」",
    "answer": "おくそく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-180",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：佳境",
    "answer": "かきょう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-181",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「過疎」の読みを答えよ。",
    "answer": "かそ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-182",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「瓦解」",
    "answer": "がかい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-183",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：寡占",
    "answer": "かせん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-184",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「既往」の読みを答えよ。",
    "answer": "きおう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-185",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「窮乏」",
    "answer": "きゅうぼう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-186",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：勤勉",
    "answer": "きんべん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-187",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「愚弄」の読みを答えよ。",
    "answer": "ぐろう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-188",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「契機」",
    "answer": "けいき",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-189",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：懸隔",
    "answer": "けんかく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-190",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「弦楽」の読みを答えよ。",
    "answer": "げんがく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-191",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「孤高」",
    "answer": "ここう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-192",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：傲慢",
    "answer": "ごうまん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-193",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「錯覚」の読みを答えよ。",
    "answer": "さっかく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-194",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「暫定」",
    "answer": "ざんてい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-195",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：恣意",
    "answer": "しい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-196",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「滋養」の読みを答えよ。",
    "answer": "じよう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-197",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「遮蔽」",
    "answer": "しゃへい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-198",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：充填",
    "answer": "じゅうてん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-199",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「醜態」の読みを答えよ。",
    "answer": "しゅうたい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-200",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「粛清」",
    "answer": "しゅくせい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-201",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：掌握",
    "answer": "しょうあく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-202",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「称賛」の読みを答えよ。",
    "answer": "しょうさん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-203",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「沼沢」",
    "answer": "しょうたく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-204",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：侵食",
    "answer": "しんしょく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-205",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「慎重」の読みを答えよ。",
    "answer": "しんちょう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-206",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「甚大」",
    "answer": "じんだい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-207",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：垂涎",
    "answer": "すいぜん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-208",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「脆い」の読みを答えよ。",
    "answer": "もろい",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-209",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「精悍」",
    "answer": "せいかん",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-210",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：遡及",
    "answer": "そきゅう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-211",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「怠惰」の読みを答えよ。",
    "answer": "たいだ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-212",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「堆積」",
    "answer": "たいせき",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-213",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：卓越",
    "answer": "たくえつ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-214",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「逐次」の読みを答えよ。",
    "answer": "ちくじ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-215",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「陳腐」",
    "answer": "ちんぷ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-216",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：貞操",
    "answer": "ていそう",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-217",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「淘汰」の読みを答えよ。",
    "answer": "とうた",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-218",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "次の熟語を音読するとどう読むか。「難色」",
    "answer": "なんしょく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-219",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "漢字の読みを確認せよ：如実",
    "answer": "にょじつ",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "reading-220",
    "category": "reading",
    "categoryLabel": "読み",
    "prompt": "「把握」の読みを答えよ。",
    "answer": "はあく",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "読み"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-001",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nかんけつ",
    "answer": "簡潔",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-002",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：ふにん",
    "answer": "赴任",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-003",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「ぜいじゃく」",
    "answer": "脆弱",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-004",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nけんちょ",
    "answer": "顕著",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-005",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：かんあん",
    "answer": "勘案",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-006",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「すいこう」",
    "answer": "遂行",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-007",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nじぜん",
    "answer": "慈善",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-008",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：こくふく",
    "answer": "克服",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-009",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「こうけん」",
    "answer": "貢献",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-010",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nけねん",
    "answer": "懸念",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-011",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：だとう",
    "answer": "妥当",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-012",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「もさく」",
    "answer": "模索",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-013",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nえんかく",
    "answer": "沿革",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-014",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：がいりゃく",
    "answer": "概略",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-015",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「よいん」",
    "answer": "余韻",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-016",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nきょうじゅ",
    "answer": "享受",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-017",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：せいち",
    "answer": "精緻",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-018",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「たんしょ」",
    "answer": "端緒",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-019",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nちせつ",
    "answer": "稚拙",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-020",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：みゃくらく",
    "answer": "脈絡",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-021",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「ろうほう」",
    "answer": "朗報",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-022",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nぜせい",
    "answer": "是正",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-023",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：ざんしん",
    "answer": "斬新",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-024",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「じゅんしゅ」",
    "answer": "遵守",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-025",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nはんよう",
    "answer": "汎用",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-026",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：とうしゅう",
    "answer": "踏襲",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-027",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「ばいよう」",
    "answer": "培養",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-028",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nもうら",
    "answer": "網羅",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-029",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：かくぜつ",
    "answer": "隔絶",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-030",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「きんこう」",
    "answer": "均衡",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-031",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nよくよう",
    "answer": "抑揚",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-032",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：おうせい",
    "answer": "旺盛",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-033",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「きょうしゅう」",
    "answer": "郷愁",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-034",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nいつだつ",
    "answer": "逸脱",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-035",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：けんきょ",
    "answer": "謙虚",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-036",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「たんてき」",
    "answer": "端的",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-037",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nばくぜん",
    "answer": "漠然",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-038",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：こりょ",
    "answer": "顧慮",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-039",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「かもく」",
    "answer": "寡黙",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-040",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nさくそう",
    "answer": "錯綜",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-041",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：すいこう",
    "answer": "推敲",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-042",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「しんらつ」",
    "answer": "辛辣",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-043",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nかんまん",
    "answer": "緩慢",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-044",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：こくめい",
    "answer": "克明",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-045",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「せいれい」",
    "answer": "精励",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-046",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nかいじゅう",
    "answer": "懐柔",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-047",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：かんぱ",
    "answer": "看破",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-048",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「ぼっこう」",
    "answer": "勃興",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-049",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nきょうい",
    "answer": "脅威",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-050",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：あっせん",
    "answer": "斡旋",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-051",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「いんぺい」",
    "answer": "隠蔽",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-052",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nいけい",
    "answer": "畏敬",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-053",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：おくそく",
    "answer": "臆測",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-054",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「かきょう」",
    "answer": "佳境",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-055",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nかそ",
    "answer": "過疎",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-056",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：がかい",
    "answer": "瓦解",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-057",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「かせん」",
    "answer": "寡占",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-058",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nきおう",
    "answer": "既往",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-059",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：きゅうぼう",
    "answer": "窮乏",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-060",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「きんべん」",
    "answer": "勤勉",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-061",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nぐろう",
    "answer": "愚弄",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-062",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：けいき",
    "answer": "契機",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-063",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「けんかく」",
    "answer": "懸隔",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-064",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nげんがく",
    "answer": "弦楽",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-065",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：ここう",
    "answer": "孤高",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-066",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「ごうまん」",
    "answer": "傲慢",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-067",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nさっかく",
    "answer": "錯覚",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-068",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：ざんてい",
    "answer": "暫定",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-069",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「しい」",
    "answer": "恣意",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-070",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nじよう",
    "answer": "滋養",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-071",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：しゃへい",
    "answer": "遮蔽",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-072",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「じゅうてん」",
    "answer": "充填",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-073",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nしゅうたい",
    "answer": "醜態",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-074",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：しゅくせい",
    "answer": "粛清",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-075",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「しょうあく」",
    "answer": "掌握",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-076",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nしょうさん",
    "answer": "称賛",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-077",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：しょうたく",
    "answer": "沼沢",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-078",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「しんしょく」",
    "answer": "侵食",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-079",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nしんちょう",
    "answer": "慎重",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-080",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：じんだい",
    "answer": "甚大",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-081",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「すいぜん」",
    "answer": "垂涎",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-082",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nもろい",
    "answer": "脆い",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-083",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：せいかん",
    "answer": "精悍",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-084",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「そきゅう」",
    "answer": "遡及",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-085",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nたいだ",
    "answer": "怠惰",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-086",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：たいせき",
    "answer": "堆積",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-087",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「たくえつ」",
    "answer": "卓越",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-088",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nちくじ",
    "answer": "逐次",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-089",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：ちんぷ",
    "answer": "陳腐",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-090",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「ていそう」",
    "answer": "貞操",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-091",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nとうた",
    "answer": "淘汰",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-092",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：なんしょく",
    "answer": "難色",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-093",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「にょじつ」",
    "answer": "如実",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-094",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nはあく",
    "answer": "把握",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-095",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：はんざつ",
    "answer": "煩雑",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-096",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「ひあい」",
    "answer": "悲哀",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-097",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nぶじょく",
    "answer": "侮辱",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-098",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：ほうきゅう",
    "answer": "俸給",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-099",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「ほうわ」",
    "answer": "飽和",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-100",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nほんろう",
    "answer": "翻弄",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-101",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：まさつ",
    "answer": "摩擦",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-102",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「みょうり」",
    "answer": "冥利",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-103",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nゆうぎ",
    "answer": "遊戯",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-104",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：ゆうよ",
    "answer": "猶予",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-105",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「ようぎょう」",
    "answer": "窯業",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-106",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nられつ",
    "answer": "羅列",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-107",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：りれき",
    "answer": "履歴",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-108",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「れんか」",
    "answer": "廉価",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-109",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nろてい",
    "answer": "露呈",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-110",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：わきやく",
    "answer": "脇役",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-111",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「きそん」",
    "answer": "毀損",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-112",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nきれつ",
    "answer": "亀裂",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-113",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：ちょうい",
    "answer": "弔意",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-114",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「ぜんじ」",
    "answer": "漸次",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-115",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nみゃくはく",
    "answer": "脈拍",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-116",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：どうけい",
    "answer": "憧憬",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-117",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「きひ」",
    "answer": "忌避",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-118",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nきゅうきょく",
    "answer": "窮極",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-119",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：かんせい",
    "answer": "陥穽",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-120",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「けんらん」",
    "answer": "絢爛",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-121",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nこうよう",
    "answer": "昂揚",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-122",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：さくご",
    "answer": "錯誤",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-123",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「かいぎゃく」",
    "answer": "諧謔",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-124",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nきょうせい",
    "answer": "矯正",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-125",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：きんしん",
    "answer": "謹慎",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-126",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「ゆえつ」",
    "answer": "愉悦",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-127",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nかんけつ",
    "answer": "簡潔",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-128",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：ふにん",
    "answer": "赴任",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-129",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「ぜいじゃく」",
    "answer": "脆弱",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-130",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nけんちょ",
    "answer": "顕著",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-131",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：かんあん",
    "answer": "勘案",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-132",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「すいこう」",
    "answer": "遂行",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-133",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nじぜん",
    "answer": "慈善",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-134",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：こくふく",
    "answer": "克服",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-135",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「こうけん」",
    "answer": "貢献",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-136",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nけねん",
    "answer": "懸念",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-137",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：だとう",
    "answer": "妥当",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-138",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「もさく」",
    "answer": "模索",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-139",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nえんかく",
    "answer": "沿革",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-140",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：がいりゃく",
    "answer": "概略",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-141",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「よいん」",
    "answer": "余韻",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-142",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nきょうじゅ",
    "answer": "享受",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-143",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：せいち",
    "answer": "精緻",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-144",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「たんしょ」",
    "answer": "端緒",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-145",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nちせつ",
    "answer": "稚拙",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-146",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：みゃくらく",
    "answer": "脈絡",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-147",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「ろうほう」",
    "answer": "朗報",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-148",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nぜせい",
    "answer": "是正",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-149",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：ざんしん",
    "answer": "斬新",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-150",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「じゅんしゅ」",
    "answer": "遵守",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-151",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nはんよう",
    "answer": "汎用",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-152",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：とうしゅう",
    "answer": "踏襲",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-153",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「ばいよう」",
    "answer": "培養",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-154",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nもうら",
    "answer": "網羅",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-155",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：かくぜつ",
    "answer": "隔絶",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-156",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「きんこう」",
    "answer": "均衡",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-157",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nよくよう",
    "answer": "抑揚",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-158",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：おうせい",
    "answer": "旺盛",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-159",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「きょうしゅう」",
    "answer": "郷愁",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-160",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nいつだつ",
    "answer": "逸脱",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-161",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：けんきょ",
    "answer": "謙虚",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-162",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「たんてき」",
    "answer": "端的",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-163",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nばくぜん",
    "answer": "漠然",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-164",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：こりょ",
    "answer": "顧慮",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-165",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「かもく」",
    "answer": "寡黙",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-166",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nさくそう",
    "answer": "錯綜",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-167",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：すいこう",
    "answer": "推敲",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-168",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「しんらつ」",
    "answer": "辛辣",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-169",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nかんまん",
    "answer": "緩慢",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-170",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：こくめい",
    "answer": "克明",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-171",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「せいれい」",
    "answer": "精励",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-172",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nかいじゅう",
    "answer": "懐柔",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-173",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：かんぱ",
    "answer": "看破",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-174",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「ぼっこう」",
    "answer": "勃興",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-175",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nきょうい",
    "answer": "脅威",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-176",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：あっせん",
    "answer": "斡旋",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-177",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「いんぺい」",
    "answer": "隠蔽",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-178",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nいけい",
    "answer": "畏敬",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-179",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：おくそく",
    "answer": "臆測",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-180",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「かきょう」",
    "answer": "佳境",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-181",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nかそ",
    "answer": "過疎",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-182",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：がかい",
    "answer": "瓦解",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-183",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「かせん」",
    "answer": "寡占",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-184",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nきおう",
    "answer": "既往",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-185",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：きゅうぼう",
    "answer": "窮乏",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-186",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「きんべん」",
    "answer": "勤勉",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-187",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nぐろう",
    "answer": "愚弄",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-188",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：けいき",
    "answer": "契機",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-189",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「けんかく」",
    "answer": "懸隔",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-190",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nげんがく",
    "answer": "弦楽",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-191",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：ここう",
    "answer": "孤高",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-192",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「ごうまん」",
    "answer": "傲慢",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-193",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nさっかく",
    "answer": "錯覚",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-194",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：ざんてい",
    "answer": "暫定",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-195",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「しい」",
    "answer": "恣意",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-196",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nじよう",
    "answer": "滋養",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-197",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：しゃへい",
    "answer": "遮蔽",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-198",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「じゅうてん」",
    "answer": "充填",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-199",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nしゅうたい",
    "answer": "醜態",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-200",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：しゅくせい",
    "answer": "粛清",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-201",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「しょうあく」",
    "answer": "掌握",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-202",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nしょうさん",
    "answer": "称賛",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-203",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：しょうたく",
    "answer": "沼沢",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-204",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「しんしょく」",
    "answer": "侵食",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-205",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nしんちょう",
    "answer": "慎重",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-206",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：じんだい",
    "answer": "甚大",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-207",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「すいぜん」",
    "answer": "垂涎",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-208",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nもろい",
    "answer": "脆い",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-209",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：せいかん",
    "answer": "精悍",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-210",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「そきゅう」",
    "answer": "遡及",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-211",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nたいだ",
    "answer": "怠惰",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-212",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：たいせき",
    "answer": "堆積",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-213",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「たくえつ」",
    "answer": "卓越",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-214",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nちくじ",
    "answer": "逐次",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-215",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：ちんぷ",
    "answer": "陳腐",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-216",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「ていそう」",
    "answer": "貞操",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-217",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nとうた",
    "answer": "淘汰",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-218",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り問題。語に合う漢字を答えよ：なんしょく",
    "answer": "難色",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-219",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "次の語を漢字に直せ。読みは「にょじつ」",
    "answer": "如実",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "writing-220",
    "category": "writing",
    "categoryLabel": "書き取り",
    "prompt": "書き取り：次の読みを漢字で書け。\nはあく",
    "answer": "把握",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "書き取り"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-001",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「温故知新」の意味を答えよ。",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-002",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：臥薪嘗胆",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-003",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "一意専心 が表す内容を答えよ。",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-004",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「切磋琢磨」の意味を答えよ。",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-005",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：電光石火",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-006",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "温厚篤実 が表す内容を答えよ。",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-007",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「画竜点睛」の意味を答えよ。",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-008",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：公明正大",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-009",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "試行錯誤 が表す内容を答えよ。",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-010",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「質実剛健」の意味を答えよ。",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-011",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：百花繚乱",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-012",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "付和雷同 が表す内容を答えよ。",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-013",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「起承転結」の意味を答えよ。",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-014",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：明鏡止水",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-015",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "森羅万象 が表す内容を答えよ。",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-016",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「大器晩成」の意味を答えよ。",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-017",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：初志貫徹",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-018",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "臨機応変 が表す内容を答えよ。",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-019",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「不言実行」の意味を答えよ。",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-020",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：用意周到",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-021",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "温故知新 が表す内容を答えよ。",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-022",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「臥薪嘗胆」の意味を答えよ。",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-023",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：一意専心",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-024",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "切磋琢磨 が表す内容を答えよ。",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-025",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「電光石火」の意味を答えよ。",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-026",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：温厚篤実",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-027",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "画竜点睛 が表す内容を答えよ。",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-028",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「公明正大」の意味を答えよ。",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-029",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：試行錯誤",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-030",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "質実剛健 が表す内容を答えよ。",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-031",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「百花繚乱」の意味を答えよ。",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-032",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：付和雷同",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-033",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "起承転結 が表す内容を答えよ。",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-034",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「明鏡止水」の意味を答えよ。",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-035",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：森羅万象",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-036",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "大器晩成 が表す内容を答えよ。",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-037",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「初志貫徹」の意味を答えよ。",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-038",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：臨機応変",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-039",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "不言実行 が表す内容を答えよ。",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-040",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「用意周到」の意味を答えよ。",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-041",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：温故知新",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-042",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "臥薪嘗胆 が表す内容を答えよ。",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-043",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「一意専心」の意味を答えよ。",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-044",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：切磋琢磨",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-045",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "電光石火 が表す内容を答えよ。",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-046",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「温厚篤実」の意味を答えよ。",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-047",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：画竜点睛",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-048",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "公明正大 が表す内容を答えよ。",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-049",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「試行錯誤」の意味を答えよ。",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-050",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：質実剛健",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-051",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "百花繚乱 が表す内容を答えよ。",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-052",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「付和雷同」の意味を答えよ。",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-053",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：起承転結",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-054",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "明鏡止水 が表す内容を答えよ。",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-055",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「森羅万象」の意味を答えよ。",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-056",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：大器晩成",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-057",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "初志貫徹 が表す内容を答えよ。",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-058",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「臨機応変」の意味を答えよ。",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-059",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：不言実行",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-060",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "用意周到 が表す内容を答えよ。",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-061",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「温故知新」の意味を答えよ。",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-062",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：臥薪嘗胆",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-063",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "一意専心 が表す内容を答えよ。",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-064",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「切磋琢磨」の意味を答えよ。",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-065",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：電光石火",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-066",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "温厚篤実 が表す内容を答えよ。",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-067",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「画竜点睛」の意味を答えよ。",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-068",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：公明正大",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-069",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "試行錯誤 が表す内容を答えよ。",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-070",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「質実剛健」の意味を答えよ。",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-071",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：百花繚乱",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-072",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "付和雷同 が表す内容を答えよ。",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-073",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「起承転結」の意味を答えよ。",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-074",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：明鏡止水",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-075",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "森羅万象 が表す内容を答えよ。",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-076",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「大器晩成」の意味を答えよ。",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-077",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：初志貫徹",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-078",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "臨機応変 が表す内容を答えよ。",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-079",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「不言実行」の意味を答えよ。",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-080",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：用意周到",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-081",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "温故知新 が表す内容を答えよ。",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-082",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「臥薪嘗胆」の意味を答えよ。",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-083",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：一意専心",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-084",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "切磋琢磨 が表す内容を答えよ。",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-085",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「電光石火」の意味を答えよ。",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-086",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：温厚篤実",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-087",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "画竜点睛 が表す内容を答えよ。",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-088",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「公明正大」の意味を答えよ。",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-089",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：試行錯誤",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-090",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "質実剛健 が表す内容を答えよ。",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-091",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「百花繚乱」の意味を答えよ。",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-092",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：付和雷同",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-093",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "起承転結 が表す内容を答えよ。",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-094",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「明鏡止水」の意味を答えよ。",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-095",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：森羅万象",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-096",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "大器晩成 が表す内容を答えよ。",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-097",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「初志貫徹」の意味を答えよ。",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-098",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：臨機応変",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-099",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "不言実行 が表す内容を答えよ。",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-100",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「用意周到」の意味を答えよ。",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-101",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：温故知新",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-102",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "臥薪嘗胆 が表す内容を答えよ。",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-103",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「一意専心」の意味を答えよ。",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-104",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：切磋琢磨",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-105",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "電光石火 が表す内容を答えよ。",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-106",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「温厚篤実」の意味を答えよ。",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-107",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：画竜点睛",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-108",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "公明正大 が表す内容を答えよ。",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-109",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「試行錯誤」の意味を答えよ。",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-110",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：質実剛健",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-111",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "百花繚乱 が表す内容を答えよ。",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-112",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「付和雷同」の意味を答えよ。",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-113",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：起承転結",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-114",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "明鏡止水 が表す内容を答えよ。",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-115",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「森羅万象」の意味を答えよ。",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-116",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：大器晩成",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-117",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "初志貫徹 が表す内容を答えよ。",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-118",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「臨機応変」の意味を答えよ。",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-119",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：不言実行",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-120",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "用意周到 が表す内容を答えよ。",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-121",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「温故知新」の意味を答えよ。",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-122",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：臥薪嘗胆",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-123",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "一意専心 が表す内容を答えよ。",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-124",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「切磋琢磨」の意味を答えよ。",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-125",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：電光石火",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-126",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "温厚篤実 が表す内容を答えよ。",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-127",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「画竜点睛」の意味を答えよ。",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-128",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：公明正大",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-129",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "試行錯誤 が表す内容を答えよ。",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-130",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「質実剛健」の意味を答えよ。",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-131",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：百花繚乱",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-132",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "付和雷同 が表す内容を答えよ。",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-133",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「起承転結」の意味を答えよ。",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-134",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：明鏡止水",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-135",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "森羅万象 が表す内容を答えよ。",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-136",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「大器晩成」の意味を答えよ。",
    "answer": "昔を学び新しい道理を知ること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-137",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：初志貫徹",
    "answer": "目的のため苦労に耐えること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-138",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "臨機応変 が表す内容を答えよ。",
    "answer": "一つのことに心を集中すること",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-139",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "「不言実行」の意味を答えよ。",
    "answer": "努力して学問や技芸を磨くこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "idiom-140",
    "category": "idiom",
    "categoryLabel": "四字熟語",
    "prompt": "次の四字熟語を説明せよ：用意周到",
    "answer": "行動が非常に速いこと",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "四字熟語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-001",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「承諾」の対義語を答えよ。",
    "answer": "拒絶",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-002",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「簡素」の対義語を答えよ。",
    "answer": "華美",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-003",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「進歩」の対義語を答えよ。",
    "answer": "退歩",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-004",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「公開」の対義語を答えよ。",
    "answer": "秘密",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-005",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「原因」の対義語を答えよ。",
    "answer": "結果",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-006",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「需要」の対義語を答えよ。",
    "answer": "供給",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-007",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「楽観」の対義語を答えよ。",
    "answer": "悲観",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-008",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「具体」の対義語を答えよ。",
    "answer": "抽象",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-009",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「合法」の対義語を答えよ。",
    "answer": "違法",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-010",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「安定」の対義語を答えよ。",
    "answer": "動揺",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-011",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「謙虚」の対義語を答えよ。",
    "answer": "傲慢",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-012",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「豊富」の対義語を答えよ。",
    "answer": "貧乏",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-013",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「緊張」の対義語を答えよ。",
    "answer": "弛緩",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-014",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「促進」の対義語を答えよ。",
    "answer": "阻害",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-015",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「肯定」の対義語を答えよ。",
    "answer": "否定",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-016",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「温暖」の対義語を答えよ。",
    "answer": "寒冷",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-017",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「永久」の対義語を答えよ。",
    "answer": "一時",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-018",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「優越」の対義語を答えよ。",
    "answer": "劣等",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-019",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「保守」の対義語を答えよ。",
    "answer": "革新",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-020",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「理想」の対義語を答えよ。",
    "answer": "現実",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-021",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「承諾」の対義語を答えよ。",
    "answer": "拒絶",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-022",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「簡素」の対義語を答えよ。",
    "answer": "華美",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-023",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「進歩」の対義語を答えよ。",
    "answer": "退歩",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-024",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「公開」の対義語を答えよ。",
    "answer": "秘密",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-025",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「原因」の対義語を答えよ。",
    "answer": "結果",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-026",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「需要」の対義語を答えよ。",
    "answer": "供給",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-027",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「楽観」の対義語を答えよ。",
    "answer": "悲観",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-028",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「具体」の対義語を答えよ。",
    "answer": "抽象",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-029",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「合法」の対義語を答えよ。",
    "answer": "違法",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-030",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「安定」の対義語を答えよ。",
    "answer": "動揺",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-031",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「謙虚」の対義語を答えよ。",
    "answer": "傲慢",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-032",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「豊富」の対義語を答えよ。",
    "answer": "貧乏",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-033",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「緊張」の対義語を答えよ。",
    "answer": "弛緩",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-034",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「促進」の対義語を答えよ。",
    "answer": "阻害",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-035",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「肯定」の対義語を答えよ。",
    "answer": "否定",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-036",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「温暖」の対義語を答えよ。",
    "answer": "寒冷",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-037",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「永久」の対義語を答えよ。",
    "answer": "一時",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-038",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「優越」の対義語を答えよ。",
    "answer": "劣等",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-039",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「保守」の対義語を答えよ。",
    "answer": "革新",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-040",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「理想」の対義語を答えよ。",
    "answer": "現実",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-041",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「承諾」の対義語を答えよ。",
    "answer": "拒絶",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-042",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「簡素」の対義語を答えよ。",
    "answer": "華美",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-043",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「進歩」の対義語を答えよ。",
    "answer": "退歩",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-044",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「公開」の対義語を答えよ。",
    "answer": "秘密",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-045",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「原因」の対義語を答えよ。",
    "answer": "結果",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-046",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「需要」の対義語を答えよ。",
    "answer": "供給",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-047",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「楽観」の対義語を答えよ。",
    "answer": "悲観",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-048",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「具体」の対義語を答えよ。",
    "answer": "抽象",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-049",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「合法」の対義語を答えよ。",
    "answer": "違法",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-050",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「安定」の対義語を答えよ。",
    "answer": "動揺",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-051",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「謙虚」の対義語を答えよ。",
    "answer": "傲慢",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-052",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「豊富」の対義語を答えよ。",
    "answer": "貧乏",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-053",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「緊張」の対義語を答えよ。",
    "answer": "弛緩",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-054",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「促進」の対義語を答えよ。",
    "answer": "阻害",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-055",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「肯定」の対義語を答えよ。",
    "answer": "否定",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-056",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「温暖」の対義語を答えよ。",
    "answer": "寒冷",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-057",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「永久」の対義語を答えよ。",
    "answer": "一時",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-058",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「優越」の対義語を答えよ。",
    "answer": "劣等",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-059",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「保守」の対義語を答えよ。",
    "answer": "革新",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-060",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「理想」の対義語を答えよ。",
    "answer": "現実",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-061",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「承諾」の対義語を答えよ。",
    "answer": "拒絶",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-062",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「簡素」の対義語を答えよ。",
    "answer": "華美",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-063",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「進歩」の対義語を答えよ。",
    "answer": "退歩",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-064",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「公開」の対義語を答えよ。",
    "answer": "秘密",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-065",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「原因」の対義語を答えよ。",
    "answer": "結果",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-066",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「需要」の対義語を答えよ。",
    "answer": "供給",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-067",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「楽観」の対義語を答えよ。",
    "answer": "悲観",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-068",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「具体」の対義語を答えよ。",
    "answer": "抽象",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-069",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「合法」の対義語を答えよ。",
    "answer": "違法",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-070",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「安定」の対義語を答えよ。",
    "answer": "動揺",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-071",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「謙虚」の対義語を答えよ。",
    "answer": "傲慢",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-072",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「豊富」の対義語を答えよ。",
    "answer": "貧乏",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-073",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「緊張」の対義語を答えよ。",
    "answer": "弛緩",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-074",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「促進」の対義語を答えよ。",
    "answer": "阻害",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-075",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「肯定」の対義語を答えよ。",
    "answer": "否定",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-076",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「温暖」の対義語を答えよ。",
    "answer": "寒冷",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-077",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「永久」の対義語を答えよ。",
    "answer": "一時",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-078",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「優越」の対義語を答えよ。",
    "answer": "劣等",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-079",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「保守」の対義語を答えよ。",
    "answer": "革新",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-080",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「理想」の対義語を答えよ。",
    "answer": "現実",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-081",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「承諾」の対義語を答えよ。",
    "answer": "拒絶",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-082",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「簡素」の対義語を答えよ。",
    "answer": "華美",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-083",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「進歩」の対義語を答えよ。",
    "answer": "退歩",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-084",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「公開」の対義語を答えよ。",
    "answer": "秘密",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-085",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「原因」の対義語を答えよ。",
    "answer": "結果",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-086",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「需要」の対義語を答えよ。",
    "answer": "供給",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-087",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「楽観」の対義語を答えよ。",
    "answer": "悲観",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-088",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「具体」の対義語を答えよ。",
    "answer": "抽象",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-089",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「合法」の対義語を答えよ。",
    "answer": "違法",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-090",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「安定」の対義語を答えよ。",
    "answer": "動揺",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-091",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「謙虚」の対義語を答えよ。",
    "answer": "傲慢",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-092",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「豊富」の対義語を答えよ。",
    "answer": "貧乏",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-093",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「緊張」の対義語を答えよ。",
    "answer": "弛緩",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-094",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「促進」の対義語を答えよ。",
    "answer": "阻害",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-095",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「肯定」の対義語を答えよ。",
    "answer": "否定",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-096",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「温暖」の対義語を答えよ。",
    "answer": "寒冷",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-097",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「永久」の対義語を答えよ。",
    "answer": "一時",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-098",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「優越」の対義語を答えよ。",
    "answer": "劣等",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-099",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「保守」の対義語を答えよ。",
    "answer": "革新",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-100",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「理想」の対義語を答えよ。",
    "answer": "現実",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-101",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「承諾」の対義語を答えよ。",
    "answer": "拒絶",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-102",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「簡素」の対義語を答えよ。",
    "answer": "華美",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-103",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「進歩」の対義語を答えよ。",
    "answer": "退歩",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-104",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「公開」の対義語を答えよ。",
    "answer": "秘密",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-105",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「原因」の対義語を答えよ。",
    "answer": "結果",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-106",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「需要」の対義語を答えよ。",
    "answer": "供給",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-107",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「楽観」の対義語を答えよ。",
    "answer": "悲観",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-108",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「具体」の対義語を答えよ。",
    "answer": "抽象",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-109",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「合法」の対義語を答えよ。",
    "answer": "違法",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-110",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「安定」の対義語を答えよ。",
    "answer": "動揺",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-111",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「謙虚」の対義語を答えよ。",
    "answer": "傲慢",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-112",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「豊富」の対義語を答えよ。",
    "answer": "貧乏",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-113",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「緊張」の対義語を答えよ。",
    "answer": "弛緩",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-114",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「促進」の対義語を答えよ。",
    "answer": "阻害",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-115",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「肯定」の対義語を答えよ。",
    "answer": "否定",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-116",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「温暖」の対義語を答えよ。",
    "answer": "寒冷",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-117",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「永久」の対義語を答えよ。",
    "answer": "一時",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-118",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「優越」の対義語を答えよ。",
    "answer": "劣等",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-119",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「保守」の対義語を答えよ。",
    "answer": "革新",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-120",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「理想」の対義語を答えよ。",
    "answer": "現実",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-121",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「承諾」の対義語を答えよ。",
    "answer": "拒絶",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-122",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「簡素」の対義語を答えよ。",
    "answer": "華美",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-123",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「進歩」の対義語を答えよ。",
    "answer": "退歩",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-124",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「公開」の対義語を答えよ。",
    "answer": "秘密",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-125",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「原因」の対義語を答えよ。",
    "answer": "結果",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-126",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「需要」の対義語を答えよ。",
    "answer": "供給",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-127",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「楽観」の対義語を答えよ。",
    "answer": "悲観",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-128",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「具体」の対義語を答えよ。",
    "answer": "抽象",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-129",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「合法」の対義語を答えよ。",
    "answer": "違法",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-130",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「安定」の対義語を答えよ。",
    "answer": "動揺",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-131",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「謙虚」の対義語を答えよ。",
    "answer": "傲慢",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-132",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「豊富」の対義語を答えよ。",
    "answer": "貧乏",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-133",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「緊張」の対義語を答えよ。",
    "answer": "弛緩",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-134",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「促進」の対義語を答えよ。",
    "answer": "阻害",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-135",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「肯定」の対義語を答えよ。",
    "answer": "否定",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-136",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「温暖」の対義語を答えよ。",
    "answer": "寒冷",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-137",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「永久」の対義語を答えよ。",
    "answer": "一時",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-138",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「優越」の対義語を答えよ。",
    "answer": "劣等",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-139",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「保守」の対義語を答えよ。",
    "answer": "革新",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "antonym-140",
    "category": "antonym",
    "categoryLabel": "対義語・類義語",
    "prompt": "「理想」の対義語を答えよ。",
    "answer": "現実",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "対義語・類義語"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-001",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「湖」の部首を答えよ。",
    "answer": "さんずい",
    "choices": [
      "さんずい",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-002",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「裕」の部首を答えよ。",
    "answer": "ころもへん",
    "choices": [
      "ころもへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-003",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「銅」の部首を答えよ。",
    "answer": "かねへん",
    "choices": [
      "かねへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-004",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「峰」の部首を答えよ。",
    "answer": "やまへん",
    "choices": [
      "やまへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-005",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「郊」の部首を答えよ。",
    "answer": "おおざと",
    "choices": [
      "おおざと",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-006",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「胸」の部首を答えよ。",
    "answer": "にくづき",
    "choices": [
      "にくづき",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-007",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「講」の部首を答えよ。",
    "answer": "ごんべん",
    "choices": [
      "ごんべん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-008",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「燃」の部首を答えよ。",
    "answer": "ひへん",
    "choices": [
      "ひへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-009",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「箱」の部首を答えよ。",
    "answer": "たけかんむり",
    "choices": [
      "たけかんむり",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-010",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「誠」の部首を答えよ。",
    "answer": "ごんべん",
    "choices": [
      "ごんべん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-011",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「駅」の部首を答えよ。",
    "answer": "うまへん",
    "choices": [
      "うまへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-012",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「晴」の部首を答えよ。",
    "answer": "ひへん",
    "choices": [
      "ひへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-013",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「河」の部首を答えよ。",
    "answer": "さんずい",
    "choices": [
      "さんずい",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-014",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「腕」の部首を答えよ。",
    "answer": "にくづき",
    "choices": [
      "にくづき",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-015",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「貯」の部首を答えよ。",
    "answer": "かいへん",
    "choices": [
      "かいへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-016",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「湖」の部首を答えよ。",
    "answer": "さんずい",
    "choices": [
      "さんずい",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-017",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「裕」の部首を答えよ。",
    "answer": "ころもへん",
    "choices": [
      "ころもへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-018",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「銅」の部首を答えよ。",
    "answer": "かねへん",
    "choices": [
      "かねへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-019",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「峰」の部首を答えよ。",
    "answer": "やまへん",
    "choices": [
      "やまへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-020",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「郊」の部首を答えよ。",
    "answer": "おおざと",
    "choices": [
      "おおざと",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-021",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「胸」の部首を答えよ。",
    "answer": "にくづき",
    "choices": [
      "にくづき",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-022",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「講」の部首を答えよ。",
    "answer": "ごんべん",
    "choices": [
      "ごんべん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-023",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「燃」の部首を答えよ。",
    "answer": "ひへん",
    "choices": [
      "ひへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-024",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「箱」の部首を答えよ。",
    "answer": "たけかんむり",
    "choices": [
      "たけかんむり",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-025",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「誠」の部首を答えよ。",
    "answer": "ごんべん",
    "choices": [
      "ごんべん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-026",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「駅」の部首を答えよ。",
    "answer": "うまへん",
    "choices": [
      "うまへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-027",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「晴」の部首を答えよ。",
    "answer": "ひへん",
    "choices": [
      "ひへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-028",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「河」の部首を答えよ。",
    "answer": "さんずい",
    "choices": [
      "さんずい",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-029",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「腕」の部首を答えよ。",
    "answer": "にくづき",
    "choices": [
      "にくづき",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-030",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「貯」の部首を答えよ。",
    "answer": "かいへん",
    "choices": [
      "かいへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-031",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「湖」の部首を答えよ。",
    "answer": "さんずい",
    "choices": [
      "さんずい",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-032",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「裕」の部首を答えよ。",
    "answer": "ころもへん",
    "choices": [
      "ころもへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-033",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「銅」の部首を答えよ。",
    "answer": "かねへん",
    "choices": [
      "かねへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-034",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「峰」の部首を答えよ。",
    "answer": "やまへん",
    "choices": [
      "やまへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-035",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「郊」の部首を答えよ。",
    "answer": "おおざと",
    "choices": [
      "おおざと",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-036",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「胸」の部首を答えよ。",
    "answer": "にくづき",
    "choices": [
      "にくづき",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-037",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「講」の部首を答えよ。",
    "answer": "ごんべん",
    "choices": [
      "ごんべん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-038",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「燃」の部首を答えよ。",
    "answer": "ひへん",
    "choices": [
      "ひへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-039",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「箱」の部首を答えよ。",
    "answer": "たけかんむり",
    "choices": [
      "たけかんむり",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-040",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「誠」の部首を答えよ。",
    "answer": "ごんべん",
    "choices": [
      "ごんべん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-041",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「駅」の部首を答えよ。",
    "answer": "うまへん",
    "choices": [
      "うまへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-042",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「晴」の部首を答えよ。",
    "answer": "ひへん",
    "choices": [
      "ひへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-043",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「河」の部首を答えよ。",
    "answer": "さんずい",
    "choices": [
      "さんずい",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-044",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「腕」の部首を答えよ。",
    "answer": "にくづき",
    "choices": [
      "にくづき",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-045",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「貯」の部首を答えよ。",
    "answer": "かいへん",
    "choices": [
      "かいへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-046",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「湖」の部首を答えよ。",
    "answer": "さんずい",
    "choices": [
      "さんずい",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-047",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「裕」の部首を答えよ。",
    "answer": "ころもへん",
    "choices": [
      "ころもへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-048",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「銅」の部首を答えよ。",
    "answer": "かねへん",
    "choices": [
      "かねへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-049",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「峰」の部首を答えよ。",
    "answer": "やまへん",
    "choices": [
      "やまへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-050",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「郊」の部首を答えよ。",
    "answer": "おおざと",
    "choices": [
      "おおざと",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-051",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「胸」の部首を答えよ。",
    "answer": "にくづき",
    "choices": [
      "にくづき",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-052",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「講」の部首を答えよ。",
    "answer": "ごんべん",
    "choices": [
      "ごんべん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-053",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「燃」の部首を答えよ。",
    "answer": "ひへん",
    "choices": [
      "ひへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-054",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「箱」の部首を答えよ。",
    "answer": "たけかんむり",
    "choices": [
      "たけかんむり",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-055",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「誠」の部首を答えよ。",
    "answer": "ごんべん",
    "choices": [
      "ごんべん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-056",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「駅」の部首を答えよ。",
    "answer": "うまへん",
    "choices": [
      "うまへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-057",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「晴」の部首を答えよ。",
    "answer": "ひへん",
    "choices": [
      "ひへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-058",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「河」の部首を答えよ。",
    "answer": "さんずい",
    "choices": [
      "さんずい",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-059",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「腕」の部首を答えよ。",
    "answer": "にくづき",
    "choices": [
      "にくづき",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-060",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「貯」の部首を答えよ。",
    "answer": "かいへん",
    "choices": [
      "かいへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-061",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「湖」の部首を答えよ。",
    "answer": "さんずい",
    "choices": [
      "さんずい",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-062",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「裕」の部首を答えよ。",
    "answer": "ころもへん",
    "choices": [
      "ころもへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-063",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「銅」の部首を答えよ。",
    "answer": "かねへん",
    "choices": [
      "かねへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-064",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「峰」の部首を答えよ。",
    "answer": "やまへん",
    "choices": [
      "やまへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-065",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「郊」の部首を答えよ。",
    "answer": "おおざと",
    "choices": [
      "おおざと",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-066",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「胸」の部首を答えよ。",
    "answer": "にくづき",
    "choices": [
      "にくづき",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-067",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「講」の部首を答えよ。",
    "answer": "ごんべん",
    "choices": [
      "ごんべん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-068",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「燃」の部首を答えよ。",
    "answer": "ひへん",
    "choices": [
      "ひへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-069",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「箱」の部首を答えよ。",
    "answer": "たけかんむり",
    "choices": [
      "たけかんむり",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-070",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「誠」の部首を答えよ。",
    "answer": "ごんべん",
    "choices": [
      "ごんべん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-071",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「駅」の部首を答えよ。",
    "answer": "うまへん",
    "choices": [
      "うまへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-072",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「晴」の部首を答えよ。",
    "answer": "ひへん",
    "choices": [
      "ひへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-073",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「河」の部首を答えよ。",
    "answer": "さんずい",
    "choices": [
      "さんずい",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-074",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「腕」の部首を答えよ。",
    "answer": "にくづき",
    "choices": [
      "にくづき",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-075",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「貯」の部首を答えよ。",
    "answer": "かいへん",
    "choices": [
      "かいへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-076",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「湖」の部首を答えよ。",
    "answer": "さんずい",
    "choices": [
      "さんずい",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-077",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「裕」の部首を答えよ。",
    "answer": "ころもへん",
    "choices": [
      "ころもへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-078",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「銅」の部首を答えよ。",
    "answer": "かねへん",
    "choices": [
      "かねへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-079",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「峰」の部首を答えよ。",
    "answer": "やまへん",
    "choices": [
      "やまへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-080",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「郊」の部首を答えよ。",
    "answer": "おおざと",
    "choices": [
      "おおざと",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-081",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「胸」の部首を答えよ。",
    "answer": "にくづき",
    "choices": [
      "にくづき",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-082",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「講」の部首を答えよ。",
    "answer": "ごんべん",
    "choices": [
      "ごんべん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-083",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「燃」の部首を答えよ。",
    "answer": "ひへん",
    "choices": [
      "ひへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-084",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「箱」の部首を答えよ。",
    "answer": "たけかんむり",
    "choices": [
      "たけかんむり",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-085",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「誠」の部首を答えよ。",
    "answer": "ごんべん",
    "choices": [
      "ごんべん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-086",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「駅」の部首を答えよ。",
    "answer": "うまへん",
    "choices": [
      "うまへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-087",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「晴」の部首を答えよ。",
    "answer": "ひへん",
    "choices": [
      "ひへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-088",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「河」の部首を答えよ。",
    "answer": "さんずい",
    "choices": [
      "さんずい",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-089",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「腕」の部首を答えよ。",
    "answer": "にくづき",
    "choices": [
      "にくづき",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-090",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「貯」の部首を答えよ。",
    "answer": "かいへん",
    "choices": [
      "かいへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-091",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「湖」の部首を答えよ。",
    "answer": "さんずい",
    "choices": [
      "さんずい",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-092",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「裕」の部首を答えよ。",
    "answer": "ころもへん",
    "choices": [
      "ころもへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-093",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「銅」の部首を答えよ。",
    "answer": "かねへん",
    "choices": [
      "かねへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-094",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「峰」の部首を答えよ。",
    "answer": "やまへん",
    "choices": [
      "やまへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-095",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「郊」の部首を答えよ。",
    "answer": "おおざと",
    "choices": [
      "おおざと",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-096",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「胸」の部首を答えよ。",
    "answer": "にくづき",
    "choices": [
      "にくづき",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-097",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「講」の部首を答えよ。",
    "answer": "ごんべん",
    "choices": [
      "ごんべん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-098",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「燃」の部首を答えよ。",
    "answer": "ひへん",
    "choices": [
      "ひへん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-099",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「箱」の部首を答えよ。",
    "answer": "たけかんむり",
    "choices": [
      "たけかんむり",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "radical-100",
    "category": "radical",
    "categoryLabel": "部首",
    "prompt": "「誠」の部首を答えよ。",
    "answer": "ごんべん",
    "choices": [
      "ごんべん",
      "きへん",
      "にんべん",
      "さんずい"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "部首"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-001",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「寒暑」の熟語構成を答えよ。",
    "answer": "反対または対応する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-002",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「強弱」の熟語構成を答えよ。",
    "answer": "類似する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-003",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「登山」の熟語構成を答えよ。",
    "answer": "主語・述語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-004",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「読書」の熟語構成を答えよ。",
    "answer": "動詞・目的語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-005",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「青空」の熟語構成を答えよ。",
    "answer": "修飾・被修飾",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-006",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「国立」の熟語構成を答えよ。",
    "answer": "反対または対応する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-007",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「道路」の熟語構成を答えよ。",
    "answer": "類似する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-008",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「増加」の熟語構成を答えよ。",
    "answer": "主語・述語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-009",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「着席」の熟語構成を答えよ。",
    "answer": "動詞・目的語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-010",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「帰国」の熟語構成を答えよ。",
    "answer": "修飾・被修飾",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-011",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「寒暑」の熟語構成を答えよ。",
    "answer": "反対または対応する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-012",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「強弱」の熟語構成を答えよ。",
    "answer": "類似する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-013",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「登山」の熟語構成を答えよ。",
    "answer": "主語・述語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-014",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「読書」の熟語構成を答えよ。",
    "answer": "動詞・目的語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-015",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「青空」の熟語構成を答えよ。",
    "answer": "修飾・被修飾",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-016",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「国立」の熟語構成を答えよ。",
    "answer": "反対または対応する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-017",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「道路」の熟語構成を答えよ。",
    "answer": "類似する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-018",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「増加」の熟語構成を答えよ。",
    "answer": "主語・述語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-019",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「着席」の熟語構成を答えよ。",
    "answer": "動詞・目的語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-020",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「帰国」の熟語構成を答えよ。",
    "answer": "修飾・被修飾",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-021",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「寒暑」の熟語構成を答えよ。",
    "answer": "反対または対応する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-022",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「強弱」の熟語構成を答えよ。",
    "answer": "類似する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-023",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「登山」の熟語構成を答えよ。",
    "answer": "主語・述語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-024",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「読書」の熟語構成を答えよ。",
    "answer": "動詞・目的語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-025",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「青空」の熟語構成を答えよ。",
    "answer": "修飾・被修飾",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-026",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「国立」の熟語構成を答えよ。",
    "answer": "反対または対応する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-027",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「道路」の熟語構成を答えよ。",
    "answer": "類似する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-028",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「増加」の熟語構成を答えよ。",
    "answer": "主語・述語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-029",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「着席」の熟語構成を答えよ。",
    "answer": "動詞・目的語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-030",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「帰国」の熟語構成を答えよ。",
    "answer": "修飾・被修飾",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-031",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「寒暑」の熟語構成を答えよ。",
    "answer": "反対または対応する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-032",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「強弱」の熟語構成を答えよ。",
    "answer": "類似する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-033",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「登山」の熟語構成を答えよ。",
    "answer": "主語・述語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-034",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「読書」の熟語構成を答えよ。",
    "answer": "動詞・目的語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-035",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「青空」の熟語構成を答えよ。",
    "answer": "修飾・被修飾",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-036",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「国立」の熟語構成を答えよ。",
    "answer": "反対または対応する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-037",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「道路」の熟語構成を答えよ。",
    "answer": "類似する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-038",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「増加」の熟語構成を答えよ。",
    "answer": "主語・述語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-039",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「着席」の熟語構成を答えよ。",
    "answer": "動詞・目的語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-040",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「帰国」の熟語構成を答えよ。",
    "answer": "修飾・被修飾",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-041",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「寒暑」の熟語構成を答えよ。",
    "answer": "反対または対応する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-042",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「強弱」の熟語構成を答えよ。",
    "answer": "類似する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-043",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「登山」の熟語構成を答えよ。",
    "answer": "主語・述語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-044",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「読書」の熟語構成を答えよ。",
    "answer": "動詞・目的語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-045",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「青空」の熟語構成を答えよ。",
    "answer": "修飾・被修飾",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-046",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「国立」の熟語構成を答えよ。",
    "answer": "反対または対応する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-047",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「道路」の熟語構成を答えよ。",
    "answer": "類似する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-048",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「増加」の熟語構成を答えよ。",
    "answer": "主語・述語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-049",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「着席」の熟語構成を答えよ。",
    "answer": "動詞・目的語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-050",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「帰国」の熟語構成を答えよ。",
    "answer": "修飾・被修飾",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-051",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「寒暑」の熟語構成を答えよ。",
    "answer": "反対または対応する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-052",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「強弱」の熟語構成を答えよ。",
    "answer": "類似する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-053",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「登山」の熟語構成を答えよ。",
    "answer": "主語・述語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-054",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「読書」の熟語構成を答えよ。",
    "answer": "動詞・目的語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-055",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「青空」の熟語構成を答えよ。",
    "answer": "修飾・被修飾",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-056",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「国立」の熟語構成を答えよ。",
    "answer": "反対または対応する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-057",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「道路」の熟語構成を答えよ。",
    "answer": "類似する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-058",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「増加」の熟語構成を答えよ。",
    "answer": "主語・述語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-059",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「着席」の熟語構成を答えよ。",
    "answer": "動詞・目的語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-060",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「帰国」の熟語構成を答えよ。",
    "answer": "修飾・被修飾",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-061",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「寒暑」の熟語構成を答えよ。",
    "answer": "反対または対応する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-062",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「強弱」の熟語構成を答えよ。",
    "answer": "類似する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-063",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「登山」の熟語構成を答えよ。",
    "answer": "主語・述語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-064",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「読書」の熟語構成を答えよ。",
    "answer": "動詞・目的語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-065",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「青空」の熟語構成を答えよ。",
    "answer": "修飾・被修飾",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-066",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「国立」の熟語構成を答えよ。",
    "answer": "反対または対応する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-067",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「道路」の熟語構成を答えよ。",
    "answer": "類似する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-068",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「増加」の熟語構成を答えよ。",
    "answer": "主語・述語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-069",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「着席」の熟語構成を答えよ。",
    "answer": "動詞・目的語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-070",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「帰国」の熟語構成を答えよ。",
    "answer": "修飾・被修飾",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-071",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「寒暑」の熟語構成を答えよ。",
    "answer": "反対または対応する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-072",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「強弱」の熟語構成を答えよ。",
    "answer": "類似する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-073",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「登山」の熟語構成を答えよ。",
    "answer": "主語・述語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-074",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「読書」の熟語構成を答えよ。",
    "answer": "動詞・目的語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-075",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「青空」の熟語構成を答えよ。",
    "answer": "修飾・被修飾",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-076",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「国立」の熟語構成を答えよ。",
    "answer": "反対または対応する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-077",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「道路」の熟語構成を答えよ。",
    "answer": "類似する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-078",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「増加」の熟語構成を答えよ。",
    "answer": "主語・述語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-079",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「着席」の熟語構成を答えよ。",
    "answer": "動詞・目的語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-080",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「帰国」の熟語構成を答えよ。",
    "answer": "修飾・被修飾",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-081",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「寒暑」の熟語構成を答えよ。",
    "answer": "反対または対応する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-082",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「強弱」の熟語構成を答えよ。",
    "answer": "類似する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-083",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「登山」の熟語構成を答えよ。",
    "answer": "主語・述語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-084",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「読書」の熟語構成を答えよ。",
    "answer": "動詞・目的語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-085",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「青空」の熟語構成を答えよ。",
    "answer": "修飾・被修飾",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-086",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「国立」の熟語構成を答えよ。",
    "answer": "反対または対応する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-087",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「道路」の熟語構成を答えよ。",
    "answer": "類似する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-088",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「増加」の熟語構成を答えよ。",
    "answer": "主語・述語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-089",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「着席」の熟語構成を答えよ。",
    "answer": "動詞・目的語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-090",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「帰国」の熟語構成を答えよ。",
    "answer": "修飾・被修飾",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-091",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「寒暑」の熟語構成を答えよ。",
    "answer": "反対または対応する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-092",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「強弱」の熟語構成を答えよ。",
    "answer": "類似する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-093",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「登山」の熟語構成を答えよ。",
    "answer": "主語・述語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-094",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「読書」の熟語構成を答えよ。",
    "answer": "動詞・目的語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-095",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「青空」の熟語構成を答えよ。",
    "answer": "修飾・被修飾",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-096",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「国立」の熟語構成を答えよ。",
    "answer": "反対または対応する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-097",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「道路」の熟語構成を答えよ。",
    "answer": "類似する意味",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-098",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「増加」の熟語構成を答えよ。",
    "answer": "主語・述語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-099",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「着席」の熟語構成を答えよ。",
    "answer": "動詞・目的語",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "structure-100",
    "category": "structure",
    "categoryLabel": "熟語構成",
    "prompt": "「帰国」の熟語構成を答えよ。",
    "answer": "修飾・被修飾",
    "choices": [
      "反対または対応する意味",
      "類似する意味",
      "主語・述語",
      "動詞・目的語",
      "修飾・被修飾"
    ],
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "熟語構成"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-001",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n責任をテンカする",
    "answer": "転嫁",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-002",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n計画をスイコウする",
    "answer": "遂行",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-003",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n効果がケンチョだ",
    "answer": "顕著",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-004",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n意見をカンアンする",
    "answer": "勘案",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-005",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n問題をカイケツする",
    "answer": "解決",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-006",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n事実をハアクする",
    "answer": "把握",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-007",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n規則をジュンシュする",
    "answer": "遵守",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-008",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n課題をモサクする",
    "answer": "模索",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-009",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n責任をテンカする",
    "answer": "転嫁",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-010",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n計画をスイコウする",
    "answer": "遂行",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-011",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n効果がケンチョだ",
    "answer": "顕著",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-012",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n意見をカンアンする",
    "answer": "勘案",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-013",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n問題をカイケツする",
    "answer": "解決",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-014",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n事実をハアクする",
    "answer": "把握",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-015",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n規則をジュンシュする",
    "answer": "遵守",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-016",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n課題をモサクする",
    "answer": "模索",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-017",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n責任をテンカする",
    "answer": "転嫁",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-018",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n計画をスイコウする",
    "answer": "遂行",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-019",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n効果がケンチョだ",
    "answer": "顕著",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-020",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n意見をカンアンする",
    "answer": "勘案",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-021",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n問題をカイケツする",
    "answer": "解決",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-022",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n事実をハアクする",
    "answer": "把握",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-023",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n規則をジュンシュする",
    "answer": "遵守",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-024",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n課題をモサクする",
    "answer": "模索",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-025",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n責任をテンカする",
    "answer": "転嫁",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-026",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n計画をスイコウする",
    "answer": "遂行",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-027",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n効果がケンチョだ",
    "answer": "顕著",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-028",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n意見をカンアンする",
    "answer": "勘案",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-029",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n問題をカイケツする",
    "answer": "解決",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-030",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n事実をハアクする",
    "answer": "把握",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-031",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n規則をジュンシュする",
    "answer": "遵守",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-032",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n課題をモサクする",
    "answer": "模索",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-033",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n責任をテンカする",
    "answer": "転嫁",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-034",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n計画をスイコウする",
    "answer": "遂行",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-035",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n効果がケンチョだ",
    "answer": "顕著",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-036",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n意見をカンアンする",
    "answer": "勘案",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-037",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n問題をカイケツする",
    "answer": "解決",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-038",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n事実をハアクする",
    "answer": "把握",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-039",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n規則をジュンシュする",
    "answer": "遵守",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-040",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n課題をモサクする",
    "answer": "模索",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-041",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n責任をテンカする",
    "answer": "転嫁",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-042",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n計画をスイコウする",
    "answer": "遂行",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-043",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n効果がケンチョだ",
    "answer": "顕著",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-044",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n意見をカンアンする",
    "answer": "勘案",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-045",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n問題をカイケツする",
    "answer": "解決",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-046",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n事実をハアクする",
    "answer": "把握",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-047",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n規則をジュンシュする",
    "answer": "遵守",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-048",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n課題をモサクする",
    "answer": "模索",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-049",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n責任をテンカする",
    "answer": "転嫁",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-050",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n計画をスイコウする",
    "answer": "遂行",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-051",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n効果がケンチョだ",
    "answer": "顕著",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-052",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n意見をカンアンする",
    "answer": "勘案",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-053",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n問題をカイケツする",
    "answer": "解決",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-054",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n事実をハアクする",
    "answer": "把握",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-055",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n規則をジュンシュする",
    "answer": "遵守",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-056",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n課題をモサクする",
    "answer": "模索",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-057",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n責任をテンカする",
    "answer": "転嫁",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-058",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n計画をスイコウする",
    "answer": "遂行",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-059",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n効果がケンチョだ",
    "answer": "顕著",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-060",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n意見をカンアンする",
    "answer": "勘案",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-061",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n問題をカイケツする",
    "answer": "解決",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-062",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n事実をハアクする",
    "answer": "把握",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-063",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n規則をジュンシュする",
    "answer": "遵守",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-064",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n課題をモサクする",
    "answer": "模索",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-065",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n責任をテンカする",
    "answer": "転嫁",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-066",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n計画をスイコウする",
    "answer": "遂行",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-067",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n効果がケンチョだ",
    "answer": "顕著",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-068",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n意見をカンアンする",
    "answer": "勘案",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-069",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n問題をカイケツする",
    "answer": "解決",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-070",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n事実をハアクする",
    "answer": "把握",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-071",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n規則をジュンシュする",
    "answer": "遵守",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-072",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n課題をモサクする",
    "answer": "模索",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-073",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n責任をテンカする",
    "answer": "転嫁",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-074",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n計画をスイコウする",
    "answer": "遂行",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-075",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n効果がケンチョだ",
    "answer": "顕著",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-076",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n意見をカンアンする",
    "answer": "勘案",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-077",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n問題をカイケツする",
    "answer": "解決",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-078",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n事実をハアクする",
    "answer": "把握",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-079",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n規則をジュンシュする",
    "answer": "遵守",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  },
  {
    "id": "correction-080",
    "category": "correction",
    "categoryLabel": "誤字訂正",
    "prompt": "次の文のカタカナを漢字に直せ。\n課題をモサクする",
    "answer": "模索",
    "explanation": "意味と用法を確認し、答えを声に出して復習しましょう。",
    "source": "original",
    "tags": [
      "誤字訂正"
    ],
    "difficulty": 2
  }
];
