let a = 10.123;
console.log('a.toFixed(2) ', a.toFixed());

a = 3;
console.log(`base 2 of ${a} toString => `, a.toString(2)); // 11
console.log(`base 8 of ${a} toString => `, a.toString(8)); // 3
console.log(`base 10 of ${a} toString => `, a.toString(10)); //3

a = 9;
console.log(`base 2 of ${a} toString => `, a.toString(2)); // 1001
console.log(`base 8 of ${a} toString => `, a.toString(8)); // 11
console.log(`base 10 of ${a} toString => `, a.toString(10)); //9