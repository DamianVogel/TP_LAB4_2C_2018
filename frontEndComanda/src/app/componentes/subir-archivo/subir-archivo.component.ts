import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.css']
})
export class SubirArchivoComponent implements OnInit {

  url:any;

  archivo:any;

  constructor() { }

  ngOnInit() {
  }

  ArchivoSeleccionado(archivoUpload){
    
    // const reader = new FileReader();
     
    // /*
    // this.archivo = archivoUpload.files;
    // console.log(this.archivo);
    // */

    // // if(archivoUpload.target.files && archivoUpload.target.files.length) {
    // // const [file] = archivoUpload.target.files;
    // // reader.readAsDataURL(file);
  
    // //   this.url = reader.result;
    // // }


    // reader.onloadend = function (event) {
      

    //    if(archivoUpload.target.files && archivoUpload.target.files.length) {
    //     const [file] = archivoUpload.target.files;
    //     reader.readAsDataURL(file)
      
    //     //this.url = reader.result;
    //   }
    
    // }

    // reader.onload = (event) => { // called once readAsDataURL is completed
    //   this.url = event.target.result;
    // }

    
  
  }
}