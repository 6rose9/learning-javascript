    let obj1 = {
        name: "Aung Aung",
        age: 20,
    };

    let obj2 = obj1;
    obj2.age = 30;

console.log('obj1.age :', obj1.age); // 30
console.log('obj2.age ', obj2.age); // 30

console.log('obj1 === obj2 ?', obj1 === obj2); // true

// assign a new object to obj2 variable
obj2 = {
    name: "Mg Mg",
    age: 25
}

console.log('obj1 === obj2 ?', obj1 === obj2); // false

obj2.age = 36;
console.log('obj2.age : ', obj2.age);
