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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    PinResettingComponent,
    DeferQuotaComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
