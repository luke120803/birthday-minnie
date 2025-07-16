import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Friend, GalleryImage } from '../interfaces/friend.interface';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private friends: Friend[] = [
        {
            id: 'lokkas',
            name: 'Lokkas',
            photo: 'assets/images/foto.lucas.jpeg',
            message: 'Minnie, você é uma das pessoas mais especiais que conheço! Que seu aniversário seja repleto de alegria e realizações. Parabéns, querida! 🎉',
            backgroundColor: '#FFE4E1',
            textColor: '#8B4513'
        },
        {
            id: 'moih',
            name: 'Moih',
            photo: 'assets/images/foto.moih.jpeg',
            message: 'Feliz aniversário, Minnie! Sua amizade é um presente em nossas vidas. Que este novo ano seja cheio de aventuras maravilhosas! 🌟',
            backgroundColor: '#E6E6FA',
            textColor: '#4B0082'
        },
        {
            id: 'nicole',
            name: 'Nicole',
            photo: 'assets/images/foto.nicole.jpeg',
            message: 'Querida Minnie, você ilumina todos os ambientes com sua presença! Desejo que seu aniversário seja tão especial quanto você é para nós! 💕',
            backgroundColor: '#F0F8FF',
            textColor: '#191970'
        },
        {
            id: 'paula',
            name: 'Paula',
            photo: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
            message: 'Parabéns, Minnie! Sua energia positiva contagia a todos. Que este novo ciclo seja repleto de conquistas e felicidade! 🎂',
            backgroundColor: '#FFF8DC',
            textColor: '#B8860B'
        },
        {
            id: 'sophia',
            name: 'Sophia',
            photo: 'https://images.pexels.com/photos/1548772/pexels-photo-1548772.jpeg?auto=compress&cs=tinysrgb&w=400',
            message: 'Minnie, você é sinônimo de alegria e bondade! Que seu aniversário seja o início de um ano incrível cheio de bênçãos! 🌸',
            backgroundColor: '#F5F5DC',
            textColor: '#8B4513'
        },
        {
            id: 'pedro',
            name: 'Pedro',
            photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
            message: 'Feliz aniversário, Minnie! Sua amizade é valiosa e sua presença sempre traz sorrisos. Parabéns por mais um ano de vida! 🎊',
            backgroundColor: '#E0FFFF',
            textColor: '#008B8B'
        },
        {
            id: 'julia',
            name: 'Julia',
            photo: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400',
            message: 'Querida Minnie, você é uma pessoa única e especial! Que seu aniversário seja repleto de momentos mágicos e muita felicidade! ✨',
            backgroundColor: '#FFF0F5',
            textColor: '#C71585'
        },
        {
            id: 'thiago',
            name: 'Thiago',
            photo: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
            message: 'Parabéns, Minnie! Sua personalidade carismática faz toda a diferença. Desejo que este ano seja cheio de realizações pessoais! 🎈',
            backgroundColor: '#F0FFFF',
            textColor: '#2F4F4F'
        },
        {
            id: 'tirza',
            name: 'Tirza',
            photo: 'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=400',
            message: 'Minnie, você é uma inspiração para todos nós! Que seu aniversário seja o início de novos sonhos realizados. Parabéns! 🌺',
            backgroundColor: '#FFFACD',
            textColor: '#8B4513'
        }
    ];

    private galleryImages: GalleryImage[] = [
        {
            id: '1',
            url: 'assets/images/foto.lucas.jpeg',
            alt: 'Lucas - Foto pessoal',
            caption: 'Lucas em um momento especial',
            friendId: 'lokkas',
            friendName: 'Lokkas'
        },
        {
            id: '2',
            url: 'assets/images/foto.moih.jpeg',
            alt: 'Moih - Foto pessoal',
            caption: 'Moih em um momento descontraído',
            friendId: 'moih',
            friendName: 'Moih'
        },
        {
            id: '3',
            url: 'assets/images/foto.nicole.jpeg',
            alt: 'Nicole - Foto pessoal',
            caption: 'Nicole sorrindo',
            friendId: 'nicole',
            friendName: 'Nicole'
        },
        {
            id: '4',
            url: 'assets/images/foto.nicole2.jpeg',
            alt: 'Nicole - Segunda foto pessoal',
            caption: 'Nicole em outro momento especial',
            friendId: 'nicole',
            friendName: 'Nicole'
        },
        {
            id: '5',
            url: 'assets/images/foto.home.jpeg',
            alt: 'Foto especial da casa/família',
            caption: 'Momento especial em casa',
            friendId: 'lokkas',
            friendName: 'Lokkas'
        },
        {
            id: '6',
            url: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Paula - Energia positiva',
            caption: 'Paula irradiando energia positiva',
            friendId: 'paula',
            friendName: 'Paula'
        },
        {
            id: '7',
            url: 'https://images.pexels.com/photos/1548772/pexels-photo-1548772.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Sophia - Elegância natural',
            caption: 'Sophia com sua elegância natural',
            friendId: 'sophia',
            friendName: 'Sophia'
        },
        {
            id: '8',
            url: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Pedro - Carisma único',
            caption: 'Pedro com seu carisma único',
            friendId: 'pedro',
            friendName: 'Pedro'
        },
        {
            id: '9',
            url: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Julia - Personalidade marcante',
            caption: 'Julia com sua personalidade marcante',
            friendId: 'julia',
            friendName: 'Julia'
        },
        {
            id: '10',
            url: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Thiago - Momento divertido',
            caption: 'Thiago em um momento divertido',
            friendId: 'thiago',
            friendName: 'Thiago'
        },
        {
            id: '11',
            url: 'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Tirza - Inspiração constante',
            caption: 'Tirza sendo uma inspiração',
            friendId: 'tirza',
            friendName: 'Tirza'
        },
        {
            id: '12',
            url: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Lokkas - Celebração especial',
            caption: 'Lokkas em uma celebração especial',
            friendId: 'lokkas',
            friendName: 'Lokkas'
        },
        {
            id: '13',
            url: 'https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Moih - Momento de felicidade',
            caption: 'Moih em um momento de pura felicidade',
            friendId: 'moih',
            friendName: 'Moih'
        },
        {
            id: '14',
            url: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Nicole - Espontaneidade',
            caption: 'Nicole sendo espontânea como sempre',
            friendId: 'nicole',
            friendName: 'Nicole'
        }
    ];

    getFriends(): Observable<Friend[]> {
        return of(this.friends);
    }

    getFriendById(id: string): Observable<Friend | undefined> {
        return of(this.friends.find(friend => friend.id === id));
    }

    getGalleryImages(): Observable<GalleryImage[]> {
        return of(this.galleryImages);
    }
}