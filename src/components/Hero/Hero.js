import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import './Hero.css'
import sideface from '../media/images/sideface.png'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react";
import { useFollowPointer } from "./use-follow-pointer";
import MouseIcon from '@mui/icons-material/Mouse';
import { TypeAnimation } from 'react-type-animation';


const generate_x = () =>
{
  let x = [];
  let min = -100;
  while(min <= 0)
  {
    x.push(min);
    min = min + 10;
  }
  while(min >= -100)
  {
    x.push(min);
    min = min - 10;
  }
  return x;
}

const continuousMotion = {
  x: generate_x([]), // Define keyframes for the X-axis position
  y: [0,0,0,0,0,0,0,0,0],  // Define keyframes for the Y-axis position
  transition: {
    repeat: Infinity,  // Make the animation repeat infinitely
    duration: 2,

    ease: "linear",
    // duration: 5,
  },
};
console.log(continuousMotion.x);



const Hero = () => {

  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const [chipX, setChipX] = useState(0);
  const [chipY, setChipY] = useState(0);
  useEffect(() => {
    // Load the chip animation state from localStorage
    const savedState = localStorage.getItem('chipAnimationState');
    if (savedState) {
      const { x, y } = JSON.parse(savedState);
      setChipX(x);
      setChipY(y);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('chipAnimationState', JSON.stringify({ x: chipX, y: chipY }));
  }, [chipX, chipY]);
  return (
    <>
    <motion.div
      ref={ref}
      className="box"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001
      }}
    />
    <Grid className='hero-Wrapper' container spacing={2}>
        <Grid className='hero-left' item xs={4} md={4}>
          <div className='hero-text'>
            <motion.p animate={{ opacity: 1 }} initial={{opacity: 0}} transition={{ ease: "easeOut", duration: 2 }} className='hero-text-name'>Hi, <name className="author-name">achraf</name> <TypeAnimation
      sequence={['Here']} speed={250} /></motion.p>
          </div>
          <div className='hero-subtext'>
            <motion.p animate={{ opacity: 0.6 }} initial={{opacity: 0}} transition={{ ease: "easeOut", duration: 2 }} className='hero-subtext-content'>
                Software engineer, problem solver and part-time hacker...
            </motion.p>
          </div>
          <div className='hero-sec-btn'>
            <Button className='sec-btn' variant="outlined" href="#aboutme">
                Read More
            </Button>
            <Button className='pri-btn' variant="contained" href="#aboutme">
                <WavingHandIcon /> Download CV
            </Button>
          </div>
          <div className='hero-cta'></div>
        </Grid>
        <Grid item md={5}>
            <div className='circle-wrapper'>
                <img className='sideface-img' src={sideface} alt="" />
            </div>
        </Grid>
        <Grid item xs={8} md={3}>
        <div className='hero-right' >
          <div className='hero-right-ships'>
          <motion.div
                style={{
                    borderRadius: 50,
                    width: 'min-width',
                    cursor: "grab",
                }}
                drag
                dragConstraints={{
                    top: -125,
                    right: 125,
                    bottom: 125,
                    left: -125,
                }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
            >
          <Chip className='chip-content' avatar={<Avatar>S</Avatar>} label="Software Enginner" />
          </motion.div>
          <motion.div
                style={{
                    borderRadius: 50,
                    width: 'min-width',
                    cursor: "grab",
                }}
                drag
                dragConstraints={{
                    top: -125,
                    right: 125,
                    bottom: 125,
                    left: -125,
                }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
            >
          <Chip className='chip-content' avatar={<Avatar>C</Avatar>} label="CyberSecurity Student" />
          </motion.div>
          <motion.div
                style={{
                    borderRadius: 50,
                    width: 'min-width',
                    cursor: "grab",
                }}
                drag
                dragConstraints={{
                    top: -125,
                    right: 125,
                    bottom: 125,
                    left: -125,
                }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
            >
          <Chip className='chip-content' avatar={<Avatar>B</Avatar>} label="Blogger/Writter" />
          </motion.div>
          <motion.div
                style={{
                    borderRadius: 50,
                    width: 'min-width',
                    cursor: "grab",
                }}
                drag
                dragConstraints={{
                    top: -125,
                    right: 125,
                    bottom: 125,
                    left: -125,
                }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
            >
          <Chip className='chip-content' avatar={<Avatar>F</Avatar>} label="Full-stack Developer" />
          </motion.div>
          </div>
          <div className='hero-right-text'>
            <motion.p animate={{ opacity: 1 }} initial={{opacity: 0}} transition={{ ease: "easeOut", duration: 2 }} className='hero-right-content'>Bringing ideas to <name>the existence</name></motion.p>
            </div>
        </div>
        </Grid>
    </Grid>
    <Grid sx={{marginTop: "2rem"}} container className='spinning-text-wrapper' spacing={2}>
      <Grid className='spinning-text-circle' item>
        <div className='spinning-text-containner'>
        <svg id="rotatingText" viewBox="0 0 200 200" width="140" height="140">
        <defs>
          <path id="circle" d="M 100, 100
                  m -75, 0
                  a 75, 75 0 1, 0 150, 0
                  a 75, 75 0 1, 0 -150, 0
                  ">
          </path>
        </defs>
        <text className='text-center' width="200">
          <textPath alignment-baseline="top" xlinkHref="#circle" className="spinning-text-content">
            Scroll down - Scroll down - Scroll down - Scroll down -Scroll down
          </textPath>
        </text>
      </svg>
        </div>
        <motion.div className='spinning-text-icon' animate={{ y: [-5, 2.5, -5] }} transition={{ repeat: Infinity, duration: 1.5 }}
>
          <MouseIcon sx={{fill: "var(--primary-black)"}}  />
        </motion.div>
      </Grid>
    </Grid>
    </>
  )
}

export default Hero