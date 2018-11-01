import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

export interface Section {
  name: string;
  updated: Date;
}


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

   usuario: string;

  constructor() { }

  ngOnInit() {
  
    this.usuario = localStorage.getItem('usuario');
  
    
  
  }

  folders: Section[] = [
    {
      name: 'EMPLEADOS',
      updated: new Date('1/1/16'),
    },
    {
      name: 'CLIENTES',
      updated: new Date('1/17/16'),
    },
    {
      name: 'PEDIDOS',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'PDF',
      updated: new Date('2/20/16'),
    },
    {
      name: 'EXCEL',
      updated: new Date('1/18/16'),
    }
  ];




}
