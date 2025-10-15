import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';

@Injectable({
  providedIn: 'root'
})
export class Item {

  private invoice: Invoice = invoiceData;

  getInvoice(): Invoice {
    return this.invoice;
  }
}
