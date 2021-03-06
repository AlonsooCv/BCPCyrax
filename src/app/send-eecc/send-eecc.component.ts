import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProcessType } from '../models/processType.model';
import { DocType } from '../models/docType.model';
import { CardType } from '../models/cardType.model';

@Component({
  selector: 'app-send-eecc',
  templateUrl: './send-eecc.component.html',
  styleUrls: ['./send-eecc.component.css']
})
export class SendEECCComponent implements OnInit {

  /** Fill Combo box with data */
  processTypes: ProcessType[] = [
    { id: 1, name: 'Visa cuotas' },
    { id: 2, name: 'Disef cuotas' }
  ];

  docTypes: DocType[] = [
    { id: 1, name: 'DNI' },
    { id: 3, name: 'Carné de Extranjería' },
    { id: 4, name: 'Pasaporte' },
    { id: 6, name: 'RUC' }
  ];

  cardTypes: CardType[] = [
    { id: 1, name: 'Tarjeta de Débito' },
    { id: 2, name: 'Tarjeta de Crédito' }
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

  ngOnInit() {

  }
}



