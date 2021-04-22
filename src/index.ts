import express, { Request, Response, Application } from 'express';
import * as bodyParser from 'body-parser';

const PORT = process.env.PORT || 8080;

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('express-template');
});

app.listen(PORT, () => {
  console.log(`Application running at: http://localhost:${PORT}/`);
});
