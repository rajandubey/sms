import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-modify-customer',
  templateUrl: './modify-customer.component.html',
  styleUrls: ['./modify-customer.component.css']
})
export class ModifyCustomerComponent implements OnInit {

  customerId;
  customerInfo;
  constructor(
      private _customerService:CustomerService,
      private notify:NotificationService,
      private _router:Router,
      private _acRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this._acRoute.paramMap.subscribe( (id:ParamMap) =>{
      this.customerId=id.get('id');
      this.getCustomerInfo(this.customerId);
    })
  }

  getCustomerInfo(id){
    this._customerService.getCustomerByID(id).subscribe( (data) =>{
      this.customerInfo=data;
    },
    (err) =>{
      console.log(err);
    })
  }

  updateCustomer(){
    this._customerService.updateCustomer(this.customerId,this.customerInfo).subscribe( (data) =>{
      this.notify.recordUpdated();
      this._router.navigate(['../'],{relativeTo:this._acRoute});
    }, (err) =>{
      alert(err.error.message)
      this._router.navigate(['../'],{relativeTo:this._acRoute})
    })
  }

  cancelUpdate(){
    this._router.navigate(['../'],{relativeTo:this._acRoute})
  }
}
