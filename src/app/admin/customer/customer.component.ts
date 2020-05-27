import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  allCustomer;
  constructor(
      private _router:Router,
      private _acRoute:ActivatedRoute,
      private _customerService:CustomerService,
      private notify: NotificationService
  ) { }

  ngOnInit() {
  }

  getCustomer(){
    this._customerService.getAllCustomer().subscribe( (data) =>{
      this.allCustomer=data;
    },
    (err) =>{
      console.log(err);
    })
  }

  addCustomer(){
    this._router.navigate(['add-customer'],{relativeTo:this._acRoute});
  }


  gotoModifyCustomer(id){
    this._router.navigate([id],{relativeTo:this._acRoute});
  }

  deleteCustomer(id){
      this._customerService.deleteCustomer(id).subscribe( (data) =>{
        this.notify.recordDeleted();
        this.getCustomer();
      },(err) =>{
        console.log(err);
      })
  }
}
