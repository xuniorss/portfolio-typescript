import { FaCss3, FaFigma, FaHtml5, FaNodeJs, FaReact, FaSass } from 'react-icons/fa'

import { SiAdonisjs, SiJavascript, SiPostgresql, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb'
import {
   ExperiencesProps,
   FinishesProps,
   GraduationsProps,
   IconsPropsSkills,
} from '../../models/Skills'

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
   { id: 1, number: '3+', itemName: 'Anos como programador' },
   { id: 2, number: '7+', itemName: 'Meses como Fullstack developer' },
   { id: 3, number: '965+', itemName: 'Commits no Github' },
   { id: 4, number: '10+', itemName: 'Cursos certificados concluídos' },
]

export const graduations: Array<GraduationsProps> = [
   { id: 1, year: '2009', academy: 'Micro-Way', course: 'Computação' },
   { id: 2, year: '2010', academy: 'Micro-Way', course: 'Hardware' },
   { id: 3, year: '2015', academy: 'SENAI', course: 'Técnico em eletroeletrônica' },
   {
      id: 4,
      year: '2019',
      academy: 'Uni Salesiano',
      course: 'Análise e desenvolvimento de sistemas',
   },
   { id: 5, year: '2022', academy: 'Udemy', course: 'ReactJs, React Native, NextJs & Typescript' },
   { id: 6, year: '2022', academy: 'Udemy', course: 'NodeJs com Express & AdonisJs' },
   // { id: 7, year: '2022', academy: 'Udemy', course: '' },
   // { id: 9, year: '2022', academy: 'Udemy', course: 'AdonisJs' },
]
