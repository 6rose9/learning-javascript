// falsy value

/**
 * false
 * 0 / -0
 * null
 * undefined
 * NaN
 * ""
 */

console.log('!true => ', !true); // flase
console.log('!!true => ', !!true); // true

console.log('!love => ', !'love'); // false
console.log('!!love => ', !!'love'); // true

console.log('!10 => ', !10); // false
console.log('!!10 => ', !!10) // true

console.log('!0 => ', !0); // true
console.log('!!0 => ', !!0); // false

console.log('!1 => ', !1); // false
console.log('!!1 => ', !!1); // true

console.log('!null => ', !null); // true
console.log('!!null => ', !!null); // false

console.log('!"false" => ', !'false'); //false
console.log('!false => ', !false); // true

console.log('!undefined => ', !undefined); // true
console.log('!NaN => ', !NaN); // true