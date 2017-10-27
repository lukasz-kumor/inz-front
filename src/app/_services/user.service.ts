import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/User';
import { URLSearchParams } from '@angular/http';
@Injectable()
export class UserService {

  constructor(private http: Http){}

  public createUser(user: User){
    let url = "http://localhost:8080/user";
    let body = JSON.stringify(user);
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(url, body, {headers: headers})
      .map(response => response.json())
  }

}