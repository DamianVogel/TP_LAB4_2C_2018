import { Injectable } from '@angular/core';
import { Pedido } from '../clases/pedido';
import { GenericoService } from '../servicios/generico.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  token;
  constructor(private http: GenericoService) {
    this.token= localStorage.getItem('token');
   }

  TraerTodosLosPedidos():Observable<any>
  {
    return this.http.httpGet("Pedidos/TraerTodos").pipe(data=>{return data});
  }


  TraerPedidosPorSector()
  {
    
    let usuario = JSON.parse(localStorage.getItem('token'));
    console.log(usuario);

    return this.http.httpPost("Pedidos/PendientesEmpleado",{"token":usuario})
    .pipe(data =>{return data;});
  }

  IngresarPedido(pedido: Pedido)
  {
    
    console.log(pedido);

    return this.http.httpPost("Pedidos/",pedido)
    .pipe(data =>{return data;});
  }

  PrepararPedido(idDetalle, tPrepacion)
  {
    
    let token = JSON.parse(localStorage.getItem('token'));
    console.log(token);
    
    
    let datos={
      "idDetalle": idDetalle,
      "tiempoPreparacion": tPrepacion,
      "token": token
    }

    return this.http.httpPost("Pedidos/PrepararPedido",datos)
    .pipe(data =>{return data;});
  }

  TiempoRestante(idMesa, idPedido)
  {

    return this.http.httpPost("Pedidos/TiempoRestante",{"idMesa": idMesa, "idPedido": idPedido })
    .pipe(data =>{return data;});
  }

  ServirPedido(idDetalle){
    return this.http.httpPost("Pedidos/ServirPedido",{"idDetalle": idDetalle })
    .pipe(data =>{return data;});

  }
  


}
