import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatDividerModule, MatIconModule, MatButtonModule],
  template: `
    <footer>
      <mat-toolbar color="primary" class="justify-center">
        <div class="container mx-auto px-4 py-2 flex justify-between items-center">
          <span class="text-sm">&copy; 2025 MyApp. All rights reserved.</span>
          <div class="flex items-center space-x-2">
            <a mat-icon-button href="https://twitter.com" target="_blank">
              <mat-icon>twitter</mat-icon>
            </a>
            <a mat-icon-button href="https://facebook.com" target="_blank">
              <mat-icon>facebook</mat-icon>
            </a>
            <a mat-icon-button href="https://linkedin.com" target="_blank">
              <mat-icon>linkedin</mat-icon>
            </a>
          </div>
        </div>
      </mat-toolbar>
      <mat-divider></mat-divider>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #ffffff;
      box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
      text-align: center;
      padding: 0.5rem;
      color: #4a5568;
    }
    .mat-toolbar {
      justify-content: center;
    }
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    a {
      color: #ffffff;
    }
    a:hover {
      color: #e0e0e0;
    }
    .text-sm {
      font-size: 0.875rem; // Smaller text size
    }
  `]
})
export class FooterComponent {}