import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../clases/producto';
import { Pedido } from '../../clases/pedido';
import { PedidoService } from '../../servicios/pedido.service';
import { ProductosService} from '../../servicios/productos.service';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-mozo',
  templateUrl: './mozo.component.html',
  styleUrls: ['./mozo.component.css']
})
export class MozoComponent implements OnInit {

  listaProductos:Array<Producto>;
  productosPedido:Array<Producto>;
  totalPedido:number=0;
  mesa:number;
  elPedido:Pedido;
  busqueda:string;
  mesas: Array<any> = [1,2,3,4];


  @Input() muestraAltaPedido: boolean;
  @Input() muestraMapa: boolean;
  @Input() muestraMesas: boolean;

  constructor(
            private httpProd: ProductosService, 
            private httpPedido: PedidoService
            ) { 

    this.elPedido=new Pedido();
    this.TraerProductos();
    
    
  }


  
  TraerProductos()
  {
    
    this.httpProd.TraerProductos().subscribe(data=>{
      this.listaProductos= JSON.parse(data._body);
      
      
   });
   
  }


  
  AgregarAlPedido(producto:Producto)
  {
    this.productosPedido ? this.productosPedido.push(producto) : this.productosPedido= new Array<Producto>(producto);
    
   this.totalPedido = this.totalPedido + producto.precio;
   console.log(this.totalPedido);
    
  }
  
  
  QuitarAlPedido(producto:Producto){
  
    for(let i = 0; i < this.productosPedido.length; i++)
    {
      
      if(this.productosPedido[i].nombre == producto.nombre)
      {
        this.totalPedido-= producto.precio;
        //console.log("se va a borrar el producto " + this.productosPedido[i].nombre);
        this.productosPedido.splice(i,1);
        break;
      }
    }

  }
  

  IngresarPedido(){
    this.elPedido.detalle= this.productosPedido;
    this.elPedido.idMesa=this.mesa;
    

    this.httpPedido.IngresarPedido(this.elPedido)
    .subscribe((data)=>{
      let res=JSON.parse(data._body);
      this.elPedido.id= res.idPedido;
      console.log(this.elPedido);
    });
    
  }
  
  ngOnInit() {
  }

}