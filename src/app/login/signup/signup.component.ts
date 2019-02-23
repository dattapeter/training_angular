import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {

  @ViewChild('form') form : NgForm;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup() {
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.authService.signupUser(email, password);
  }
}
