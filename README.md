#ENDPOINTS
* estimateDelivery
  Função: Cálculo do frete utilizando o endpoint dos correios. Calcula dois tipos de pacotes: 04510 (Pac) e 04014 (Sedex),

  Método: POST,

  URL: '/estimateDelivery',

  Parâmetro: 
    {
      origin_postcode: "", //Cep de origem
      destination_postcode: "", //Cep de destino
      package_format: 1, //Utilize o 1 (pacote) como default e única opção
      width: 0, //largura do pacote em cm
      height: 0, //altura do pacote em cm
      length: 0, //comprimento do pacote em cm
      weight: 0.3 //peso do pacote em kg
    },

  Retorno: <br/>
    {
      pac: {
        valor: '15,90',
        prazo_entrega: '11',
        valor_aviso_recebimento: '5,35',
        entrega_domiciliar: 'S',
        entrega_sabado: 'N'
      },
      
      sedex: {
        valor: '64,75',
        prazo_entrega: '7',
        valor_aviso_recebimento: '6,35',
        entrega_domiciliar: 'S',
        entrega_sabado: 'N'
      }
    },


* sendMessageToPubSub
  Função: Receba uma string e a envia para uma fila do pubsub,
  
  Método: POST,

  URL: '/publish',

  Parâmetro:
  {
	  "message": "testing"
  },

  Retorno:
  {
    "messageId": "3123057502367329"
  }
