let names=["suuma","getta","rudra","yani"]

console.log(names.sort());
  

let nums=[10,31,23,20];
console.log(nums.sort()); //sorts based on the first digit 

nums.sort((a,b)=>a-b); //asscending
console.log(nums);

nums.sort((a,b)=>b-a);

console.log(nums);

//slice 

let arr=["10", "2", "1"]
console.log(arr.sort());

console.log(arr.sort((a, b) => a-b));

console.log(arr.sort((a,b)=>b-a))

let a =`"playwright".length`;
console.log(a);

let m=`"fail fail".replace("fail", "pass")`

let a1=[2,3,4];

let b1=[4,5];

e=a1.concat(b1);
console.log(e);

let p=["jan","feb","mar"].join("|");
console.log(p);