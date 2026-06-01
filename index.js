// // // // console.log("hello");
// // // let a=[1,2,3,4];
// // // console.log(a);
// // const employeeNames = require("./array");

// // console.log(employeeNames);
// import employeeNames from "./array.js";

// console.log(employeeNames);
import promise from "./promise.js";

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });