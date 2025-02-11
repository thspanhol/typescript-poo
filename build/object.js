"use strict";
let data = {
    name: "Thales",
    age: 28,
    online: true,
    hello: (name) => { console.log("Hello " + name); }
};
console.log(typeof (data));
console.log(data);
data.hello("Spanhol");
let data2 = {
    name: "Thales",
    age: 28,
    online: true,
    hello: (name) => { console.log("Hello " + name); }
};
console.log(typeof (data2));
data.hello("Spanhol");
