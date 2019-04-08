import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }

  title = 'hotel-management-system-client';
  ngOnInit() {
    console.log("this is the AppComponent");
    this.router.navigate(['/user-login-component']);
  }
}
