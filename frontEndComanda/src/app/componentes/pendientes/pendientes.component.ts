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
  constructor(private httpServicio: PedidoService) {

    this.TraerTabla();

   }

   TraerTabla()
   {
     this.spinner=true;
      this.httpServicio.TraerPedidosPorSector().subscribe(data=>{
      this.listaPendientes= JSON.parse(data._body);
      this.spinner=false;
      
    });
    
   }
  ngOnInit() {
    this.TraerTabla();
  }

}
