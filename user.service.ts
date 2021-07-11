import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}