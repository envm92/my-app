import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl,  FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('passwordEyeRegister') passwordEye;
  passwordTypeInput  =  'password';
  iconpassword  =  'eye-off';
  togglePasswordMode() {
    this.passwordTypeInput  =  this.passwordTypeInput  ===  'text'  ?  'password'  :  'text';
    this.iconpassword  =  this.iconpassword  ===  'eye-off'  ?  'eye'  :  'eye-off';
    this.passwordEye.el.setFocus();
}


  FormField :FormGroup;
  ValidationField={
    email:[
      {type:"required",
       message:"Requerido para continuar"},
      {type:"pattern",
       message:"email incorrecto, intente de nuevo"}
    ],
    password:[
      {type:"required",
       message:"Requerido para continuar"},
      {type:"pattern",
       message:"Se requiere al menos una letra, un numero y un caracter especial (?!$.-%&*)"}
    ],
    nombre:[
      {type:"required",
       message:"Requerido para continuar"},
      {type:"pattern",
       message:"nombre incorrecto, intente de nuevo, recuerde no usar numeros"}
    ],
    apellido:[
      {type:"required",
       message:"Requerido para continuar"},
      {type:"pattern",
       message:"apellido incorrecto, intente de nuevo, recuerda no usar numeros"}
    ]
  }
  constructor(private FormBuilder:FormBuilder) { 
    this.FormField=this.FormBuilder.group({
      nombre: new FormControl("",
        Validators.compose([
        Validators.required,
        Validators.pattern("[a-zA-Z ]+")
      ])),
      apellido:new FormControl("",
        Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z]+(([ ][a-zA-Z ])?[a-zA-Z])*$")
      ])),
      email:new FormControl("",
        Validators.compose([
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ])),
      password:new FormControl("",
        Validators.compose([
        Validators.required,
        Validators.pattern("(([A-Za-z0-9])*([!@#$%^&*()_+-={};':])+)+|(([!@#$%^&*()_+-={};':])+([A-Za-z0-9])*)+")
      ]))
    })
  }
  submit(Login) {
    console.log(Login)
  }
}