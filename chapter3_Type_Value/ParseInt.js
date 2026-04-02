let str1  = "123.abc";
console.log(Number.parseInt(str1)); // 123
console.log(+str1); // NaN

let str2 = "126.33";
console.log(Number.parseInt(str2)); // 126
console.log(+str2); // 126.33

console.log(Number.parseFloat(str1)); // 123
console.log(Number.parseFloat(str2)); // 126.33

console.log(str1 + str2); //123.abc126.33
console.log(str1 * str2); // NaN

console.log(NaN == NaN); // false
console.log(isNaN('234.abe')); //true

let a = 0.3;
let b = 0.2;
let c = a - b;
console.log(c);