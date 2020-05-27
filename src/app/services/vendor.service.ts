import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class VendorService {

public baseUrl="http://localhost:3000/vendor/";
  constructor(private _http:HttpClient) { }

getAllVendor(){
  return this._http.get(this.baseUrl);
}

getVendorById(id){
  return this._http.get(this.baseUrl+id);
}

createVendor(data){
  return this._http.post(this.baseUrl,data);
}

updateVendor(id,data){
  return this._http.put(this.baseUrl+id,data);
}

deleteVendor(id){
  return this._http.delete(this.baseUrl+id);
}
}
