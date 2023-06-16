import airbnb from '../../assets/airbnb.png'
import carshowcase from '../../assets/car-showcase.png'
import cep from '../../assets/cep-app.jpg'
import combustivel from '../../assets/combustivel-app.jpg'
import ecommerce from '../../assets/ecommerce.png'
import empireburger from '../../assets/empire-burger.png'
import financas from '../../assets/financas-app.png'
import instagram from '../../assets/instagram-app.png'
import messenger from '../../assets/messenger-clone.png'
import nubank from '../../assets/nubank-app.png'
import promptopia from '../../assets/promptopia.png'
import spacetime from '../../assets/spacetime.png'
import spotify from '../../assets/spotify-clone.png'
import twitter from '../../assets/twitter.png'
import { workImagesProps } from '../../models/Portfolio'

export const workImages: Array<workImagesProps> = [
   {
      id: 1,
      img: empireburger,
      name: 'Empireburger',
      category: 'web',
      repoLink: 'https://github.com/xuniorss/empire-burger',
      deployUrl: 'https://empire-burger-dusky.vercel.app/',
   },
   {
      id: 2,
      img: spacetime,
      name: 'Spacetime',
      category: 'web',
      repoLink: 'https://github.com/xuniorss/nlw-spacetime-rocketseat-web',
   },
   {
      id: 3,
      img: airbnb,
      name: 'Airbnb Clone',
      category: 'clones',
      repoLink: 'https://github.com/xuniorss/airbnb-clone',
   },
   {
      id: 4,
      img: twitter,
      name: 'Twitter Clone',
      category: 'clones',
      repoLink: 'https://github.com/xuniorss/twitter-clone',
   },
   {
      id: 5,
      img: ecommerce,
      name: 'Ecommerce',
      category: 'web',
      repoLink: 'https://github.com/xuniorss/ecommerce-nextjs',
   },
   {
      id: 6,
      img: promptopia,
      name: 'Promptopia',
      category: 'web',
      repoLink: 'https://github.com/xuniorss/share_prompts',
   },
   {
      id: 7,
      img: carshowcase,
      name: 'CarHub',
      category: 'web',
      repoLink: 'https://github.com/xuniorss/car_showcase',
      deployUrl: 'https://car-showcase-alpha.vercel.app/',
   },
   {
      id: 8,
      img: messenger,
      name: 'Messenger Clone',
      category: 'clones',
      repoLink: 'https://github.com/xuniorss/messenger-clone',
      deployUrl: 'https://messenger-clone-smoky-alpha.vercel.app/',
   },
   {
      id: 9,
      img: spotify,
      name: 'Spotify Clone',
      category: 'clones',
      repoLink: 'https://github.com/xuniorss/spotify-clone',
   },
   // {
   //    id: 10,
   //    img: nubank,
   //    name: 'Nubank App',
   //    category: 'app',
   //    repoLink: '#',
   // },
   // {
   //    id: 11,
   //    img: instagram,
   //    name: 'Instagram App',
   //    category: 'app',
   //    repoLink: '#',
   // },
]
