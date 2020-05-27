import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FinYearService } from 'src/app/services/finYear.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-fy',
  templateUrl: './fy.component.html',
  styleUrls: ['./fy.component.css']
})
export class FyComponent implements OnInit {

  allFys;
  constructor(private _router:Router, private _acRoute:ActivatedRoute, private _fyService:FinYearService, private notify:NotificationService ) { }

  ngOnInit() {
   this.listFys();
  }

  addFy(){
    this._router.navigate(['add-fy'],{relativeTo:this._acRoute})
  }

  listFys(){
    this._fyService.getFy().subscribe( (data) =>{
      // console.log(data);
      this.allFys=data;
    },(err) =>{
      console.log(err)
    })
  }


  deleteFinYear(id){
    this._fyService.deleteFinYear(id).subscribe( (data) =>{
     this.notify.recordDeleted();
      this.listFys();
    },
    (err) =>{
      console.log(err);
    })
    }
}
