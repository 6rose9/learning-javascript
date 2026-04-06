console.log('+"10" =>', +"10"); // 10

console.log('+"" =>', +""); // 0
console.log('+" " =>', +" "); // 0

console.log('+"Hello" => ', +"Hello"); // NaN

console.log(Number.parseInt("Hello123")); // NaN
console.log(Number.parseInt("123Hello")); // 123
console.log(Number.parseFloat("123Hello")); // 123
console.log(+"123Hello"); // NaN

console.log('+true ', +true); //1
console.log('+false ', +false); //0

console.log(Number.parseInt(true)); // NaN

console.log('+null => ', +null); // 0
console.log('+undefined => ', +undefined); // NaN
