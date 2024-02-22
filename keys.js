const phoneDetails = {
    name : 'Google Pixel 6',
    price : 1500,
    color : 'silver',
    source : 'google',
    made : "CA , Los Angeles"
}
const phoneDetailsKey = Object.keys(phoneDetails);
// console.log(phoneDetailsKey);
const phoneDetailsValue = Object.values(phoneDetails);
// console.log(phoneDetailsValue);
const phoneDetailsGroup = Object.entries(phoneDetails);
// console.log(phoneDetailsGroup);
// [
//     [ 'name', 'Google Pixel 6' ],
//     [ 'price', 1500 ],
//     [ 'color', 'silver' ],
//     [ 'source', 'google' ],
//     [ 'made', 'CA , Los Angeles' ]
//   ]
// delete phoneDetails.color;

// Freeze and object
phoneDetails.isRich = true;

console.log(phoneDetails);
Object.freeze(phoneDetails);
console.log(phoneDetails);
phoneDetails.ram = 4;
delete phoneDetails.isRich