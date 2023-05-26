import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import style from './details.module.css'

export default function Details() {

  const { id } = useParams();  
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((char) => {
      if(char.name){        
        setCharacter(char)
      }else{
        window.alert('No hay personajes con ese ID')
      }
    })
    .catch((err) => {
      window.alert('No hay personajes con ese ID')
    })
    return setCharacter({})
  }, [id])

  return (
    <div className={style.container} >
      <div className={style.nameImage}>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} /> 
        <h2 className={style.origin}>Origen: {character.origin?.name}</h2>
        <h2 className={style.especie}>Especie: {character.species}</h2>
        <h2 className={style.estatus}>Estatus: {character.status}</h2>
        <h2 className={style.genero}>Genero: {character.gender}</h2>        
      </div>      
    </div>
  )
}

