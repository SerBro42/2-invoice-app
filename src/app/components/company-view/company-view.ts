import { Component, Input } from '@angular/core';
import { Company } from '../../models/company';

@Component({
  selector: 'company-view',
  imports: [],
  templateUrl: './company-view.html'
})
export class CompanyViewComponent {

  //These data come from the parent component, hence we use @Input
  @Input() company: Company = new Company();

}
