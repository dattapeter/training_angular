import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated()
    this.authService.reset
      .subscribe(
        () => this.isAuthenticated = this.authService.isAuthenticated()
      )
  }

  onLogout() {
    this.authService.logout();
  }
}
