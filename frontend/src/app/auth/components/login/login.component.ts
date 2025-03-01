import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterModule
  ]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  login(): void {
    if (!this.email || !this.password) {
      console.error('Email et mot de passe sont requis.');
      return;
    }

    //Récuperation de l'access token
    this.authService.login(this.email, this.password).subscribe(
      response => {
        
        this.authService.getUser().subscribe(
          (user: User) => {
            console.log('Utilisateur connecté :', user);
            this.router.navigate(['/home']);
          },
          error => {
            console.error('Échec de la récupération des informations utilisateur', error);
            alert('Échec de la récupération des informations utilisateur.');
          }
        );
      },
      error => {
        console.error('Échec de la connexion', error);
        alert('Échec de la connexion. Vérifiez votre email et votre mot de passe.');
      }
    );
  }
  
}