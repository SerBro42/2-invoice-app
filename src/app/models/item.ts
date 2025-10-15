export class Item {
  id!: number;
  product!: string;
  price!: number;
  quantity!: number;

  //Function to calculate the total price of the item depending on the quantity
  total(): number {
    return (this.price * this.quantity);
  }
}
