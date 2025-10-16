import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice: Invoice = invoiceData;

  getInvoice(): Invoice {
    const total = this.calculateTotal();
    return {... this.invoice, total};
  }

  remove(id:number): Invoice {
    this.invoice.items = this.invoice.items.filter(item => item.id != id);
    const total = this.calculateTotal();
    return {... this.invoice, total};
  }

  //Function to add item.
  save(item: Item): Invoice {
    this.invoice.items = [... this.invoice.items, item];
    const total = this.calculateTotal();
    return {... this.invoice, total};
  }

  //function to calculate the total cost of the invoice. The Item class has its own function to calculate its total cost.
  //Currently, our data comes from a hardcoded TS file, instead of a JSON file, and so item.total() is not recognized. Thus, we write (item.price * item.quantity) instead
  calculateTotal() {
  /*let total = 0;
    this.invoice.items.forEach(item => total += item.total());
    return total; */
    return this.invoice.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
