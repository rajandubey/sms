import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { SocietyService } from '../services/society.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public societyInfo;
  username;
  constructor(private _router:Router , private _acRoute:ActivatedRoute , private _societyService:SocietyService) { }

  ngOnInit() {
    this._societyService.getSocietyInfo().subscribe(
      (data) =>{
        this.societyInfo = data;
      },
      (error) =>{
        console.log(error)
      }
    )

    this._acRoute.paramMap.subscribe( username =>{
      this.username = username.get('username');
    })
    
  }

  gotoSocietyMaster(){
      this._router.navigate(['society'],{relativeTo:this._acRoute});
  }
  gotoBuildingMaster(){
    this._router.navigate(['building'],{relativeTo:this._acRoute})
  }
  gotoFlatMaster(){
    this._router.navigate(['flat'],{relativeTo:this._acRoute})
  }
  gotoUsersMaster(){
    this._router.navigate(['user'],{relativeTo:this._acRoute})
  }

  gotoFYMaster(){
    this._router.navigate(['fy'],{relativeTo:this._acRoute})
  }

  gotoVendorMaster(){
    this._router.navigate(['vendor'],{relativeTo:this._acRoute})
  }

  gotoCustomerMaster(){
    this._router.navigate(['customer'],{relativeTo:this._acRoute})
  }

  gotoBillItem(){
    this._router.navigate(['billing'],{relativeTo:this._acRoute})
  }
  logout(){
    this._router.navigate(['../login'],{relativeTo:this._acRoute});
  }
  dashboard(){
    this._router.navigate(['dashboard']);
    this._router.navigate(['dashboard',{username:this.username}]);
  }

}
