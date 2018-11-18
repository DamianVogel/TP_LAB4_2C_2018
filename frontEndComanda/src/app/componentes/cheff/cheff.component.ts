import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../servicios/pedido.service';

@Component({
  selector: 'app-cheff',
  templateUrl: './cheff.component.html',
  styleUrls: ['./cheff.component.css']
})
export class CheffComponent implements OnInit {

  listaPendientes: any;
  constructor(private httpServicio: PedidoService) {
    this.httpServicio.TraerPedidosPorSector().subscribe(data=>{
      this.listaPendientes=data;
      console.log(data);
    });
    
   }

  ngOnInit() {
  }

}
