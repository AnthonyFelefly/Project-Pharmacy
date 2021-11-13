

import { Component } from 'react';
import Home from './HomeComponent';
import Catalogue from './CatalogueComponent';
import {PRODUCTS} from '../shared/products.js';
import ProductDetail from './ProductDetailComponent';
import Header from "./HeaderComponent";
import Footer from './FooterComponent';
import {Switch,Route,Redirect} from'react-router-dom';
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
    const HomePage=()=>{
      return(
        <Home/>
      );
    }
    return (
      <div >
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path='/catalogue' >
            <div>
            <Catalogue products={this.state.products} onClick={(productId)=>this.onProductSelect(productId)}/>
            <ProductDetail product={this.state.products.filter((product)=>product.id===this.state.selectedProduct)[0]} onclick={0}/>
            </div>
          </Route>
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}
export default Main;
