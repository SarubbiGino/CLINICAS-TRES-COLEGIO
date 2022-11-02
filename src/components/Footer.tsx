import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import footerestilo from '../components/footer.module.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import estilos from '../components/footer.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/FacebookTwoTone';
import WhatsappIcon from '@mui/icons-material/WhatsApp';




export default function Footer() {
  return (
<<<<<<< HEAD
  <Box className={estilos.footer}>
    <Container maxWidth = "lg">
        <Grid container spacing = {5} className={estilos.contenedorFooter} direction="column" alignItems="center" justifyContent="center">
            <Grid item xs ={12} sm={4} className={estilos.contenedoRedesSociales} >

             <Box className={estilos.redes}>Redes Sociales</Box>
                <Box className={estilos.contenedorLogos} >
                   <FacebookIcon className={estilos.logos}/>
                   <TwitterIcon className={estilos.logos}/>
                   <LinkedInIcon className={estilos.logos}/>
                   <WhatsappIcon className={estilos.logos}/> 
                </Box>
            </Grid>
            <Box className={estilos.clinicas}   alignItems="center" justifyContent="center" textAlign="center">HOSPITAL DE CLÍNICAS "JOSÉ DE SAN MARTÍN" All Rights Reserved</Box>
=======
    <Box className={estilos.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={5} className={estilos.contenedorFooter} direction="column" alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={4} className={estilos.contenedoRedesSociales} >

            <Box className={estilos.redes}>Redes Sociales</Box>
            <Box className={estilos.contenedorLogos} >

              <a href="https://m.facebook.com/profile.php?id=110189185672713"><FacebookIcon  /></a>
              <a href="https://twitter.com/Prensaclinicas?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><TwitterIcon /></a>
              <a href="https://www.instagram.com/hospitaldeclinicasok/?hl=es">  <InstagramIcon  /> </a>
              <WhatsappIcon className={estilos.logos} />
            </Box>
          </Grid>
          <Box className={estilos.clinicas} alignItems="center" justifyContent="center" textAlign="center">HOSPITAL DE CLÍNICAS "JOSÉ DE SAN MARTÍN" All Rights Reserved</Box>
>>>>>>> 24318aa0720723ffd93959d5b226a907b0a9b411
        </Grid>
      </Container>
    </Box>
  );
}
