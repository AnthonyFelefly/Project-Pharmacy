

import { Component } from 'react';
import Catalogue from './CatalogueComponent';
import {PRODUCTS} from '../shared/products.js'
import ProductDetail from './ProductDetailComponent'
import Header from "./HeaderComponent"
import Footer from './FooterComponent'
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
    console.log(productId);
    
    }
  render() {
    return (
      <div >
        <Header/>
        <Catalogue products={this.state.products} onClick={(productId)=>this.onProductSelect(productId)} />
        <ProductDetail product={this.state.products.filter((product)=>product.id===this.state.selectedProduct)[0]} onClick={0} />
        <Footer/>
      </div>
    );
  }
}
export default Main;
