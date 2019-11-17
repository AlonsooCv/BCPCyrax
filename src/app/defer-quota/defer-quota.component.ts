import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-defer-quota',
  templateUrl: './defer-quota.component.html',
  styleUrls: ['./defer-quota.component.css']
})
export class DeferQuotaComponent{

  docNumber = new FormControl('', [Validators.required]);
  cardNumberPattern = /[0-9]{3,4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;

  cardNumber = new FormControl('', [Validators.required,Validators.pattern(this.cardNumberPattern)]);


  getErrorMessageDocNumber() {
    return this.docNumber.hasError('required') ? 'You must enter a value' :
      this.docNumber.hasError('docNumber') ? 'Not a valid docNumber' :
        '';
  }

  getErrorMessageCardNumber() {
    return this.cardNumber.hasError('required') ? 'You must enter a value' :
      this.cardNumber.hasError('pattern') ? 'Not a valid cardNumber' :
        '';
  }
  /*
  constructor() { }

  ngOnInit() {
  }
*/
}
