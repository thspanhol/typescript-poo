let myName: string = "Thales";
let myAge: number = 28;
let online: boolean = true;
let contents: string[] = ["Angular", "TypeScript"];
let all: any[] = ["String", 28, true]


// Union Types

let nameAndAge: string|number = "Thales";
nameAndAge = 28;

let arrayNameAndAge: (string|number)[] = ["Thales", 28]
