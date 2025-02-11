enum dias {
    domingo = 0,
    segunda = 1,
    terca = 2,
    quarta = 3,
    quinta,
    sexta,
    sabado,
}

// Retorna valor
console.log(dias.quinta);
console.log(dias.domingo);
console.log(dias["domingo"]);
// Retorna chave
console.log(dias[1]);

const date = new Date();
console.log(date);
console.log(date.getDay());
console.log(dias[date.getDay()]);

enum cores{
    branco = "#fff",
    preto = "#000",
    vermelho = "#f00",
    verde = "#0f0",
    azul = "#00f"
}

console.log(cores.branco);
console.log(cores["branco"]);
// Enum de string não busca
//console.log(cores[1]);

// Enum pode ser usado como tipo
let corSelecionada: cores = cores.preto;

