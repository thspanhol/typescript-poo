// O compilador coloca as functions no inicio do código compilado, o mesmo não ocorre com as arrow functions

function fStandard(n1: number, n2: number): number {
    const resp = n1 + n2;
    return resp;
}

console.log(fStandard(2,2));

const fParameters = (n1: number = 2, n2: number = 2): number => {
    const resp = n1 + n2;
    return resp;
}

console.log(fParameters(3,3));
console.log(fParameters(3));
console.log(fParameters());

const fOptional = (n1: string, n2: string, n3?: string): string => {
    const resp = n1 + n2;
    if (n3) return resp + " " + n3;
    return resp;
}

console.log(fOptional("Thales", "de Barros"));
console.log(fOptional("Thales", "de Barros", "Spanhol"));

const fSomaArray = (array: number[]) => {
    let soma = 0;
    array.forEach((e) => soma += e);
    return soma;
};

console.log(fSomaArray([10,20,30,40,50]));

const fSomaArrayRest = (...n: number[]) => {
    let soma = 0;
    n.forEach((e) => soma += e);
    return soma;
};

console.log(fSomaArrayRest(10,20,30,40,50));

const user = {
    firstName: "Thales",
    lastName: "Spanhol",
    age: 28
}

const usersData = ({firstName, lastName, age}: {firstName: string; lastName: string; age: number}): string => `O usuário ${firstName} ${lastName} tem ${age} anos.`;

console.log(usersData(user));

