import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

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
  notes: Section[] = [
    {
      name: 'PDF',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Excel',
      updated: new Date('1/18/16'),
    }
  ];




}
