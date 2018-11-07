import { Injectable } from '@angular/core';
import { GenericoService} from '../servicios/generico.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public _generico: GenericoService) { }

  public ServiceLogin(datosLogin):Observable<any> {
    //console.log("entro LoginService" + datosLogin);
    
    return this.miHttp.httpPost("login",datosLogin)
        .pipe(data =>{return data;}); 

  }








}
