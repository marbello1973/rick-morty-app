import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { FaArtstation, FaYoutube } from "react-icons/fa"
import style from "./about.module.css"
require("dotenv").config();

export default function About() {  
  return (
    <div className={style.container}>
      <div>
        <h1>Bienvenidos Rick And Morty App</h1>
        <h2>David Marbello Zabala</h2>
        <h2>Mi primera pagina web</h2>
      </div>
      <div>
        <span>
          <section className={style.parrafo}>
            Programador <strong>FullStack Web Developer</strong>, mi afinidad por la tecnologia y
            el desarrollo de aplicaciones FullStack            
            Estudie una carrera de ingenieria de sistemas hasta IV semestre en la
            universidad.          
            cuento con otra carrera de Animador 3d en la falcultad del sena
            regional atlantico. y me encanta la programacion
            Otros conocimientos, python nivel basico, borland c++ nivel basico, office nivel basico, git nivel basico, 
          </section>
        </span>
      </div>
      <div>
        <section>
          <a 
            href={process.env.REACT_APP_LINKEDIN} 
            type={"hidden"}
            target={"_blank"} 
            rel={"nooper noreferrer"}> 
            <BsLinkedin className={style.BsLinkedin}/>
          </a>          
          <a
            href={process.env.REACT_APP_GITHUB}
            type={"hidden"}
            target={"_blank"}
            rel="noopener noreferrer">
           <BsGithub className={style.BsGithub} />
          </a>
          <a
            href={process.env.REACT_APP_ARTSTATION}
            type={"hidden"}
            target="_blank"
            rel="noopener noreferrer">
            <FaArtstation className={style.FaArtstation} />
          </a>
          <a
            href={process.env.REACT_APP_YOUTUBE}
            target="_blank"
            rel="noopener noreferrer">
            <FaYoutube className={style.FaYoutube} />
          </a>
        </section>
      </div>
    </div>
  );
}
