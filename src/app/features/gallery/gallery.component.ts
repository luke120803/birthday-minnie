import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataService} from '../../shared/services/data.service';
import {Friend, GalleryImage} from '../../shared/interfaces/friend.interface';

/**
 * Interface para organizar galeria por amigo
 */
interface FriendGallery {
    friend: Friend;
    images: GalleryImage[];
}

/**
 * Componente da galeria de fotos
 * Exibe fotos organizadas por amigos com funcionalidade de lightbox
 */
@Component({
    selector: 'app-gallery',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
    // Propriedades da galeria
    allImages: GalleryImage[] = [];
    filteredImages: GalleryImage[] = [];
    friendGalleries: FriendGallery[] = [];

    // Propriedades para o swipe no lightbox
    touchStartX = 0;
    touchEndX = 0;

    // Propriedades do lightbox
    selectedImageIndex: number | null = null;

    selectedFriendId = 'all';

    public slideDirection: 'left' | 'right' | null = null;


    constructor(
        private dataService: DataService,
    ) {
    }

    ngOnInit(): void {
        this.loadData();
    }

    ngOnDestroy(): void {

    }

    /**
     * Carrega dados da galeria
     */
    private loadData(): void {
        this.dataService.getGalleryImages().subscribe(images => {
            this.allImages = images;
            this.filteredImages = images;
            this.organizeFriendGalleries();
        });
    }

    /**
     * Organiza imagens por amigo
     */
    private organizeFriendGalleries(): void {
        this.dataService.getFriends().subscribe(friends => {
            this.friendGalleries = friends.map(friend => ({
                friend,
                images: this.allImages.filter(image => image.friendId === friend.id)
            })).filter(fg => fg.images.length > 0);
        });
    }

    /**
     * Filtra imagens por amigo
     * @param friendId ID do amigo ou 'all' para todos
     */
    filterByFriend(friendId: string): void {
        this.selectedFriendId = friendId;

        if (friendId === 'all') {
            this.filteredImages = this.allImages;
        } else {
            this.filteredImages = this.allImages.filter(image => image.friendId === friendId);
        }
    }

    /**
     * Abre lightbox com imagem selecionada
     * @param index Índice da imagem
     */
    openLightbox(index: number): void {
        this.selectedImageIndex = index;
        document.body.style.overflow = 'hidden';
    }

    /**
     * Fecha lightbox
     */
    closeLightbox(): void {
        this.selectedImageIndex = null;
        document.body.style.overflow = 'auto';
    }

    /**
     * Navega para próxima imagem no lightbox
     */
    nextImage(): void {
        if (this.selectedImageIndex !== null && this.selectedImageIndex < this.allImages.length - 1) {
            this.slideDirection = 'left';
            setTimeout(() => {

                if (this.selectedImageIndex !== null) {
                    this.selectedImageIndex++;
                }
                this.slideDirection = null;
            }, 300);
        }
    }

    /**
     * Navega para a imagem anterior no lightbox
     */
    previousImage(): void {
        if (this.selectedImageIndex !== null && this.selectedImageIndex > 0) {
            this.slideDirection = 'right';
            setTimeout(() => {
                if (this.selectedImageIndex !== null) {
                    this.selectedImageIndex--;
                }
                this.slideDirection = null;
            }, 300);
        }
    }

    /**
     * Obtém índice da imagem no array geral
     * @param imageId ID da imagem
     * @returns Índice da imagem
     */
    getImageIndex(imageId: string): number {
        return this.allImages.findIndex(img => img.id === imageId);
    }

    /**
     * Captura a posição inicial do toque na tela.
     * @param event Evento de toque
     */
    handleTouchStart(event: TouchEvent): void {
        this.touchStartX = event.changedTouches[0].screenX;
    }

    /**
     * Captura a posição final do toque e decide a ação.
     * @param event Evento de toque
     */
    handleTouchEnd(event: TouchEvent): void {
        this.touchEndX = event.changedTouches[0].screenX;
        this.handleSwipeGesture();
    }

    /**
     * Verifica a direção do swipe e navega para a imagem correspondente.
     */
    handleSwipeGesture(): void {
        const swipeThreshold = 50; // Mínimo de pixels para considerar um swipe

        // Swipe para a esquerda (próxima imagem)
        if (this.touchEndX < this.touchStartX - swipeThreshold) {
            this.nextImage();
        }

        // Swipe para a direita (imagem anterior)
        if (this.touchEndX > this.touchStartX + swipeThreshold) {
            this.previousImage();
        }
    }
}