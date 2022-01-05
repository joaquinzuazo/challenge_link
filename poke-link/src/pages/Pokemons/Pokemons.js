import React, { useState, useEffect } from 'react'
import { getPoke } from '../../api/pokeApi'
import { TableContainer, 
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    makeStyles,
    TextField,
    Grid,
    Button,
    CircularProgress
    } from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles({
    table: {
      maxWidth: 650,
    },
    divContainer: {
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        marginTop:'5%'
      },
    a:{
        textDecoration:'none',
        color:'blue'
      },
    field:{
        margin:'5%'
    },
    buttons:{
        marginTop:'5%'
    }
  });
  

export default function Pokemons() {

    const classes = useStyles();

    const [pokemons, setPokemons]=useState([])
    const [pokemonsAux, setPokemonsAux]=useState([])
    const [next, setNext]=useState(null)
    const [previous, setPrevious]=useState(null)
    const [loading, setLoading]=useState(true)

    useEffect(() => {
        getPokemons('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10')
    }, [])

    const handlePokemons=(e)=>{
        if(e.target.value.length>0){
            const result=pokemons.filter(pokemon=>pokemon.name.indexOf(e.target.value)!==-1)
            setPokemons(result)
        } else {
            setPokemons(pokemonsAux)
        }
    }

    const getPokemons=async(url)=>{
        setLoading(true)
        setTimeout(async() => {
            const response=await getPoke(url)
            setPokemons(response.data.results)
            setPokemonsAux(response.data.results)
            setNext(response.data.next)
            setPrevious(response.data.previous)
            setLoading(false)
        }, 1000);


    }

    return (
        <div>
            {loading ? 
            (
            <div className={classes.divContainer}>
                <CircularProgress />
            </div>
            ) 
            :
            (
            <>
            <form>
                <TextField
                    id="outlined-full-width"
                    label="Busqueda"
                    style={{ marginTop: 50 }}
                    placeholder="Ingrese el nombre del pokemon"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                    onChange={handlePokemons}
                />
            </form>
            <TableContainer className={classes.divContainer}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Pokemons</TableCell>
                      <TableCell align="right">Link externo</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {pokemons.map((pokemon, index)=>(
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                            {pokemon.name}
                        </TableCell>
                        <TableCell align="right"><a className={classes.a} href={pokemon.url}><LinkIcon /></a></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
            </TableContainer>
            <Grid className={classes.buttons} container spacing={2} justifyContent='center'>
                <Grid item>
                    <Button variant='contained' color='primary' onClick={()=>getPokemons(previous)} disabled={previous ? false : true}>
                        Anterior
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant='contained' color='secondary' onClick={()=>getPokemons(next)}>
                        Siguiente
                    </Button>
                </Grid>
            </Grid>
            </>
            )}
        </div>
    )
}
