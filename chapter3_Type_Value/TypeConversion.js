let a = "10" * "2";
console.log('a :', a); // 20
console.log('typeof a :', typeof a); // number

a = "10" + "2";
console.log('a :', a); // 102
console.log('typeof a :', typeof a); // string

// + semantics => string concat / number arithmetic

a = "10" + 2;
console.log('a :', a); // 102
console.log('typeof a :', typeof a);