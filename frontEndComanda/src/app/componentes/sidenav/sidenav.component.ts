import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CambiarImagenComponent } from '../cambiar-imagen/cambiar-imagen.component';

export interface Section {
  name: string;
  updated: Date;
}

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  usuario: any;
  folders: Section [];
  notes: Section [];
  muestraSide:boolean = false;
  muestraMapa:boolean = false;

  imagen:any;

  
  animal: string;


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.imagen = './assets/imagenes/admin.png';

    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    
    //console.log(this.usuario.datos.perfil);

    this.ItemsSideNav(this.usuario.datos.perfil);

  }

  ItemsSideNav(tipo){
  
      switch (tipo) {
        case 'admin':
              this.folders = [
                {
                  name: 'Empleados',
                  updated: new Date('1/1/16'),
                },
                {
                  name: 'Clientes',
                  updated: new Date('1/17/16'),
                },
                {
                  name: 'Pedidos',
                  updated: new Date('1/28/16'),
                }
              ];
              this.notes = [
                {
                  name: 'HighChart',
                  updated: new Date('2/20/16'),
                },
                {
                  name: 'Excel',
                  updated: new Date('1/18/16'),
                }
              ];  
        break;
        
        case 'mozo':
              this.folders = [
                {
                  name: 'Alta de Pedido',
                  updated: new Date('1/1/16'),
                },
                {
                  name: 'Pedidos Pendientes',
                  updated: new Date('1/17/16'),
                }
               
              ];
              this.notes = [
                {
                  name: 'PDF',
                  updated: new Date('2/20/16'),
                },
                {
                  name: 'Excel',
                  updated: new Date('1/18/16'),
                }
              ];  
        break;
        
      
      }
    
  }

  Emiter(){
    
    this.muestraSide=true;
    this.muestraMapa=false;
  }

  MuestraMapa()
  {
    this.muestraSide=false;
    this.muestraMapa=true;
  
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(CambiarImagenComponent, {
      width: '250px',
      data: { animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.imagen = result;
      
      //aca va el id del usuario.
      //y  tiene que ir la ruta de la imagen.
      
      console.log(this.imagen);
    });
  }

  




}

/*
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})


export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
*/