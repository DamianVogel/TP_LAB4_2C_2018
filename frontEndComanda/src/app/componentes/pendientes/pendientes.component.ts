import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../servicios/pedido.service';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {
  spinner:boolean;
  listaPendientes: Array<any>;
  tiempoPreparacion:number;
  muestraTabla: boolean;
  perfil: any;


  constructor(private httpServicio: PedidoService) {

    this.perfil = JSON.parse(localStorage.getItem('usuario'));

    //console.log(this.perfil.perfil);

    this.TraerTabla();

   }

   TraerTabla()
   {
     this.spinner=true;
      this.httpServicio.TraerPedidosPorSector().subscribe(data=>{
      this.listaPendientes= JSON.parse(data._body);
      this.spinner=false;
      
      if(this.listaPendientes.length > 0){
        this.muestraTabla = true;
      }


    });
    
   }
  ngOnInit() {
    this.TraerTabla();
  }

}
