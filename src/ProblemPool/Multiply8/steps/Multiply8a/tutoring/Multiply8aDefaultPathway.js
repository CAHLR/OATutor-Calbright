var hints = [{id: "Multiply8a-h1", type: "hint", dependencies: [], title: "Substitute", text: "Our first step is to substitute -18 for x and 24 for y into the expression, and we get the expression $${\\left(-\\left(18\\right)+\\left(24\\right)\\right)}^2$$.", variabilization: {}}, {id: "Multiply8a-h2", type: "hint", dependencies: ["Multiply8a-h1"], title: "Order of Operations", text: "By the order of operations, we should evaluate what's inside the parenthesis first.", variabilization: {}}, {id: "Multiply8a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6"], dependencies: ["Multiply8a-h2"], title: "Addition", text: "What is $$-\\left(18\\right)+\\left(24\\right)$$?", variabilization: {}}, {id: "Multiply8a-h4", type: "hint", dependencies: ["Multiply8a-h3"], title: "Substitute", text: "Substitute 6 back for $$-\\left(18\\right)+\\left(24\\right)$$, the expression now becomes $${\\left(6\\right)}^2$$.", variabilization: {}}, {id: "Multiply8a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["36"], dependencies: ["Multiply8a-h4"], title: "Exponent", text: "What is $${\\left(6\\right)}^2$$?", variabilization: {}}, {id: "Multiply8a-h6", type: "hint", dependencies: ["Multiply8a-h5"], title: "Exponent", text: "$${\\left(6\\right)}^2$$ is the same as $$\\left(6\\right) \\left(6\\right)$$, which evaluates to 36.", variabilization: {}}, ]; export {hints};