var hints = [{id: "add9d-h1", type: "hint", dependencies: [], title: "Finding the Value of $$|q|$$", text: "The first step is to find the value of $$|q|$$."}, {id: "add9d-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["49"], dependencies: ["add9d-h1"], title: "Calculating $$|q|$$", text: "$$q=-49$$. What is $$|\\left(-4\\right)9|$$?", subHints: [{id: "add9d-h2-s1", type: "hint", dependencies: [], title: "Evaluating the Absolute Value of Negative Numbers", text: "If a is negative, then $$|a|=-a$$. For example, $$|\\left(-1\\right)1|=11$$."}]}, {id: "add9d-h3", type: "hint", dependencies: ["add9d-h2"], title: "Finding the Value of $$-|q|$$", text: "Multiply $$|q|$$ by -1 to find $$-|q|$$."}, {id: "add9d-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-49"], dependencies: ["add9d-h3"], title: "Calculating $$-|q|$$ with the Substituted Value of q", text: "What is $$-\\left(1\\right) \\left(49\\right)$$?"}, ]; export {hints};