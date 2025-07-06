export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public stock: number
  ) {}

  displayInfo(): void {
    console.log(
      `商品ID: ${this.id}, 名称: ${this.name}, 価格: ¥${this.price}, 在庫: ${this.stock}`
    );
  }

  decreaseStock(): boolean {
    if (this.stock > 0) {
      this.stock--;
      return true;
    } else {
      return false;
    }
  }
}
