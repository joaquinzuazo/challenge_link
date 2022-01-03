import React, { useState, useEffect } from 'react'
import { getPoke } from '../../api/pokeApi'
import './Pokemons.scss'

export default function Pokemons() {

    useEffect(() => {
        const getPokemons=async()=>{
            try {
                const response=await getPoke()
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
        getPokemons()
    }, [])

    return (
        <div className='pokemons'>
            <h2>pokemons</h2>
        </div>
    )
}
