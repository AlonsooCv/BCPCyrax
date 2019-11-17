import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { app_routing } from "./app.routes";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { PinResettingComponent } from './pin-resetting/pin-resetting.component';
import { DeferQuotaComponent } from './defer-quota/defer-quota.component';
import { SendEECCComponent } from './send-eecc/send-eecc.component';
import { CardLockComponent } from './card-lock/card-lock.component';
import { DisenrollmentInsuranceComponent } from './disenrollment-insurance/disenrollment-insurance.component';
import { AbroadEnableComponent } from './abroad-enable/abroad-enable.component';
import { ActivationTcComponent } from './activation-tc/activation-tc.component';
import { CancelationTcComponent } from './cancelation-tc/cancelation-tc.component';

//Design Modules
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule, MatOptionModule, MatSelectModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDatepickerModule, MatNativeDateModule, MatFormFieldModule,
  DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE
} from '@angular/material';
import { PrincipalComponent } from './principal/principal.component';

//Date format
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MM YYYY',
  },
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    PinResettingComponent,
    DeferQuotaComponent,
    SendEECCComponent,
    CardLockComponent,
    DisenrollmentInsuranceComponent,
    AbroadEnableComponent,
    ActivationTcComponent,
    CancelationTcComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
  ],
  providers: [MatDatepickerModule, {
    provide: MAT_DATE_LOCALE,
    useValue: 'it'
  },
    //you can change
    /*useValue {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },*/ {
      provide: MAT_DATE_FORMATS,
      useValue: MY_FORMATS
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
