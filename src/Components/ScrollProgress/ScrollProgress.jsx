'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-20 left-0 right-0 h-1 bg-linear-to-r from-emerald-500 to-teal-500 origin-left z-100 rounded-full"
      style={{ scaleX }}
    />
  )
}
