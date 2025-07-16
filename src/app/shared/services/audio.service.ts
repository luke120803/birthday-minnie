import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AudioService {
    private isGlobalMusicPlayingSubject = new BehaviorSubject<boolean>(false);
    public isGlobalMusicPlaying$ = this.isGlobalMusicPlayingSubject.asObservable();

    private globalAudio: HTMLAudioElement | null = null;
    private currentBackgroundAudio: HTMLAudioElement | null = null;
    private soundEffects: { [key: string]: HTMLAudioElement } = {};

    // Mapeamento de músicas de fundo por amigo
    private friendBackgroundMusic: { [key: string]: string } = {
        'lokkas': 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        'moih': 'https://www.soundjay.com/misc/sounds/bell-ringing-04.wav',
        'nicole': 'https://www.soundjay.com/misc/sounds/bell-ringing-03.wav',
        'paula': 'https://www.soundjay.com/misc/sounds/bell-ringing-02.wav',
        'sophia': 'https://www.soundjay.com/misc/sounds/bell-ringing-01.wav',
        'pedro': 'https://www.soundjay.com/misc/sounds/bell-ringing-06.wav',
        'julia': 'https://www.soundjay.com/misc/sounds/bell-ringing-07.wav',
        'thiago': 'https://www.soundjay.com/misc/sounds/bell-ringing-08.wav',
        'tirza': 'https://www.soundjay.com/misc/sounds/bell-ringing-09.wav'
    };

    constructor() {
        this.initializeGlobalMusic();
        this.initializeSoundEffects();
    }

    private initializeGlobalMusic() {
        // Música de fundo global (Happy Birthday instrumental)
        this.globalAudio = new Audio();
        this.globalAudio.src = 'https://www.soundjay.com/misc/sounds/happy-birthday-song.mp3';
        this.globalAudio.loop = true;
        this.globalAudio.volume = 0.3;
    }

    private initializeSoundEffects() {
        // Efeitos sonoros para interações
        const effects = {
            'click': 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
            'hover': 'https://www.soundjay.com/misc/sounds/bell-ringing-04.wav',
            'success': 'https://www.soundjay.com/misc/sounds/bell-ringing-03.wav',
            'celebration': 'https://www.soundjay.com/misc/sounds/bell-ringing-02.wav',
            'photo-click': 'https://www.soundjay.com/misc/sounds/bell-ringing-01.wav',
            'navigation': 'https://www.soundjay.com/misc/sounds/bell-ringing-06.wav'
        };

        Object.keys(effects).forEach(key => {
            this.soundEffects[key] = new Audio(effects[key as keyof typeof effects]);
            this.soundEffects[key].volume = 0.4;
        });
    }

    // Música global
    playGlobalMusic(): void {
        // Music functionality disabled
    }

    pauseGlobalMusic(): void {
        // Music functionality disabled
    }

    toggleGlobalMusic(): void {
        // Music functionality disabled
    }

    // Música de fundo por amigo
    playFriendBackgroundMusic(friendId: string): void {
        // Friend background music functionality disabled
    }

    stopCurrentBackgroundMusic(): void {
        // Background music functionality disabled
    }

    // Efeitos sonoros
    playSound(soundType: 'click' | 'hover' | 'success' | 'celebration' | 'photo-click' | 'navigation'): void {
        // Sound effects removed as requested
    }

    // Cleanup
    cleanup(): void {
        this.pauseGlobalMusic();
        this.stopCurrentBackgroundMusic();
    }
}