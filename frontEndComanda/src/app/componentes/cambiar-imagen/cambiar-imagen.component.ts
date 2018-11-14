import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FileUploadModule} from 'primeng/fileupload';


export interface DialogData {
  
  animal: string;
  imagen: any;
}



@Component({
  selector: 'app-cambiar-imagen',
  templateUrl: './cambiar-imagen.component.html',
  styleUrls: ['./cambiar-imagen.component.css']
})

export class CambiarImagenComponent implements OnInit {

  constructor(
                public dialogRef: MatDialogRef<CambiarImagenComponent>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(){}

  
  

  onNoClick(): void {    
                    this.dialogRef.close();
  
  }

} 
