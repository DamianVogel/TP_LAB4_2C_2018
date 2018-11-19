
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



  
  @Input() muestra: boolean;
  @Input() muestraMapa: boolean;
  @Input() muestraMesas: boolean;
  @Input() muestraPendientes: boolean;

  constructor() { }

  ngOnInit() {
  }

  Reporte(){
    this.muestra=true;
  }

}
