import express, { Request, Response, Application } from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';

const PORT = process.env.PORT || 8080;

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('express-template');
});

app.listen(PORT, () => {
  console.log(`Application running at: http://localhost:${PORT}/`);
});
