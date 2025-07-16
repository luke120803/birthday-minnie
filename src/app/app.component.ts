import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importe o RouterOutlet

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    template: `
    <router-outlet></router-outlet>
  `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    private konamiCode: string[] = [
        'ArrowUp', 'ArrowUp',
        'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight',
        'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ];

    private konamiCodePosition = 0;

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.key === this.konamiCode[this.konamiCodePosition]) {
            this.konamiCodePosition++;
            if (this.konamiCodePosition === this.konamiCode.length) {
                // Redireciona para o arquivo na pasta 'assets'
                window.location.href = 'assets/games.html';
                this.konamiCodePosition = 0;
            }
        } else {
            this.konamiCodePosition = 0;
        }
    }
    // --- FIM DO CÓDIGO DO EASTER EGG ---
}