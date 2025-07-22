import {Component, OnInit, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataService} from '../../shared/services/data.service';
import {AudioService} from '../../shared/services/audio.service';
import {GalleryImage, Friend} from '../../shared/interfaces/friend.interface';

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
export class GalleryComponent implements OnInit, OnDestroy {
    // Propriedades da galeria
    allImages: GalleryImage[] = [];
    filteredImages: GalleryImage[] = [];
    friendGalleries: FriendGallery[] = [];

    // Propriedades do lightbox
    selectedImageIndex: number | null = null;

    // Propriedades de filtro
    selectedFriendId: string = 'all';

    constructor(
        private dataService: DataService,
        private audioService: AudioService
    ) {
    }

    ngOnInit(): void {
        this.loadData();
    }

    ngOnDestroy(): void {
        this.audioService.stopCurrentBackgroundMusic();
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
            this.selectedImageIndex++;
        }
    }

    /**
     * Navega para imagem anterior no lightbox
     */
    previousImage(): void {
        if (this.selectedImageIndex !== null && this.selectedImageIndex > 0) {
            this.selectedImageIndex--;
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
}