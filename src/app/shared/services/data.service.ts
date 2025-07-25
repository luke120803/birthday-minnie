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
                    text: 'Olá senhorita vem sempre aqui?🧐\n' +
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
        },
        {
            id: 'moih',
            name: 'Moih',
            photo: 'assets/images/foto.moih.jpeg',
            messages: [
                {
                    year: 2024,
                    text: 'Neste momento gostaria de agradecer pelo presente que tenho na oportunidade de acompanhar o seu crescimento! Que o nosso Papai do Céu lhe conceda uma crescente revelação de quem Ele é e quem você é nEle! Jesus lhe ama muitãozão e isso que lhe define. Que Cristo seja a âncora da sua esperança em dias tempestuosos Que Ele seja sua fonte de claras verdades quando as obscuras incertezas tentarem lhe cercar E que você nunca perca essa grande alegria que o Senhor colocou no seu coração, mas que só venha encontrar alegrias cada vez maiores! Feliz aniversário princesinha do Papai do céu! Ele te ama muito e eu também 😁'
                },
                {
                    year: 2025,
                    text: 'Feliz aniversário, Minnie!\n' +
                        'Passo aqui apenas para pedir ao Papai do céu que continue lhe transformando nesta filha que reflete o coração de Deus. \n' +
                        'Cada novo ano nos lembra os desafios que já se passaram e as dificuldades que foram enfrentadas, mas que em meio a tudo isso seus ouvidos se atendem a voz do Senhor, seus pés corram em Sua direção, suas mãos não soltem as mãos dEle e seu coração pertença apenas a Ele.\n' +
                        'Persevere, o Senhor enxerga cada esforço seu e a capacita para viver seu propósito...\n' +
                        'Papai do céu lhe abençoe hoje e sempre 🤍'
                }
            ],
            backgroundColor: '#E6E6FA',
            textColor: '#4B0082',
        },
        {
            id: 'nicole',
            name: 'Nicole',
            photo: 'assets/images/nicole/nicole03.jpeg',
            messages: [
                {
                    year: 2024,
                    text: 'Feliz aniversário Minnie! Tudo de bom hoje e sempre. Que você consiga realizar todos os seus doces sonhos. Que você continue sendo essa garota incrível, com um coração gigante. Você sabe que te amo muito, sou muito grata por ter você na minha vida. Obrigada por tudo, obrigada por ser quem você é. Cada pequeno momento com você é mais que especial. Você é muito especial. Conta comigo para absolutamente tudo. Te amo, aproveita bastante o seu dia. Que essa nova fase da sua vida seja cheia de felicidade e que o nosso Senhor continue guiando você para o caminho certo. Que a gente continue colecionando momentos incríveis juntas por muitos e muitos anos. Seja infinitamente feliz, amiga! Aqui você tem alguém pra contar pra vida inteira. Amo você, parceira de dança 🎀🩰'
                },
                {
                    year: 2025,
                    text: 'Feliz aniversário Minnie \n' +
                        'Que Deus abençoe sempre amiga, que vc continue sendo essa menina doce, meiga e simpática, vc é luz onde passa!\n' +
                        'amo vc e que a gente tenha mais anos e anos de amizade 🤍'
                }
            ],
            backgroundColor: '#F0F8FF',
            textColor: '#191970',
        },
        {
            id: 'sophia',
            name: 'Sophia',
            photo: 'assets/images/sophia/foto.sophia.jpeg',
            messages: [
                {
                    year: 2024,
                    text: 'Parabéns minnie, Que nesse dia mais que especial eu possa expressar todo o carinho e gratidão que sinto por ter você em minha vida. São tantos momentos incríveis que já vivemos juntas, tantas risadas compartilhadas. Que a vida continue nos presenteando com mais aventuras e que nossa amizade se fortaleça a cada dia. Te admiro muito e estou aqui para tudo que precisar. Feliz vida meu amorzinho!! 💞💗'
                },
                {
                    year: 2025,
                    text: 'Feliz aniversário Minnie!!!!\n' +
                        'Hoje eu agradeço a Deus pela sua vida,  sou muito grata por ter sua amizade.\n' +
                        'Que Jesus continue te abençoando, cuidando de cada detalhe e enchendo teu coração de paz, alegria e esperança. Que esse novo ano venha cheio da presença dEle!\n' +
                        'Te desejo tudo de mais lindo que vem do céu.\n' +
                        'Com carinho Soso 💖'
                }
            ],
            backgroundColor: '#F5F5DC',
            textColor: '#8B4513',
        },
        {
            id: 'pedro',
            name: 'Pedro',
            photo: 'assets/images/pedro/pedro.jpeg',
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
                    text: 'Em uma volta aleatória de impacto, essa garota doida, engraçada e incrível surgiu na minha vida e tornou-se a melhor amiga que poderia ter.\n' +
                        'Minnie, você é incrível! Uma pessoa extremamente incrível, engraçada nem tanto (eu sou mais), serva e cheia do Espírito Santo!\n' +
                        'Eu tenho a honra, em lembrar de muitas coisas boas na minha vida e vc estar presente: Impacto Kids (nós correndo da chuva), ensaios do musical, ensaios do Ndance (que vc me obriga a participar quando é facilitadora 🙄), enfim... Muitas coisas kakakkaa\n' +
                        'Meus parabéns, amiga! Obrigado pela honra de ser minha amiga, Minnie Brito. \n' +
                        'Que o Senhor te abençoe e faça ser consumado todos os planos dele na sua vida! \n' +
                        'Feliz niver, Minnie Brito! 🥳\n' +
                        '(\\_/)\n' +
                        '( •.•)\n' +
                        '/>🎉\n' +
                        'Ps: te falei que tínhamos uma foto sem ser tirada em evento da igreja ☝️😌'
                }
            ],
            backgroundColor: '#E0FFFF',
            textColor: '#008B8B',
        },
        {
            id: 'julia',
            name: 'Julia',
            photo: 'assets/images/juh/foto.julia02.jpeg',
            messages: [
                {
                    year: 2024,
                    text: 'Feliz vida minnie!!! Que o papai do céu derrame chuvas de bençãos sobre sua vida, você é uma menina maravilhosa, gentil, carismática, nunca deixe de ser assim! Agradeço a Deus por sua vida, e você faz parte da minha, você é uma luz (rosa) por onde passa, sua dança delicada encanta! Te amo muito Minnie, você é muito importante e especial pra mim, aprendo muito com você. Que essa data se repita por muitos anos, te amo menina das fitas 💕🦋'
                },
                {
                    year: 2025,
                    text: 'Feliz aniversário minnie! 🩰💓🪭\n' +
                        'Só tenho a agradecer pela a sua vida, uma menina tão especial e gentil que ilumina o ambiente por onde passa! Eu te admiro muito, principalmente o seu esforço. Que você conquiste todos os seus sonhos, e que sua leveza na dança encante mais e mais pessoas. Continue sendo essa bondade em pessoa, e inspiração para várias minis bailarinas 🥹💓. Deus te abençoe sempre, amo fazer parte da sua vida, te amo linda flor! 💓🪭'
                }
            ],
            backgroundColor: '#FFF0F5',
            textColor: '#C71585',
        },
        {
            id: 'thiago',
            name: 'Thiago',
            photo: 'assets/images/thiago/thiago.jpeg',
            messages: [
                {
                    year: 2024, text: 'O que falar da Minnie? ❤\n' +
                        'Não há palavras suficientes para expressar o quanto de coisas boas você merece!\n' +
                        'Mas, para resumir, quero agradecer pela entrega que você tem feito pelo Rei, Reino e pela Noiva 🥺✊🏼\n' +
                        'Dentre os talentos que você possui, há certeza de que a dança é um diferencial. Por isso, continue investindo nessa arte para que você, cada vez mais, toque nas vidas das pessoas em cada movimento ✨\n' +
                        'Além disso, desejo que cada meta que você sonha seja real na sua história, e que cada página seja marcada por paz, serenidade, felicidade e plenitude.\n' +
                        'Parabéns, Minnie! 🥳\n' +
                        '/Thiago Amanço'
                },
                {
                    year: 2025,
                    text: 'parabéns, Minnie 🩷\n' +
                        'hoje é dia de celebrar a sua vida! que honra caminhar contigo, ver sua entrega e amor em tudo que faz, especialmente quando dança para Deus com tanta leveza e verdade 🥺\n' +
                        'meu desejo é de que Ele continue te guiando e ampliando seus horizontes! você é resposta Dele pra muitos de nós. \n' +
                        'admiro você d++++! felicidades 🥳'
                }
            ],
            backgroundColor: '#F0FFFF',
            textColor: '#2F4F4F',

        },
        {
            id: 'tirza',
            name: 'Tirza',
            photo: 'assets/images/tirza/tirza.jpeg',
            messages: [
                {
                    year: 2024,
                    text: 'Bom, eu acho que vc sabe o que eu falaria se fosse escrever um texto pra vc. Por isso quis começar assim meio diferentona. Eu vou mesmo tentar escrever o quanto vc é importante pra mim. Sem vc eu não teria conciliado nem conseguido fazer muitas coisas esse ano. Eu agradeço de vdd por vc ser uma auxiliar maravilhosa e uma amg melhor ainda. Obg por topar minhas loucuras, por se esforçar em tudo oq vc faz, por ser engraçada fofa e ser uma amiga fiel. Eu te amo demais Minnie e quero comemorar essa data com vc por mt mt tempo! Ser sua amiga e líder é um privilégio 💞💞💞💞💞 \n💕💕De uma Tirza para sua Minnie 💕💕'
                },
                {
                    year: 2025,
                    text: 'Feliz aniversário Minnie! \n' +
                        'Como disse antes, agradeço a Deus por ter colocado pessoas como vc na minha vida. Seu jeito especial de ser, sua leveza e feminilidade me inspiram muito.\n' +
                        'Só queria que vc soubesse o quanto eu te amo e te admiro. Creio que Deus tem um propósito maravilhoso para você e que de alguma forma entrelaçou os nossos. Espero que continuemos juntas por muito muito tempo! \n' +
                        'Você sempre vai morar no meu coração! Te amo amg 💜 🦄✨'
                }
            ],
            backgroundColor: '#FFFACD',
            textColor: '#8B4513',

        },
        {
            id: 'analuiza', // ID CORRIGIDO E UNIFICADO
            name: 'Ana Luiza',
            photo: 'assets/images/analuiza/analu02.jpg',
            messages: [
                {
                    year: 2025,
                    text: 'FELIZ ANIVERSÁRIO para minha linda e incrível melhor amiga! 😘\n' +
                        'Espero que você tenha o melhor dia de todos, cheio de alegria, surpresas boas, abraços apertados e muito amor. Estou tão feliz que Deus trouxe você para a minha vida - você é como a irmã que eu nunca tive, mas que sempre sonhei em ter. 💖\n' +
                        'Você mudou a minha vida de uma forma que eu nunca imaginei. Com o seu jeito único, sua risada contagiante, seus conselhos sinceros e seu coração gigante, você trouxe luz para os meus dias mais escuros e fez os bons momentos se tornarem inesquecíveis.\n' +
                        'Obrigada por estar sempre ao meu lado, por me entender até no silêncio, por rir comigo até da coisa mais boba e por me apoiar mesmo quando eu mesma duvidava de mim. Você é um presente raro e precioso, daqueles que a gente tem que cuidar com muito carinho. 🎁\n' +
                        'Que neste novo ciclo você continue brilhando, conquistando seus sonhos, cercada por pessoas que te amam de verdade e sendo essa pessoa maravilhosa.\n' +
                        'Te amo demais e desejo do fundo do coração que seu aniversário seja tão especial quanto você é para mim. 💐💖'
                }
            ],
            backgroundColor: '#F0FFFF',
            textColor: '#2F4F4F',
        },
        {
            id: 'luiza', // ESTE AMIGO FOI UNIFICADO NO 'analuiza'
            name: 'Luiza', // MANTIDO PARA COMPATIBILIDADE, MAS SEM FOTOS ASSOCIADAS
            photo: 'assets/images/luiza/luiza.jpg',
            messages: [
                {
                    year: 2025,
                    text: 'Feliz aniversário Yasmim, saiba q eu amo muito vc, em pouco tempo vc se tornou uma das pessoas mais importantes da minha vida, me arrisco a dizer q quem tem sua amizade tem tudo, sempre companheira, inteligente, alegre, esforçada, , vc é um jóia q nenhuma outra se compara, q vc possa conquistar assim, q vc conquiste todos os seus objetivos, seus sonhos , q Deus possa abençoar sua vida acima de tudo, sempre estarei aq para quando precisar, sempre torcerei pelas suas vitórias, sempre estarei torcendo pelo seu melhor, se eu pudesse definir vc em uma palavra seria "** Carismática **", quero q nossa amizade possa seguir durante anos e anos das nossas vidas, foi uma dádiva conhecer vc, eu tenho vc no meu coração e para vida , amo vc e vou amar nossa amizade com todo respeito, carinho, me arrisco a dizer q vc e a Luiza são minhas almas gêmeas na amizade, tanto quando o Vitor tbm, amo vcs , qr q essa data, o dia do seu aniversário seja lembrado durante anos, e q possamos comemorar durante anos🤍'
                }
            ],
            backgroundColor: '#F0FFFF',
            textColor: '#2F4F4F',
        },
        {
            id: 'vihM',
            name: 'Vitória Machado',
            photo: 'assets/images/vihM/vihM.jpeg',
            messages: [
                {
                    year: 2025,
                    text: 'Feliz aniversário, Minniocas! ✨\n' +
                        'hoje eh um dia especial porque celebramos a sua vida, que é um presente para todos nós!  que Deus continue te abençoando grandemente, fortalecendo sua fé e guiando seus passos em cada detalhe. que essa nova fase seja cheia de paz, alegria, conquistas e muitos momentos na presença d’Ele. 💖\n' +
                        'Você eh muito querida e amada por todos nós! continue sendo essa pessoa especial, cheia de luz e propósito. 🌟\n' +
                        'parabéns, querida! que venha um ano incrível e cheio de bênçãos do céu!\n' +
                        'amo sua vida! 💕'
                }
            ],
            backgroundColor: '#F0FFFF',
            textColor: '#2F4F4F',
        },
        {
            id: 'vitoria',
            name: 'Vitória',
            photo: 'assets/images/vitoria/vih.jpg',
            messages: [
                {
                    year: 2025,
                    text: 'Minnieee, feliz 17 aninhoos meu amor! 🌸🎂\n' +
                        'Hoje o mundo comemora o nascimento de uma das almas mais doces, iluminadas e encantadoras que eu já conheci. Você é aquela amiga que parece um abraço em forma de gente acolhedora, engraçada, leal e simplesmente maravilhosa de dentro pra fora. 💕\n' +
                        'Sua luz é única, seu sorriso é um raio de sol nos dias nublados e sua presença tem o poder de transformar qualquer momento comum em algo inesquecível. Que os 17 anos venham recheados de amor, conquistas, sonhos realizados e muitas risadas daquelas que fazem a barriga doer! 😂💫. Obrigada por ser essa pessoa incrível que inspira quem tem a sorte de estar ao seu lado. Você merece o mundo, e eu vou estar aqui sempre torcendo pra que ele seja cada vez mais seu! Te amo demais, minha estrela brilhante! ✨💖🌍'
                }
            ],
            backgroundColor: '#FFF0F5',
            textColor: '#C71585',
        },
        {
            id: 'eduarda',
            name: 'Eduarda',
            photo: 'assets/images/eduarda.jpg',
            messages: [
                {
                    year: 2025,
                    text: 'HOJE É UM DIA REALMENTE ESPECIAL!!!!💗🥹 Estamos celebrando o aniversário da pessoa mais adorável e maravilhosa que existe! Parabéns Minie! Que você tenha muitos anos de vida repletos de saúde, paz, amor e felicidade. Que Deus te abençoe imensamente e ilumine todos os seus caminhos por onde você passar. 💗🥹\n' +
                        'Que você continue sendo essa pessoa incrível e amigável que todos nós admiramos. Mais uma vez, desejo que você tenha uma vida longa e que todos os seus sonhos e objetivos se tornem realidade. Feliz aniversário Minie!!🤩🥳💗 Aproveite seu dia com toda a alegria que você merece!!!🥳🎂🎁💞🩰💗'
                }
            ],
            backgroundColor: '#F0F8FF',
            textColor: '#191970',
        },
    ];

    private galleryImages: GalleryImage[] = [
        // --- ANA LUIZA ---
        {
            id: 'analuiza-1', type: 'image', url: 'assets/images/analuiza/analu.jpg',
            alt: 'Luiza - Elegância natural', caption: 'Memórias', friendId: 'analuiza', friendName: 'Ana Luiza'
        },
        {
            id: 'analuiza-2', type: 'image', url: 'assets/images/analuiza/analu02.jpg',
            alt: 'Luiza - Elegância natural', caption: 'Memórias', friendId: 'analuiza', friendName: 'Ana Luiza'
        },
        {
            id: 'analuiza-3', type: 'image', url: 'assets/images/analuiza/analu03.jpg',
            alt: 'Luiza - Elegância natural', caption: 'Memórias', friendId: 'analuiza', friendName: 'Ana Luiza'
        },
        {
            id: 'analuiza-4', type: 'image', url: 'assets/images/analuiza/analu04.jpg',
            alt: 'Luiza - Elegância natural', caption: 'Memórias', friendId: 'analuiza', friendName: 'Ana Luiza'
        },
        {
            id: 'analuiza-5', type: 'image', url: 'assets/images/analuiza/analu05.jpg',
            alt: 'Luiza - Elegância natural', caption: 'Memórias', friendId: 'analuiza', friendName: 'Ana Luiza'
        },
        {
            id: 'analuiza-6', type: 'image', url: 'assets/images/analuiza/analu06.jpg',
            alt: 'Luiza - Elegância natural', caption: 'Memórias', friendId: 'analuiza', friendName: 'Ana Luiza'
        },
        {
            id: 'analuiza-7', type: 'image', url: 'assets/images/analuiza/analu07.jpg',
            alt: 'Luiza - Elegância natural', caption: 'Memórias', friendId: 'analuiza', friendName: 'Ana Luiza'
        },
        // --- EDUARDA ---
        {
            id: 'eduarda-1', type: 'image', url: 'assets/images/eduarda.jpg',
            alt: 'Eduarda - Foto pessoal', caption: 'Memórias', friendId: 'eduarda', friendName: 'Eduarda'
        },
        // --- JULIA ---
        {
            id: 'julia-1', type: 'image', url: 'assets/images/juh/foto.julia.jpeg',
            alt: 'Julia - Personalidade marcante', caption: 'Memórias', friendId: 'julia', friendName: 'Julia'
        },
        {
            id: 'julia-2', type: 'image', url: 'assets/images/juh/foto.julia02.jpeg',
            alt: 'Julia - Personalidade marcante', caption: 'Memórias', friendId: 'julia', friendName: 'Julia'
        },
        {
            id: 'julia-v1', type: 'video', url: 'assets/videos/juh/juh.mp4',
            thumbnailUrl: 'assets/images/minnie/minnie-chibi-excited.png', alt: 'Memórias', caption: 'Memórias',
            friendId: 'julia', friendName: 'Julia'
        },
        // --- LOKKAS ---
        {
            id: 'lokkas-1', type: 'image', url: 'assets/images/lucas/foto.lucas02.jpeg',
            alt: 'Lucas - Foto pessoal', caption: 'Memórias', friendId: 'lokkas', friendName: 'Lokkas'
        },
        {
            id: 'lokkas-2', type: 'image', url: 'assets/images/lucas/foto.lucas03.jpeg',
            alt: 'Lucas - Foto pessoal', caption: 'Memórias', friendId: 'lokkas', friendName: 'Lokkas'
        },
        {
            id: 'lokkas-3', type: 'image', url: 'assets/images/lucas/foto.lucas04.jpeg',
            alt: 'Lucas - Foto pessoal', caption: 'Memórias', friendId: 'lokkas', friendName: 'Lokkas'
        },
        {
            id: 'lokkas-4', type: 'image', url: 'assets/images/lucas/foto.lucas05.jpeg',
            alt: 'Lucas - Foto pessoal', caption: 'Memórias', friendId: 'lokkas', friendName: 'Lokkas'
        },
        {
            id: 'lokkas-5', type: 'image', url: 'assets/images/lucas/foto.lucas06.jpeg',
            alt: 'Lucas - Foto pessoal', caption: 'Memórias', friendId: 'lokkas', friendName: 'Lokkas'
        },
        {
            id: 'lokkas-6', type: 'image', url: 'assets/images/lucas/foto.lucas07.jpeg',
            alt: 'Lucas - Foto pessoal', caption: 'Memórias', friendId: 'lokkas', friendName: 'Lokkas'
        },
        {
            id: 'lokkas-v1', type: 'video', url: 'assets/videos/minnie/minnie02.mp4',
            thumbnailUrl: 'assets/images/minnie/minnie-chibi-love.png', alt: 'Um vídeo especial da Minnie',
            caption: 'Memórias', friendId: 'lokkas', friendName: 'Lokkas'
        },
        {
            id: 'lokkas-v2', type: 'video', url: 'assets/videos/minnie/minnie.mp4',
            thumbnailUrl: 'assets/images/minnie/minnie-chibi-excited.png', alt: 'Um vídeo especial da Minnie',
            caption: 'Memórias', friendId: 'lokkas', friendName: 'Lokkas'
        },
        // --- MOIH ---
        {
            id: 'moih-1', type: 'image', url: 'assets/images/foto.moih.jpeg',
            alt: 'Moih - Foto pessoal', caption: 'Memórias', friendId: 'moih', friendName: 'Moih'
        },
        // --- NICOLE ---
        {
            id: 'nicole-1', type: 'image', url: 'assets/images/nicole/foto.nicole.jpeg',
            alt: 'Nicole - Foto pessoal', caption: 'Memórias', friendId: 'nicole', friendName: 'Nicole'
        },
        {
            id: 'nicole-2', type: 'image', url: 'assets/images/nicole/foto.nicole2.jpeg',
            alt: 'Nicole - Segunda foto pessoal', caption: 'Memórias', friendId: 'nicole', friendName: 'Nicole'
        },
        {
            id: 'nicole-3', type: 'image', url: 'assets/images/nicole/nicole03.jpeg',
            alt: 'Nicole - Terceira foto pessoal', caption: 'Memórias', friendId: 'nicole', friendName: 'Nicole'
        },
        // --- PEDRO ---
        {
            id: 'pedro-1', type: 'image', url: 'assets/images/pedro/pedro.jpeg',
            alt: 'Pedro - Carisma único', caption: 'Memórias', friendId: 'pedro', friendName: 'Pedro'
        },
        {
            id: 'pedro-2', type: 'image', url: 'assets/images/pedro/foto.pedro.jpeg',
            alt: 'Pedro - Carisma único', caption: 'Memórias', friendId: 'pedro', friendName: 'Pedro'
        },
        {
            id: 'pedro-3', type: 'image', url: 'assets/images/pedro/pedro02.jpeg',
            alt: 'Pedro - Carisma único', caption: 'Memórias', friendId: 'pedro', friendName: 'Pedro'
        },
        {
            id: 'pedro-4', type: 'image', url: 'assets/images/pedro/pedro03.jpeg',
            alt: 'Pedro - Carisma único', caption: 'Memórias', friendId: 'pedro', friendName: 'Pedro'
        },
        {
            id: 'pedro-5', type: 'image', url: 'assets/images/pedro/pedro04.jpeg',
            alt: 'Pedro - Carisma único', caption: 'Memórias', friendId: 'pedro', friendName: 'Pedro'
        },
        {
            id: 'pedro-6', type: 'image', url: 'assets/images/pedro/pedro05.jpeg',
            alt: 'Pedro - Carisma único', caption: 'Memórias', friendId: 'pedro', friendName: 'Pedro'
        },
        {
            id: 'pedro-7', type: 'image', url: 'assets/images/pedro/pedro06.jpeg',
            alt: 'Pedro - Carisma único', caption: 'Memórias', friendId: 'pedro', friendName: 'Pedro'
        },
        // --- SOPHIA ---
        {
            id: 'sophia-1', type: 'image', url: 'assets/images/sophia/foto.sophia.jpeg',
            alt: 'Sophia - Elegância natural', caption: 'Memórias', friendId: 'sophia', friendName: 'Sophia'
        },
        {
            id: 'sophia-2', type: 'image', url: 'assets/images/sophia/sophia.jpeg',
            alt: 'Sophia - Elegância natural', caption: 'Memórias', friendId: 'sophia', friendName: 'Sophia'
        },
        // --- THIAGO ---
        {
            id: 'thiago-1', type: 'image', url: 'assets/images/thiago/foto.thiago.jpeg',
            alt: 'Thiago - Momento divertido', caption: 'Memórias', friendId: 'thiago', friendName: 'Thiago'
        },
        {
            id: 'thiago-2', type: 'image', url: 'assets/images/thiago/thiago.jpeg',
            alt: 'Thiago - Momento divertido', caption: 'Memórias', friendId: 'thiago', friendName: 'Thiago'
        },
        // --- TIRZA ---
        {
            id: 'tirza-1', type: 'image', url: 'assets/images/tirza/tirza.jpeg',
            alt: 'Tirza - Inspiração constante', caption: 'Memórias', friendId: 'tirza', friendName: 'Tirza'
        },
        {
            id: 'tirza-2', type: 'image', url: 'assets/images/tirza/tirza02.jpeg',
            alt: 'Tirza - Inspiração constante', caption: 'Memórias', friendId: 'tirza', friendName: 'Tirza'
        },
        {
            id: 'tirza-3', type: 'image', url: 'assets/images/tirza/tirza03.jpeg',
            alt: 'Tirza - Inspiração constante', caption: 'Memórias', friendId: 'tirza', friendName: 'Tirza'
        },
        {
            id: 'tirza-4', type: 'image', url: 'assets/images/tirza/tirza04.jpeg',
            alt: 'Tirza - Inspiração constante', caption: 'Memórias', friendId: 'tirza', friendName: 'Tirza'
        },
        {
            id: 'tirza-5', type: 'image', url: 'assets/images/tirza/tirza05.jpeg',
            alt: 'Tirza - Inspiração constante', caption: 'Memórias', friendId: 'tirza', friendName: 'Tirza'
        },
        {
            id: 'tirza-6', type: 'image', url: 'assets/images/tirza/tirza06.jpeg',
            alt: 'Tirza - Inspiração constante', caption: 'Memórias', friendId: 'tirza', friendName: 'Tirza'
        },
        {
            id: 'tirza-7', type: 'image', url: 'assets/images/tirza/tirza07.jpeg',
            alt: 'Tirza - Inspiração constante', caption: 'Memórias', friendId: 'tirza', friendName: 'Tirza'
        },
        {
            id: 'tirza-8', type: 'image', url: 'assets/images/tirza/tirza08.jpeg',
            alt: 'Tirza - Inspiração constante', caption: 'Memórias', friendId: 'tirza', friendName: 'Tirza'
        },
        {
            id: 'tirza-9', type: 'image', url: 'assets/images/tirza/tirza09.jpeg',
            alt: 'Tirza - Inspiração constante', caption: 'Memórias', friendId: 'tirza', friendName: 'Tirza'
        },
        {
            id: 'tirza-10', type: 'image', url: 'assets/images/tirza/tirza10.jpeg',
            alt: 'Tirza - Inspiração constante', caption: 'Memórias', friendId: 'tirza', friendName: 'Tirza'
        },
        {
            id: 'tirza-11', type: 'image', url: 'assets/images/tirza/tirza11.jpeg',
            alt: 'Tirza - Inspiração constante', caption: 'Memórias', friendId: 'tirza', friendName: 'Tirza'
        },
        {
            id: 'tirza-12', type: 'image', url: 'assets/images/tirza/tirza12.jpeg',
            alt: 'Tirza - Inspiração constante', caption: 'Memórias', friendId: 'tirza', friendName: 'Tirza'
        },
        {
            id: 'tirza-13', type: 'image', url: 'assets/images/tirza/tirza13.jpeg',
            alt: 'Tirza - Inspiração constante', caption: 'Memórias', friendId: 'tirza', friendName: 'Tirza'
        },
        {
            id: 'tirza-14', type: 'image', url: 'assets/images/tirza/tirza14.jpeg',
            alt: 'Tirza - Inspiração constante', caption: 'Memórias', friendId: 'tirza', friendName: 'Tirza'
        },
        {
            id: 'tirza-15', type: 'image', url: 'assets/images/tirza/tirza15.jpeg',
            alt: 'Tirza - Inspiração constante', caption: 'Memórias', friendId: 'tirza', friendName: 'Tirza'
        },
        // --- VITORIA ---
        {
            id: 'vitoria-v1', type: 'video', url: 'assets/videos/vitoria/vih.mp4',
            thumbnailUrl: 'assets/images/vitoria/vih.jpg', alt: 'Um vídeo especial com a Minnie', caption: 'Memórias',
            friendId: 'vitoria', friendName: 'Vitória'
        },
        // --- VITORIA MACHADO ---
        {
            id: 'vihM-1', type: 'image', url: 'assets/images/vihM/vihM.jpeg',
            alt: 'Vitoria - midianita', caption: 'Memórias', friendId: 'vihM', friendName: 'Vitória Machado'
        },
        {
            id: 'vihM-2', type: 'image', url: 'assets/images/vihM/vihM02.jpeg',
            alt: 'Vitoria - midianita', caption: 'Memórias', friendId: 'vihM', friendName: 'Vitória Machado'
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
