export class User {
  constructor(public id: number, public name: string, public email: string) {}

  displayInfo(): void {
    console.log(
      `ユーザーID: ${this.id}, 名前: ${this.name}, メール: ${this.email}`
    );
  }
}
