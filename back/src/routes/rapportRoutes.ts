// rapportRoutes.ts
import express, { Request, Response } from 'express';
import { RapportController } from '../controller/RapportController';
import pool from '../db/db';
import { User } from '../model/User';
import jwt from "jsonwebtoken";
import { Rapport } from '../model/Rapport';
import { Medicament } from '../model/Medicament';
export const rapportRoutes = express.Router();

// Create a new rapport
rapportRoutes.post('/rapport', async (req: Request, res: Response) => {
    try {
    
      const { medecin, date, motif, bilan, medicamentsOfferts} = req.body;  


      const rapport: Rapport | string | null | {medicament: Medicament ; quantite: number} = await RapportController.createRapport(req.body.visiteurId, req.body.medecin.id, req.body.date, req.body.motif, req.body.bilan, req.body.medicamentsOfferts);
  
      res.status(201).json(rapport);
    } catch (error) {
      console.error('Error creating new rapport:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
// Modify an existing rapport
rapportRoutes.put('/rapport/:id', async (req: Request, res: Response) => {
  try {
    const rapportId = parseInt(req.params.id, 10);
    const { motif, bilan } = req.body;

    // Validate and process the data as needed

    // Modify the rapport
    const updatedRapport = await RapportController.modifierRapport(motif, bilan, rapportId);

    if (updatedRapport) {
      res.status(200).json(updatedRapport);
    } else {
      res.status(404).json({ error: 'Rapport not found' });
    }
  } catch (error) {
    console.error('Error modifying rapport:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

