import React, { useState } from 'react';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AddIcon from '@material-ui/icons/Add';


const Footer = () => {

  return (
    <FooterContainer className= "main-footer">
      <div className= "footer-middle">
        <div className= "container">
          <div className= "row">
            <div className= "col-md-3 col-sm-6">
              <h5 className= "column">POLÍTICA <AddIcon className=  "more-icon" style= {{ borderRadius: '100', color: 'white', fontSize: 30 }}/>
              </h5>
              <ul className= "list-unstyled">
                <a>Políticas de privacidad</a>
                <a>Políticas de cambio</a>
                <a>Políticas de envío</a>
                <a>Términos y condiciones</a>
                <a>Responsabilidad social</a>
              </ul>
            </div>
            <div className= "col-md-3 col-sm-6">
              <h5>SOBRE NOSOTROS <AddIcon className=  "more-icon" style= {{ borderRadius: '100', color: 'white', fontSize: 30 }}/>
              </h5>
              <ul className= "list-unstyled">
                <a>Encuentra tu tienda</a>
                <a>Contáctanos</a>
                <a>Trabaja con nosotros</a>
              </ul>
            </div>
            <div className= "col-md-3 col-sm-6">
              <h5>SIGUENOS EN <AddIcon className=  "more-icon" style= {{ borderRadius: '100', color: 'white', fontSize: 30 }}/>
              </h5>
              <ul className= "list-unstyled">
                <a className= "redes"><FacebookIcon className= "social-icon" style= {{ fontSize: 30, borderRadius: 100, backgroundColor: "white", color: "black"}}/></a>
                <a className= "redes"><TwitterIcon className= "social-icon" style= {{ fontSize: 30, borderRadius: 100, backgroundColor: "white", color: "black"}}/></a>
                <a className= "redes"><InstagramIcon className= "social-icon" style= {{ fontSize: 30, borderRadius: 100, backgroundColor: "white", color: "black"}}/></a>
                <a className= "redes"><YouTubeIcon className= "social-icon" style= {{ fontSize: 30, borderRadius: 100, backgroundColor: "white", color: "black"}}/></a>
              </ul>
            </div>
          </div>
          <Divider variant= "middle"/>
          <div className= "row">
            <div className= "copyright">
              <p>
                &copy;Copyright Colombia | Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  )
}


export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
  background: black;
  padding-top: 3rem;
  color: white;
}

.row {
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-self: center;
}

.copyright {
  padding-top: 3rem;
  display: flex;
  justify-content: center;
}

.social-icon {
  margin-top: 10px;
  margin-inline: 5px;
}
`;