import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

public baseUrl="http://localhost:3000/customer/";

constructor(private _http:HttpClient) { }

getAllCustomer(){
  return this._http.get(this.baseUrl);
}

getCustomerByID(id){
  return this._http.get(this.baseUrl+id);
}

createCustomer(data){
  return this._http.post(this.baseUrl,data);
}

updateCustomer(id,data){
  return this._http.put(this.baseUrl+id,data);
}

deleteCustomer(id){
  return this._http.delete(this.baseUrl+id);
}
}
