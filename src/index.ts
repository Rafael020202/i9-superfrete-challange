import * as functions from "firebase-functions";
import estimateDeliveryHandler from './functions/estimateDelivery/handler';
import sendMessageToPubSubHandler from './functions/sendMessageToPubsub/handler';
import watchPubsub from './functions/wathPubsub';

exports.estimateDelivery = functions.https.onRequest(estimateDeliveryHandler);
exports.sendMessageToPubSub = functions.https.onRequest(sendMessageToPubSubHandler);
exports.wachPubsub = watchPubsub;