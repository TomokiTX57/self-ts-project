import { User } from "./user";
import { Product } from "./product";

export function processPurchase(user: User, product: Product): void {
  console.log(`\n${user.name} が ${product.name} を購入しようとしています。`);

  if (product.decreaseStock()) {
    console.log(
      `✅ 購入成功: ${user.name} が ${product.name} を購入しました。残り在庫: ${product.stock}`
    );
  } else {
    console.log(`購入失敗: ${product.name} は在庫切れです。`);
  }
}
