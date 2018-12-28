export class Book {

    titre: string;
    auteur: string;
    description: string;
    is_prete: boolean;
    image: string;

    constructor(titre: string, auteur: string, description: string, image: string, is_prete: boolean) {
        
        this.titre = titre; 
        this.auteur = auteur;
        this.description = description;
        this.image = image;
        this.is_prete = is_prete;
    }
}