import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsActiveGuard implements CanActivate {
  constructor(
    private route:Router
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
     if (localStorage.getItem('sahosoft')!==null) {

       return true;
     }
     this.route.navigate(['/login']);
     return false;
  }

}
