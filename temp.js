let a = 5;
let b = 7;

console.log(a, b);

const temp = a;

a = b;

b = temp;

console.log(a, b);



// destrucharing method


let x = 10;
let y = 20;
console.log(x , y);

[x , y ] = [y, x];

console.log(x, y);