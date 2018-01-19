import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransaccionSoapComponent } from './transaccion-soap/transaccion-soap.component';

//import { NameComponent } from './name.component';
const routes: Routes = [
    { path: '', redirectTo: '/transaccionSoapComponent', pathMatch: 'full'},
    { path: 'AppComponent', component: AppComponent },
    { path: 'transaccionSoapComponent', component: TransaccionSoapComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    // declarations: [NameComponent],
    //providers: [],
})
export class AppRoutingModule { }

