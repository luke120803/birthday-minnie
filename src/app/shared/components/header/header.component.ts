import {Component, HostListener, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    isMenuOpen = false;
    isPlaying = false;
    isDropdownOpen = false; // <-- Adicionar esta propriedade




    @HostListener('document:click', ['$event'])
    onDocumentClick(event: Event): void {
        const target = event.target as HTMLElement;
        if (!target.closest('.friends-dropdown')) {
            this.isDropdownOpen = false;
        }
    }

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
        if (!this.isMenuOpen) {
            this.isDropdownOpen = false; // Fecha o dropdown se o menu principal for fechado
        }
    }


    toggleDropdown(event: Event): void {
        event.stopPropagation(); // Impede que o clique feche o menu imediatamente
        this.isDropdownOpen = !this.isDropdownOpen;
    }

    closeMenu(): void {
        this.isMenuOpen = false;
        this.isDropdownOpen = false; // <-- Garante que o dropdown também fecha
    }
}