let arr=["super","average","low","high"];

//index of returns the first index not found return -1

console.log(arr.indexOf("low"));

console.log(arr.lastIndexOf("super"));

console.log(arr.lastIndexOf("high"));

console.log(arr.includes("log")); // returns true


console.log(arr.includes("low"));


//find return the first element
let nums=[10,20,30,40];

nums.find(x=>x>20)
console.log(nums.find(x=>x>20))

//findIndex returns index of first found
console.log(nums.findIndex(x=>x>30));

//Last and LastIndex
findLast