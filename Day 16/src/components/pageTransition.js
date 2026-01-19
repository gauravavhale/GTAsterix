import React from 'react'
import { motion } from 'framer-motion'

const PageTransition = () => {
  return (
    <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "100%" }}
        exit={{ x: 0 }}
        transition={{ duration: 0.6, ease:"easeInOut" }}
    >

    </motion.div>
  )
}

export default PageTransition