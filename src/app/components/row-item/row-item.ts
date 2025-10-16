import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

//We add tr[...] to the selector because otherwise the table generated with each row as a separate component becomes unbalanced
@Component({
  selector: 'tr[row-item]',
  imports: [],
  templateUrl: './row-item.html'
})
export class RowItemComponent {

  //The parent componet of this child is list-table-items, rather than invoice
  @Input() item!: Item;

  //Function to delete item from list. This info flows from child to parent component, hence we use @Output
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();

  onRemove(id:number) {
    this.removeEventEmitter.emit(id);
  }

}
