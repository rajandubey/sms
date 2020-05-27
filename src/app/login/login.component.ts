import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  constructor(private _router:Router, private _acRoute:ActivatedRoute) { }

  ngOnInit() {
  }
  login(){     
    var username = (<HTMLInputElement>document.getElementById("username")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    
    if(username==='Root' && password ==='Root'){
      //alert('Login Successfull')
      this._router.navigate(['dashboard',{username}]);
      }else{
          alert('Invalid Login');
      }
        
  }

}
