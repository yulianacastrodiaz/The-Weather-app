import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

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

export default function Card ({min, max, name, img, onClose, id}) {
  return (
    <div className={`${styles.clima}`} >
      <div className={`${styles.divboton}`}>
        <button onClick={() => onClose(id)} id={`${styles.boton}`} >X</button>
      </div>
      <div className={styles.divhead}>
        <img src="/img/pin (2).png" alt="Imagen de ubicacion" className={styles.gps}></img>
        <div className={styles.text}>
          <Link to={`/ciudad/${id}`} id={styles.nameCity} >
            <h4>{name}</h4>
          </Link>
        </div>
      </div>
      <img src={imagenes[img]} alt='Imagen del clima' id={`${styles.img}`}></img>
      <div>
      </div>
      <div className={styles.temperatura}>
        <div className={`${styles.max}`}>
          Max
          <p id={styles.numberMax}>{`${max}°`}</p>
        </div>
        <div className={styles["vertical-line"]}>
          <hr></hr>
        </div>
        <div className={`${styles.min}`}>
          min
          <p id={styles.numberMin}>{`${min}°`}</p>
        </div>
      </div>
    </div>
  )
};
