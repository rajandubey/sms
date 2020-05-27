import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-billItem',
  templateUrl: './add-billItem.component.html',
  styleUrls: ['./add-billItem.component.css']
})
export class AddBillItemComponent implements OnInit {

  billForm:FormGroup;
  constructor(
      private _fb:FormBuilder,
      private _router:Router,
      private _acRoute:ActivatedRoute
      
  ) { }

  ngOnInit() {

    this.billForm = this._fb.group({
      itemCode:['',[Validators.required]],
      itemName:['',[Validators.required]],
      itemUnit:[''],
      itemStatus:['',[Validators.required]]
    })

  }

  createBill(){
    
  }

}
