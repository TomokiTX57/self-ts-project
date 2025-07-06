"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
const user_1 = require("./user");
const purchase_1 = require("./purchase");
// 商品データ作成
const product1 = new product_1.Product(101, "ノートパソコン", 150000, 2);
const product2 = new product_1.Product(102, "マウス", 3000, 0);
// ユーザーデータ作成
const user1 = new user_1.User(1, "田中太郎", "tanaka@example.com");
// 情報表示
product1.displayInfo();
product2.displayInfo();
user1.displayInfo();
// 購入処理のシミュレーション
(0, purchase_1.processPurchase)(user1, product1); // 成功
(0, purchase_1.processPurchase)(user1, product2); // 失敗（在庫切れ）
