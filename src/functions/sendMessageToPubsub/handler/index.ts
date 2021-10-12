import express from 'express';
import sendMessageToPubSub from '..';

const app = express();

app.use(express.json());

app.post('/sendMessageToPubsub', sendMessageToPubSub);

export default app;