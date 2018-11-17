import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';

import { SidenavComponent } from './componentes/sidenav/sidenav.component';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MozoComponent } from './componentes/mozo/mozo.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ReporteHighchartComponent } from './componentes/reporte-highchart/reporte-highchart.component';
import { ChartModule } from 'angular-highcharts';
import { Angular2CsvModule } from 'angular2-csv';
import { AdminComponent } from './componentes/admin/admin.component';
import { CsvComponent } from './componentes/csv/csv.component';
import { GenericoService } from './servicios/generico.service';
import { LoginService } from './servicios/login.service';
import { HttpModule } from '@angular/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { MapComponent } from './componentes/map/map.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CambiarImagenComponent } from './componentes/cambiar-imagen/cambiar-imagen.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import {FileUploadModule} from 'primeng/fileupload';
import { SubirArchivoComponent } from './componentes/subir-archivo/subir-archivo.component';
import { VerificarJWTService } from './servicios/verificar-jwt.service';
import { FiltroPipe } from './pipes/filtro.pipe';
import { EstadoPedidoDirective } from './directivas/estado-pedido.directive';
import { TipoProductoDirective } from './directivas/tipo-producto.directive';
import { BotonAgregarComponent } from './componentes/boton-agregar/boton-agregar.component';
import { BotonBorrarComponent } from './componentes/boton-borrar/boton-borrar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    SidenavComponent,
    MozoComponent,
    ReporteHighchartComponent,
    AdminComponent,
    CsvComponent,
    MapComponent,
    CambiarImagenComponent,
    SubirArchivoComponent,
    FiltroPipe,
    EstadoPedidoDirective,
    TipoProductoDirective,
    BotonAgregarComponent,
    BotonBorrarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    NoopAnimationsModule,
    RouterModule.forRoot([
      {path: '' , component: LoginComponent}
      ,{path: 'Login' , component: LoginComponent}
      ,{path: 'Registro' , component: RegistroComponent}
      ,{path: 'Side' , component: SidenavComponent, canActivate: [VerificarJWTService]}
      ,{path: 'Reporte' , component: ReporteHighchartComponent}
    ]),
    NgxCaptchaModule,
    ChartModule,
    Angular2CsvModule,
    HttpModule,
    RecaptchaModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    AccordionModule,
    FileUploadModule

  ],
  providers: [
    GenericoService,
    LoginService

  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CambiarImagenComponent
]
})
export class AppModule { }
