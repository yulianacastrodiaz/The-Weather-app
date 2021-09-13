import React, { useState } from "react";
import s from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {

  const [city, setCity] = useState("");
  return (
    <form className="form-inline" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('')
    }}>
      <input 
        className="form-control mr-sm-2"
        type="text" 
        placeholder="City..."
        aria-label="City..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input 
      className="btn btn-outline-primary my-2 my-sm-0"
      type="submit" 
      value="Add"
      id={s.btn}/>
    </form>
  );
}
