import { useState } from "react";
import Login from "./Login";
import validate from "./validate";
import style from './form.module.css'

export default function Form(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (event) => {   
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };
  return (
    <div> 
      <Login/>    
      <div className={style.container}>        
        <form onSubmit={handleSubmit}>
          <div style={errors.username ? { border: "1px solid firebrick" } : null}>            
            <input
              className={style.inputEmail}
              value={userData.username}
              placeholder="email"              
              name="username"
              type="text"
              onChange={handleInputChange} 
              autoComplete="off"
            />
          </div>
          <div>            
            <input
              className={style.inputPassw}
              value={userData.password}
              placeholder="Password"
              name="password"
              type="password"
              onChange={handleInputChange}
              autoComplete="of"              
            />
          </div>
          <button className={style.buttonLogin} type="submit">Login</button>
        </form>        
      </div>
    </div>
  );
}
