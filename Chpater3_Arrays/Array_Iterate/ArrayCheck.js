let arr=["abc","def"];
let a="abcd";
console.log(Array.isArray(arr));

console.log(Array.isArray(a));

let results=["pass","fail","pass"]
let counts=results.reduce((acc,r)=> {
    arr[r]=(acc[r]||0)+1;
    return acc;
},{});
console.log(counts.pass);

