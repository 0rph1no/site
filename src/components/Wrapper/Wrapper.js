import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Testimonials from '../Testimonials/Testimonials';

const Box_style = {
    marginTop:"4rem",
    marginBottom:"4rem",
    borderRadius: "50px",
    bgcolor: 'var(--wrapper-white-bg)',
}

const Wrapper = () => {
  return (
    <>
        <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={Box_style}>
            <Header />
            <Hero />
            <About />
            <Testimonials />
        </Box>
      </Container>
    </>
  )
}

export default Wrapper