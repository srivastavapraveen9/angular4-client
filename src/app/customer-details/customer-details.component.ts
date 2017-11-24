import { Component, Input } from '@angular/core';

import { Customer } from '../customer';
import { DataService } from '../data.service';

import { enableProdMode } from '@angular/core';
enableProdMode();

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  providers: [DataService]
})
export class CustomerDetailsComponent {

  @Input() customer: Customer;
  submitted = false;
  
  constructor(private dataService: DataService) {}
  
   onSubmit(): void {
    this.submitted = true;
    this.dataService.update(this.customer);
  }
  
   delete(): void {
    this.dataService.delete(this.customer.id).then(() => this.goBack());
  }

  goBack(): void {
    window.location.replace('');
  }
}