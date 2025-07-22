import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { routes } from './app/app.routes';
import { HeaderComponent } from './app/shared/components/header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent],
    template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
    styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }
    
    main {
      flex: 1;
    }
  `]
})
export class App {}

bootstrapApplication(App, {
    providers: [
        provideRouter(routes)
    ]
});