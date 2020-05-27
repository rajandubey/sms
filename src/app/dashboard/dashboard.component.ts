import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string;

  constructor(private _acRoute: ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this._acRoute.paramMap.subscribe(username => {
      this.username = username.get('username');
    });
}

gotoMaster(){
    this._router.navigate(['admin',{username:this.username}]);
}
logout(){
this._router.navigate(['../login'],{relativeTo:this._acRoute});
}
}
