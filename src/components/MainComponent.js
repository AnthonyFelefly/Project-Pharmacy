
import AboutUs from './AboutUs';
import { Component } from 'react';
import Home from './HomeComponent';
import Catalogue from './CatalogueComponent';

import ProductDetail from './ProductDetailComponent';
import NavBar from "./NavbarComponent";
import Footer from './FooterComponent';
import Contact from "./ContactComponent";
import {Switch,Route,Redirect,useParams, withRouter} from'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps=state=>{
  return {
    products: state.products,
    categories: state.categories
  }
}
class Main extends Component {
  constructor(props){
    super(props);
    
  }
 
  render() {
    const HomePage=()=>{
      return(
        <Home/>
      );
    }
    const ProductByCategory=()=>{
      let {catId}=useParams();
      const cat=this.props.categories.filter((categ)=>categ.id===parseInt(catId,10));
      return(
        <>
        <Catalogue products={this.props.products.filter((product)=>product.category===cat[0].id)} categ={cat}/>
        </>

      );

    } 
    const ProductWithId=()=>{
      let {catId,productId}=useParams();
      const cat=this.props.categories.filter((categ)=>categ.id===parseInt(catId,10))[0];
      const product=this.props.products.filter((product)=>product.id===parseInt(productId,10))[0];
      return(
        <>
        <ProductDetail product={product} categ={cat}/>
        </>

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
          <Route exact path='/catalogue'>
          <Catalogue products={this.props.products} categ={this.props.categories}/>
            
            </Route>
          <Route exact path='/catalogue/:catId' >
            <div>
            <ProductByCategory/>
            </div>
          </Route>
          <Route exact path='/catalogue/:catId/:productId'>
            <ProductWithId/>
          </Route>
          <Route exact path="/contactus">
            <Contact/>
          </Route>
          <Route path="/aboutus" component={AboutPage}/>
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps)(Main));
