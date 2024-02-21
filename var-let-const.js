// let allow to reassign it
// const does not allow to reassign it and we can use it

const money = 25;
// money = 63;
const richMan = money + 60; // use it
// console.log(money);
// console.log(richMan);

// always use const when we declare arrays
const numbers = [12, 52, 63, 14];
// numbers  = [25,63,96,14];
numbers[0] = 14;
numbers.push(63,189,24);
// console.log(numbers);
// cannot reassign array and but do all array operations

// Always use const when we declare object

const phoneDetails = {
    name : "iPhone 14 pro Max",
    price : 1400,
    color : 'blue'
}
// phoneDetails = {
//     name : 'Google Pixel 6'
// }
phoneDetails.name = 'iPhone 15'
// console.log(phoneDetails);

let increase = 0;
increase += 25;
// console.log(increase);

// Looping 
// for(let i = 0; i <= 25 ; i++){
//     console.log(i);
// }
const nums = [10,25,63,96,14,47];
for(let i = 0 ; i < nums.length; i++){
    const elements = nums[i];
    console.log(elements);
}