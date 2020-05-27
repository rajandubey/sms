import { Component, OnInit, ElementRef } from "@angular/core";
import { SocietyService } from "src/app/services/society.service";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import * as jsPDF from "jspdf";

import "jspdf-autotable";

@Component({
  selector: "app-society",
  templateUrl: "./society.component.html",
  styleUrls: ["./society.component.css"],
})
export class SocietyComponent implements OnInit {
  public societyInfo;
  mySubscription: any;
  htmlData: any = "#societyDetails";

  constructor(
    private _societyService: SocietyService,
    private _router: Router,
    private _acRoute: ActivatedRoute
  ) {
    // this._router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // };
    // this.mySubscription = this._router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     // Trick the Router into believing it's last link wasn't previously loaded
    //     this._router.navigated = false;
    //   }
    // });
  }

  ngOnInit() {
    this._societyService.getSocietyInfo().subscribe(
      (data) => {
        this.societyInfo = data;
        //console.log(this.societyInfo)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  modifySociety(id) {
    this._router.navigate([id], { relativeTo: this._acRoute });
  }

  getReport() {
    let pdftitle = "societyDetails";
    let tfoot = <HTMLInputElement>document.getElementById("footer");
    const totalPagesExp = "{total_pages_count_string}";
    let pdf = new jsPDF();
    pdf.setTextColor(51, 156, 255);
    pdf.text("Society Information", 80, 10);
    pdf.autoTable({ html: "#societyDetails" });
    // pdf.text(totalPagesExp);
    pdf.save(pdftitle + ".pdf");
    tfoot.remove();
  }
}
