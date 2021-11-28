var hints = [{id: "ab1ad7fGenStr25p-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible.", variabilization: {}}, {id: "ab1ad7fGenStr25p-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$-2a+12=4a-12$$"], dependencies: ["ab1ad7fGenStr25p-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation.", variabilization: {}}, {id: "ab1ad7fGenStr25p-h3", type: "hint", dependencies: ["ab1ad7fGenStr25p-h2"], title: "Variable Terms", text: "Collect all variable terms on the right side of the equation.", variabilization: {}}, {id: "ab1ad7fGenStr25p-h4", type: "hint", dependencies: ["ab1ad7fGenStr25p-h3"], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality.", variabilization: {}}, {id: "ab1ad7fGenStr25p-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$12=6a-12$$"], dependencies: ["ab1ad7fGenStr25p-h4"], title: "Addition", text: "Add 2a to each side of the equation.", variabilization: {}}, {id: "ab1ad7fGenStr25p-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$24=6a$$"], dependencies: ["ab1ad7fGenStr25o-h6"], title: "Addition", text: "Add 12 to each side of the equation.", variabilization: {}}, {id: "ab1ad7fGenStr25p-h8", type: "hint", dependencies: ["ab1ad7fGenStr25p-h7"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "ab1ad7fGenStr25p-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$a=4$$"], dependencies: ["ab1ad7fGenStr25p-h8"], title: "Division", text: "Divide 6 from each side.", variabilization: {}}, {id: "ab1ad7fGenStr25p-h10", type: "hint", dependencies: ["ab1ad7fGenStr25p-h9"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "ab1ad7fGenStr25p-h11", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["ab1ad7fGenStr25p-h10"], title: "Verification", text: "Check whether $$-2\\left(4-6\\right)$$ equals $$4\\left(4-3\\right)$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};