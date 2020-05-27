import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SocietyService {

public baseUrl = "http://localhost:3000/society";

 constructor(private _http:HttpClient) { }

getSocietyInfo(){
  return this._http.get(this.baseUrl);
}

getSingleSocietyInfo(id){
    return this._http.get(this.baseUrl+'/'+id);
}

updateSocietyInfo(id,data){
  return this._http.put(this.baseUrl+'/'+id,data);
}

}
