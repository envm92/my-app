import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  entrada;

  constructor() {}

  validaentrada(input) {
    let regex = new RegExp("^[a-zA-Z ]+$");
    this.entrada = regex.test(input);
  }

  onKeyPressEvent(event: KeyboardEvent) {
    const value = event.target.value;
    const title = document.querySelector('#title');
    this.validaentrada(value);
    if (this.entrada) {
      title.textContent = value;
    } else {
      title.textContent = 'Solo puedes ingresar caractéres alfabéticos y especios, intenta de nuevo.';
    }
  }
}
