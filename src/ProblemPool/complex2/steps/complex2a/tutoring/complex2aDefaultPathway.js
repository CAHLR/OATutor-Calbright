var hints = [{id: "complex2a-h1", type: "hint", dependencies: [], title: "Standard Form Definition", text: "The standard form of an imaginary number $$\\sqrt{-a}$$ is $$\\sqrt{a} i$$.", variabilization: {}}, {id: "complex2a-h2", type: "hint", dependencies: ["complex2a-h1"], title: "Rewriting the Expression as a Product", text: "The first step is to rewrite the expression as a product of the square root of -1 and the square root of another value.", variabilization: {}}, {id: "complex2a-h3", type: "hint", dependencies: ["complex2a-h2"], title: "Rewriting the Expression as a Product", text: "The expression, $$\\sqrt{-\\left(24\\right)}$$, can be rewritten as $$\\sqrt{-\\left(1\\right)} \\sqrt{24}$$.", variabilization: {}}, {id: "complex2a-h4", type: "hint", dependencies: [], title: "Definition of i", text: "i represents $$\\sqrt{-\\left(1\\right)}$$.", variabilization: {}}, {id: "complex2a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(2\\right) \\sqrt{6}$$"], dependencies: ["complex2a-h3"], title: "Square Root of 24", text: "What is $$\\sqrt{24}$$?", choices: ["$$\\left(2\\right) \\sqrt{6}$$", "$$\\left(2\\right) \\sqrt{3}$$", "$$\\left(3\\right) \\sqrt{5}$$", "$$\\left(6\\right) \\sqrt{6}$$"], variabilization: {}}, ]; export {hints};