
import AboutUs from './AboutUs';
import { Component } from 'react';
import Home from './HomeComponent';
import Catalogue from './CatalogueComponent';
import AdminPage from './AdminPage';
import ProductDetail from './ProductDetailComponent';
import NavBar from "./NavbarComponent";
import Footer from './FooterComponent';
import Contact from "./ContactComponent";
import {Switch,Route,Redirect,useParams, withRouter} from'react-router-dom';
import {connect} from 'react-redux';
import { addProduct ,fetchProducts} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
const mapStateToProps=state=>{
  return {
    products: state.products,
    categories: state.categories
  }
}
const mapDispatchToProps=(dispatch)=>({
  addProduct:(productName,category,description,application,quantity,price)=> dispatch(addProduct(productName,category,description,application,quantity,price)),
  fetchProducts: () => { dispatch(fetchProducts())},
  resetMessageForm:()=>{dispatch(actions.reset('message'))}

});
class Main extends Component {
  constructor(props){
    super(props);
    
  }
  componentDidMount(){
    this.props.fetchProducts();
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
        <Catalogue products={this.props.products.products.filter((product)=>product.category===cat[0].id)} categ={cat}
          productsLoading={this.props.products.isLoading}
          productsErrMess={this.props.products.errMess}/>
        </>

      );

    } 
    const ProductWithId=()=>{
      let {catId,productId}=useParams();
      const cat=this.props.categories.filter((categ)=>categ.id===parseInt(catId,10))[0];
      const product=this.props.products.products.filter((product)=>product.id===parseInt(productId,10))[0];
      return(
        <>
        <ProductDetail product={product} categ={cat}
          isLoading={this.props.products.isLoading}
          ErrMess={this.props.products.errMess}/>
        </>

      );

    } 
    const AboutPage=()=>{
      return(
        <AboutUs/>
      );}
    return (
      <div >
        <NavBar categories={this.props.categories}/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path='/catalogue'>
          <Catalogue products={this.props.products.products} categ={this.props.categories}
            productsLoading={this.props.products.isLoading}
            productsErrMess={this.props.products.errMess}/>
            
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
            <Contact resetMessageForm={this.props.resetMessageForm}/>
          </Route>
          <Route exact path="/admin">
            <AdminPage categories={this.props.categories} addProduct={this.props.addProduct}/>
          </Route>
          <Route path="/aboutus" component={AboutPage}/>
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
