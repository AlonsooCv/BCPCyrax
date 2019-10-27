import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PinResettingComponent } from './pin-resetting/pin-resetting.component';
import { DeferQuotaComponent } from './defer-quota/defer-quota.component';
/*import { Name3Component } from './';
import { Name4Component } from './';
import { PageNotFoundComponent } from './';*/

const routes: Routes = [
    { path: 'pin-resetting', component: PinResettingComponent },
    { path: 'defer-quota', component: DeferQuotaComponent },
    /*{ path: 'path3', component: Name3Component },
    { path: 'path4', component: Name4Component },
    { path: '**', component: PageNotFoundComponent },*/

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}

export const app_routing = RouterModule.forRoot(routes);