import { User } from "../model/User";


export class Medecin {
  user: User;
  id: number;
  specialite: string;
  departement: string;

  constructor(user: User, id: number, specialite: string, departement: string) {
    this.user = user;
    this.id = id;
    this.specialite = specialite;
    this.departement = departement;
  }

  public getFullName(): string {
    return `${this.user.prenom} ${this.user.nom}`;
  }
}
