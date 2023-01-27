import { socialIcons } from '../../utils/data'

export function SocialIcons() {
   return (
      <>
         {socialIcons.map((socialIcon) => {
            const Icon = socialIcon.icon
            return (
               <div key={socialIcon.id}>
                  <a href={socialIcon.url} target="_blank">
                     {<Icon />}
                  </a>
               </div>
            )
         })}
      </>
   )
}
