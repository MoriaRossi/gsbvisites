import { User } from "../model/User";

export class Visiteur {
  user: User;
  dateEmbauche: Date;

  constructor(user: User, dateEmbauche: Date) {
    this.user = user;
    this.dateEmbauche = dateEmbauche;
  }
}

/*
-- Create the visiteur table for users without medecin_id
CREATE TABLE visiteur (
    id SERIAL PRIMARY KEY,
    user_id INT,
    date_embauche DATE,
    UNIQUE (user_id),
    FOREIGN KEY (user_id) REFERENCES app_user(id)    
);
*/
