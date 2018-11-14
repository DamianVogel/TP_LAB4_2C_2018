import { Injectable } from '@angular/core';
import { GenericoService} from '../servicios/generico.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardarAvatarService {

  constructor(public _generico: GenericoService) { }

  public GuardarAvatarService(avatar):Observable<any> {
    //console.log("entro LoginService" + datosLogin);
    
    return this._generico.httpPost("Empleados/CambiarAvatar",avatar)
        .pipe(data =>{return data;}); 

  }







}
