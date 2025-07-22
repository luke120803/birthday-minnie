import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MusicService } from '../../services/music.service';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isPlaying = false;

  constructor(
      private musicService: MusicService,
      private audioService: AudioService
  ) {}

  ngOnInit() {
    this.musicService.isPlaying$.subscribe(isPlaying => {
      this.isPlaying = isPlaying;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}