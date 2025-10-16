import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/item';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'form-item',
  imports: [FormsModule],
  templateUrl: './form-item.html'
})
export class FormItemComponent {

  //Since this is a form, data will be transmitted from the child to the parent component, and so se use @Output
  @Output() addItemEventEmitter = new EventEmitter();

  //The Id of the next product we will insert. For now, it is a hardcoded value.
  private counterId = 4;

  item: any = {
    product: '',
    price: '',
    quantity: ''
  }

  //Function to add item.
  onSubmit(itemForm: NgForm): void {
    if (itemForm.valid) {

      this.addItemEventEmitter.emit({id: this.counterId, ...this.item});
      this.counterId++;

      this.item = {
        product: '',
        price: '',
        quantity: ''
      };
      //Without these, the validation error messages don't go away after successfully adding a product.
      itemForm.reset();
      itemForm.resetForm();
    }
  }
}
