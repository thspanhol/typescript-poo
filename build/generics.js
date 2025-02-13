"use strict";
function genericFunc(param) {
    return param;
}
const genericArrowFunc = (param) => `Utilizei um ${typeof param} como parametro na mesma função.`;
console.log(genericArrowFunc(10));
console.log(genericArrowFunc(true));
console.log(genericArrowFunc("TH"));
console.log(genericFunc(10));
console.log(genericFunc(true));
console.log(genericFunc("TH"));
class GenericClass {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const cg1 = new GenericClass(10);
const cg2 = new GenericClass("TH");
console.log(cg1.valor);
console.log(cg2.valor);
