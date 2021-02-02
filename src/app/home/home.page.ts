import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
  resultado="";
  activo= true;
  
  

onInput(event){
  this.resultado = (event.target.value)
}

valida(event)
{
  let regex = new RegExp ("^[A-Za-z ]+$");
  console.log(regex.test(event.target.value))
  this.activo =  regex.test(event.target.value)
}

}
