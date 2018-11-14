import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.css']
})
export class SubirArchivoComponent implements OnInit {

  url:any;

  uploadedFiles: any[] = [];
  archivo:any;

  constructor() { }

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

  
  }


}