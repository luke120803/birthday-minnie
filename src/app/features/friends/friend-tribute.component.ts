import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {DataService} from '../../shared/services/data.service';
import {Friend, MessageHistory} from '../../shared/interfaces/friend.interface';

/**
 * Componente de tributo individual para cada amigo
 * Exibe mensagem personalizada e navegação entre amigos
 */
@Component({
    selector: 'app-friend-tribute',
    standalone: true,
    imports: [CommonModule, RouterModule, NgOptimizedImage],
    templateUrl: './friend-tribute.component.html',
    styleUrls: ['./friend-tribute.component.scss']
})
export class FriendTributeComponent implements OnInit, OnDestroy {
    private dataService = inject(DataService);
    private route = inject(ActivatedRoute);
    private router = inject(Router);

    friend: Friend | undefined;
    allFriends: Friend[] = [];

    messages: MessageHistory[] = [];
    year: number = new Date().getFullYear();
    availableYears: number[] = [];

    previousFriendId: string | null = null;
    nextFriendId: string | null = null;

    currentChibiImage: string | undefined;

    constructor() {
    }

    ngOnInit(): void {
        this.dataService.getFriends().subscribe(friends => {
            this.allFriends = friends;
            this.route.paramMap.subscribe(() => {
                this.loadFriend();
            });
        });
    }

    ngOnDestroy(): void {
    }

    private loadFriend(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.dataService.getFriendById(id).subscribe(friend => {
                this.friend = friend;
                if (this.friend) {
                    this.currentChibiImage = this.friend.chibiImage;
                    this.availableYears = [...new Set(this.friend.messages
                        .filter(m => m.text && m.text.trim() !== '')
                        .map(m => m.year))]
                        .sort((a, b) => a - b);

                    if (this.availableYears.length > 0) {
                        this.year = this.availableYears[this.availableYears.length - 1];
                    }

                    this.setNavigationIds(id);
                    this.loadMessages();
                }
            });
        }
    }

    private loadMessages(): void {
        if (this.friend) {
            this.dataService.getMessagesByYear(this.friend.id, this.year).subscribe(messages => {
                this.messages = messages;
            });
        }
    }

    private setNavigationIds(currentId: string): void {
        const currentIndex = this.allFriends.findIndex(f => f.id === currentId);
        if (currentIndex !== -1) {
            this.previousFriendId = currentIndex > 0 ? this.allFriends[currentIndex - 1].id : null;
            this.nextFriendId = currentIndex < this.allFriends.length - 1 ? this.allFriends[currentIndex + 1].id : null;
        }
    }

    /**
     * Altera o ano e recarrega as mensagens.
     * @param year O novo ano selecionado.
     */
    changeYear(year: number): void {
        this.year = year;
        this.loadMessages();
    }

    goBack(): void {
        this.router.navigate(['/']);
    }

    previousFriend(): void {
        if (this.previousFriendId) {
            this.router.navigate(['/friends', this.previousFriendId]);
        }
    }

    nextFriend(): void {
        if (this.nextFriendId) {
            this.router.navigate(['/friends', this.nextFriendId]);
        }
    }

    getPreviousFriendName(): string {
        if (this.previousFriendId) {
            const friend = this.allFriends.find(f => f.id === this.previousFriendId);
            return friend ? friend.name : '';
        }
        return '';
    }

    getNextFriendName(): string {
        if (this.nextFriendId) {
            const friend = this.allFriends.find(f => f.id === this.nextFriendId);
            return friend ? friend.name : '';
        }
        return '';
    }

}