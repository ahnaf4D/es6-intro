const numbers = [1, 52, 14, 17, 11];
for(const number of numbers){
    // console.log(number);
}

const singerName = 'Justin Beiber';
for(const char of singerName){
    // console.log(char);
}
const phoneDetails = {
    name : 'Google Pixel 6',
    price : 1500,
    color : 'silver',
    source : 'google',
    made : "CA , Los Angeles"
}
for(const key in phoneDetails){
    const value = phoneDetails[key];
    const keys = key;
    // console.log(key , value);
}
const keys = Object.keys(phoneDetails);
console.log(keys);
for(const key of keys){
    const values = phoneDetails[key];
    console.log(key , values);
}