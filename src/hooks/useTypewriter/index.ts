import { useEffect, useState } from 'react'

export function useTypewriter() {
   const [cursor, setCursor] = useState(0)

   useEffect(() => {
      const interval = setInterval(() => {
         setCursor((cursor) => cursor + 1)
      }, 100)

      return () => clearInterval(interval)
   }, [])

   return { cursor }
}
