import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BuildingService } from 'src/app/services/building.service';
import { NotificationService } from 'src/app/services/notification.service';
import { FlatService } from 'src/app/services/flat.service';

@Component({
  selector: 'app-modify-flat',
  templateUrl: './modify-flat.component.html',
  styleUrls: ['./modify-flat.component.css']
})
export class ModifyFlatComponent implements OnInit {

  flatid;
  flatInfo;
  buildingName;
  constructor(private _router:Router , private _acRoute:ActivatedRoute, private _BuildingService:BuildingService , private notify:NotificationService,
  private _flatService:FlatService) { }

  ngOnInit() {
    this._acRoute.paramMap.subscribe( (id:ParamMap) =>{
      this.flatid=id.get('id');
      this.getFlatInfo(this.flatid);
      this.getBuildingName();
    })
  }

  getBuildingName(){
    this._BuildingService.getAllBuildingName().subscribe( (data) =>{
      this.buildingName=data;
      console.log(this.buildingName)
    },
    (err) =>{
      console.log(err);
    })
  }

  getFlatInfo(id){
    this._flatService.getFlatById(id).subscribe( (data) =>{

      this.flatInfo=data;
    },(err) =>{
      console.log(err);
    })
  }

  updateFlatDetail(){

    const data={
      FlatNumber:this.flatInfo.FlatNumber,
      FlatArea:this.flatInfo.FlatArea,
      BuildingName:this.flatInfo.BuildingName,
      FlatType:this.flatInfo.FlatType,
      RateOfMaintainance:this.flatInfo.RateOfMaintainance,
      FixedMaintainance:this.flatInfo.FixedMaintainance,
      CalcOn:this.flatInfo.CalcOn
    }

    this._flatService.updateFlat(this.flatid,data).subscribe( (data) =>{
      this.notify.recordUpdated();
      this._router.navigate(['../'],{relativeTo:this._acRoute});
    },
    (err) =>{
      console.log(err);
    })
  }

}
