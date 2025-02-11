let data = {
    name: "Thales",
    age: 28,
    online: true,
    hello:(name: string)=>{console.log("Hello " + name)}   
}

console.log(typeof(data));
console.log(data);
data.hello("Spanhol");

let data2: object = {
    name: "Thales",
    age: 28,
    online: true,
    hello:(name: string)=>{console.log("Hello " + name)}
}

console.log(typeof(data2));
//console.log(data2.name);
data.hello("Spanhol");
