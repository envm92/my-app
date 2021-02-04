import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../services/data.service';

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

  formSubmiting: boolean;
  
  constructor(private dataService: DataService, private dialog: MatDialog) {
    this.formSubmiting = false;
    /** Formulario */
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
    /** Data service */
    dataService.getUsers()
      .subscribe(result => console.log(result));
  }

  onSubmit() {
    // Setting values from form
    this.nombre   = this.profileForm.value.nombreFormControl;
    this.apellido = this.profileForm.value.apellidoFormControl;
    this.email    = this.profileForm.value.emailFormControl;
    this.password = this.profileForm.value.passwordFormControl;
    console.log('nombre:', this.nombre);
    console.log('apellido:', this.apellido);
    console.log('email:', this.email);
    console.log('password', this.password);
    this.formSubmiting = true;
    // POST request to add new user
    this.dataService.postUser({
      'name'    : {'stringValue': this.nombre},
      'lastName': {'stringValue': this.apellido},
      'email'   : {'stringValue': this.email},
      'password': {'stringValue': this.password}
    }).subscribe(
      data => {
        this.formSubmiting = false;
        console.log('POST request successful', data);
        this.dataService.getUsers().subscribe(data => console.log(data));
        this.openDialog('Éxito', 'Usuario guardado de manera exitosa');
        this.profileForm.reset();
      },
      error => {
        this.formSubmiting = false;
        console.log('ERROR while processing the request', error);
        this.openDialog('Ups', 'Algo salio mal');
      }
    );
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

/**
 * DIALOG COMPONENT
 */
@Component({
  selector: 'dialog-element',
  templateUrl: 'dialog-element.html'
})
export class DialogElement {
  constructor(@Inject(MAT_DIALOG_DATA) public data) {}
};