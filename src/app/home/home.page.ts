import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myLoginForm :FormGroup
  validationMessages={
    email:[
      {type:"required",message:"campo obligatorio"},
      {type:"pattern",message:"email no valido"}
    ],
    password:[
      {type:"required",message:"campo obligatorio"},
      {type:"pattern",message:"debe contener entre 8 y 32 caracteres incluyendo simbolos"}
    ],
    nombre:[
      {type:"required",message:"campo obligatorio"},
      {type:"pattern",message:"nombre no valido"}
    ],
    apellido:[
      {type:"required",message:"campo obligatorio"},
      {type:"pattern",message:"apellido no valido"}
    ]
  }
  constructor(private myFormBuilder:FormBuilder) { 
    this.myLoginForm=this.myFormBuilder.group({
      nombre: new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z]+(([ ][a-zA-Z ])?[a-zA-Z])*$")
      ])),
      apellido:new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z]+(([ ][a-zA-Z ])?[a-zA-Z])*$")
      ])),
      email:new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])),
      password:new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("^.{8,32}$")
      ]))
    })
  }
  loginUser(credentials){
    console.log(credentials)
  }
}