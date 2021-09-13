import React from "react";
import s from "./City.module.css"

var imagenes = {
  "01d": "/img/01d.png",
  "01n": "/img/01n.png",
  "02d": "/img/02d.png",
  "02n": "/img/02n.png",
  "03d": "/img/03d&03n.png",
  "03n": "/img/03d&03n.png",
  "04d": "/img/04d&04n.png",
  "04n": "/img/04d&04n.png",
  "09d": "/img/09d&09n.png",
  "09n": "/img/09d&09n.png",
  "10d": "/img/10d.png",
  "10n": "/img/10n.png",
  "11d": "/img/11d&11n.png",
  "11n": "/img/11d&11n.png",
  "13d": "/img/13d&13n.png",
  "13n": "/img/13d&13n.png",
  "50d": "/img/50d&50n.png",
  "50n": "/img/50d&50n.png"
}

export default function City({ city }) {
  return (
    <div className={s.city}>
      <div>
        <div className={s.header}>
          <h2 id={s.name}>{city?.name}</h2>
          <img src={imagenes[city.img]} alt='Imagen del clima' id={`${s.img}`}></img>
        </div>
        <div className={s.info}>
          <table className={s.table}>
            <tr className={s.tr}>
              <td>Temperatura:</td>
              <td>{city?.temp} ºC</td>
            </tr>
            <tr className={s.tr}>
              <td>Clima:</td>
              <td>{city?.weather}</td>
            </tr>
            <tr className={s.tr}>
              <td>Viento:</td>
              <td>{city?.wind} km/h</td>
            </tr>
            <tr className={s.tr}>
              <td>Nubes:</td>
              <td>{city?.clouds}</td>
            </tr>
            <tr className={s.tr}>
              <td>Latitud:</td>
              <td>{city?.latitud}º</td>
            </tr>
            <tr className={s.tr}>
              <td>Longitud:</td>
              <td>{city?.longitud}º</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}