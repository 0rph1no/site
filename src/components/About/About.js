import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './About.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Title from '../Title/Title'

const About = () => {
  return (
    <Box id="aboutme" sx={{ flexGrow: 1 }}>
    <Grid className='about-me-container' container spacing={2}>
      <Grid item xs={8} md={7}>
        <div>
            <Title titlename="About me" />
            <p className='about-me-text'>I am currently a software engineering student at 1337, um6p, previously a bug bounty hunter and also a web applications developer, i have created some personal projects. Here are some techonologies i have been using.<br/><br/>Aside from computer's world, i have other passions such as playing video games, football and bullying.  </p>
        </div>
      </Grid>
      <Grid item xs={4} md={5}>
        <Carousel  autoPlay infiniteLoop>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
                    <p className="legend">Django</p>
                </div>
                <div>       
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                    <p className="legend">React</p>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                    <p className="legend">C</p>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
                    <p className="legend">C++</p>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                    <p className="legend">Docker</p>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" />
                    <p className="legend">FastApi</p>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                    <p className="legend">mySql</p>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                    <p className="legend">Material Ui</p>
                </div>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                    <p className="legend">Linux</p>
                </div>
            </Carousel>
      </Grid>
    </Grid>
  </Box>
  )
}

export default About