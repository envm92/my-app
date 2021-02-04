import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url ='https://firestore.googleapis.com/v1/projects/ionic-express-course-gft/databases/(default)/documents/users';
  formulario = null;
  constructor(private http:HttpClient) 
  { }

  public getUsers(){
    this.http.get(`${this.url}`).subscribe(
      result => {
        console.log(result);
      })
  }

  public postUsers(userData) {
    return this.http.post(`${this.url}`, {
      fields: userData
    });
  }
  
}
