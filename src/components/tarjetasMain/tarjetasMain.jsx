import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Containerr from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import estilos from "../tarjetasMain/tarjertasMain.module.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Skeleton from '@mui/material/Skeleton'






export default function tarjetasMain({ title, descripcion, imagen}) {
  return (

    <container className="contenidodecard"  > 
    <div className={estilos.color}></div>
      <Card   className={estilos.carta} >
<<<<<<< HEAD
          <CardMedia component="img" height="140" src={imagen}  alt="Donar" className={estilos.IMG} />
=======
          <CardMedia component="img" height="140"   src={imagen}  alt="Donar" className={estilos.IMG} />
>>>>>>> 24318aa0720723ffd93959d5b226a907b0a9b411
            <div className = {estilos.detallesCard}>
        <CardContent >
           <Typography gutterBottom variant="h5" component="div" className={estilos.titulo}>
              {title}
           </Typography>
           <Typography variant="body1" color="#8b8b8b;" className={estilos.parrafo}>
             {descripcion}
           </Typography>
       </CardContent>
          <CardActions className={estilos.contenedorBoton}>
             <button className={estilos.boton}>Donar</button>
         </CardActions>
      </div>
      </Card>
   
    </container>



    /*<Card sx={{ maxWidth: 345 }} className={estilos.cards}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image="/img/edificiojn.jpg"
    />
    <CardContent>
      <Typography className={estilos.titulos} gutterBottom variant="h5" component="div">
       Donacion de plasma
      </Typography>
      <Typography className={estilos.descripcion} variant="body2" color="#737373">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions className={estilos.boton}>
      <Button size="large" variant="outlined" className={estilos.btndonar} >Donar</Button>
      
    </CardActions>
  </Card>*/

    /* <Box
       className={estilos.contenedor}
       direction="column"
       sx={{
         width: 400,
         height: 400,
   
       }}
     >
       <div className={estilos.imagen}>
         <image src="/img/descarga.jfif" alt="" />
       </div>
 
       <div className={estilos.texto}>
         <h1 className={estilos.txtdonacion}>Donacion de plasma</h1>
         <p>
           Lorem ipsum dolor sit amet, conseteur sadipscing elit, sed diam nonumy
           eirmod tempor
         </p>
       </div>
       <div className={estilos.contieneBtn}>
         <Button
           className={estilos.btn}
           variant="contained"
           defaultValue={30}
           sx={{
             width: 140,
             height: 45,
             backgroundColor: "#3C3C3C",
             color: "white",
           }}
         >
           Donar
         </Button>
       </div>
     </Box>*/

  );
}