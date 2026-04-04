let strname = 'name';
let symbol = Symbol(strname);
let symbol2 = Symbol(strname);

console.log('typeof symbol : ', typeof symbol); //symbol
console.log('symbol : ', symbol); // Symbol(name)

console.log('symbol == symbol2 ? ', symbol == symbol2); // false