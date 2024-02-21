function multiply(n1= 1,n2=0){
    const result = n1*n2;
    return result;
}
const output = multiply();
console.log(output);

function userName(first , last = ' '){
    const fullName = first + ' ' + last;
    return fullName;
}
const output2 = userName('Ahnaf');
console.log(output2);

// Array
function countLength(arr = []){
    return arr.length;
}
const output3 = countLength();
console.log(output3);
// object
function pdPrice(obj = {}){
    return obj
}
const output4 = pdPrice();
console.log(output4);
// 