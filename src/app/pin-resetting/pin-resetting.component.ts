import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DocType } from '../models/docType.model';

@Component({
  selector: 'app-pin-resetting',
  templateUrl: './pin-resetting.component.html',
  styleUrls: ['./pin-resetting.component.css']
})
export class PinResettingComponent {

  emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  cardNumberPattern = /[0-9]{3,4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;

  docNumberDNIPattern = /^\D*\d{8}$/;
  docNumberRUCPattern = /^\D*\d{11}$/;

  docNumber = new FormControl('', [Validators.required]);
  docNumberDNI = new FormControl('', [Validators.required, Validators.pattern(this.docNumberDNIPattern)]);
  docNumberRUC = new FormControl('', [Validators.required, Validators.pattern(this.docNumberRUCPattern)]);

  cardNumber = new FormControl('', [Validators.required, Validators.pattern(this.cardNumberPattern)]);

  email = new FormControl('', [Validators.pattern(this.emailPattern)]);

  asesorPattern = /[SUE][0-9]/i;
  asesorCode = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6),
  Validators.pattern(this.asesorPattern)]);

  supervisorPattern = /[SUE][0-9]/i;
  supervisorCode = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6),
  Validators.pattern(this.supervisorPattern)]);

  docTypes: DocType[] = [
    { id: 1, name: 'DNI' },
    { id: 3, name: 'Carné de Extranjería' },
    { id: 4, name: 'Pasaporte' },
    { id: 6, name: 'RUC' }
  ];

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
      this.cardNumber.hasError('pattern') ? 'Not a valid cardNumber (XXXX-XXXX-XXXX-XXXX)' :
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

}


/*
export class PinResettingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
