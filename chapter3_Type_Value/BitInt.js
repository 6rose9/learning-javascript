let a = BigInt(90003549583469735629569);
let b = BigInt(90003549583469735629569);
let c = 1000;

console.log(a + b); //180007099166939456471040n
// console.log(a + c); // TypeError: Cannot mix BigInt and other types

c = 1000n;
console.log(a + c); //90003549583469728236520n

console.log(200_343_3423_4)