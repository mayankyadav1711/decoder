import React from 'react'
import { motion } from 'framer-motion';
const Blobs = () => {
  return (
    <div className="lg:w-1/2 mb-12 lg:mb-0">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative"
    >
      <motion.div
        className="absolute -top-64 left-96 w-48 h-48 bg-yellow-500 rounded-full  filter blur-xl opacity-70 animate-blob"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute -top-20 -left-20 w-48 h-48 bg-purple-500 rounded-full  filter blur-xl opacity-70 animate-blob"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute top-24 left-72 w-48 h-48 bg-orange-500 rounded-full  filter blur-xl opacity-70 animate-blob"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </motion.div>
  </div>
  )
}

export default Blobs