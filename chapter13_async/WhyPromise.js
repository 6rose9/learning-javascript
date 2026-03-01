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

// without using promise

fs.readFile('./files/what.txt', (err, data) => {
    if (err) {
        console.error('Error:', err);
        return;
    }

    console.log('Read using callback ', data.toString().length);
});

// Promises flatten the structure
fs.promises.readFile('./files/what.txt')
    .then(data => console.log('Read using promise ', data.toString().length));

console.log("Started...");