import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice';
import { Invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view';
import { CustomerViewComponent } from '../customer-view/customer-view';
import { CompanyViewComponent } from '../company-view/company-view';
import { ListTableItemsComponent } from '../list-table-items/list-table-items';
import { TotalComponent } from '../total/total';

@Component({
  selector: 'app-InvoiceComponent',
  imports: [InvoiceViewComponent,
    CustomerViewComponent,
    CompanyViewComponent,
    ListTableItemsComponent,
    TotalComponent
  ],
  templateUrl: './invoice.html'
})
//We had to explicitly rename this to 'InvoiceComponent' so that it doesn't conflict with models/invoice
export class InvoiceComponent implements OnInit{

  invoice!: Invoice;

  constructor(private service: InvoiceService) {}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

  //The function that finally deletes an item from the array. By means of filter(), we create a new array of items composed solely of
  //items whos id is different from the one that we passed as parameter. Essentially, we take out the item with the id that's being deleted.
  //Since filter() creates a new array from scratch, instead of reusing the previous array reference, this approach is inefficient memory-wise, especially
  //for larger arrays. If performance matters in the business logic, consider using splice() instead. This approach has the downside of if using OnPush or
  //relying on identity change for detection, the UI might not update unless you inform Angular.
  removeItem(id: number) {
    //this.invoice.items = this.invoice.items.filter(item => item.id != id);
    this.invoice = this.service.remove(id);
  }
}
