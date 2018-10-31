import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { BotDetectCaptchaModule } from 'angular-captcha';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    NoopAnimationsModule,
    RouterModule.forRoot([
      {path: '' , component: LoginComponent}
      ,{path: 'Login' , component: LoginComponent}
      ,{path: 'Registro' , component: RegistroComponent}
      ,{path: 'Side' , component: SidenavComponent}
    ]),
    BotDetectCaptchaModule.forRoot({
      captchaEndpoint: '\TP_LAB4_2C_2018\backEndComanda\botdetect-php-captcha\lib\simple-botdetect.php'
    })

  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
