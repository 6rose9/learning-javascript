// The declaration var data is hoisted to the top of the function.
// But its assignment (= "JavaScript") is NOT hoisted.
function hello() {
    // function scope
    console.log('First data is ' + data);
    var data = "JavaScript";
}

hello(); // First data is undefined

{
    var str = "Hello";
    console.log('str is ', str);
}

// console.log('str is ', str); // error 
// console.log('var data inside function', data); // error

