import './Testimonials.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import messi from '../media/images/messi.jpg'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Title from '../Title/Title';
import Carousel from 'react-grid-carousel'
import { motion } from "framer-motion"




const Testimonials_header = {textAlign: "left", fontFamily: "Roboto Slab, serif"};
const Testimonials_content = {textAlign: "left", color:"var(--primary-color)", opacity: "0.7", fontFamily: "Inter"};

{/* <Grid container spacing={2}>
<Grid item xs={6} md={8}>
  <div>
  <Card>
  <Avatar
  className='testimonials-img-wrapper'
        alt="Remy Sharp"
        src={messi}
        sx={{ width: "100%", height: 150 }}
    />
    <CardContent>
        <Typography sx={Testimonials_header} gutterBottom variant="h5" component="div">
            Lizard
        </Typography>
        <Typography sx={Testimonials_content} variant="body2">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
        </Typography>
    </CardContent>
    </Card>

  </div>
</Grid>
<Grid item xs={6} md={4}>
  <div>xs=6 md=4</div>
</Grid>
<Grid item xs={6} md={4}>
  <div>xs=6 md=4</div>
</Grid>
<Grid item xs={6} md={8}>
  <div>xs=6 md=8</div>
</Grid>
</Grid> */}

const data = {
  "src":"https://picsum.photos/800/600?random=1", "title": "myPortfollio", "desc":"It's my portfollio(This website) built using ", "tech" : "React, React Material UI and Framer Motion",
  
}

const Testimonials = () => {
    return (
        <>
        <Box sx={{ flexGrow: 1 }} id="testimonials" className="testimonials-section-wrapper">
        <Title titlename="Project-creations" />
        <Box className="thisone">
        <Carousel cols={2} rows={1} gap={10} loop>
          <Carousel.Item>
            <img width="100%" src={data.src} className='project-img' />
            <h3 className='project-title'>{data.title}</h3>
            <p className='project-desc'>{data.desc}<lang>{data.tech}</lang></p>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=2" className='project-img' />
            <h3 className='project-title'>feelFree</h3>
            <p className='project-desc'>A blogging system website, where users can read/publish articles likes/comment on them. Featuring crud it was built using <lang>react, django, mysql and djangorestframework</lang> </p>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=1" className='project-img' />
            <h3 className='project-title'>Faultless</h3>
            <p className='project-desc'>A mini social-media website featuring real-time chatting, friends etc, it was built using <lang>django,mysql, djangorestframework, redis</lang> </p>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=2" className='project-img' />
            <h3 className='project-title'>Flawless</h3>
            <p className='project-desc'>Trying to implement a<lang>microservice</lang> architecture having an api dedicated for users status and andother api for authentication/authorization, the project is built using <lang>fastapi, djangorestframework, react, nginx, docker</lang></p>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=1" className='project-img' />
            <h3 className='project-title'>ezRecon</h3>
            <p className='project-desc'>Bug bounty recon can be tedious, ezRecon simplify it</p>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=2" className='project-img' />
            <h3 className='project-title'>photoGrabber</h3>
            <p className='project-desc'>Python web scrapper, that recursivly download all the images from a url link</p>
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src="https://picsum.photos/800/600?random=2" className='project-img' />
            <h3 className='project-title'>smartHuh</h3>
            <p className='project-desc'>Python game that choose a random word, and let you guess until you find it giving the closeness of your words to the wanted one</p>
          </Carousel.Item>
        </Carousel>
        </Box>
        </Box>
        </>
      );
}

export default Testimonials