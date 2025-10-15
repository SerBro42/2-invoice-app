import { Component, Input } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'customer-view',
  imports: [],
  templateUrl: './customer-view.html'
})
export class CustomerViewComponent {

  //These data come from the parent component, hence we use @Input
  @Input() client: Client = new Client();

}
