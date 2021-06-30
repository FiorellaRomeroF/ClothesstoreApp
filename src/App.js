import { Fragment } from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/navs/navbar';
import Nav from './components/navs/nav';
import './App.css';
import Footer from './components/footer/footer';
import Home from './components/home/home';

const App = () => {
  return (
    <HashRouter>
      <Fragment>
        <Navbar/>
        <Nav/>
        <Home/>
        <Footer/>
      </Fragment>
    </HashRouter>
  );
}

export default App;
