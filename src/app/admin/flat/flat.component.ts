import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlatService } from 'src/app/services/flat.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css']
})
export class FlatComponent implements OnInit {

  allFlats;
  constructor(private _router:Router , private _acRoute:ActivatedRoute, private _flatService:FlatService, private notify:NotificationService) { }

  ngOnInit() {
    // this.listAllFlats();
  }
  listAllFlats(){

    this._flatService.getAllFlat().subscribe( (data) =>{
      this.allFlats=data;
    },
    (err) =>{
      console.log(err);
    })
  }

  addFlat(){
      this._router.navigate(['add-flat'],{relativeTo:this._acRoute})
  }

  deleteFlat(id){
    this._flatService.deleteFlat(id).subscribe( (data)=>{
          this.notify.recordDeleted();
          this.listAllFlats();
    }, (err) =>{
      console.log(err);
    })
  }

  gotoModifyFlat(id){
    this._router.navigate([id],{relativeTo:this._acRoute});
  }


}
