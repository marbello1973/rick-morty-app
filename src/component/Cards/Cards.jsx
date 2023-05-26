/* eslint-disable array-callback-return */
import React from "react";
import Card from "../Card/Card"
import style from "./cards.module.css"

export default function Cards({ onClose, characters }) {
  return (
    <div className={style.container}>
      {
        characters.map(character => (
          <Card
            data={character} 
            onClose={onClose} 
            key={character.id} 
          />
        ))
      }
    </div>
  );
}
