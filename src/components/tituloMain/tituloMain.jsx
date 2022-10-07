import React from 'react';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import estilos from '../tituloMain/tituloMain.module.css'
import { motion } from "framer-motion";







export default function tituloMain() {
  return (
      
      <Container maxWidth={false} sx={{
        marginBottom: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: "100%",
        height: "100vh",
        marginBottom: "80px",
        background: "rgb(63, 72, 194)",
        background: "linear-gradient(90deg, rgba(63, 72, 194, 1) 0%, rgba(70, 133, 224, 1) 47%, rgba(49, 177, 238, 1) 100%)"
      }}>
        
        <div className={estilos.contienedetalles}>

      <Grid container direction="column"
         justifyContent="center"
         alignItems="flex-start"
         rowSpacing={3}
         height={538}
         className={estilos.contenedorTituloPButton}>
   
         <Grid item xs={0}><h1 className={estilos.titulo}>Donacion de sangre</h1></Grid>
         <Grid item xs={0}><p className={estilos.p}>Personas entre 16 y 65 años que gocen de buena salud y pesen más de 50 kilos.
Quienes califiquen en la entrevista y examen clínico <a href='#' className={estilos.linkalFormulario}>(podes visualizarlo aquí)</a>. Aclaración: el mismo no tiene que ser llevado, se lo darán en el establecimiento.</p></Grid>
         <Grid item xs={0} className="contenedorBTN"><button className={estilos.Button}>Formulario de donacion</button></Grid>
      </Grid>
        <img className={estilos.IMG} src="https://static.wixstatic.com/media/d45da4_4a6e56a63f804b8db801f166bb921e17~mv2.png/v1/fill/w_676,h_658,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/wix.png" alt="" />
      </div>
      
    </Container>
   
    
   
  );
}
