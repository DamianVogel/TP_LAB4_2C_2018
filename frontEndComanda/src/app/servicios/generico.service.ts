import { Injectable } from '@angular/core';
import {Http ,Response, Headers } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpHeaders} from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class GenericoService {


  api="http://localhost/TP_LAB4_2C_2018/backEndComanda/";
  
  
  //api="http://dvlacomanda.000webhostapp.com/backEndComanda/";
  
  
  constructor(public http:Http) { }
  

  public httpGet(metodo:string):Observable<any>{

    return this.http
    .get(this.api + metodo)
    .pipe(tap(data => {return this.extraerDatos(data)}));    
  }


  public httpPostHeader(metodo:string, objeto:any):Observable<any>
  { 
   
    
    console.log(objeto);
    
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //headers.append('avatar',objeto);
    
    return this.http.post(
                          this.api + metodo
                          ,objeto
                          ,{ headers: headers }
                          )
    .pipe(catchError(this.handleError));
  }


  public httpPost(metodo:string, objeto:any):Observable<any>
  { 
    return this.http.post(this.api + metodo, objeto)
    .pipe(catchError(this.handleError));
  }

  public GoogleRecaptcha(response, secret):Observable<any>
  {

    let datos={
      "secret": secret,
      "response": response     
    }

    return this.http.post("https://www.google.com/recaptcha/api/siteverify",datos)
        .pipe(data =>{return data;}); 

  }





  private extraerDatos(resp:Response) {

      return resp.json() || {};

  }
  private handleError(error:Response | any) {

      return error;
  }




}
