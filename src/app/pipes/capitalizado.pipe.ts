import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    /*
    value es el valor a transformar.

    args son los argumentos que se envian mediante 2 puntos (:),
    los args son un arreglo con los argumentos.
    */

    const [argumento] = args;

    console.log(argumento);
    

    if(argumento === 'all'){
    return value.toUpperCase();  
    
    }else if(argumento === 'first'){
      console.log('si hay all');
      let arrayText = value.split(" ");
  
      let newArray = arrayText.map( text => {
      return text.toLowerCase().charAt(0).toLocaleUpperCase() +
      text.toLowerCase().slice(1);  
      })
      return newArray.join(" ");
    }else{
      return value;
    }

    
    
  }

}
