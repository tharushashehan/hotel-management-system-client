import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItemsAdmin , navItemsEmployee } from '../../_nav';
import { LoginService } from '../../views/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems ;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  constructor(@Inject(DOCUMENT) _document?: any , private loginService: LoginService , private router: Router,) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });

    if (this.loginService.currentUserValue.userType === 'admin') {
      this.navItems = navItemsAdmin;
    } else {
      this.navItems = navItemsEmployee;
    }
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
