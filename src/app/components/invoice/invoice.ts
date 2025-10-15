import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice';
import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-InvoiceComponent',
  imports: [],
  templateUrl: './invoice.html'
})
//We had to explicitly rename this to 'InvoiceComponent' so that it doesn't conflict with models/invoice
export class InvoiceComponent implements OnInit{

  invoice!: Invoice;

  constructor(private service: InvoiceService) {}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

}
