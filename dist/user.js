export class User {
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
