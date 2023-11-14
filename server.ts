import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5001;

app.get('/ping', (req: Request, res: Response) => {
  res.send('testing...');
});

app.listen(port, () => {
  console.log(`Server is on http://localhost:${port}`);
});
