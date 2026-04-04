// undefined is primitive data type

let data;
console.log('typeof data : ', typeof data); //undefined
console.log('data value : ', data); // undefined

let obj = {
    name : "Zin Zin",
};
console.log('obj.address : ', obj.address); // undefined

data = null;
console.log('typeof null ', typeof data); // object
console.log('data value ', data); // null

console.log(typeof null === "object"); // true

console.log(typeof [] === "object"); // true
