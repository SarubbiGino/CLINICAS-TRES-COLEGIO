import React from 'react'
import Box from '@mui/material/Box';
import styles from "../infoRequisitos/requisitos.module.css"
import { requisitosData } from "./requisitosData"

function requisitos() {
  return (
    <Box className={styles.contenedor}>
        <div className={styles.contenedorCard}>
        {requisitosData.map((val, key) => {
          return (
            <Box key={key} 
            className={styles.contenedorDetalles}
            >
              <div >{val.icon}</div>
              <div >{val.text}</div>
            </Box>
          );
        })}
       
        </div>
    </Box>
  )
}

export default requisitos
