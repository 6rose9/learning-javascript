let concate = "";

// number to string
let value = 134;
console.log(concate + value); // 134
console.log(typeof(concate + value)); // string

// boolean to string
value = true;
console.log(concate + value); // true
console.log(typeof(concate + value)); // string

// undefined to string
value = undefined;
console.log(concate + value); // undefined
console.log(typeof(concate + value)); // string

// null to string
value = null;
console.log(concate + value); // null
console.log(typeof(concate + value)); // string

// NaN to string
console.log(concate + value); // NaN
console.log(typeof(concate + value)); // string