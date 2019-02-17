import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("this is the AdminNavBarComponent");
  }
  public pageName:string = "Welcomeback Admin";

  public onclickSideNavItem(event, item){
    this.pageName = "Hello, Welcome to " + item + "  page";
  }

}
