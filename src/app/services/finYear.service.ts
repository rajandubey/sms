import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class FinYearService {

public baseUrl = "http://localhost:3000/fy"
  constructor(private _http:HttpClient) { }



  getFy(){
    return this._http.get(this.baseUrl);
  }
createFinYear(data){
  return this._http.post(this.baseUrl,data);
}


deleteFinYear(id){
  return this._http.delete(this.baseUrl+'/'+id);
}

}
