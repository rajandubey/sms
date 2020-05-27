import { Component, OnInit } from '@angular/core';
import { FinYearService } from 'src/app/services/finYear.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-fy',
  templateUrl: './add-fy.component.html',
  styleUrls: ['./add-fy.component.css']
})
export class AddFyComponent implements OnInit {

  public finYearForm:FormGroup;
  constructor(private _finYearService:FinYearService, private _fb:FormBuilder , private _route:Router, private _acRoute:ActivatedRoute , private notify:NotificationService) { }

  ngOnInit() {
    this.finYearForm = this._fb.group({
      yearCode:['',[Validators.required]],
      fromDate:[''],
      toDate:['']
    })
  }


  createFinYear(){

    this._finYearService.createFinYear(this.finYearForm.value).subscribe(
      (data) =>{
        this.notify.recordSaved();
        console.log(data)
        this.finYearForm.reset();
        this._route.navigate(['../'],{relativeTo:this._acRoute})
      },
    (err) =>{
      console.log(err);
    }
    )

  }
}
