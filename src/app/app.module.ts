import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import {app_routing} from "./app.routes";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { PinResettingComponent } from './pin-resetting/pin-resetting.component';
import { DeferQuotaComponent } from './defer-quota/defer-quota.component';
import { SendEECCComponent } from './send-eecc/send-eecc.component';
import { CardLockComponent } from './card-lock/card-lock.component';

//Design Modules
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule,MatOptionModule, MatSelectModule, MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    PinResettingComponent,
    DeferQuotaComponent,
    SendEECCComponent,
    CardLockComponent
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
