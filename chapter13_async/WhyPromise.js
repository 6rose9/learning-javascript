// befor promise: async code relied heavily on callbacks
// callback hell

// getUser(function (user) {
//     getOrders(user.id, function (orders) {
//         getOrderDetails(orders[0], function (details) {
//             processDetails(details, function (result) {
//                 console.log(result);
//             });
//         });
//     });
// });

const fs = require('node:fs');

// Promises flatten the structure
fs.promises.readFile('./files/what.txt')
    .then(data => console.log('data ', data.toString().length));

console.log("Started...");