import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombrePattern = "^[A-Za-z ]+$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passwordPattern = "(([A-Za-z0-9])*([!@#$%^&*()_+-={};':])+)+|(([!@#$%^&*()_+-={};':])+([A-Za-z0-9])*)+"
  resultado="Valor por default";
  hide = true;
  formularioReactivo: FormGroup;
  constructor(
    private usersSrv: UserService
  ) {

    this.formularioReactivo = new FormGroup({
      'nombre': new FormControl('', [
        Validators.required,
        Validators.pattern(this.nombrePattern)
      ]),
      'apellido': new FormControl('', [
        Validators.required,
        Validators.pattern(this.nombrePattern)
      ]),
      'correo': new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(32),
        Validators.pattern(this.passwordPattern)
      ])
    })
    
  usersSrv.getUsers();
  }

  submit() {
    console.log('nombre: ' + this.formularioReactivo.value.nombre)
    console.log('apellido: ' + this.formularioReactivo.value.apellido)
    console.log('correo: ' + this.formularioReactivo.value.correo)
    console.log('password: ' + this.formularioReactivo.value.password)
  }

  valida(){
    if (this.formularioReactivo.valid) {
      return(false)
    } else {
      return(true)
    }
  }
}

