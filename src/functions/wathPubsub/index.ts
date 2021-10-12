import * as functions from "firebase-functions";
import admin from 'firebase-admin';

export default functions.pubsub
.topic('i9-superfrete-challange')
.onPublish((message) => {
  const data = message.data ?Buffer.from(message.data, 'base64').toString() :'';
  
  admin.firestore().collection('message').add({message: data});
});