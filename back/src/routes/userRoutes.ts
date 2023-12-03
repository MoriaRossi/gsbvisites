// userRoutes.ts
import express, { Request, Response } from 'express';
import { UserController } from '../controller/UserController';
import pool from '../db/db';

export const userRoutes = express.Router();


userRoutes.get('/:username/:mdp', async (req: Request, res: Response) => {
  try {
    const username = req.params.username;
    const mdp = req.params.mdp;

    const user = await UserController.getUser(username, mdp);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error in GET /user/:username/:mdp', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
