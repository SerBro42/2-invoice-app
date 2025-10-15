import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice';
import { Invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view';
import { CustomerViewComponent } from '../customer-view/customer-view';
import { CompanyViewComponent } from '../company-view/company-view';
import { ListTableItemsComponent } from '../list-table-items/list-table-items';
import { RowItemComponent } from '../row-item/row-item';

@Component({
  selector: 'app-InvoiceComponent',
  imports: [InvoiceViewComponent, CustomerViewComponent, CompanyViewComponent, ListTableItemsComponent, RowItemComponent],
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
