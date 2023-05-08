import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AjoutContactComponent } from './ajout-contact/ajout-contact.component';

import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgToastModule} from 'ng-angular-popup';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { PhoneManagementComponent } from './pages/phone-management/phone-management.component';
import { TypeMangementComponent } from './pages/type-mangement/type-mangement.component';
import { TypeComponent } from './pages/type/type.component';
import { PhoneComponent } from './pages/phone/phone.component';

@NgModule({
  declarations: [
    AppComponent,
   

    
    AjoutContactComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    ForbiddenComponent,
    PhoneManagementComponent,
    TypeMangementComponent,
    TypeComponent,
    PhoneComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
