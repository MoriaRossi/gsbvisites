// Import the necessary libraries at the beginning of your file

export class User {
  id: number;
  nom: string;
  prenom: string;
  user_type: string;
  username: string;
  mdp: string | null;
  adresse: string;
  email: string;

  constructor(
    id: number,
    nom: string,
    prenom: string,
    user_type: string,
    username: string,
    mdp: string | null,
    adresse: string,
    email: string,
    token: string | null
  ) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.user_type = user_type;
    this.username = username;
    this.mdp = mdp;
    this.adresse = adresse;
    this.email = email;
  }
}
