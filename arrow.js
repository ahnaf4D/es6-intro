// 2 ways of declaring functions [ES5]
// 1. Function Declaration
// 2. Function Expression
// ES5 Function naturally known as Normal Function
// =================================================
// Modern Technique for Declaring Functions comes in ES6[Arrow Function]

// Function Declaration
function addingAbbr(name) {
    const result = `Mr. ${name}`;
    return result;
}
// Function Expression / annonymose function
const makeAverage = function (x, y, z, length) {
    const addition = x + y + z;
    const avg = Math.round(addition / length);
    return avg;
}


// ES6[Arrow Function]
const sum = x => x *x ;
const output = sum(2);
console.log(output);