import React from 'react';
import SearchBar from './SearchBar.jsx';
import s from './Nav.module.css';
import { Link } from "react-router-dom";



function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-light" id={s["navar"]}>
      <div>
        <Link to='/' id={s.home}>
          <h3>The Weather App</h3>
        </Link>  
      </div>
        <Link to='/about' id={s.about}>
          <h4>About</h4>
        </Link>
      <div>
        <SearchBar 
          onSearch={onSearch}
        />
      </div>
    </nav>
  );
};

export default Nav;
