var hints = [{id: "quad9a-h1", type: "hint", dependencies: [], title: "Factoring Out Terms", text: "Since all of the terms inclue -x, we can factor it out of the equation: $$-x \\left(\\left(3\\right) x^2+\\left(5\\right) x+\\left(2\\right)\\right)=0$$."}, {id: "quad9a-h2", type: "hint", dependencies: ["quad9a-h1"], title: "Grouping", text: "Now we can factor by grouping. $$\\left(2\\right) \\left(3\\right)=6$$, so we should look for two numbers that multiply to 6 and add to 5. 2 and 3 satisfy this."}, {id: "quad9a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(x+1)*(3x+2)"], dependencies: ["quad9a-h2"], title: "Grouping", text: "What is the factored expression?"}, {id: "quad9a-h4", type: "hint", dependencies: ["quad9a-h3"], title: "Grouping", text: "We can rewrite the expression as $$\\left(3\\right) x^2+\\left(3\\right) x+\\left(2\\right) x+\\left(2\\right)$$ or $$\\left(3\\right) x^2+\\left(3\\right) x+\\left(2\\right) x+\\left(2\\right)$$. Let's factor $$\\left(3\\right) x^2+\\left(3\\right) x$$. 3x goes into both expressions, so let's rewrite this as $$\\left(3\\right) x \\left(x+\\left(1\\right)\\right)$$. Now, factor $$\\left(2\\right) x+\\left(2\\right)$$. 2 goes into both terms, so it is rewritten as $$\\left(2\\right) \\left(x+\\left(1\\right)\\right)$$. Because both $$\\left(3\\right) x \\left(x+\\left(1\\right)\\right)$$ and $$\\left(2\\right) \\left(x+\\left(1\\right)\\right)$$ are multiplied by $$x+\\left(1\\right)$$, we can use the distributive property to rewrite the expression as $$\\left(x+\\left(1\\right)\\right) \\left(\\left(3\\right) x+\\left(2\\right)\\right)$$."}, {id: "quad9a-h5", type: "hint", dependencies: ["quad9a-h4"], title: "Zero Product Property", text: "Now, we can bring back the -x, making our equation $$-x \\left(x+\\left(1\\right)\\right) \\left(\\left(3\\right) x+\\left(2\\right)\\right)$$. Using the Zero Product Property, we can set all the terms equal to zero and solve for x."}, {id: "quad9a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0"], dependencies: ["quad9a-h5"], title: "Zero Product Property", text: "What what value of x makes $$-x=0$$?"}, {id: "quad9a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-1"], dependencies: ["quad9a-h6"], title: "Zero Product Property", text: "What what value of x makes $$x+\\left(1\\right)=0$$?"}, {id: "quad9a-h8", type: "hint", dependencies: ["quad9a-h7"], title: "Zero Product Property", text: "Subtract 1 from both sides of the equation to get $$x=-1$$."}, {id: "quad9a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-2/3"], dependencies: ["quad9a-h8"], title: "Zero Product Property", text: "What what value of x makes $$\\left(3\\right) x+\\left(2\\right)=0$$?"}, {id: "quad9a-h10", type: "hint", dependencies: ["quad9a-h9"], title: "Zero Product Property", text: "Subtract 2 from both sides of the equation, then divide by three to get $$x=\\frac{-\\left(2\\right)}{3}$$."}, {id: "quad9a-h11", type: "hint", dependencies: ["quad9a-h10"], title: "Final Answer", text: "So, our factors are $$x=0$$, $$\\frac{-\\left(2\\right)}{3}$$, -1."}, ]; export {hints};