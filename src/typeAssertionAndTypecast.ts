// Type Assertion serve para informar o tipo ao complilador

let nvalor: number;
let svalor: string;
let uvalor: unknown;

uvalor = 10;

nvalor = <number>uvalor;

// Typecast converte o tipo

svalor = "77";

nvalor = Number.parseInt(svalor)

console.log(svalor);
console.log(nvalor);
