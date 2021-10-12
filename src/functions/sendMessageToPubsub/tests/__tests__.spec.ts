import sendMessageToPubSub from './mock';

describe('sendMessageToPubsub test', () => {
  it('Should return the string messageId', async () => {
    const response = await sendMessageToPubSub('teste');
    
    expect(typeof(response)).toBe('string');
  })
});