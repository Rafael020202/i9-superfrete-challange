import express from 'express';
import estimateDelivery from '..';

const app = express();

app.use(express.json());

app.post('/estimateDelivery', estimateDelivery);

export default app;