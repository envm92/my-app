import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  validInput;
  constructor() {}

  validate(input) {
    return /^[a-zA-Z ]+$/.test(input);
  }

  onKeyPressEvent(event: KeyboardEvent) {
    const value = event.target.value;
    const title = document.querySelector('#title');
    this.validInput = this.validate(value);
    if (this.validInput) {
      title.textContent = value;
      title.removeAttribute('color');
    } else {
      title.textContent = 'Name must contain only letters or spaces';
      title.setAttribute('color', 'danger');
    }
  }
}
