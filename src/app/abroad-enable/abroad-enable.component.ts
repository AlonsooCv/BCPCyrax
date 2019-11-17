import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DocType } from '../models/docType.model';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-abroad-enable',
  templateUrl: './abroad-enable.component.html',
  styleUrls: ['./abroad-enable.component.css']
})
export class AbroadEnableComponent implements OnInit {

  /** Fill Combo box with data */
  docTypes: DocType[] = [
    { id: 1, name: 'DNI' },
    { id: 3, name: 'Carné de Extranjería' },
    { id: 4, name: 'Pasaporte' },
    { id: 6, name: 'RUC' }
  ];

  /**Get Date */
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  /**Validators */
  docNumberDNIPattern = /^\D*\d{8}$/;
  docNumberRUCPattern = /^\D*\d{11}$/;

  docNumber = new FormControl('', [Validators.required]);
  docNumberDNI = new FormControl('', [Validators.required, Validators.pattern(this.docNumberDNIPattern)]);
  docNumberRUC = new FormControl('', [Validators.required, Validators.pattern(this.docNumberRUCPattern)]);

  cardNumberPattern = /[0-9]{3,4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;
  cardNumber = new FormControl('', [Validators.required, Validators.pattern(this.cardNumberPattern)]);

  emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  email = new FormControl('', [Validators.pattern(this.emailPattern)]);

  asesorCodePattern = /[SUE][0-9]/i;
  asesorCode = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6),
  Validators.pattern(this.asesorCodePattern)]);

  supervisorCodePattern = /[SUE][0-9]/i;
  supervisorCode = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6),
  Validators.pattern(this.supervisorCodePattern)]);

  /** Error messages */
  getErrorMessageDocNumberDNI() {
    return this.docNumberDNI.hasError('required') ? 'You must enter a value' :
      this.docNumberDNI.hasError('pattern') ? 'Not a valid DNI' :
        '';
  }

  getErrorMessageDocNumberCE() {
    return this.docNumber.hasError('required') ? 'You must enter a value' :
      '';
  }

  getErrorMessageDocNumberPasaporte() {
    return this.docNumber.hasError('required') ? 'You must enter a value' :
      '';
  }

  getErrorMessageDocNumberRUC() {
    return this.docNumber.hasError('required') ? 'You must enter a value' :
      this.docNumber.hasError('pattern') ? 'Not a valid RUC' :
        '';
  }

  getErrorMessageCardNumber() {
    return this.cardNumber.hasError('required') ? 'You must enter a value' :
      this.cardNumber.hasError('pattern') ? 'Not a valid card number' :
        '';
  }

  getErrorMessageEmail() {
    return this.email.hasError('pattern') ? 'Not a valid mail' :
      '';
  }

  getErrorMessageAsesorCode() {
    return this.asesorCode.hasError('required') ? 'You must enter a value' :
      this.supervisorCode.hasError('minlength') ? 'Enter a correct code' :
        this.supervisorCode.hasError('maxlength') ? 'Enter a correct code' :
          this.supervisorCode.hasError('pattern') ? 'Not a valid asesorCode' :
            '';
  }

  getErrorMessageSupervisorCode() {
    return this.supervisorCode.hasError('required') ? 'You must enter a value' :
      this.supervisorCode.hasError('minlength') ? 'Enter a correct code' :
        this.supervisorCode.hasError('maxlength') ? 'Enter a correct code' :
          this.supervisorCode.hasError('pattern') ? 'Not a valid supervisorCode' :
            '';
  }

  card = new Card()
  dataarray = [];

  constructor() { }

  ngOnInit() {
    this.dataarray.push(this.card);
  }

  addCardNumber() {
    this.card = new Card()
    this.dataarray.push(this.card);
  }

  removeCardNumber(index) {
    this.dataarray.splice(index);
  }

}
