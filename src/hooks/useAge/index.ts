import { differenceInYears } from 'date-fns'

export function useAge() {
   const birthDate = new Date(1998, 1, 27)
   const currentDate = new Date()

   const age = differenceInYears(currentDate, birthDate)

   return { age }
}
