import React from 'react';
import Grid from '@material-ui/core/Grid';
import Banner from '../../img/banner-principal-desktop.jpg';
import ModaInfantil from '../../img/categorias-destacadas-moda-infantil.png';
import Proteccion from '../../img/categorias-destacadas-proteccion.png'
import './home.css'

const Home = () => {
  return ( 
    <div>
      <div>
        <img  className= 'banner-principal' src={ Banner }/>
      </div>
      <Grid   container direction="row" justify="center" alignItems="center">
        <Grid item>
          <img className= 'moda-infantil' src= { ModaInfantil }/>
        </Grid>
        <Grid item>
          <img className= 'proteccion' src= { Proteccion }/>
        </Grid>
      </Grid>
      <div className= 'mas-buscados'>
        <h4>PRODUCTOS MÁS BUSCADOS</h4>
      </div>
    </div>

  )
};

export default Home;