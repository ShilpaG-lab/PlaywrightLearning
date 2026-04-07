let scores=[30,20,40,50];

//map transforms every element ,returns New array

let grads=scores.map(a=>a > 20 ? "pass":"fail");
console.log(grads);


let passing=scores.filter(s=>s>=30);///reduces the array
console.log(passing);

let nested =[[1,2],[3,4],[5]];  //make a leaner array
console.log(nested.flat());