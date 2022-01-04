import React from 'react'
import { Typography, AppBar, Toolbar, makeStyles } from '@material-ui/core'
import AdbIcon from '@material-ui/icons/Adb';
import { Link } from 'react-router-dom';

const useStyle=makeStyles({
  appbar:{
    display:'flex',
    flexDirection:'row'
  },
  appbarToolbar:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
  },
  a:{
    textDecoration:'none',
    margin:'0px 20px',
    color:'white'
  }
})

export default function TopMenu() {

  const classes=useStyle()

  return (
    <>
      <AppBar position='relative'>
        <Toolbar className={classes.appbarToolbar}>
            <div className={classes.appbar}>
              <AdbIcon />
              <Typography variant='h5'>
                PokeApi - Link
              </Typography>
            </div>
            <div className={classes.appbar}>
              <Typography className={classes.a} variant='h6' component={Link} to={'/'}>
                Home
              </Typography>
              <Typography className={classes.a} variant='h6' component={Link} to={'/pokemons'}>
                Pokemons
              </Typography>
              <Typography className={classes.a} variant='h6' component={Link} to={'/contact'}>
                Contacto
              </Typography>
            </div>
        </Toolbar>
      </AppBar>
    </>
    
  )
}
