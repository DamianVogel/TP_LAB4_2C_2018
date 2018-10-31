import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { BotDetectCaptchaModule } from 'angular-captcha';




@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '' , component: LoginComponent},
      {path: 'Login' , component: LoginComponent},
      {path: 'Registro' , component: RegistroComponent}

    ]),
    BotDetectCaptchaModule.forRoot({
      captchaEndpoint: '\TP_LAB4_2C_2018\backEndComanda\botdetect-php-captcha\lib\simple-botdetect.php'
    })

  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
