import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BuildingService } from 'src/app/services/building.service';
import { FlatService } from 'src/app/services/flat.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-flat',
  templateUrl: './add-flat.component.html',
  styleUrls: ['./add-flat.component.css']
})
export class AddFlatComponent implements OnInit {

 
  flatForm:FormGroup
  buildingNames;
  constructor(private _fb:FormBuilder,
              private _router:Router,
              private _acRoute:ActivatedRoute,
              private _BuildingService:BuildingService ,
              private _FlatService : FlatService,
              private _notify:NotificationService  
      ) { }

  ngOnInit() {

    this.getBuildingName();
    this.flatForm=this._fb.group({
      FlatNumber:['',Validators.required],
      FlatArea:[],
      BuildingName:['',Validators.required],
      FlatType:[''],
      RateOfMaintainance:[],
      FixedMaintainance:[],
      CalcOn:['']
    })
     
   
  }
  createFlat(){
  
      this._FlatService.addFlats(this.flatForm.value).subscribe( (data) =>{
        this._notify.recordSaved();
        this.flatForm.reset();
        this._router.navigate(['../'],{relativeTo:this._acRoute});
      },
      (err) =>{
          console.log(err);
      })
}

  getBuildingName(){
    this._BuildingService.getAllBuildingName().subscribe( (data) =>{
      this.buildingNames=data;
      console.log(this.buildingNames)
    },
    (err) =>{
      console.log(err);
    })
  }

}
