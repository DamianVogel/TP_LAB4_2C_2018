import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

  @Input() tEspera:string;
  constructor() { }

  min;
  seg;
  tiempo="";
  control;


 
    Cronometro(){
     
      var arrayTiempo = this.tEspera.split(":");
      //console.log(arrayTiempo);
      this.min=arrayTiempo[0];
      this.seg=arrayTiempo[1];
      console.log(this.tEspera);
  
  
      this.control=setInterval(()=>{

        if(this.seg==0o0 && this.min !=0){
  
          this.seg=59;
          this.min--;
      }
  
  
      if(this.min==0o0 && this.seg ==0o0)
      {
       
          clearInterval(this.control);
      }else{
        this.seg--;
      }
  
     

     /* if(this.min==0 && this.seg <0)
      {
          this.seg=0;
      }*/
  
      this.tiempo= this.min + ":" + this.seg;
  
     
   
      }, 1000,)

    }



  ngOnInit() {
    this.Cronometro();
    
  }

}