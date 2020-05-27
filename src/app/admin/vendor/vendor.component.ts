import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  allVendor;
  constructor(private _vendorService:VendorService ,private _router:Router,private _acRoute:ActivatedRoute, private notify:NotificationService) { }

  ngOnInit() {
    this.getVendorList();
  }

  getVendorList(){
    this._vendorService.getAllVendor().subscribe( (data) =>{
      this.allVendor=data;
    },(err)=>{
      console.log(err);
    })
  }

  addVendor(){
    this._router.navigate(['add-vendor'],{relativeTo:this._acRoute});
  }

  gotoModifyVendor(id){
    this._router.navigate([id],{relativeTo:this._acRoute});
  }

  deleteVendor(id){
    this._vendorService.deleteVendor(id).subscribe( (data) =>{
        this.notify.recordDeleted();
        this.getVendorList();
    },
    (err) =>{
      console.log(err);
    })
  }

}
