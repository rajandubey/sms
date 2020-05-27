import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  public baseUrl = "http://localhost:3000/building";
constructor(private _http:HttpClient) { }

getAllBuildings(){
  return this._http.get(this.baseUrl);
}

getBuildingById(id){
  return this._http.get(this.baseUrl+'/'+id);
}

getAllBuildingName(){
  return this._http.get(this.baseUrl+'/All/Names');
}

createBuilding(data){
  return this._http.post(this.baseUrl,data);
}

deleteBuilding(id){
  return this._http.delete(this.baseUrl+'/'+id);
}

updateBuilding(id,data){
  return this._http.put(this.baseUrl+'/'+id,data);
}
}

