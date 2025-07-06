import { Product } from "./product.js";
import { User } from "./user.js";
import { processPurchase } from "./purchase.js";
// 商品データ作成
const product1 = new Product(101, "ノートパソコン", 150000, 2);
const product2 = new Product(102, "マウス", 3000, 0);
// ユーザーデータ作成
const user1 = new User(1, "田中太郎", "tanaka@example.com");
// 情報表示
product1.displayInfo();
product2.displayInfo();
user1.displayInfo();
// 購入処理のシミュレーション
processPurchase(user1, product1); // 成功
processPurchase(user1, product2); // 失敗（在庫切れ）
