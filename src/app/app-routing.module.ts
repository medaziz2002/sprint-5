
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




import { LoginComponent } from './pages/login/login.component';
import { PhoneManagementComponent } from './pages/phone-management/phone-management.component';
import { TypeMangementComponent } from './pages/type-mangement/type-mangement.component';
import { TypeComponent } from './pages/type/type.component';
import { Phone } from './models/telephone.model';
import { PhoneComponent } from './pages/phone/phone.component';



const routes: Routes = [

  {path:"ajout-phone" ,component:PhoneManagementComponent},
  {path:"",component:LoginComponent},
  {path:"add-type",component:TypeMangementComponent},
  {path:"affichetype",component:TypeComponent},
  {path:"update-type/:id",component:TypeMangementComponent},
  {path:"affichephone",component:PhoneComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
