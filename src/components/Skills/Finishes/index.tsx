import { finishes } from '../../../utils/skills'
import { useTranslation } from 'react-i18next'
import '../../../../public/locales/i18n'

export function FinishesComponent() {
   const { t } = useTranslation('skills')

   return (
      <>
         {finishes.map((finish) => {
            return (
               <div className="finishes" key={finish.id}>
                  <div className="number">{finish.number}</div>
                  <h4 className="item_name">
                     {finish.id === 1
                        ? `${t('finishes.programming')}`
                        : finish.id === 2
                        ? `${t('finishes.month')}`
                        : finish.id === 3
                        ? `${t('finishes.github')}`
                        : finish.id === 4
                        ? `${t('finishes.courses')}`
                        : finish.itemName}
                  </h4>
               </div>
            )
         })}
      </>
   )
}
