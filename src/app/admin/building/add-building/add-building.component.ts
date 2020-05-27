import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from "@angular/forms";
import { BuildingService } from 'src/app/services/building.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.css']
})
export class AddBuildingComponent implements OnInit {

  buildnigForm:FormGroup
  constructor(private _fb:FormBuilder ,
             private _buildingService:BuildingService, 
             private _router:Router ,
             private _acRoute:ActivatedRoute,
             private notify:NotificationService
             ) { }

  ngOnInit() {
    this.buildnigForm=this._fb.group({
      BuildingName:['',[Validators.required]],
      NoOfFloor:[''],
      NoOfFlats:['']
    })
  }

  createBuilding(){
    this._buildingService.createBuilding(this.buildnigForm.value).subscribe(
      (data) =>{
        this.notify.recordSaved()
        this.buildnigForm.reset()
        this._router.navigate(['../'],{relativeTo:this._acRoute})
      },
      (err) =>{
        console.log(err)
      })
  }

}
