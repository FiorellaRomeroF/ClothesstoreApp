import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import Grid from '@material-ui/core/Grid';

const Navbar = () => {
  return (
    <header>
      <nav className= "navbar-items">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <NavLink className= "navbar-logo" to= "/" exact>
              CLOTHESSTORE
            </NavLink>
          </Grid>
          <Grid item>
            <ul className= "navbar-menu">
              <li>
                <form className= "nav-search">
                  <input className= "search" type= "text" placeholder= "Buscar"/>
                  <NavLink to="/" exact>
                    <SearchOutlinedIcon className= 'search-position' style= {{ backgroundColor: '#cccccc', color: 'black', fontSize: 30 }}/>
                  </NavLink>
                </form>
              </li>
              <li className= "shopping">
                <ShoppingCartOutlinedIcon className= "icon-position" fontSize= "large"/>
              </li>
              <li className= "person">
                <PersonOutlineOutlinedIcon className= "icon-position person" fontSize= "large"/>
              </li>
              <li>
                <button className= "button">Iniciar sesión</button>
              </li>
            </ul>
          </Grid>
        </Grid>
      </nav>
    </header>
  )
};

export default Navbar;