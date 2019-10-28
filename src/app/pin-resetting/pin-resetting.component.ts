import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pin-resetting',
  templateUrl: './pin-resetting.component.html',
  styleUrls: ['./pin-resetting.component.css']
})
export class PinResettingComponent {

  emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  cardNumberPattern = /[0-9]{3,4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;

  docNumber = new FormControl('', [Validators.required]);

  cardNumber = new FormControl('', [Validators.required,Validators.pattern(this.cardNumberPattern)]);

  email = new FormControl('', [Validators.pattern(this.emailPattern)]);

  asesorCode = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6),
  Validators.pattern(/[SUE][0-9]/i)]);

  supervisorCode = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6),
  Validators.pattern(/[SUE][0-9]/i)]);

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
