export class Product {
    id;
    name;
    price;
    stock;
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    displayInfo() {
        console.log(`商品ID: ${this.id}, 名称: ${this.name}, 価格: ¥${this.price}, 在庫: ${this.stock}`);
    }
    decreaseStock() {
        if (this.stock > 0) {
            this.stock--;
            return true;
        }
        else {
            return false;
        }
    }
}
