import express from 'express';
import setupMiddware from './middleware';
import { connect } from './db';
import { signin, protect } from './api/modules/auth';

const app = express();

connect();

app.use('/signin', signin);

app.get('/', (req, res) => {
  res.json({ ok: false });
});

// Never in production
app.all('*', (req, res) => {
  res.json({ ok: true });
});

export default app;
