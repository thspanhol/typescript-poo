export abstract class User {
    // private - Só na classe || protected - Só na classe e nos filhos || public - Acessado também pelos objetos
    private name: string;
    private _password: string;
    private readonly id: number;

    constructor(name: string, password: string) {
        this.name = name;
        this._password = password;
        this.id = this.generateId();
    }

    private generateId = () => Math.floor(Math.random()*100)+1

    protected getName = (): string => this.name;

    get password(): string{
        return this._password
    }

    set password(password: string) {
        this._password = password;
    }

    public info(): void {
            console.log(`Nome....: ${this.name}`);
            console.log(`Password: ${this._password}`);
            console.log(`ID......: ${this.id}`);    
    }
}

//const user1 = new User("Thales", "123");

//user1.info();
