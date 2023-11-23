import React from 'react'
import { motion, useScroll } from "framer-motion"
import './Scroll.css'

const Scroll = () => {
const { scrollYProgress } = useScroll();

  return (
<motion.div className="progress-bar" style={{ scaleX: scrollYProgress }}/>  )
}

export default Scroll