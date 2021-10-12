import converter from 'xml-js';

export default function(data: any) {
  
  const objResp = JSON.parse((converter.xml2json(data, {compact: true})))['cResultado']['Servicos']['cServico'];

  return objResp.MsgErro._text ?{
    error: objResp.MsgErro._text
  } :{
    valor: objResp.Valor._text,
    prazo_entrega: objResp.PrazoEntrega._text,
    valor_aviso_recebimento: objResp.ValorAvisoRecebimento._text,
    entrega_domiciliar: objResp.EntregaDomiciliar._text,
    entrega_sabado: objResp.EntregaSabado._text,
  }

}
