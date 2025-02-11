let tupla: [string, number, boolean] = ["Thales", 28, true];
let tuplaRO: readonly[string, number, boolean] = ["Thales", 28, true];


tupla.push(77)

console.log(tupla);
// Não consegue ler um index maior do que o definido, mesmo que permita alteração
// Recomendado usar tupla com readonly
//console.log(tupla[3]);

