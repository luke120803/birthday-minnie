import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Friend, GalleryImage, MessageHistory} from '../interfaces/friend.interface';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private friends: Friend[] = [
        {
            id: 'lokkas',
            name: 'Lokkas',
            photo: 'assets/images/foto.lucas.jpeg',
            messages: [
                {
                    year: 2024,
                    text:'Olá senhorita vem sempre aqui?🧐\n' +
                        'Um tal de Lokkas tinha me falado q era seu aniversário, meus parabéns que Deus abençoe a sua vida com muita saúde paz e que você venha continuar estreitando o seu relacionamento com o papai do céu. Ele me disse também que você é muito fofa, é uma pessoa talentosa, gentil, uma ótima dançarina e que é muito divertida também (só não mais doq ele obviamente 😝kk).\n' +
                        'Brincadeiras a parte Minnie eu queria lhe dizer que você é uma pessoa incrível, é sempre bom estar perto de você, sinto que sempre quando estou perto de vc fico bem humorado talvez seja porque eu posso te irritar hehe aliás desculpe por isso nem sempre lhe irrito de propósito as vzs é involuntário prometo parar com isso no dia 30 de fevereiro ok? ✋️😎\n' +
                        'Confesso que a sua amizade foi uma surpresa, mas aquelas surpresas boas que vem no momento certo, saiba que eu tenho um grande carinho por você, os momentos com você são sempre marcantes e especiais, agradeço a Deus pela sua vida e pela sua amizade.\n' +
                        'Feliz aniversário princesa 😁\n' +
                        '"O Lokkas tá?"\n' +
                        '"Tô não ✋️😎!"'
                },
                {
                    year: 2025,
                    text: 'Minnie, você é uma das pessoas mais especiais que conheço! Que seu aniversário seja repleto de alegria e realizações. Parabéns, querida! 🎉'
                }
            ],
            backgroundColor: '#FFE4E1',
            textColor: '#8B4513',
            chibiImage: 'assets/images/minnie-chibi-love.png'

        },
        {
            id: 'moih',
            name: 'Moih',
            photo: 'assets/images/foto.moih.jpeg',
            messages: [
                {year: 2024, text: 'Parabéns pelo seu dia no ano passado! Sempre bom celebrar você.'},
                {
                    year: 2025,
                    text: 'Feliz aniversário, Minnie! Sua amizade é um presente em nossas vidas. Que este novo ano seja cheio de aventuras maravilhosas! 🌟'
                }
            ],
            backgroundColor: '#E6E6FA',
            textColor: '#4B0082',
            chibiImage: 'assets/images/minnie-chibi-happy.png'

        },
        {
            id: 'nicole',
            name: 'Nicole',
            photo: 'assets/images/foto.nicole.jpeg',
            messages: [
                {year: 2024, text: 'Lembrando do seu brilho no ano passado. Feliz aniversário de novo!'},
                {
                    year: 2025,
                    text: 'Querida Minnie, você ilumina todos os ambientes com sua presença! Desejo que seu aniversário seja tão especial quanto você é para nós! 💕'
                }
            ],
            backgroundColor: '#F0F8FF',
            textColor: '#191970',
            chibiImage: 'assets/images/minnie-chibi-excited.png'

        },
        {
            id: 'paula',
            name: 'Paula',
            photo: 'assets/images/foto.paula.jpeg',
            messages: [
                {year: 2024, text: 'Sua energia contagiante marcou o ano passado. Parabéns!'},
                {
                    year: 2025,
                    text: 'Parabéns, Minnie! Sua energia positiva contagia a todos. Que este novo ciclo seja repleto de conquistas e felicidade! 🎂'
                }
            ],
            backgroundColor: '#FFF8DC',
            textColor: '#B8860B',
            chibiImage: 'assets/images/minnie-chibi-excited.png'

        },
        {
            id: 'sophia',
            name: 'Sophia',
            photo: 'assets/images/foto.sophia.jpeg',
            messages: [
                {year: 2024, text: 'Mais um ano celebrando sua alegria e bondade. Parabéns, Minnie!'},
                {
                    year: 2025,
                    text: 'Minnie, você é sinônimo de alegria e bondade! Que seu aniversário seja o início de um ano incrível cheio de bênçãos! 🌸'
                }
            ],
            backgroundColor: '#F5F5DC',
            textColor: '#8B4513',
            chibiImage: 'assets/images/minnie-chibi-excited.png'

        },
        {
            id: 'pedro',
            name: 'Pedro',
            photo: 'assets/images/foto.pedro.jpeg',
            messages: [
                {
                    year: 2024,
                    text: 'Feliz aniversário! Que a celebração do ano passado se repita com ainda mais alegria.'
                },
                {
                    year: 2025,
                    text: 'Feliz aniversário, Minnie! Sua amizade é valiosa e sua presença sempre traz sorrisos. Parabéns por mais um ano de vida! 🎊'
                }
            ],
            backgroundColor: '#E0FFFF',
            textColor: '#008B8B',
            chibiImage: 'assets/images/minnie-chibi-excited.png'

        },
        {
            id: 'julia',
            name: 'Julia',
            photo: 'assets/images/foto.julia.jpeg',
            messages: [
                {year: 2024, text: 'Celebrando a pessoa única que você é, hoje e sempre. Parabéns!'},
                {
                    year: 2025,
                    text: 'Querida Minnie, você é uma pessoa única e especial! Que seu aniversário seja repleto de momentos mágicos e muita felicidade! ✨'
                }
            ],
            backgroundColor: '#FFF0F5',
            textColor: '#C71585',
            chibiImage: 'assets/images/minnie-chibi-excited.png'

        },
        {
            id: 'thiago',
            name: 'Thiago',
            photo: 'assets/images/foto.thiago.jpeg',
            messages: [
                {year: 2024, text: 'Seu carisma fez a diferença no ano passado e continua fazendo. Parabéns!'},
                {
                    year: 2025,
                    text: 'Parabéns, Minnie! Sua personalidade carismática faz toda a diferença. Desejo que este ano seja cheio de realizações pessoais! 🎈'
                }
            ],
            backgroundColor: '#F0FFFF',
            textColor: '#2F4F4F',
            chibiImage: 'assets/images/minnie-chibi-excited.png'

        },
        {
            id: 'tirza',
            name: 'Tirza',
            photo: 'assets/images/foto.tirza.jpeg',
            messages: [
                {year: 2024, text: 'Uma inspiração no ano que passou e sempre. Feliz aniversário!'},
                {
                    year: 2025,
                    text: 'Minnie, você é uma inspiração para todos nós! Que seu aniversário seja o início de novos sonhos realizados. Parabéns! 🌺'
                }
            ],
            backgroundColor: '#FFFACD',
            textColor: '#8B4513',
            chibiImage: 'assets/images/minnie-chibi-excited.png'

        },
        {
            id: 'Luiza',
            name: 'Ana Luiza',
            photo: '',
            messages: [
                {year: 2024, text: ''},
                {
                    year: 2025,
                    text: 'Parabéns, Minnie! Sua personalidade carismática faz toda a diferença. Desejo que este ano seja cheio de realizações pessoais! 🎈'
                }
            ],
            backgroundColor: '#F0FFFF',
            textColor: '#2F4F4F',
            chibiImage: 'assets/images/minnie-chibi-excited.png'
        },
    ];

    private galleryImages: GalleryImage[] = [
        {
            id: '1',
            url: 'assets/images/foto.lucas02.jpeg',
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
            url: 'assets/images/foto.paula.jpeg',
            alt: 'Paula - Energia positiva',
            caption: 'Paula irradiando energia positiva',
            friendId: 'paula',
            friendName: 'Paula'
        },
        {
            id: '6',
            url: 'assets/images/foto.sophia.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Sophia - Elegância natural',
            caption: 'Sophia com sua elegância natural',
            friendId: 'sophia',
            friendName: 'Sophia'
        },
        {
            id: '7',
            url: 'assets/images/foto.pedro.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Pedro - Carisma único',
            caption: 'Pedro com seu carisma único',
            friendId: 'pedro',
            friendName: 'Pedro'
        },
        {
            id: '8',
            url: 'assets/images/foto.julia.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Julia - Personalidade marcante',
            caption: 'Julia com sua personalidade marcante',
            friendId: 'julia',
            friendName: 'Julia'
        },
        {
            id: '9',
            url: 'assets/images/foto.thiago.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Thiago - Momento divertido',
            caption: 'Thiago em um momento divertido',
            friendId: 'thiago',
            friendName: 'Thiago'
        },
        {
            id: '10',
            url: 'assets/images/foto.tirza.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Tirza - Inspiração constante',
            caption: 'Tirza sendo uma inspiração',
            friendId: 'tirza',
            friendName: 'Tirza'
        },
        {
            id: '11',
            url: 'teste',
            alt: 'teste',
            caption: 'teste',
            friendId: 'luiza',
            friendName: 'Ana Luiza'
        },
    ];

    getFriends(): Observable<Friend[]> {
        const sortedFriends = this.friends.sort((a, b) => a.name.localeCompare(b.name));
        return of(sortedFriends);
    }

    getFriendById(id: string): Observable<Friend | undefined> {
        return of(this.friends.find(friend => friend.id === id));
    }

    getGalleryImages(): Observable<GalleryImage[]> {
        return of(this.galleryImages);
    }

    /**
     * Retorna as mensagens de um amigo para um ano específico.
     * @param friendId O ID do amigo.
     * @param year O ano desejado.
     * @returns Um Observable com um array de mensagens.
     */
    getMessagesByYear(friendId: string, year: number): Observable<MessageHistory[]> {
        const friend = this.friends.find(f => f.id === friendId);
        if (friend) {
            const messagesForYear = friend.messages.filter(message => message.year === year);
            return of(messagesForYear);
        }
        return of([]);
    }
}