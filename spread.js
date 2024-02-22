const values = Math.max(25,63,96,14);
// console.log(values);
const nums = [14,52,63,89,47,520];
// console.log(nums);
// Convert reference to premitive 
// console.log(Math.max(...nums));

const nums1 = [14,52,63,4,7];
const nums2 = nums1;
const nums3 = [75,...nums2,14];
nums2.push(144);
console.log(nums1);
console.log(nums2);
console.log(nums3);



// Expanding Arrays

const n1 = [14,52,63,78];
const n2 = [47,85,74,36,95];
const n = [102,475,...n1 , ...n2];
console.log(n);

// Passign Arguments to the Function
const add = (a,b,c) => a + b + c;
// input
const value = [5,7];
const output = add(...value);
console.log(output);