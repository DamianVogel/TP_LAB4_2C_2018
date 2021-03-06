import { Injectable } from '@angular/core';
import { JwtHelperService  } from '@auth0/angular-jwt';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


@Injectable()
export class AuthService {

  public name: string;
  private _token: string;
  jwtHelper: JwtHelperService = new JwtHelperService();
  datosUsuario: any;

  constructor( private router: Router ) {
   
   // console.log("entro al AuthService");
    //console.log("el token es: "+ this._token);
  }

  public isLogued()
  {
    try {
      
     // this.datosUsuario = JSON.parse(localStorage.getItem('usuario'));
      this._token = JSON.parse(localStorage.getItem('token'));
      //this._token = this.datosUsuario.token;
      //console.log(this._token);

      if(this.jwtHelper.isTokenExpired(this._token))
      {
        //Si entro aca el token expiro
        console.log("Token Expiro o No hay token");
        //localStorage.removeItem('token');
        let rta = false;
        
        return rta;
      }
      else{
        return true;
      }
    
    
    } catch (error) {
      
      console.log("entro en el catch de isLogued");
      return false;
    }
  }

  public getToken ()
  {
    try {
      
      // this.datosUsuario = JSON.parse(localStorage.getItem('usuario'));

      // this._token = this.datosUsuario.token;
      this._token = JSON.parse(localStorage.getItem('token'));
      console.log('getToken', this.jwtHelper.decodeToken(this._token));
      return this.jwtHelper.decodeToken(this._token);
    } catch (error) {
      return undefined;
    }
  }

  public getUsuario()
  {
    try {
      
     //this.datosUsuario = JSON.parse(localStorage.getItem('usuario'));

     //this._token = this.datosUsuario.token;

     this._token = JSON.parse(localStorage.getItem('token'));

      let decodetoken = this.jwtHelper.decodeToken(this._token);
      
      return decodetoken.data.email
    } catch (error) {
      return undefined;
    }


  }

  public getExpirationDate()
  {
    
    try {
      console.log('getExpirationDate', this.jwtHelper.getTokenExpirationDate(this._token))
      return this.jwtHelper.getTokenExpirationDate(this._token);
    } catch (error) {
      return null;
    }
  }

  public logOut()
  {
    try {
      localStorage.setItem('token', null);
      this.router.navigate(['/login']);
    } catch (error) {
      return false;
    }
  }

  public getNivel ()
  {
    // console.log(this.jwtHelper.decodeToken(this._token));
    if (this.jwtHelper.decodeToken(this._token).nivel || this.jwtHelper.decodeToken(this._token).nivel === 0)
      return this.jwtHelper.decodeToken(this._token).nivel;
    else
      return 1000;
    
  }

  public GetPayLoad():any {
    if(localStorage.getItem('token'))
    {
      return this.jwtHelper.decodeToken(localStorage.getItem('token')).data;
    }
    else{
      return false;
    }
   
  }






}

