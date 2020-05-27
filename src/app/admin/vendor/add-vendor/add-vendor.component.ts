import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { VendorService } from 'src/app/services/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  vendorForm:FormGroup;
  constructor(
          private _fb:FormBuilder,
          private _vendorService:VendorService,
          private _router:Router,
          private _acRoute:ActivatedRoute,
          private notify:NotificationService
  ) { }

  ngOnInit() {

    this.vendorForm=this._fb.group({
      VendorName:['',[Validators.required]],
      VendorAddress:[''],
      VendorCity:[''],
      VendorState:[''],
      VendorContact:[''],
      VendorEmail:[''],
      VendorPAN:[''],
      VendorGST:[''],
      VendorType:['']
    })
  }

  createVendor(){
    this._vendorService.createVendor(this.vendorForm.value).subscribe( (data) =>{
      this.notify.recordSaved();
      this._router.navigate(['../'],{relativeTo:this._acRoute})
    },
    (err) =>{
      console.log(err);
    })
  }

  cancelSave(){
    this._router.navigate(['../'],{relativeTo:this._acRoute})
  }

}
