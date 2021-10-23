
import './App.css';
import {  Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';
import Catalogue from './components/CatalogueComponent';

class App extends Component {
  render() {
    return (
      <div >
        <Navbar className="navbar" dark>
          <div className="container">
            <NavbarBrand href="/">Pharmacy Absolute Care</NavbarBrand>
          </div>
        </Navbar>
        <Catalogue />
      </div>
    );
  }
}

export default App;
