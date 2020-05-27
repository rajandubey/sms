import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BuildingService } from 'src/app/services/building.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  allBuildings;
  constructor(private _router: Router, private _acRoute: ActivatedRoute, private _buildingService: BuildingService, private notify: NotificationService) { }

  ngOnInit() {
    //this.listAllBuildings();
  }

  listAllBuildings() {
    this._buildingService.getAllBuildings().subscribe((data) => {
      this.allBuildings = data;
      console.log(this.allBuildings)
    },
      (err) => {
        console.log(err);
      })
  }

  addBuilding() {
    this._router.navigate(['add-building'], { relativeTo: this._acRoute })
  }

  deleteBuilding(id) {
    this._buildingService.deleteBuilding(id).subscribe((data) => {
      this.notify.recordDeleted();
      this.listAllBuildings();
    },
      (err) => {
        console.log(err);
      })
  }


  gotoModifyBuilding(id) {
    this._router.navigate([id], { relativeTo: this._acRoute })
  }

}
