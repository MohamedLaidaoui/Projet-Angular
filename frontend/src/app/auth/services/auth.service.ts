import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, tap, catchError, of, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/api/user/login`, { email, password }).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('authToken', response.token);
        }
      })
    );
  }

  getUser(): Observable<User> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error('Utilisateur non authentifié');
    }
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<User>(`${this.apiUrl}/api/user/me`, { headers });
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/api/user/register`, user);
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }
  
  isLoggedIn(): Observable<boolean> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      return of(false);
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<HttpResponse<User>>(`${this.apiUrl}/api/user/me`, { headers, observe: 'response' }).pipe(
      map(response => 
        response.status === 200), // Vérifie explicitement le statut HTTP
      catchError(() => of(false)) // Si erreur (ex: 401), alors on retourne false
    );
  }
}