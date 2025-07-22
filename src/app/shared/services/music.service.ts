import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AudioService } from './audio.service';

@Injectable({
    providedIn: 'root'
})
export class MusicService {
    private isPlayingSubject = new BehaviorSubject<boolean>(false);
    public isPlaying$ = this.isPlayingSubject.asObservable();

    constructor(private audioService: AudioService) {
        this.audioService.isGlobalMusicPlaying$.subscribe(isPlaying => {
            this.isPlayingSubject.next(isPlaying);
        });
    }

    play(): void {
        this.audioService.playGlobalMusic();
    }

    pause(): void {
        this.audioService.pauseGlobalMusic();
    }

    toggle(): void {
        this.audioService.toggleGlobalMusic();
    }
}