import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import estilos from './header.module.css';
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react"
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react';
import LoginIcon from '@mui/icons-material/Login';

/*
const pages = ['Donar', 'Turnos'];
const settings = ['Perfil', 'Cuenta', <a
  href={`/api/auth/signout`}
  onClick={(e) => {
    e.preventDefault()
    signOut()
  }}
>
  Cerrar sesion
</a>];
*/

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


  return (
    <AppBar position="static" className={estilos.Appbar}>
      <Container maxWidth="xl" sx={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
      }} >
        <Toolbar disableGutters sx={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
        }} >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          Hospital De Clinicas
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '16px',
            }}
          >
            Hospital De Clinicas
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );          
}
export default ResponsiveAppBar;
