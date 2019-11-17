import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DocType } from '../models/docType.model';
import { CardType } from '../models/cardType.model';
import { BlockType } from "../models/blockType.model";
import { Agency } from "../models/agency.model";
import { SendingType } from "../models/sendingType.model";
import { ReasonLock } from '../models/reasonLock.model';

@Component({
  selector: 'app-card-lock',
  templateUrl: './card-lock.component.html',
  styleUrls: ['./card-lock.component.css']
})
export class CardLockComponent implements OnInit {
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

  blockTypes: BlockType[] = [
    { id: 1, name: 'Bloqueo Temporal' },
    { id: 2, name: 'Bloqueo Definitivo' },
    { id: 3, name: 'Desbloqueo' }
  ];

  reasonLocks: ReasonLock[] = [
    { id: 1, name: 'Deterioro' },
    { id: 2, name: 'Olvido de clave' },
    { id: 3, name: 'Robo' },
    { id: 2, name: 'Extravío' },
    { id: 5, name: 'Fraude' }
  ];

  sendingTypes: SendingType[] = [
    { id: 1, name: 'Envío electrónico' },
    { id: 2, name: 'Envío físico' }
  ];

  agencies: Agency[] = [
    { id: 193007, name: 'Calle Centenario N° 166 Urb. Las Laderas de Melgarejo' },
    { id: 191074, name: 'Av. Nicolás Ayllón N° 416 -418 ' },
    { id: 191075, name: 'Av. 28 de Julio 144 - Chosica' },
    { id: 193005, name: 'Av. Los Constructores  N° 151' },
    { id: 191085, name: 'Av. 15 de Julio Lt. 14 Zona B - Huaycán' },
    { id: 193054, name: 'Av. La Molina N° 1168, 1166 y 1164  - La Molina' },
  ];

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

  constructor() { }

  ngOnInit() {
  }

}
