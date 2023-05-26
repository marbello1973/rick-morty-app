import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from "./component/Cards/Cards.jsx";
import Nav from "./component/Nav/Nav.jsx";
import About from "./component/About/About.jsx";
import Details from "./component/Details/Details.jsx";
import Form from "./component/Forms/Form.jsx";
import Favorite from "./component/Favorite/Favorites.jsx";
require("dotenv").config();

function App() {
  const [characters, setCharacters] = useState([]);
  //comentario subir rama
  const onSearch = async (id) => {
    await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.name) {
          const aux = characters.filter((char) => char.id === data.id);
          if (!aux.length)
            return setCharacters((oldChars) => [...oldChars, data]);
          return window.alert("Personaje en favoritos");
        } else {
          window.alert("No hay personajes con esa ID");
        }
      });
  };

  const onClose = async (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = process.env.REACT_APP_USERNAME;
  // console.log(username);
  const password = process.env.REACT_APP_PASSWORD;
  //console.log(password);

  function login(userData) {
    if (
      userData.password === password &&
      userData.username === username.toLowerCase()
    ) {
      setAccess(true);
      navigate("/home");
    } else if (userData.username !== username.toLowerCase()) {
      alert(`Is not a valid ${username}`);
    } else if (userData.password !== password) {
      alert(`Is not a valid ${password}`);
    } else {
      alert(`${username} and ${password} are not valid credentials`);
    }
  }

  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  return (
    <div className="App">
      {location.pathname === "/" ? null : <Nav onSearch={onSearch} />}
      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route
          exact
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route exact path="/favorite" element={<Favorite />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
