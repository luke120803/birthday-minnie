import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService } from '../../shared/services/data.service';
import { AudioService } from '../../shared/services/audio.service';
import { Friend } from '../../shared/interfaces/friend.interface';

/**
 * Componente de tributo individual para cada amigo
 * Exibe mensagem personalizada e navegação entre amigos
 */
@Component({
  selector: 'app-friend-tribute',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './friend-tribute.component.html',
  styleUrls: ['./friend-tribute.component.scss']
})
export class FriendTributeComponent implements OnInit, OnDestroy {
  // Amigo atual
  friend: Friend | undefined;

  // Lista de todos os amigos para navegação
  allFriends: Friend[] = [];

  // IDs para navegação
  previousFriendId: string | null = null;
  nextFriendId: string | null = null;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private dataService: DataService,
      private audioService: AudioService
  ) {}

  ngOnInit(): void {
    this.dataService.getFriends().subscribe(friends => {
      this.allFriends = friends;
      this.loadFriend();
    });
  }

  ngOnDestroy(): void {
    this.audioService.stopCurrentBackgroundMusic();
  }

  /**
   * Carrega dados do amigo baseado no ID da rota
   */
  private loadFriend(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dataService.getFriendById(id).subscribe(friend => {
        this.friend = friend;
        this.setNavigationIds(id);
      });
    }
  }

  /**
   * Define IDs para navegação anterior e próxima
   * @param currentId ID do amigo atual
   */
  private setNavigationIds(currentId: string): void {
    const currentIndex = this.allFriends.findIndex(f => f.id === currentId);
    if (currentIndex !== -1) {
      this.previousFriendId = currentIndex > 0 ? this.allFriends[currentIndex - 1].id : null;
      this.nextFriendId = currentIndex < this.allFriends.length - 1 ? this.allFriends[currentIndex + 1].id : null;
    }
  }

  /**
   * Navega de volta para a página inicial
   */
  goBack(): void {
    this.router.navigate(['/']);
  }

  /**
   * Navega para o amigo anterior
   */
  previousFriend(): void {
    if (this.previousFriendId) {
      this.router.navigate(['/friends', this.previousFriendId]);
    }
  }

  /**
   * Navega para o próximo amigo
   */
  nextFriend(): void {
    if (this.nextFriendId) {
      this.router.navigate(['/friends', this.nextFriendId]);
    }
  }

  /**
   * Obtém nome do amigo anterior
   * @returns Nome do amigo anterior
   */
  getPreviousFriendName(): string {
    if (this.previousFriendId) {
      const friend = this.allFriends.find(f => f.id === this.previousFriendId);
      return friend ? friend.name : '';
    }
    return '';
  }

  /**
   * Obtém nome do próximo amigo
   * @returns Nome do próximo amigo
   */
  getNextFriendName(): string {
    if (this.nextFriendId) {
      const friend = this.allFriends.find(f => f.id === this.nextFriendId);
      return friend ? friend.name : '';
    }
    return '';
  }
}