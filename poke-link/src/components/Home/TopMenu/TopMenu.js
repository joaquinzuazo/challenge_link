import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function TopMenu() {
    return (
      <AppBar position="fixed">
        <Typography variant="h4" component="div" align='center'>
          CHALLENGE FRONTEND DEVELOPER LINK
        </Typography>
        <Toolbar>
          <Button component={Link} to={'/'} color="inherit" sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              Home
            </Typography>
          </Button>
          <Button component={Link} to={'/pokemons'} color="inherit" sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              Pokemomes
            </Typography>
          </Button>
          <Button component={Link} to={'/contact'} color="inherit" sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              Contacto
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
     
    )
}
