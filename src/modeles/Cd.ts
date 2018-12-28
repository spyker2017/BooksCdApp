export class Cd {

    titre: string;
    auteur: string;
    description: string;
    image: string;
    is_prete: boolean;

    constructor(titre: string, auteur: string, description: string, image: string, is_prete: boolean) {
        
        this.titre = titre; 
        this.auteur = auteur;
        this.description = description;
        this.image = image;
        this.is_prete = is_prete;
    }
}