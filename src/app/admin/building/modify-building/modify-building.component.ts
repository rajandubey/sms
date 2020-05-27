import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BuildingService } from 'src/app/services/building.service';
import { NotificationService } from 'src/app/services/notification.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modify-building',
  templateUrl: './modify-building.component.html',
  styleUrls: ['./modify-building.component.css']
})
export class ModifyBuildingComponent implements OnInit {

  buildingId;
  buildingInfo;
  buildnigForm:FormGroup
  constructor(private _fb:FormBuilder , private _router:Router , private _acRoute:ActivatedRoute, private _buildingService:BuildingService , private notify:NotificationService) { }

  ngOnInit() {
    this._acRoute.paramMap.subscribe( (id:ParamMap) =>{
      this.buildingId=id.get('id');
     // console.log(this.buildingId);
      this.getBuildingInfo(this.buildingId);
    })
  }
  getBuildingInfo(id){
      this._buildingService.getBuildingById(id).subscribe( (data) =>{
        this.buildingInfo=data;
      },
      (err) =>{
        console.log(err);
      })
  }

 
  updateBuildingDetail(){

    // this.buildnigForm=this._fb.group({
    //   BuildingName:[this.buildingInfo.BuildingName,[Validators.required]],
    //   NoOfFloor:[this.buildingInfo.NoOfFloor,[Validators.required]],
    //   NoOfFlats:[this.buildingInfo.NoOfFlats,[Validators.required]]
    // }) 

    const data={
      BuildingName:this.buildingInfo.BuildingName,
      NoOfFloor:this.buildingInfo.NoOfFloor,
      NoOfFlats:this.buildingInfo.NoOfFlats
    }


    this._buildingService.updateBuilding(this.buildingId,data).subscribe( (data) =>{
      console.log(data);
      this.notify.recordUpdated();
      this._router.navigate(['../'],{relativeTo:this._acRoute})
    },
    (err) =>{
      console.log(err);
    })
}
}
