import { FaCss3, FaFigma, FaHtml5, FaNodeJs, FaReact, FaSass } from 'react-icons/fa'

import { SiAdonisjs, SiJavascript, SiPostgresql, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb'
import { ExperiencesProps, FinishesProps, IconsPropsSkills } from '../../models/Skills'

export const icons: Array<IconsPropsSkills> = [
   { icon: FaHtml5 },
   { icon: FaCss3 },
   { icon: FaSass },
   { icon: SiJavascript },
   { icon: SiTypescript },
   { icon: FaReact },
   { icon: TbBrandReactNative },
   { icon: TbBrandNextjs },
   { icon: FaNodeJs },
   { icon: SiAdonisjs },
   { icon: FaFigma },
   { icon: SiPostgresql },
]

export const experiences: Array<ExperiencesProps> = [
   { id: 1, year: '2017', position: 'T.I', company: 'Redepas Jordão' },
   { id: 2, year: '2018', position: 'Fullstack developer', company: 'Intersolid Software' },
]

export const finishes: Array<FinishesProps> = [
   { id: 1, number: '3+', itemName: 'Anos de experiência como programador' },
   { id: 2, number: '7+', itemName: 'Meses de experiência como Fullstack developer' },
]
