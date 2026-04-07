let arr=[1,2,3];

console.log(arr);
//adding at the end
arr.push(4);

console.log(arr);
//remove from the end
arr.pop()
console.log(arr);

//add at the begin
arr.unshift(0);
console.log(arr);

//remove at the begin


arr.shift(0);
console.log(arr);

//splice(start.deletecount...items count)

arr.splice(2,1);
console.log(arr);

arr.splice(1,0,99);
console.log(arr);

arr.splice(1,2,10,20);
console.log(arr);



