import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  profileForm: FormGroup;
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  
  constructor() {
    this.profileForm = new FormGroup({
      nombreFormControl: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]+')
      ]),
      apellidoFormControl: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]+')
      ]),
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      passwordFormControl: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(32),
        Validators.pattern(/(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[?!$.\-%&*])/)
      ]),
    });
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
