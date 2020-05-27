import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class FlatService {

public baseUrl="http://localhost:3000/flat"
  constructor(private _http:HttpClient) { }

  addFlats(data){
    return this._http.post(this.baseUrl,data);
  }

  getAllFlat(){
    return this._http.get(this.baseUrl);
  }

  getFlatById(idflat){
    return this._http.get(this.baseUrl+'/'+idflat);
  }

  updateFlat(idflat,data){
    return this._http.put(this.baseUrl+'/'+idflat,data);
  }

  deleteFlat(idflat){
    return this._http.delete(this.baseUrl+'/'+idflat);
  }
}
