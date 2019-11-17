import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DocType } from '../models/docType.model';
import { InsuranceType } from '../models/insuranceType.model';
import { RefundType } from '../models/refundType.model';
import { ReasonDisenrollment } from '../models/reasonDisenrollment.model';

@Component({
  selector: 'app-disenrollment-insurance',
  templateUrl: './disenrollment-insurance.component.html',
  styleUrls: ['./disenrollment-insurance.component.css']
})
export class DisenrollmentInsuranceComponent implements OnInit {

  /** Fill Combo box with data */
  docTypes: DocType[] = [
    { id: 1, name: 'DNI' },
    { id: 3, name: 'Carné de Extranjería' },
    { id: 4, name: 'Pasaporte' },
    { id: 6, name: 'RUC' }
  ];

  insuranceTypes: InsuranceType[] = [
    { id: 1, name: 'Seguro múltiple' },
    { id: 2, name: 'Seguro protección de tarjetas' }
  ];

  refundTypes: RefundType[] = [
    { id: 1, name: 'Desafiliación con devolución previo análisis' },
    { id: 2, name: 'Desafiliación con devolución automática' },
    { id: 3, name: 'Desafiliación sin devolución' }
  ];

  reasonsDisenrollment: ReasonDisenrollment[] = [
    { id: 1, name: 'No desea el seguro' },
    { id: 2, name: 'No reconoce los seguros/Mala venta' },
    { id: 3, name: 'Cliente canceló cuenta o tarjeta' },
    { id: 4, name: 'No recibió la póliza' },
    { id: 5, name: 'Por viaje' },
    { id: 6, name: 'Problemas económicos' },
    { id: 7, name: 'Mejora de coberturas/Tiene seguro' }
  ];

  /**Validators */
  docNumberDNIPattern = /^\D*\d{8}$/;
  docNumberRUCPattern = /^\D*\d{11}$/;

  docNumber = new FormControl('', [Validators.required]);
  docNumberDNI = new FormControl('', [Validators.required, Validators.pattern(this.docNumberDNIPattern)]);
  docNumberRUC = new FormControl('', [Validators.required, Validators.pattern(this.docNumberRUCPattern)]);

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
