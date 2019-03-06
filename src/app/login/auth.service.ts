import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { Subject } from 'rxjs';
import { Environment } from '../shared/environment.setting';
import { User } from './user.model';

@Injectable()
export class AuthService {
  token: string;
  UID: string;
  reset = new Subject();

  constructor(private router: Router,
              private httpClient: HttpClient) {}

  signupUser(uid: string, password: string) {
      this.httpClient.post<User>(`${Environment.url}/user/signup`, {uid, password})
        .subscribe(
          user => {
            this.token = user.token;
            this.reset.next();
            this.router.navigate(['/']);
          }
        )
  }

  signinUser(uid: string, password: string) {
    this.httpClient.post<User>(`${Environment.url}/user/login`, {uid, password})
        .subscribe(
          user => {
            this.UID = user.uid.toUpperCase();
            this.token = user.token;
            this.reset.next();  
            this.router.navigate(['/']);          
          }
        );
  }

  logout() {
    this.httpClient.delete(`${Environment.url}/user/logout`)
      .subscribe(
        response => {
          this.token = null;
          this.reset.next()
        }
      )
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
