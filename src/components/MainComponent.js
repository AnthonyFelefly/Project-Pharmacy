
import AboutUs from './AboutUs';
import { Component } from 'react';
import Home from './HomeComponent';
import Catalogue from './CatalogueComponent';
import {PRODUCTS} from '../shared/products.js';
import { CATEGORIES } from '../shared/categories';
import ProductDetail from './ProductDetailComponent';
import NavBar from "./NavbarComponent";
import Footer from './FooterComponent';
import Contact from "./ContactComponent";
import {Switch,Route,Redirect,useParams} from'react-router-dom';
class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      products:PRODUCTS,
      categories:CATEGORIES,
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
    const AboutPage=()=>{
      return(
        <AboutUs/>
      );}
    return (
      <div >
        <NavBar/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route path="/AboutUs" component={AboutPage}/>
          <Route exact path='/catalogue' >
            <div>
            <Catalogue products={this.state.products} onClick={(productId)=>this.onProductSelect(productId)}/>
            <ProductDetail product={this.state.products.filter((product)=>product.id===this.state.selectedProduct)[0]} onclick={0}/>
            </div>
          </Route>
          <Route exact path="/contactus">
            <Contact/>
          </Route>
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}
export default Main;
