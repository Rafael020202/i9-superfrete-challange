import { Request, Response } from 'express';

import buildJsonResponse from './utils/buildJsonResponse';
import calculaFrete from './utils/calculaFrete';

interface IRequest {
  origin_postcode: string, 
  destination_postcode: string, 
  package_format: number, 
  width: number, 
  height: number, 
  length: number, 
  weight: number
};

enum service {
  pac = '04510',
  sedex = '04014'
}

async function estimateDelivery(request: Request, response: Response) {
  const data = request.body as IRequest;
  const params = {
    nCdEmpresa: '08082650',
    sDsSenha: '564321',
    sCepOrigem: data.origin_postcode,
    sCepDestino: data.destination_postcode,
    nVlPeso: String(data.weight),
    nCdFormato: '1',
    nVlComprimento: String(data.length),
    nVlAltura: String(data.height),
    nVlLargura: String(data.width),
    nVlDiametro: '0',
    sCdMaoPropria: 'N',
    nVlValorDeclarado: 0,
    sCdAvisoRecebimento: 'S',
  };

  try {
    const pac = buildJsonResponse(await calculaFrete({
      nCdServico: service.pac,
      ...params
    }));
    
    const sedex = buildJsonResponse(await calculaFrete({
      nCdServico: service.sedex,
      ...params
    }));

    return pac.error ?response.status(400).json({pac, sedex}) :response.json({pac, sedex});
  }
  catch(err) {
    return response.status(500).json(err);
  }

};

export default estimateDelivery;
