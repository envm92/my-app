import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string = "https://firestore.googleapis.com/v1/projects/ionic-express-course-gft/databases/(default)/documents/users";
  
  constructor(private httpClient: HttpClient) {}

  // GET request
  public getUsers() {
    return this.httpClient.get(this.baseUrl);
  }

  // POST request
  public postUser(userData) {
    return this.httpClient.post(this.baseUrl, {
      fields: userData
    });
  }
}
