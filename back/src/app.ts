import express, { Application } from 'express';
import { userRoutes } from './routes/userRoutes';
import { rapportRoutes } from './routes/rapportRoutes';
import { medicamentRoutes } from './routes/medicamentRoutes';
import cors from 'cors';

const app: Application = express();
const port: number = 3000;

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(cors(corsOptions));

app.use('/user', userRoutes);

app.use('/rapport', rapportRoutes);

app.use('/medicament', medicamentRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
