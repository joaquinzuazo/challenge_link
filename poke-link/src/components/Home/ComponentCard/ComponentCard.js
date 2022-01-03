import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ComponentCard(props) {

  const { title, home } = props

  return (
      <Card sx={{ maxWidth: 500 }}>
          <CardContent>
              <Typography sx={{ fontSize: 34 }} color="text.secondary" gutterBottom align='center'>
                {title}
              </Typography>
          </CardContent>
          {home && <CardActions>
              <Button component={Link} to={'/'} size="small">Volver</Button>
          </CardActions>
          }
      </Card>
  )
}
