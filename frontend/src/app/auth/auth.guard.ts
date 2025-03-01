import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


export const AuthGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
  
    return authService.isLoggedIn().pipe(
        map(isLoggedIn => {
          if (isLoggedIn) {
            return true; // L'utilisateur est connecté, il peut accéder à la route
          } else {
            router.navigate(['/login']); // Redirection vers la connexion
            return false;
          }
        }),
        catchError(() => {
          router.navigate(['/login']); // Redirection vers la connexion en cas d'erreur
          return of(false);
        })
      );
  };
