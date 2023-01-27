import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { useTypewriter } from '../../hooks/useTypewriter'

interface TypeWriterProps {
   text: string
}

export function TypewriterComponent({ text }: TypeWriterProps) {
   const { cursor } = useTypewriter()

   const slice = useMemo(() => text.slice(0, cursor), [text, cursor])

   return (
      <>
         <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: cursor }}
            transition={{
               type: 'tween',
               ease: 'easeInOut',
               duration: 0.3,
            }}
         >
            {slice}
         </motion.span>
      </>
   )
}
