import { Component, OnInit } from '@angular/core';
import { GuardarAvatarService } from '../../servicios/guardar-avatar.service';


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

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
  
    console.log(this.uploadedFiles);

  
  }

  onSelect(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
  
    console.log(this.uploadedFiles);

    this._guardarAvatar.GuardarAvatarService(this.uploadedFiles).subscribe(
      data =>{           
        console.log(data._body);       
      });
    
    
  }


}