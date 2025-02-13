"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    name;
    _password;
    id;
    constructor(name, password) {
        this.name = name;
        this._password = password;
        this.id = this.generateId();
    }
    generateId = () => Math.floor(Math.random() * 100) + 1;
    getName = () => this.name;
    get password() {
        return this._password;
    }
    set password(password) {
        this._password = password;
    }
    info() {
        console.log(`Nome....: ${this.name}`);
        console.log(`Password: ${this._password}`);
        console.log(`ID......: ${this.id}`);
    }
}
exports.User = User;
