import { PubSub } from '@google-cloud/pubsub';

import pubSubClientConfig from '../config/pubSubClientConfig';

async function sendMessageToPubSub(message: string): Promise<string> {
  const pubSubClient = new PubSub({
      projectId: pubSubClientConfig.projectId,
      credentials: {
        ...pubSubClientConfig.credentials
      },
    });
    
    const dataBuffer = Buffer.from(message);

    try{
      const messageId = await pubSubClient
      .topic('projects/resonant-truth-303119/topics/i9-superfrete-challange')
      .publish(dataBuffer);
      
      return messageId;
    }
    catch{
      throw new Error();
    }
}


export default sendMessageToPubSub;