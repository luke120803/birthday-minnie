import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../shared/services/data.service';
import { Friend } from '../../shared/interfaces/friend.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  friends: Friend[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getFriends().subscribe(friends => {
      this.friends = friends;
    });
  }

  /**
   * Cria uma prévia da mensagem mais recente de um amigo.
   * @param messages O array de mensagens do amigo.
   * @returns Uma string curta como prévia.
   */
  getPreviewMessage(messages: { year: number; text: string }[]): string {
    if (!messages || messages.length === 0) {
      return 'Nenhuma mensagem encontrada.';
    }

    const latestMessage = messages.sort((a, b) => b.year - a.year)[0];

    const previewLength = 50;
    if (latestMessage.text.length <= previewLength) {
      return latestMessage.text;
    }

    return latestMessage.text.substring(0, previewLength) + '...';
  }
}