import { Directive,ElementRef, Renderer } from '@angular/core';
import { AuthService } from '../servicios/auth-service.service';

@Directive({
  selector: '[appFondo]'
})
export class FondoDirective {
  perfil:string;
  constructor(private auth: AuthService, private element : ElementRef, private renderer : Renderer) {
    this.perfil= auth.GetPayLoad().perfil;
    switch(this.perfil)
    {
      case "admin": this.renderer.setElementStyle( this.element.nativeElement, 'background-image', "url('../../../assets/imagenes/loginfondo.jpg')");
     
      this.renderer.setElementStyle( this.element.nativeElement, 'background-position', "center center");
      this.renderer.setElementStyle( this.element.nativeElement, 'background-size', "cover");
      break;
      case "barra": this.renderer.setElementStyle( this.element.nativeElement, 'background-image', "url('../../../assets/imagenes/bartenderfondo.jpg')");
     
      this.renderer.setElementStyle( this.element.nativeElement, 'background-position', "center center");
      this.renderer.setElementStyle( this.element.nativeElement, 'background-size', "cover");
      break;
      case "chopera": this.renderer.setElementStyle( this.element.nativeElement, 'background-image', "url('../../../assets/imagenes/choperafondo.jpg')");
     
      this.renderer.setElementStyle( this.element.nativeElement, 'background-position', "center center");
      this.renderer.setElementStyle( this.element.nativeElement, 'background-size', "cover");
      break;
      case "candy": this.renderer.setElementStyle( this.element.nativeElement, 'background-image', "url('../../../assets/imagenes/candyfondo.jpg')");
     
      this.renderer.setElementStyle( this.element.nativeElement, 'background-position', "center center");
      this.renderer.setElementStyle( this.element.nativeElement, 'background-size', "cover");
      break;
      case "mozo": this.renderer.setElementStyle( this.element.nativeElement, 'background-image', "url('../../../assets/imagenes/mozofondo.jpg')");
     
      this.renderer.setElementStyle( this.element.nativeElement, 'background-position', "center center");
      this.renderer.setElementStyle( this.element.nativeElement, 'background-size', "cover");
      break;
      case "cocina": this.renderer.setElementStyle( this.element.nativeElement, 'background-image', "url('../../../assets/imagenes/cocinafondo.jpg')");
     
      this.renderer.setElementStyle( this.element.nativeElement, 'background-position', "center center");
      this.renderer.setElementStyle( this.element.nativeElement, 'background-size', "cover");
      break;
      case "cliente": this.renderer.setElementStyle( this.element.nativeElement, 'background-image', "url('../../../assets/imagenes/clientefondo.jpg')");
      this.renderer.setElementStyle( this.element.nativeElement, 'background-position', "center center");
      this.renderer.setElementStyle( this.element.nativeElement, 'background-repeat', "no-repeat");
      this.renderer.setElementStyle( this.element.nativeElement, 'background-size', "cover");
      break;
    }
    
   }

   


}
