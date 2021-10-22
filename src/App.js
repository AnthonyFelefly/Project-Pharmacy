
import './App.css';
import {  Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="navbar" dark>
          <div className="container">
            <NavbarBrand href="/">Pharmacy Absolute Care</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
