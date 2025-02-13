"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
class UserPF extends classes_1.User {
    cpf;
    constructor(name, password, cpf) {
        super(name, password);
        this.cpf = cpf;
        console.log(`Conta PF criada - Usuário ${this.getName()}`);
    }
}
class UserPJ extends classes_1.User {
    cnpj;
    constructor(name, password, cnpj) {
        super(name, password);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada - Usuário ${this.getName()}`);
    }
}
console.log(classes_1.User.testeStatic);
classes_1.User.testeStatic = "Edit Static";
console.log(classes_1.User.testeStatic);
const pj = new UserPJ("Thales PJ", "123", "456");
const pf = new UserPF("Thales PF", "789", "789");
pj.password = "741";
console.log(pj.password);
