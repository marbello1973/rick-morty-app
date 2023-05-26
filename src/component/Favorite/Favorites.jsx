import React from 'react'
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux'
import { filterCards, orderCards } from '../../Reduxe/Action/favoriteSlice';
import style from './favorite.module.css'


export default function Favorites() {
  const dispatch = useDispatch();
  const charactersFilter = useSelector(state => state.favorites.filter)
  const handleFilterForGender = (element) => dispatch(filterCards(element.target.value));
  const handleFilterForOrder = (element) => dispatch(orderCards(element.target.value))

  return (
    <div className={style.container}>
      <div className={style.optionsContainer}>
        <select className={style.selectOrder} onChange={handleFilterForOrder}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <div>
          <select className={style.selectOption} onChange={handleFilterForGender}>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="GenderLess">Gender Less</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>
        <div className={style.imageCard}>
          {
            charactersFilter.map(character =>(
              <Card
                data = {character}
                onClose = {null}
                key = {character.id}
              />
            ))
          }
        </div>       
    </div>
  )
}

