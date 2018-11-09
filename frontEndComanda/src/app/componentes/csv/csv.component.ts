import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CsvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  options = {
    fieldSeparator: ';',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    headers: ['dia','pedidos','average'],
    showTitle: true,
    title: 'Pedidos',
    useBom: false,
    removeNewLines: true,
    keys: ['dia','pedidos','average' ]
  };
  data = [
    {
      dia: 1,
      //name: "Pedidos",
      pedidos: 13,
      average: 8.2,
      approved: true,
      //description: "using 'Content here, content here' "
    },
    {
      dia: 2,
      //name: 'Test 2',
      pedidos: 11,
      average: 8.2,
      approved: true,
      //description: "using 'Content here, content here' "
    },
    {
      dia: 3,
      pedidos: 10,
      average: 8.2,
      approved: true,
      //description: "using 'Content here, content here' "
    }
  ];

}
