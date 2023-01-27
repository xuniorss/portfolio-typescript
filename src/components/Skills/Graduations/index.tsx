import { graduations } from '../../../utils/skills'
import { useTranslation } from 'react-i18next'
import '../../../../public/locales/i18n'

export function GraduationsComponent() {
   const { t } = useTranslation('skills')

   return (
      <>
         {graduations.map((graduation) => {
            return (
               <div className="graduations" key={graduation.id}>
                  <span>{graduation.year}</span>
                  <div className="course">
                     <h3>
                        {graduation.id === 4
                           ? `${t('courses.colege')}`
                           : graduation.id === 3
                           ? `${t('courses.technician')}`
                           : graduation.id === 1
                           ? `${t('courses.computing')}`
                           : graduation.id === 6
                           ? `${t('courses.nodejs')}`
                           : graduation.course}
                     </h3>
                     <p>{graduation.academy}</p>
                  </div>
               </div>
            )
         })}
      </>
   )
}
