function hello(){
    console.log("hello");
}

console.log('""+hello ', ""+hello); // function hello(){
                                        //console.log("hello");
                                    //}
console.log('+hello ', +hello); // NaN
console.log('!!hello ', !!hello); // true