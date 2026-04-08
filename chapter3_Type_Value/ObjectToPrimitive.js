let obj = {
    name: "TK",
};

console.log('obj.toString() ', obj.toString()); //[object Object]
console.log('obj+""', obj + ""); // [object Object]

console.log('-------------------------------------------------------------');

let obj1 = {
    name: "Zin Zin",
    toString() {
        console.log('toString Call ===>');
        return "Hello";
    },
    valueOf() {
        console.log('valueOf Call ===>');
        return {}; // return object, not primitive
    }
}

console.log('obj1.toString() ', obj1.toString()); //Hello
console.log('obj1+""', obj1 + ""); // Hello
console.log('!!obj1', !!obj1); // true

console.log('-------------------------------------------------------------');

let obj2 = {
    name: "Zin Zin",
    toString() {
        console.log('toString Call  ===>');
        return "Hello";
    }
    // there is no valueOf function
}

console.log('obj2.toString() ', obj2.toString()); //Hello
console.log('obj2+""', obj2 + ""); // Hello

console.log('-------------------------------------------------------------');

let obj3 = {
    name: "Zin Zin",
    toString() {
        console.log('toString Call ===>');
        return "Hello";
    },
    valueOf() {
        console.log('valueOf Call ===>');
        return 100; // return primitive
    }
}

console.log('obj3.toString() ', obj3.toString()); //Hello
console.log('obj3+""', obj3 + ""); // 100
console.log('!!obj3', !!obj3); // true

console.log('-------------------------------------------------------------');

let obj4 = {}
console.log('obj4.toString() ', obj4.toString()); //[object Object]
console.log('obj4+""', obj4 + ""); // [object Object]
console.log('+obj4', +obj4); // NaN

// sematic
/**
 * obj4.toString() -> [object object]
 * [object object] -> NaN
 */

console.log('-------------------------------------------------------------');

let obj5 = {
    name: "Zin Zin",
    toString() {
        console.log('toString Call ===>');
        return {}; // object
    },
    valueOf() {
        console.log('valueOf Call ===>');
        return {}; // object
    }
}

console.log('obj5.toString() ', obj5.toString()); //{}
console.log('obj5+""', obj5 + ""); // Cannot convert object to primitive value