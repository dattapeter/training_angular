import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from 'src/app/login/auth.service';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService){}

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot){
        return this.authService.isAuthenticated();
    }
}