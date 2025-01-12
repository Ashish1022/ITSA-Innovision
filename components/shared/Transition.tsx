"use client"

import React, { memo } from 'react'
import { motion } from 'framer-motion'

const Transition = () => {
  return (
    <>
      {/* Primary Layer */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#11daff]"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      {/* Orange Layer */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-white-1"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
      />
      {/* Black Layer */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-black-1"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
      />
    </>
  )
}

export default memo(Transition)
