import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';
import { RowItemComponent } from '../row-item/row-item';

@Component({
  selector: 'list-table-items',
  imports: [RowItemComponent],
  templateUrl: './list-table-items.html'
})
export class ListTableItemsComponent {

  @Input() items: Item[] = []

}
