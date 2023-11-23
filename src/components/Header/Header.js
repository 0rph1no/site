import React from 'react'
import './Header.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Tooltip from '@mui/material/Tooltip';
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react";


const Header = () => {
  return (
    <div className='header-wrapper' id='top'>
      <motion.div animate={{ scale: 1.1 }}
    transition={{ease: "linear", duration: 0.5 }} className='logo-wrapper'>
        <p className='logo-text bolded'>Charaf</p>
        <p className='logo-text'>Eddine</p>
      </motion.div>
      <motion.div initial={{x: 500}} animate={{x:0}} transition={{type: "spring", stiffness: 100}} className='socials-wrapper'>
        <GitHubIcon />
        <InstagramIcon />
        <a href = "mailto: abc@example.com">
        <Tooltip title="Email me">
          <AlternateEmailIcon/>
        </Tooltip>
        </a>
      </motion.div>
    </div>
  )
}

export default Header