import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
            RouterModule,
            HeaderComponent, 
            FooterComponent,
            MatCardModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  projects = [
    { id: 1, name: 'Project One', description: 'Description for project one.' },
    { id: 2, name: 'Project Two', description: 'Description for project two.' },
    // Ajoutez d'autres projets ici
  ];
}