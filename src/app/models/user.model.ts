export class User {
  name: string;
  apellido: string;
  emai: string;
  password: string;
  
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}