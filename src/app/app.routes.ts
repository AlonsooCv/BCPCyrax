import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PinResettingComponent } from './pin-resetting/pin-resetting.component';
import { DeferQuotaComponent } from './defer-quota/defer-quota.component';
import { SendEECCComponent } from './send-eecc/send-eecc.component';
import { CardLockComponent } from './card-lock/card-lock.component';
import { AbroadEnableComponent } from './abroad-enable/abroad-enable.component';
import { ActivationTcComponent } from './activation-tc/activation-tc.component';
import { CancelationTcComponent } from './cancelation-tc/cancelation-tc.component';
import { DisenrollmentInsuranceComponent } from "./disenrollment-insurance/disenrollment-insurance.component";
import { PrincipalComponent } from "./principal/principal.component";
/*import { PageNotFoundComponent } from './';*/

const routes: Routes = [
    { path: 'pin-resetting', component: PinResettingComponent },
    { path: 'defer-quota', component: DeferQuotaComponent },
    { path: 'send-eecc', component: SendEECCComponent },
    { path: 'card-lock', component: CardLockComponent },
    { path: 'disenrollment-insurance', component: DisenrollmentInsuranceComponent },
    { path: 'cancelation-tc', component: CancelationTcComponent },
    { path: 'activation-tc', component: ActivationTcComponent },
    { path: 'abroad-enable', component: AbroadEnableComponent },
    { path: '**', component: PrincipalComponent }
    /*{ path: '**', component: PageNotFoundComponent },*/

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}

export const app_routing = RouterModule.forRoot(routes);