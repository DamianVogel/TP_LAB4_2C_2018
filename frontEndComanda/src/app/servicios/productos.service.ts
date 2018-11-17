import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericoService } from '../servicios/generico.service';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: GenericoService) { }

  TraerProductos():Observable<any>{
    return this.http.httpGet("Productos/TraerTodos").pipe(data=>{return data});
    
  }
}
















