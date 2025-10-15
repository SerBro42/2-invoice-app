import { Component, Input } from '@angular/core';

@Component({
  selector: 'invoice-view',
  imports: [],
  templateUrl: './invoice-view.html'
})
export class InvoiceViewComponent {

  //Since this information comes from the parent component, we use @Input
  @Input() name!: string;
  @Input() id!: number;

}
