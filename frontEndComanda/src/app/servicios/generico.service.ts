import { Injectable } from '@angular/core';

import {Http ,Response} from '@angular/http';
//import 'rxjs/add/operator/toPromise';

import {Observable} from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { catchError, map, tap } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class GenericoService {


  api="http://localhost/";
  
  
  constructor(public http:Http) { }
  /*constructor(public http:Http) { }
  public httpGetPromise(url: string, objeto:any){


    return this.http
    .get(url)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handleError);
  }
  */

 public httpGet(metodo:string, objeto:any):Observable<any>{
  

  return this.http
  .get(this.api + metodo)
  .pipe(tap(data => {return this.extraerDatos(data)}));
  
}


public httpPost(metodo:string, objeto:any):Observable<any>
{ 
 
  //console.log(metodo,objeto);
  return this.http.post(this.api + metodo, objeto)
  .pipe(catchError(this.handleError));
}


private extraerDatos(resp:Response) {

    return resp.json() || {};

}
private handleError(error:Response | any) {

    return error;
}


  














}
