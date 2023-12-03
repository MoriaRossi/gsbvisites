import express, { Application } from 'express';
import { userRoutes } from './routes/userRoutes';
import { rapportRoutes } from './routes/rapportRoutes';
import { medicamentRoutes } from './routes/medicamentRoutes';

const app: Application = express();
const port: number = 3000;

app.use(express.json());

app.use('/user', userRoutes);

app.use('/rapport', rapportRoutes);

app.use('/medicament', medicamentRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
