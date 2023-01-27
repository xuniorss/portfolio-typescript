import { navLinks } from '../../../utils/data'

export function NavLinksComponent() {
   return (
      <>
         {navLinks.map((navlink, index) => {
            return (
               <li key={index}>
                  <a href={`#${navlink}`}>{navlink}</a>
               </li>
            )
         })}
      </>
   )
}
