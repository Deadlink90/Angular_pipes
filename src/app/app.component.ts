import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string='Capitan america'
  nombre2:string='JUan jUANito juaNOtE'; 
  PI:number = Math.PI;
  porcentaje:number=0.236;
  salario:number=525.50;
  fecha:Date = new Date();

  persona = {
   nombre:'Juan',
   edad:'29',
   profesion:'Ninguna jaja saludos',
   direccion:{
   calle:'calle del juan',
   numero:'12' 
   }
  }

  valorPromesa = new Promise( (resolve)=> {
    setTimeout( () => {
      resolve('Data')
    },3500 )
  } )
}
