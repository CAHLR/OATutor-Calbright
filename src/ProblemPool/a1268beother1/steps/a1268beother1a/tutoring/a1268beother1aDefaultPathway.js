var hints = [{id: "a1268beother1a-h1", type: "hint", dependencies: [], title: "Grouping", text: "This polynomial consists of 4 terms, so we will solve by grouping. Factor the first 2 terms and then factor the last 2 terms. If the factors in the parantheses are identical, we can continue the process and solve, unless more factoring is suggested.", variabilization: {}}, {id: "a1268beother1a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x^2$$"], dependencies: ["a1268beother1a-h1"], title: "Factoring", text: "What can you factor out of the first 2 terms?", variabilization: {}}, {id: "a1268beother1a-h3", type: "hint", dependencies: ["a1268beother1a-h2"], title: "Factoring", text: "What can you factor out of the last 2 terms?", variabilization: {}}, {id: "a1268beother1a-h4", type: "hint", dependencies: ["a1268beother1a-h3"], title: "Factoring", text: "Combine the common expressions and add the factors.", variabilization: {}}, {id: "a1268beother1a-h5", type: "hint", dependencies: ["a1268beother1a-h4"], title: "Factoring", text: "The expression can be rewritten as $$\\left(x^2-1\\right) \\left(x+2\\right)$$.", variabilization: {}}, {id: "a1268beother1a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x^2-1$$"], dependencies: ["a1268beother1a-h5"], title: "Factoring", text: "You can factor one of the expressions again. Which one?", variabilization: {}}, {id: "a1268beother1a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(x-1\\right) \\left(x+1\\right) \\left(x+2\\right)$$"], dependencies: ["a1268beother1a-h6"], title: "Factoring", text: "What is the expression after factoring $$x^2-1$$?", variabilization: {}}, {id: "a1268beother1a-h8", type: "hint", dependencies: ["a1268beother1a-h7"], title: "Zero-Product Property", text: "Use the Zero-Product property to solve for x.", variabilization: {}}, {id: "a1268beother1a-h9", type: "hint", dependencies: ["a1268beother1a-h8"], title: "Zero-Product Property", text: "Solve for x when $$(x-1)=0$$.", variabilization: {}}, {id: "a1268beother1a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["a1268beother1a-h9"], title: "Zero-Product Property", text: "What is the solution for x?", variabilization: {}}, {id: "a1268beother1a-h11", type: "hint", dependencies: ["a1268beother1a-h10"], title: "Zero-Product Property", text: "Solve for x when $$x+1=0$$.", variabilization: {}}, {id: "a1268beother1a-h12", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-1"], dependencies: ["a1268beother1a-h11"], title: "Zero-Product Property", text: "What is the solution for x?", variabilization: {}}, {id: "a1268beother1a-h13", type: "hint", dependencies: ["a1268beother1a-h12"], title: "Zero-Product Property", text: "Solve for x when $$x+2=0$$.", variabilization: {}}, {id: "a1268beother1a-h14", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-2"], dependencies: ["a1268beother1a-h13"], title: "Zero-Product Property", text: "What is the solution for x?", variabilization: {}}, {id: "a1268beother1a-h15", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["-2,-1,1"], dependencies: ["a1268beother1a-h14"], title: "Solution", text: "What are the 3 solutions?", choices: ["-2,-1,1", "-1,1,2", "-2,1,1", "1,1,2"], variabilization: {}}, ]; export {hints};