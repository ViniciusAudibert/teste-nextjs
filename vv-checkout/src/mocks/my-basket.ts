import { CartType } from '../@types/cart'

export const MY_BASKET: CartType = {
  loading: false,
  items: [
    {
      productInfo: {
        sku: 1324,
        name: 'Smart TV QLED 43" UHD 4K Samsung Q7F QPicture com Pontos Quânticos, HDR1500, QStyle, Design 360, One Connect, QSmart, HDMI e USB',
        image: 'https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1129318902',
        amount: 1,
        seller: 'Casas Bahia',
      },
      price: {
        price: 'R$ 6.798,00',
        subtotal: 'R$ 6.856,00',
      },
      delivery: {
        name: 'Minha residência',
        freight: 'R$ 58,00',
      },
      services: [
        {
          name: 'Garantia estendida',
          price: 'R$ 32,00',
          enable: true,
        },
        {
          name: 'Seguro contra Roubo e Furto 12 meses',
          price: 'a partir de R$ 23,00',
          enable: false,
        },
        {
          name: 'Instalação de TV',
          price: '1 x de R$ 249,75',
          enable: true,
          hint: {
            description: 'Instalação de tv acima de 32 polegadas',
          },
        },
      ],
    },
  ],
}
