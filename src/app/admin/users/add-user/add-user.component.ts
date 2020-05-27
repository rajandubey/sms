import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm:FormGroup
  constructor(private _fb:FormBuilder,
              private _userService:UserService,
              private _router:Router,
              private _acRoute:ActivatedRoute,
              private notify:NotificationService        
    ) { }

  ngOnInit() {

    this.userForm=this._fb.group({
      UserName:['',[Validators.required]],
      Password:['',[Validators.required]],
      TypeOfUser:['']
    })
  }

  createUser(){
    this._userService.createUser(this.userForm.value).subscribe((data) =>{
      this.notify.recordSaved();
      this.userForm.reset();
      this._router.navigate(['../'],{relativeTo:this._acRoute})
    },(err) =>{
      console.log(err);
    })
  }

}
