import React from 'react';
import s from './Cards.module.css';

import Card from './Card.jsx';

export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  
  if(cities.length) {
    return (
      <div className={s.cards}>
        {
          cities.map( city => {
            return (
            <Card 
              key={city.id}
              name={city.name} 
              max={city.max} 
              min={city.min} 
              img={city.img} 
              onClose={onClose}
              id={city.id}
            />)
          })
        }
      </div>
    )
  } else {
    return(
      <div className={s.cards}>Sin ciudades</div>
    )
  }
  
};
