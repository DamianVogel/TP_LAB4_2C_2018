import { Component, OnInit } from '@angular/core';
import { GuardarAvatarService } from '../../servicios/guardar-avatar.service';
import {FileUploadModule} from 'primeng/fileupload';


@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.css']
})
export class SubirArchivoComponent implements OnInit {

  url:any;

  uploadedFiles: any[] = [];
  archivo:any;

  constructor(private _guardarAvatar: GuardarAvatarService) { }

  ngOnInit() {
  }

  Evento(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    
    this._guardarAvatar.GuardarAvatarService(this.uploadedFiles[0]).subscribe(
      data => {
        console.log(data._body);
      }
    );
    
  }

}