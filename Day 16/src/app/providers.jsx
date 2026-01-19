import React from 'react'
import { AnimatePresence } from 'framer-motion'

const Providers = ({children}) => {
  return (
    <AnimatePresence mode='wait'>
        {children}
    </AnimatePresence>
  )
}

export default Providers