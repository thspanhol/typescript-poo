function genericFunc<T>(param: T): T {
    return param;
}

const genericArrowFunc = <T>(param: T): string => `Utilizei um ${typeof param} como parametro na mesma função.`;

console.log(genericArrowFunc(10));
console.log(genericArrowFunc(true));
console.log(genericArrowFunc("TH"));

console.log(genericFunc<number>(10));
console.log(genericFunc<boolean>(true));
console.log(genericFunc<string>("TH"));

class GenericClass<T> {
    valor: T;
    constructor(valor: T){
        this.valor = valor;
    }
}

const cg1 = new GenericClass<number>(10);
const cg2 = new GenericClass<string>("TH");

console.log(cg1.valor);
console.log(cg2.valor);

