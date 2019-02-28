import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Environment } from '../shared/environment.setting';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
  token: string;
  UID: string;
  reset = new Subject();

  constructor(private router: Router,
              private httpClient: HttpClient) {}

  signupUser(uid: string, password: string) {
      this.httpClient.post(`${Environment.url}/user/signup`, {uid, password})
        .subscribe(
          (response: HttpResponse<any>) => {
            this.router.navigate(['/']);
            this.token = response.headers.get('x-auth');
            this.reset.next();
          }
        )
  }

  signinUser(uid: string, password: string) {
    this.httpClient.post<HttpResponse<any>>(`${Environment.url}/user/login`, {uid, password})
        .subscribe(
          response => {
            this.router.navigate(['/']);
            this.token = response.headers.get('x-auth');
            this.reset.next();
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
