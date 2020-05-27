import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { error } from 'protractor';
import { SocietyService } from 'src/app/services/society.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-modify-society',
  templateUrl: './modify-society.component.html',
  styleUrls: ['./modify-society.component.css']
})
export class ModifySocietyComponent implements OnInit {

  societyID;
  societyInfo;
  currentInfo;
  constructor(private _router:Router , private _acRoute:ActivatedRoute, private _societyService:SocietyService , private notify:NotificationService) {   
  }

  ngOnInit()   {
    this._acRoute.paramMap.subscribe( (id:ParamMap)=>{
      this.societyID=id.get('id');  
      this.getSingleSociety(this.societyID);    
      
    })
  }

  getSingleSociety(id){
    this._societyService.getSingleSocietyInfo(id).subscribe( (data)=>{
        this.societyInfo=data;      
    },
    (err) =>{
      console.log(err)
    })
  }

  updateSocietyDetails(){

    const data={
      SocietyName:this.societyInfo.SocietyName,
      Address:this.societyInfo.Address,
      Contact:this.societyInfo.Contact,
      Email:this.societyInfo.Email,
      BankName:this.societyInfo.BankName,
      Branch:this.societyInfo.Branch,
      AccountNumber:this.societyInfo.AccountNumber,
      IFSCCode:this.societyInfo.IFSCCode,
      PAN:this.societyInfo.PAN,
      GSTIN:this.societyInfo.GSTIN,
    }

    this._societyService.updateSocietyInfo(this.societyID,data).subscribe(
      (data) =>{
        this.notify.recordUpdated();        
        this._router.navigate(['../'],{relativeTo:this._acRoute});
      },
      (err) =>{
          console.log(err)
      }
    )

  }
}
