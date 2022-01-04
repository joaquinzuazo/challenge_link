import React from 'react'
import { Container, Typography, Grid, Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'


const useStyle=makeStyles({
  card:{
    marginTop:'15%',
  },
})


export default function ComponentCard(props) {

  const { title, subtitle, home } = props
  const classes=useStyle()

  return (
    <div className={classes.card}>
      <Container maxWidth="sm">
        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
          {title}
        </Typography>
        <Typography variant='h5' align='center' color='textSecondary' paragraph>
          {subtitle}
        </Typography>
        {home &&
        <div>
          <Grid container spacing={1} justify='center'>
            <Grid item>
              <Button variant='contained' color='primary' component={Link} to={'/'} >
                Home
              </Button>
            </Grid>
          </Grid>
        </div>
        }
      </Container>
    </div>
  )
}
