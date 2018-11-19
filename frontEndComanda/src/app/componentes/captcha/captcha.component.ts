import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CaptchaService } from '../../servicios/captcha.service';
//import { timeout } from 'q';


@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {

  @Output() lanzador = new EventEmitter();

  pedido: string;
  ok;
  respuesta: any;
  spinner=false;
  


  constructor(private httpCaptcha: CaptchaService) {
    this.Asignar()
   }

    Spinner()
{
  this.spinner= !this.spinner;
  console.log(this.spinner);
}

  Asignar()
  {

    let numero = Math.round((Math.random() * 3));
    console.log(numero);
    if(numero == 1 )
    {
      this.pedido="Arriba";
    }
    else if(numero == 2 )
    {
      this.pedido="Moto";
    }   
    else if(numero == 3 )
    {
      this.pedido="Barco";
    }  
    else
    {
      this.pedido="Abajo";
    }
    
  }

  Ingresar(decision)
  { 
    this.Spinner();
    decision == this.pedido ? this.ok=true : this.ok==false;

    this.httpCaptcha.EnviarCaptcha(this.ok).subscribe((data)=>{
       this.spinner=false
      this.respuesta= JSON.parse(data._body).respuesta;
      this.lanzador.emit(this.respuesta);
      console.log(this.respuesta);
      
     
    })

  }
  ngOnInit() {
  }

}