import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../Reduxe/Action/favoriteSlice";
import { BsFillHeartFill, BsHeart } from "react-icons/bs"
import style from "./card.module.css";

export default function Card({ data, onClose }) {
  //console.log(data)
  const navigate = useNavigate();
  const [isFav, setisFav] = useState();
  const myFavorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === data.id) {
        setisFav(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myFavorites]);

  function handleFavorite() {
    if (isFav) {
      setisFav(false);
      dispatch(removeFavorite(data));
    } else {
      setisFav(true);
      dispatch(addFavorite(data));
    }
  }

  return (
    <div className={style.container}>
      <div className={style.buttons}>
        {isFav ? (
          <button className={style.buttonOff} onClick={handleFavorite}> <BsFillHeartFill /></button>
        ) : (
          <button className={style.buttonOn} onClick={handleFavorite}><BsHeart /></button>
        )}
      </div>
      <div className={style.containerImage}>
        {onClose ? <button className={style.buttonX} onClick={() => onClose(data.id)}>X</button> : null}
        <h2 className={style.name} onClick={() => navigate(`/details/${data.id}`)}>{data.name}</h2>
        <h2 className={style.id} >{data.id}</h2>
        <img
          className={style.image}
          src={data.image}
          alt={`${data.image}`}
          onClick={() => navigate(`/details/${data.id}`)}
        />
      </div>
    </div>
  );
}
