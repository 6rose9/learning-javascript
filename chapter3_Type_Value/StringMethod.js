// string is primitive in javascript
// string is immutable so String API can't mutate the origin string.

let str = "0123456789";
console.log(typeof str); // string

console.log(Object.getOwnPropertyNames(String.prototype)); // String API
/**
 * [
  'length',            'constructor',   'anchor',
  'big',               'blink',         'bold',
  'charAt',            'charCodeAt',    'codePointAt',
  'concat',            'endsWith',      'fontcolor',
  'fontsize',          'fixed',         'includes',
  'indexOf',           'italics',       'lastIndexOf',
  'link',              'localeCompare', 'match',
  'matchAll',          'normalize',     'padEnd',
  'padStart',          'repeat',        'replace',
  'replaceAll',        'search',        'slice',
  'small',             'split',         'strike',
  'sub',               'substr',        'substring',
  'sup',               'startsWith',    'toString',
  'trim',              'trimStart',     'trimLeft',
  'trimEnd',           'trimRight',     'toLocaleLowerCase',
  'toLocaleUpperCase', 'toLowerCase',   'toUpperCase',
  'valueOf',           'at'
]
 */
console.log('str.length => ', str.length); // 10

// -------------------------------------------------------- String API

// substring(index, lenght);
console.log('str.substring(2,8) => ', str.substring(2, 8)); // 234567
console.log('str.substring(2,str.str.length) => ', str.substring(2, str.length)); //23456789
console.log('str.substring(2) => ', str.substring(2));  //23456789
console.log('str.substring(-2) => ', str.substring(-2)); //0123456789 (mean no work)

console.log('str.slice(-2) => ', str.slice(-2)); // 89
console.log('str.slice(-2,-3) => ', str.slice(-4, -3)); // 6

console.log('str.split(5) => ', str.split(5)); // [ '01234', '6789' ]

console.log('str.indexOf("5") => ', str.indexOf("5")); //5
console.log('str.indexOf("10") => ', str.indexOf("10") );  // -1

let hello = "hello";

console.log('str.indexOf("l") => ', hello.indexOf('l')); // 2
console.log('str.lastIndexOf("l") => ', hello.lastIndexOf('l')); //3