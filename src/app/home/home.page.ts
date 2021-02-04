import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/users.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  loading: boolean;
  constructor( private usersSrv: UserService, private dialog: MatDialog ) {

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
    this.loading = true;
    this.usersSrv.postUsers({
      "name": {"stringValue": this.formularioReactivo.value.nombre},
      "password":  {"stringValue": this.formularioReactivo.value.password},
      "lastName":  {"stringValue": this.formularioReactivo.value.apellido},
      "email":  {"stringValue": this.formularioReactivo.value.correo}
    }).subscribe(
      data  => {
        this.loading = false;
        console.log("POST Request is successful ", data);
        this.openDialog('Exito', 'Usuario posteado');
        this.formularioReactivo.reset();      
        },
        error  => {
        this.loading = false;
        console.log("Error", error);  
        this.openDialog('Error', 'Usuario no posteado');  
      }
    )
  }

  openDialog(title: string, text: string) {
    this.dialog.open(DialogElement, {
      data: {
        title: title,
        text: text
      }
    });
  }
}

@Component({
  selector: 'dialog-element',
  templateUrl: 'dialog-element.html'
})
export class DialogElement {
  constructor(@Inject(MAT_DIALOG_DATA) public data) {}
}; 
