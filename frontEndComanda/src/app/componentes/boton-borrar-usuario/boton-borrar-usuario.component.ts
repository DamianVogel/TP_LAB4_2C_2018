import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';


@Component({
  selector: 'app-boton-borrar-usuario',
  templateUrl: './boton-borrar-usuario.component.html',
  styleUrls: ['./boton-borrar-usuario.component.css']
})
export class BotonBorrarUsuarioComponent implements OnInit {

  @Input() id:number;

  @Output() lanzador = new EventEmitter()

  constructor(private httpUsuarios: UsuariosService){
    
  }

  BorrarUsuario(){
    this.httpUsuarios.BorrarUsuario(this.id).subscribe((data)=>{
      this.lanzador.emit();
      
    
   });
  }

  ngOnInit() {
  }

}