import React from "react";
import s from "./About.module.css"


export default function About () {
  return(
    <div>
      <div className={s.about}>
        <div className={s.title}>
          <a id={s.icons} target="_blank" rel="noreferrer" href="https://github.com/yulianacastrodiaz" title="My GitHub"><img src="https://img.icons8.com/bubbles/50/000000/github.png" alt="Icono de GitHub" /></a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yulianacastrodiaz/" title="My LinkedIn"><img src="https://img.icons8.com/bubbles/50/000000/linkedin.png" alt="Icono de Linkedin"/></a>
          <hr id={s["rayita-left"]}/>
          <h2 className={s.welcome}>Welcome</h2>
          <hr id={s["rayita-right"]}/>
        </div>
        <div className={s.imgandp}>
          <img src="/img/yuliana.jpg" alt="About_yuli" id={s["img-yuli"]}></img>
          <div className={s.contenido}>
            <h3 className={s.aboutme}>A little bit about me</h3>
            <div className={s.parrafos}>
              <div>
                <h5 id={s.inspires}>what <b>inspires</b> me</h5>
                <p id={s.parrafo1}>
                  <p>I have always been a curious person. Many things amaze me and make me want to keep doing things, some of them are:</p>
                  <ul>
                    <li>My friends</li>
                    <li>Technology</li>
                    <li>Knowledge</li>
                    <li>Passionate people</li>
                    <li>Teamwork</li>
                    <li>Strawberries</li>
                  </ul>
                </p>
              </div>
              <div>
                <h5 id={s.Iknow}>what <b>I know</b></h5>
                <p id={s.parrafo2}>
                  <p>My knowledge is related to backend and frontend technologies. Also, I combine them with my logical and artistic skills.</p>
                  <ul>
                    <li>Data structures</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>Sorting algorithms</li>
                    <li>Self-study</li>
                  </ul>
                </p>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}