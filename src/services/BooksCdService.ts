import { Book } from "../modeles/Book";
import { Cd } from "../modeles/Cd";

export class BooksCdService {
    
    All_books: Book[] = [

        {
            titre: 'j\'apprend la cuisine en solo',
            auteur: 'Pierre kamkeu',
            description: 'Un tres bon livre pour apprendre la cuisine, c\'est vraimant super',
            image: '../../assets/imgs_books/apprendre la cuisine.JPG',
            is_prete: true
        },
        {
            titre: 'Comprendre la programmation',
            auteur: 'Mathieu filon',
            description: 'Tout comprendre sur les principes de la programmation informatique',
            image: '../../assets/imgs_books/debuter-en-programmation.jpg',
            is_prete: false
        }
    ];


    All_cds: Cd[] = [

        {
            titre: 'Les actes manqués',
            auteur: 'Pascal obispo',
            description: 'Une tres bonne chanson de pascal obispo a propos de ses actes manqué.',
            image: '../../assets/imgs_cd/Pascal-Obispo-boycotte-les-Victoires-de-la-musique.JPG',
            is_prete: true
        },
        {
            titre: 'Ca depend de toi',
            auteur: 'Dj Querozen',
            description: 'Le bonheur que tu cherche là, ca depend de toi, tres belle chason du DJ ivorien',
            image: '../../assets/imgs_cd/dj kerozen.jpeg',
            is_prete: true
        }
    ];
}