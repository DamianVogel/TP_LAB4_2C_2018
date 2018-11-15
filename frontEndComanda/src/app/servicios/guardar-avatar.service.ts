import { Injectable } from '@angular/core';
import { GenericoService} from '../servicios/generico.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardarAvatarService {

  constructor(public _generico: GenericoService) { }

  public GuardarAvatarService(avatar):Observable<any> {

    let datos = JSON.parse(localStorage.getItem('usuario'));
    
    avatar.append(datos.token);
    //let array = new Object();
    //array= {'token':datos.token,'avatar':avatar[0]};
   
    return this._generico.httpPostHeader("Empleados/CambiarAvatar",avatar)
        .pipe(data =>{return data;}); 

  }







}
