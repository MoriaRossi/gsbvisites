import { User } from "../model/User";

export class Visiteur {
  user: User;
  dateEmbauche: Date;

  constructor(user: User, dateEmbauche: Date) {
    this.user = user;
    this.dateEmbauche = dateEmbauche;
  }
}


