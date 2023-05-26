import React from "react";
import style from "./login.module.css";

export default function Login() {
  return (
    <div className={style.container}>
      <h1 className={style.welcome}>Welcome</h1>
      <h2 className={style.welcome}>Sing in...!</h2>
      <p className={style.welcome}>david@gmail.com - 1234</p>
    </div>
  );
}
