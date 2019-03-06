import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean = false;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated()
    this.authService.reset
      .subscribe(
        () => this.isAuthenticated = this.authService.isAuthenticated()
      )
  }

  onLogout() {
    this.authService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/signin']);
  }
}
