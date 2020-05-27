import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allUsers;
  constructor(
          private _router:Router,
          private _acRoute:ActivatedRoute,
          private notify:NotificationService,
          private _userService:UserService
  ) { }

  ngOnInit() {
    this.getAllUser()
  }

  addUser(){
    this._router.navigate(['add-user'],{relativeTo:this._acRoute})
  }

  getAllUser(){
    this._userService.getAllUser().subscribe( (data) =>{
      this.allUsers=data;
    },
    (err) =>{
      console.log(err);
    })
  }

  deleteUser(id){
    this._userService.deleteUser(id).subscribe( (data) =>{
      this.notify.recordDeleted();
      this.getAllUser();
    },(err) =>{
      console.log(err);
    })
  }

  gotoModifyUser(id){
    this._router.navigate([id],{relativeTo:this._acRoute})
  }
}
