import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';
import { RowItemComponent } from '../row-item/row-item';

@Component({
  selector: 'list-table-items',
  imports: [RowItemComponent],
  templateUrl: './list-table-items.html'
})
export class ListTableItemsComponent {

  @Input() items: Item[] = [];

  //This event comes originally from row-item by means of Output, but now it is being transmitted yet again to a parent component, and so we use @Output here too.
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();

  //Function to emit the id of the item being deleted to the parent component. This is the second time it is being emitted, the first one being from row-item to here.
  onRemove(id: number) {
    this.removeEventEmitter.emit(id);
  }

}
