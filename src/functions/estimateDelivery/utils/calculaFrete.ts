import api from '../../../services/api';

interface Data {
  nCdEmpresa: string,
  sDsSenha: string
  sCepOrigem: string,
  sCepDestino: string,
  nCdServico: string, 
  nVlPeso: string,
  nCdFormato: string,
  nVlComprimento: string,
  nVlAltura: string,
  nVlLargura: string,
  nVlDiametro: string,
  sCdMaoPropria: string,
  nVlValorDeclarado: number,
  sCdAvisoRecebimento: string,
}

async function calculaFrete(data: Data) {
  try {
    const response = await api.get('/calculador/CalcPrecoPrazo.asmx/CalcPrecoPrazo', {
      params: {
        ...data
      }
    });

    return response.data;
  }
  catch(error) {
    throw new Error();
  } 
}

export default calculaFrete;