import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-billing-item',
  templateUrl: './billing-item.component.html',
  styleUrls: ['./billing-item.component.css']
})
export class BillingItemComponent implements OnInit {

  constructor(private _router:Router, private _acRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  addBillItem(){
    this._router.navigate(['add-bill'],{relativeTo:this._acRoute});
  }

  listAllBills(){

  }

  gotoModifyBill(id){

  }

  deleteBill(id){
    
  }


}
