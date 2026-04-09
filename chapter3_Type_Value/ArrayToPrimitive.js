let arr = [10, 20];
console.log('arr.toString() ', arr.toString()); // 10, 20
console.log('+arr ', +arr); // NaN // + don't understand , so NaN

arr = [10];
console.log('arr.toString() ', arr.toString()); // 10
console.log('+arr ', +arr); // 10
console.log('!!arr', !!arr); // true

arr = [];
console.log('arr.toString() ', arr.toString()); // empty string "" so can't see console
console.log('+arr ', +arr); // 0
console.log('arr.valueOf ', arr.valueOf()); // []
console.log('!!arr', !!arr); // true // bcz [] is not falsy value

