import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customerForm:FormGroup;
  constructor(private _fb:FormBuilder,private _router:Router,private _acRoute:ActivatedRoute, private notify:NotificationService, private _customerService:CustomerService) { }

  ngOnInit() {

    this.customerForm = this._fb.group({
      CustomerName:['',[Validators.required]],
      CustomerAddress:[''],
      CustomerContact:[''],
      CustomerEmail:[''],
      CustomerPAN:[''],
      CustomerGST:[''],
      CustomerType:['']
    })
  }

  createCustomer(){
    this._customerService.createCustomer(this.customerForm.value).subscribe( (data) =>{
      this.notify.recordSaved();
      this._router.navigate(['../'],{relativeTo:this._acRoute});
    },(err) =>{
      console.log(err);
    })
  }
  cancelSave(){
    this._router.navigate(['../'],{relativeTo:this._acRoute});
  }

}
