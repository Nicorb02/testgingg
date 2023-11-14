import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import path from "path";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5001;

app.get("/ping", (req: Request, res: Response) => {
  res.json({"users": ["jenna", "mike", "jeyoos", "nico", "nick"]});
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('/*', function (req: Request, res: Response) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is on http://localhost:${port}`);
});
