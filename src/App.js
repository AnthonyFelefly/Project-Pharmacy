
import './App.css';
import {  Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';
import Catalogue from './components/CatalogueComponent';
import {PRODUCTS} from './shared/products.js'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      products:PRODUCTS
    };
  }
  render() {
    return (
      <div >
        <Navbar className="navbar" dark>
          <div className="container">
            <NavbarBrand href="/">Pharmacy Absolute Care</NavbarBrand>
          </div>
        </Navbar>
        <Catalogue products={this.state.products} />
      </div>
    );
  }
}

export default App;
