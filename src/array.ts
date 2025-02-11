let numbers: number[] = [20, 30, 40];
let numbers2: Array<number> = [20, 30, 40];

// Adiciona ao final
numbers.push(50);

// Adiciona ao inicio
numbers.unshift(10);

// Remove do final
numbers.pop();

// Remove do inicio
numbers.shift()

console.log(numbers);

// Array apenas para leitura, fechado para alterações
let numbersRO: ReadonlyArray<number> = [100, 200, 300];

