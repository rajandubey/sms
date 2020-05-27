import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { VendorService } from 'src/app/services/vendor.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-modify-vendor',
  templateUrl: './modify-vendor.component.html',
  styleUrls: ['./modify-vendor.component.css']
})
export class ModifyVendorComponent implements OnInit {

  vendorId;
  vendorInfo;
  constructor(private _router:Router,
              private _acRoute:ActivatedRoute,    
              private notify:NotificationService,
              private _vendorService:VendorService  
    ) { }

  ngOnInit() {
      this._acRoute.paramMap.subscribe( (id:ParamMap) =>{
        this.vendorId=id.get('id');
        this.getVendorInfo(this.vendorId);
      })
  }

  getVendorInfo(id){
    this._vendorService.getVendorById(id).subscribe( (data) =>{
      this.vendorInfo=data;
    },
    (err) =>{
      console.log(err)
    })
  }

  updateVendor(){
      this._vendorService.updateVendor(this.vendorId,this.vendorInfo).subscribe( (data) =>{
        this.notify.recordUpdated();
        this._router.navigate(['../'],{relativeTo:this._acRoute});
      },(err) =>{
        alert(err.error.message)
        this._router.navigate(['../'],{relativeTo:this._acRoute})
      })
  }
  cancelUpdate(){
    this._router.navigate(['../'],{relativeTo:this._acRoute})
  }
}
