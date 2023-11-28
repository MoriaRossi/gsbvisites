// Import the necessary libraries at the beginning of your file
import jwt from "jsonwebtoken";
import UserController from "../controller/UserController"; // Assuming UserController is a default export
import { Pool } from "pg";
import pool from "../db";

export class User {
  id: number;
  nom: string;
  prenom: string;
  user_type: string;
  username: string;
  mdp: string;
  adresse: string;
  email: string;
  token: string;

  constructor(
    id: number,
    nom: string,
    prenom: string,
    user_type: string,
    username: string,
    mdp: string,
    adresse: string,
    email: string
  ) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.user_type = user_type;
    this.username = username;
    this.mdp = mdp;
    this.adresse = adresse;
    this.email = email;
    this.token = this.getToken();
  }

  public async getUser(
    id: number,
    mdp: string,
    pool: Pool
  ): Promise<User | null> {
    // Assuming getUser is a static method in UserController
    const userController = new UserController(pool);

    return userController.getUser(this.username, this.mdp);
  }

  public getFullName(): string {
    return `${this.prenom} ${this.nom}`;
  }

  public getToken(): string {
    // Assuming you have a secret key for signing the token
    const secretKey: string = "36474d5c5x2x14d";

    // Generate a JWT token with user information
    const token: string = jwt.sign(
      {
        id: this.id,
        username: this.username,
        mdp: this.mdp,
      },
      secretKey,
      { expiresIn: "1h" } // Set the expiration time as needed
    );

    return token;
  }
}
