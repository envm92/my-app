import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { FirestoreGetRequest } from 'src/models/firestore-request.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url ='https://firestore.googleapis.com/v1/projects/ionic-express-course-gft/databases/(default)/documents/users';
  formulario = null;
  constructor(private http:HttpClient) { }

  public getUsers(){
    this.http.get(`${this.url}`).subscribe(
      result => {
        console.log(result);
      })
  }
  
  public postUsers(datos){
    this.http.post(`${this.url}`,{
      fields:
        datos 
    }).subscribe(
      data  => {
        console.log("POST Request is successful ", data, datos);
        },
        error  => {
        console.log("Error", error);  
      }
    )
  }
}