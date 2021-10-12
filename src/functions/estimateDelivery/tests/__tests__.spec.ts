import estimateDelivery from './mock';

describe('estimateDelivery test', () => {
  it('Should return an object with the correct values', async () => {
    const response = await estimateDelivery({
      origin_postcode: '36834000',
      destination_postcode: '18133210',
      package_format: 1,
      height: 19,
      length: 16,
      width: 11,
      weight: 1
    });

    expect(response.pac).toHaveProperty('valor');
    expect(response.pac).toHaveProperty('prazo_entrega');
    expect(response.pac).toHaveProperty('valor_aviso_recebimento');
    expect(response.pac).toHaveProperty('entrega_domiciliar');
    expect(response.pac).toHaveProperty('entrega_sabado');

    expect(response.sedex).toHaveProperty('valor');
    expect(response.sedex).toHaveProperty('prazo_entrega');
    expect(response.sedex).toHaveProperty('valor_aviso_recebimento');
    expect(response.sedex).toHaveProperty('entrega_domiciliar');
    expect(response.sedex).toHaveProperty('entrega_sabado');
  })

  it('Should return an object with error', async () => {
    const response = await estimateDelivery({
      origin_postcode: '36834000',
      destination_postcode: '18133210',
      package_format: 1,
      height: 0,
      length: 0,
      width: 0,
      weight: 0
    });

    expect(response.pac).toHaveProperty('error');
    expect(response.sedex).toHaveProperty('error');
  })
});