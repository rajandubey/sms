import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent implements OnInit {

  userId;
  userInfo;
  constructor(
        private _router:Router,
        private _acRoute:ActivatedRoute,
        private _userService:UserService,
        private notify:NotificationService

  ) { }

  ngOnInit() {
    this._acRoute.paramMap.subscribe( (id:ParamMap) =>{
      this.userId=id.get('id');
      this.getUserInfo(this.userId);
    })
  }

  getUserInfo(id){
    this._userService.getUserById(id).subscribe( (data) =>{
      this.userInfo=data;
    }, (err) =>{
      console.log(err);
    })
  }

  updateUserDetail(){

    const data={
      UserName:this.userInfo.UserName,
      Password:this.userInfo.Password,
      TypeOfUser:this.userInfo.TypeOfUser
    }

    this._userService.updateUser(this.userId,data).subscribe( (data) =>{
      this.notify.recordUpdated();
      this._router.navigate(['../'],{relativeTo:this._acRoute})
    },
    (err) =>{
      console.log(err);
      alert(err.error.message)
      this._router.navigate(['../'],{relativeTo:this._acRoute})
    })

  }

}
