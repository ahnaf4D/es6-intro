const iPhone = {
    model: 'iPhone 11 Pro Max',
    country: 'USA Model',
    price: 2000,
    iosVersion: 17,
    updateEnd: 2027
}
// const iPhoneModel = iPhone.model;
// const buildRegion = iPhone.country;
// console.log(iPhoneModel);
// console.log(buildRegion);
// Destructure in Object
const { model, country, price, iosVersion: ios, updateEnd: end } = iPhone;
// console.log(country); 
// console.log(price); 
// console.log(ios); 
// console.log(end); 


// Array Destructuring
const nums = [12, 52, 63, 14, 122];
const [x, y, z, a, b] = nums;
// console.log(x);
// console.log(a);
// console.log(b);

// 
function doubleIt(a, b) {
    return [a * 5, b * 5];
}
const [first , second] = doubleIt(1,1);
console.log(Array.isArray([first , second]));
