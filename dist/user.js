"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    id;
    name;
    email;
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    displayInfo() {
        console.log(`ユーザーID: ${this.id}, 名前: ${this.name}, メール: ${this.email}`);
    }
}
exports.User = User;
