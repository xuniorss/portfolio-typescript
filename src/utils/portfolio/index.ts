import cep from '../../assets/cep-app.jpg'
import combustivel from '../../assets/combustivel-app.jpg'
import financas from '../../assets/financas-app.png'
import instagram from '../../assets/instagram-app.png'
import nubank from '../../assets/nubank-app.png'
import pdv from '../../assets/pdv-web.jpg'
import planilhas from '../../assets/planilhas-web.png'
import icontrol from '../../assets/sistema-icontrol-web.png'
import { workImagesProps } from '../../models/Portfolio'

export const workImages: Array<workImagesProps> = [
   {
      id: 1,
      img: combustivel,
      name: 'Combustível App',
      category: 'app',
   },
   {
      id: 2,
      img: cep,
      name: 'CEP App',
      category: 'app',
   },
   {
      id: 3,
      img: financas,
      name: 'project 3',
      category: 'app',
   },
   {
      id: 4,
      img: pdv,
      name: 'PDV Web',
      category: 'web',
   },
   {
      id: 5,
      img: nubank,
      name: 'Nubank App',
      category: 'app',
   },
   {
      id: 6,
      img: planilhas,
      name: 'Planilhas Web',
      category: 'web',
   },
   {
      id: 7,
      img: instagram,
      name: 'Instagram App',
      category: 'app',
   },
   {
      id: 8,
      img: icontrol,
      name: 'Sistema I-Control',
      category: 'web',
   },
]
