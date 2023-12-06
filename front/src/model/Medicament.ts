import { Famille } from '../model/Famille';

export default class Medicament {
  id: number;
  nomcommercial: string;
  composition: string;
  effets: string;
  contre_indications: string;
  familles!: Famille[] | null;

  constructor(
    id: number,
    nomcommercial: string,
    composition: string,
    effets: string,
    contre_indications: string,
  ) {
    this.id = id;
    this.nomcommercial = nomcommercial;
    this.composition = composition;
    this.effets = effets;
    this.contre_indications = contre_indications;
  }

  setFamilles(familles:  Famille[] | null ) {
    this.familles = familles
  }

}
