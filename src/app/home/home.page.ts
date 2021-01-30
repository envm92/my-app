import { Component } from '@angular/core';
import {Input} from 'src/app/home/input'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  inputs : Input[] = [];
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