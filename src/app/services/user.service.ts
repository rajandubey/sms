import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserService {

public baseUrl = "http://localhost:3000/user/"

 constructor(private _http:HttpClient) { }

getAllUser(){
  return this._http.get(this.baseUrl);
}

getUserById(id){
  return this._http.get(this.baseUrl+id);
}

createUser(data){
  return this._http.post(this.baseUrl,data);
}

updateUser(id,data){
  return this._http.put(this.baseUrl+id,data);
}

deleteUser(id){
  return this._http.delete(this.baseUrl+id);
}
}
