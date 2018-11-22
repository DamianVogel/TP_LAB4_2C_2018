import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tiempo'
})
export class TiempoPipe implements PipeTransform {

  transform(tiempo: any, args?: any): any {
    return tiempo == "00:00" ? "Terminado" : tiempo;
  
  }

}
