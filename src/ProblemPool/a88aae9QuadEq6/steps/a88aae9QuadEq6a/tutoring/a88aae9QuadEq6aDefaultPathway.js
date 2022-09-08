var hints = [{id: "a88aae9QuadEq6a-h1", type: "hint", dependencies: [], title: "Procedure", text: "To solve the quadratic inequality, the procedure is as follows. Solve for the roots of the quadratic formula, divide the number line into intervals based on the roots of the quadratic formula, test the values of each interval to see if they are positive or negative, and determine the intervals where the inequality is correct.", variabilization: {}}, {id: "a88aae9QuadEq6a-h2", type: "scaffold", problemType: "TextBox", answerType: "string", hintAnswer: ["-3,4"], dependencies: ["a88aae9QuadEq6a-h1"], title: "Quadratic Roots", text: "What are the roots of the quadratic equation? Use ~ for $$\\frac{plus}{minus}$$ and i for imaginary numbers in the answer. Write the answer in the form of x1,x2 if applicable as well.", variabilization: {}}, {id: "a88aae9QuadEq6a-h3", type: "hint", dependencies: ["a88aae9QuadEq6a-h2"], title: "Interval Checking", text: "Now let's check our intervals. We will have 3 distinct intervals to check values for.", variabilization: {}}, {id: "a88aae9QuadEq6a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["8"], dependencies: ["a88aae9QuadEq6a-h3"], title: "Interval Checking", text: "If we plug in $$x=-4$$, what will our value be?", variabilization: {}}, {id: "a88aae9QuadEq6a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-12"], dependencies: ["a88aae9QuadEq6a-h4"], title: "Interval Checking", text: "If we plug in $$x=0$$, what will our value be?", variabilization: {}}, {id: "a88aae9QuadEq6a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["8"], dependencies: ["a88aae9QuadEq6a-h5"], title: "Interval Checking", text: "If we plug in $$x=5$$, what will our value be?", variabilization: {}}, {id: "a88aae9QuadEq6a-h7", type: "scaffold", problemType: "TextBox", answerType: "string", hintAnswer: ["(-inf,-3]&[4,inf)"], dependencies: ["a88aae9QuadEq6a-h6"], title: "Solution", text: "Since we have checked each interval, which ones have positive values in them?", variabilization: {}}, ]; export {hints};