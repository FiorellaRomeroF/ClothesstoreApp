import { React, useState } from 'react';
import '../../App.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Items from './navItems';

const Nav = () => {
  const [Menu, setMenu] = useState(false);

  return (
    <nav className= "nav-items">
      <button className= "btn menu-icon" onClick= { () => setMenu(!Menu) }>
        {Menu ? (
          <CloseIcon fontSize= 'large'/>
        ) : (
          <MenuIcon fontSize= 'large'/>
        )}
      </button>
      <ul className= {Menu ? "nav-link-mobile" : "nav-link"} onClick= { () => setMenu(false) }>
        {Items.map((item, index) => {
          return (
            <li key= {index}>
              <a  className= {item.className}
              href= {item.url}>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  );
};


export default Nav;