var hints = [{id: "real18a-h1", type: "hint", dependencies: [], title: "Substitute", text: "Substitute $$y=3$$ into the equation to obtain $$4\\left(3\\right)+\\left(8\\right)-2\\left(3\\right)$$", variabilization: {}}, {id: "real18a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["12"], dependencies: ["real18a-h1"], title: "Multiplication", text: "What is 4(3)?", variabilization: {}}, {id: "real18a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-6"], dependencies: ["real18a-h1"], title: "Multiplication", text: "What is -2(3)?", variabilization: {}}, {id: "real18a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["14"], dependencies: ["real18a-h2", "real18a-h3"], title: "Addition", text: "What is $$\\left(12\\right)+\\left(8\\right)-\\left(6\\right)$$?", variabilization: {}}, ]; export {hints};