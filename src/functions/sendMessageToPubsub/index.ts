import { PubSub } from '@google-cloud/pubsub';
import { Request, Response } from 'express';

import pubSubClientConfig from './config/pubSubClientConfig';

async function sendMessageToPubSub(request: Request, response: Response) {
  const { message } = request.body;
  const pubSubClient = new PubSub({
      projectId: pubSubClientConfig.projectId,
      credentials: {
        ...pubSubClientConfig.credentials
      },
    });
    
    try {
      const dataBuffer = Buffer.from(message);
      const messageId = await pubSubClient
      .topic('projects/resonant-truth-303119/topics/i9-superfrete-challange')
      .publish(dataBuffer);
    
      return response.json({messageId});
    }
    catch(err) {
      return response.status(500).json(err);
    }
    
}


export default sendMessageToPubSub;