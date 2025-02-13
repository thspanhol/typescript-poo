interface camiseta {
    estoque: number;
    cores?: string[];
    slogan(): string;
}

interface camisetaAdidas extends camiseta{
    marca: "Adidas";
}

interface camisetaNike extends camiseta{
    marca: "Nike";
}

// extends utiliza tudo feito anteriormente -- implements implementa tudo etipulado anteriormente

let camiseta1: camisetaAdidas = {
    marca: "Adidas",
    estoque: 10,
    cores: ["preta", "branca"],
    slogan() {
        return `Essa Camiseta é da marca ${this.marca}`
    },
}

let camiseta2: camisetaNike = {
    marca: "Nike",
    estoque: 14,
    slogan() {
        return `Essa Camiseta é da marca ${this.marca}`
    },
}

console.log(camiseta1);
console.log(camiseta2);

console.log(camiseta1.slogan());


