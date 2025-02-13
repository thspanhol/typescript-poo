import { User } from "./classes";

class UserPF extends User {

    private cpf: string;

    constructor(name: string, password: string, cpf: string) {
        super(name, password)
        this.cpf = cpf
        console.log(`Conta PF criada - Usuário ${this.getName()}`);
    }
}

class UserPJ extends User {

    private cnpj: string;
    
    constructor(name: string, password: string, cnpj: string) {
        super(name, password)
        this.cnpj = cnpj
        console.log(`Conta PJ criada - Usuário ${this.getName()}`);
    }
}

const pj = new UserPJ("Thales PJ", "123", "456");
const pf = new UserPF("Thales PF", "789", "789");

// set da classe User
pj.password = "741";
// get da classe User
console.log(pj.password);


//pj.info();
//pf.info();