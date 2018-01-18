import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

//import { NameComponent } from './name.component';
const routes: Routes=[
    { path:'', redirectTo:'/AppComponent',pathMatch:'full'},
    { path:'AppComponent', component:AppComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
   // declarations: [NameComponent],
    //providers: [],
})
export class AppRoutingModule { }

