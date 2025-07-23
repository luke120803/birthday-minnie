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
            photo: 'assets/images/lucas/foto.lucas07.jpeg',
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
                {year: 2024, text: 'Neste momento gostaria de agradecer pelo presente que tenho na oportunidade de acompanhar o seu crescimento! Que o nosso Papai do Céu lhe conceda uma crescente revelação de quem Ele é e quem você é nEle! Jesus lhe ama muitãozão e isso que lhe define. Que Cristo seja a âncora da sua esperança em dias tempestuosos Que Ele seja sua fonte de claras verdades quando as obscuras incertezas tentarem lhe cercar E que você nunca perca essa grande alegria que o Senhor colocou no seu coração, mas que só venha encontrar alegrias cada vez maiores! Feliz aniversário princesinha do Papai do céu! Ele te ama muito e eu também 😁'},
                {
                    year: 2025,
                    text: 'Feliz aniversário, Minnie! Sua amizade é um presente em nossas vidas. Que este novo ano seja cheio de aventuras maravilhosas! 🌟'
                }
            ],
            backgroundColor: '#E6E6FA',
            textColor: '#4B0082',
            chibiImage: 'assets/images/minnie-chibi-excited.png'

        },
        {
            id: 'nicole',
            name: 'Nicole',
            photo: 'assets/images/foto.nicole.jpeg',
            messages: [
                {year: 2024, text: 'Feliz aniversário Minnie! Tudo de bom hoje e sempre. Que você consiga realizar todos os seus doces sonhos. Que você continue sendo essa garota incrível, com um coração gigante. Você sabe que te amo muito, sou muito grata por ter você na minha vida. Obrigada por tudo, obrigada por ser quem você é. Cada pequeno momento com você é mais que especial. Você é muito especial. Conta comigo para absolutamente tudo. Te amo, aproveita bastante o seu dia. Que essa nova fase da sua vida seja cheia de felicidade e que o nosso Senhor continue guiando você para o caminho certo. Que a gente continue colecionando momentos incríveis juntas por muitos e muitos anos. Seja infinitamente feliz, amiga! Aqui você tem alguém pra contar pra vida inteira. Amo você, parceira de dança 🎀🩰'},
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
                {year: 2024, text: 'Feliz vida amiga! Obrigada por tudo sempre, por todos os momentos bons ao seu lado, você é uma das pessoas mais importantes na minha vida. Eu te amo Minnie 💕'},
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
                {year: 2024, text: 'Parabéns minnie, Que nesse dia mais que especial eu possa expressar todo o carinho e gratidão que sinto por ter você em minha vida. São tantos momentos incríveis que já vivemos juntas, tantas risadas compartilhadas. Que a vida continue nos presenteando com mais aventuras e que nossa amizade se fortaleça a cada dia. Te admiro muito e estou aqui para tudo que precisar. Feliz vida meu amorzinho!! 💞💗'},
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
                    text: 'De uma forma um tanto quanto aleatória, em uma volta de impacto, onde falamos sobre assuntos aleatórios os quais não são digno de serem ditos aqui (não os direi pq não lembro). Duas semanas dps foi seu aniversário de quinze anos e assim nossa amizade foi se desenvolvendo. Hoje você é um dos maiores obrigado\'s que direciono ao nosso Papai do céu. "Yasmim", nome o qual provém de um das mais belas flores (em minha opinião, só perde pra tulipa), fica ainda mais incrível em você, minha amiga! Com certeza sua amizade foi uma das mais belas que já ganhei. Neste dia, que você completa 16 primaveras (só de norte dance), lhe desejo as bençãos do Senhor sobre sua vida, que ele concretize todos os planos dele sobre sua vida! Que venham ainda mais risos e alegrias, ou até mesmo choros sem preciso for, ao seu lado. Te amo amiguinha, paraboins!\n' +
                        '(\\_/)\n' +
                        '(•.•)\n' +
                        '/>🎉'
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
                {year: 2024, text: 'Feliz vida minnie!!! Que o papai do céu derrame chuvas de bençãos sobre sua vida, você é uma menina maravilhosa, gentil, carismática, nunca deixe de ser assim! Agradeço a Deus por sua vida, e você faz parte da minha, você é uma luz (rosa) por onde passa, sua dança delicada encanta! Te amo muito Minnie, você é muito importante e especial pra mim, aprendo muito com você. Que essa data se repita por muitos anos, te amo menina das fitas 💕🦋'},
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
                {year: 2024, text: 'O que falar da Minnie? ❤\n' +
                        'Não há palavras suficientes para expressar o quanto de coisas boas você merece!\n' +
                        'Mas, para resumir, quero agradecer pela entrega que você tem feito pelo Rei, Reino e pela Noiva 🥺✊🏼\n' +
                        'Dentre os talentos que você possui, há certeza de que a dança é um diferencial. Por isso, continue investindo nessa arte para que você, cada vez mais, toque nas vidas das pessoas em cada movimento ✨\n' +
                        'Além disso, desejo que cada meta que você sonha seja real na sua história, e que cada página seja marcada por paz, serenidade, felicidade e plenitude.\n' +
                        'Parabéns, Minnie! 🥳\n' +
                        '/Thiago Amanço'},
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
                {year: 2024, text: 'Bom, eu acho que vc sabe o que eu falaria se fosse escrever um texto pra vc. Por isso quis começar assim meio diferentona. Eu vou mesmo tentar escrever o quanto vc é importante pra mim. Sem vc eu não teria conciliado nem conseguido fazer muitas coisas esse ano. Eu agradeço de vdd por vc ser uma auxiliar maravilhosa e uma amg melhor ainda. Obg por topar minhas loucuras, por se esforçar em tudo oq vc faz, por ser engraçada fofa e ser uma amiga fiel. Eu te amo demais Minnie e quero comemorar essa data com vc por mt mt tempo! Ser sua amiga e líder é um privilégio 💞💞💞💞💞 \n💕💕De uma Tirza para sua Minnie 💕💕'},
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
            id: 'luiza',
            name: 'Ana Luiza',
            photo: 'assets/images/foto.aninha.jpeg',
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
            url: 'assets/images/lucas/foto.lucas.jpeg',
            alt: 'Lucas - Foto pessoal',
            caption: 'Lucas em um momento especial',
            friendId: 'lokkas',
            friendName: 'Lokkas'
        },
        {
            id: '2',
            url: 'assets/images/lucas/foto.lucas02.jpeg',
            alt: 'Lucas - Foto pessoal',
            caption: 'Lucas em um momento especial',
            friendId: 'lokkas',
            friendName: 'Lokkas'
        },
        {
            id: '3',
            url: 'assets/images/lucas/foto.lucas02.jpeg',
            alt: 'Lucas - Foto pessoal',
            caption: 'Lucas em um momento especial',
            friendId: 'lokkas',
            friendName: 'Lokkas'
        },
        {
            id: '4',
            url: 'assets/images/lucas/foto.lucas02.jpeg',
            alt: 'Lucas - Foto pessoal',
            caption: 'Lucas em um momento especial',
            friendId: 'lokkas',
            friendName: 'Lokkas'
        },
        {
            id: '5',
            url: 'assets/images/lucas/foto.lucas02.jpeg',
            alt: 'Lucas - Foto pessoal',
            caption: 'Lucas em um momento especial',
            friendId: 'lokkas',
            friendName: 'Lokkas'
        },
        {
            id: '6',
            url: 'assets/images/lucas/foto.lucas02.jpeg',
            alt: 'Lucas - Foto pessoal',
            caption: 'Lucas em um momento especial',
            friendId: 'lokkas',
            friendName: 'Lokkas'
        },
        {
            id: '7',
            url: 'assets/images/lucas/foto.lucas02.jpeg',
            alt: 'Lucas - Foto pessoal',
            caption: 'Lucas em um momento especial',
            friendId: 'lokkas',
            friendName: 'Lokkas'
        },
        {
            id: '8',
            url: 'assets/images/foto.moih.jpeg',
            alt: 'Moih - Foto pessoal',
            caption: 'Moih em um momento descontraído',
            friendId: 'moih',
            friendName: 'Moih'
        },
        {
            id: '9',
            url: 'assets/images/foto.nicole.jpeg',
            alt: 'Nicole - Foto pessoal',
            caption: 'Nicole sorrindo',
            friendId: 'nicole',
            friendName: 'Nicole'
        },
        {
            id: '10',
            url: 'assets/images/foto.nicole2.jpeg',
            alt: 'Nicole - Segunda foto pessoal',
            caption: 'Nicole em outro momento especial',
            friendId: 'nicole',
            friendName: 'Nicole'
        },
        {
            id: '11',
            url: 'assets/images/foto.paula.jpeg',
            alt: 'Paula - Energia positiva',
            caption: 'Paula irradiando energia positiva',
            friendId: 'paula',
            friendName: 'Paula'
        },
        {
            id: '12',
            url: 'assets/images/foto.sophia.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Sophia - Elegância natural',
            caption: 'Sophia com sua elegância natural',
            friendId: 'sophia',
            friendName: 'Sophia'
        },
        {
            id: '13',
            url: 'assets/images/foto.pedro.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Pedro - Carisma único',
            caption: 'Pedro com seu carisma único',
            friendId: 'pedro',
            friendName: 'Pedro'
        },
        {
            id: '14',
            url: 'assets/images/foto.julia.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Julia - Personalidade marcante',
            caption: 'Julia com sua personalidade marcante',
            friendId: 'julia',
            friendName: 'Julia'
        },
        {
            id: '15',
            url: 'assets/images/foto.thiago.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Thiago - Momento divertido',
            caption: 'Thiago em um momento divertido',
            friendId: 'thiago',
            friendName: 'Thiago'
        },
        {
            id: '16',
            url: 'assets/images/foto.tirza.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Tirza - Inspiração constante',
            caption: 'Tirza sendo uma inspiração',
            friendId: 'tirza',
            friendName: 'Tirza'
        },
        {
            id: '17',
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