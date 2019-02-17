import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("this is the SideNavBarComponent");
  }

  public pageName:string = "Welcomeback !";

  public onclickSideNavItem(event, item){
    this.pageName = "Hello, Welcome to " + item + "  page";
  }
}
