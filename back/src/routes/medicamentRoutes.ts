// medicamentRoutes.ts
import express, { Request, Response } from 'express';
import { MedicamentController } from '../controller/MedicamentController';
import { FamilleController } from '../controller/FamilleController';
import pool from '../db/db';
import { Medicament } from '../model/Medicament';

export const medicamentRoutes = express.Router();

medicamentRoutes.get('/medicament/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const medicament = await MedicamentController.getMedicamentById(id);

    if (medicament !== null) {
      console.log(medicament);
      res.status(200).json(medicament);
    } else {
      res.status(404).json({ error: 'Medicament not found' });
    }
  } catch (error) {
    console.error('Error in GET /medicament/:id', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

medicamentRoutes.get('/medicaments', async (req: Request, res: Response) => {
  console.log('Received GET request for /medicaments');
  try {
    const medicaments = await MedicamentController.getLesMedicaments();
    res.status(200).json(medicaments);
  } catch (error) {
    console.error('Error in GET /medicaments', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
