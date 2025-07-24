import { Component, OnInit, OnDestroy } from '@angular/core'; // Adicione OnDestroy
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
// Implemente OnDestroy para limpar o intervalo quando o componente for destruído
export class HomeComponent implements OnInit, OnDestroy {
  friends: Friend[] = [];

  // --- INÍCIO DAS NOVAS PROPRIEDADES PARA O CARROSSEL ---
  heroImages: string[] = [
    'assets/images/minnie/foto.minnie.jpeg',
    'assets/images/minnie/minnie-gatinha.jpeg',
    'assets/images/minnie/minnie02.jpeg',
    'assets/images/minnie/minnie03.jpeg',
    'assets/images/minnie/minnie04.jpeg',
  ];
  currentImageIndex = 0;
  private intervalId: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getFriends().subscribe(friends => {
      this.friends = friends;
    });

    this.startImageCarousel();
  }


  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  /**
   * Inicia a troca automática de imagens a cada 4 segundos.
   */
  private startImageCarousel(): void {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.heroImages.length;
    }, 4000); // Muda de imagem a cada 4 segundos (4000 ms)
  }

  /**
   * Cria uma prévia da mensagem mais recente de um amigo.
   * (Esta função continua igual)
   */
  getPreviewMessage(messages: { year: number; text: string }[]): string {
    // ... sua lógica existente aqui ...
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