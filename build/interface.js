"use strict";
let camiseta1 = {
    marca: "Adidas",
    estoque: 10,
    cores: ["preta", "branca"],
    slogan() {
        return `Essa Camiseta é da marca ${this.marca}`;
    },
};
let camiseta2 = {
    marca: "Nike",
    estoque: 14,
    slogan() {
        return `Essa Camiseta é da marca ${this.marca}`;
    },
};
console.log(camiseta1);
console.log(camiseta2);
console.log(camiseta1.slogan());
