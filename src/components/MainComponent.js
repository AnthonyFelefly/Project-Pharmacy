
import {  Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';
import Catalogue from './CatalogueComponent';
import {PRODUCTS} from '../shared/products.js'
import ProductDetail from './ProductDetailComponent'
class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      products:PRODUCTS,
      selectedProduct:null
    };
  }
  onProductSelect(productId){
    this.setState({selectedProduct:productId});
    
    }
  render() {
    return (
      <div >
        <Navbar className="navbar" dark>
          <div className="container">
            <NavbarBrand href="/">Pharmacy Absolute Care</NavbarBrand>
          </div>
        </Navbar>
        <Catalogue products={this.state.products} onClick={(productId)=>this.onProductSelect(productId)} />
        <ProductDetail product={this.state.products.filter((product)=>product.id===this.state.selectedProduct)[0]} />
      </div>
    );
  }
}
export default Main;
