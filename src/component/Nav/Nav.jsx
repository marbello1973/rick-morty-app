import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./nav.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function Nav({ onSearch }) {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const goto = (element) => {
    const GO = element.target.innerText || element.target.id;
    navigate(`/${GO}`);
    setClicked(false);
  };
  return (
    <div className={style.container}>
      <div className={`${style.initial} ${clicked ? style.active : ""}`} />
      <div className={`${style.navIcon} ${clicked ? style.open : ""}`} onClick={handleClick} />      
      <div onClick={goto} className={`${style.links} ${clicked ? style.active : ""}`}>
        <div className={style.about} >
          <h2 id="about" onClick={goto}>About</h2>
        </div>
        <div className={style.favorite}>
          <h2 id="Favorite" onClick={goto}>Favorite</h2>
        </div>
        <div className={style.home}>
          <h2 onClick={goto}>Home</h2>
        </div>     
      </div>
        <SearchBar clicked={clicked} onSearch={onSearch} />      
    </div>
  );
}
