
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
import { addProduct ,fetchProducts,fetchCategories,fetchUsers,addCategory} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
import { Loading } from './LoadingComponent';
const mapStateToProps=state=>{
  return {
    products: state.products,
    categories: state.categories,
    users: state.users,
  }
}
const mapDispatchToProps=(dispatch)=>({
  addProduct:(productName,category,description,application,quantity,price)=> dispatch(addProduct(productName,category,description,application,quantity,price)),
  addCategory:(description)=> dispatch(addCategory(description)),
  fetchProducts: () => { dispatch(fetchProducts())},
  fetchCategories: () => { dispatch(fetchCategories())},
  fetchUsers: () => { dispatch(fetchUsers())},
  resetMessageForm:()=>{dispatch(actions.reset('message'))},
  resetProductForm:()=>{dispatch(actions.reset('product'))}
});
class Main extends Component {
  constructor(props){
    super(props);
    
  }
  componentDidMount(){
    this.props.fetchProducts();
    this.props.fetchCategories();
    this.props.fetchUsers();
    
  }
  componentDidUpdate(){
    console.log(this.props.categories.categories);
  }
 
  render() {
    const HomePage=()=>{
      return(
        <Home/>
      );
    }
    const ProductByCategory=()=>{
      let {catId}=useParams();
      const cat=this.props.categories.categories.filter((categ)=>categ.id===parseInt(catId,10));
      return(
        <>
        <Catalogue products={this.props.products.products.filter((product)=>product.category===cat[0].id)} categ={cat}
          productsLoading={this.props.products.isLoading}
          productsErrMess={this.props.products.errMess}
          categoriesLoading={this.props.categories.isLoading}
          categoriesErrMess={this.props.categories.errMess}/>
        </>

      );

    } 
    const ProductWithId=()=>{
      let {catId,productId}=useParams();
      const cat=this.props.categories.categories.filter((categ)=>categ.id===parseInt(catId,10))[0];
      const product=this.props.products.products.filter((product)=>product.id===parseInt(productId,10))[0];
      return(
        <>
        <ProductDetail product={product} categ={cat}
          isLoading={this.props.products.isLoading}
          ErrMess={this.props.products.errMess}
          categoriesLoading={this.props.categories.isLoading}
          categoriesErrMess={this.props.categories.errMess}
          />
        </>

      );

    } 
    const AboutPage=()=>{
      return(
        <AboutUs/>
      );}
      if(this.props.categories.isLoading){
        return(
            <div className='container'>
                <div className='row'>
                    <Loading/>
                </div>
            </div>)

    }
    else if(this.props.products.errMess){
        return(
            <div className='container'>
                <div className="row">
                    <h4>{this.props.categories.errMess}</h4>
                </div>

            </div>
        )
    }
    return (
      
      
      <div >
        <NavBar categories={this.props.categories.categories}
        categoriesLoading={this.props.categories.isLoading}
        categoriesErrMess={this.props.categories.errMess}/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path='/catalogue'>
          <Catalogue products={this.props.products.products} categ={this.props.categories.categories}
            productsLoading={this.props.products.isLoading}
            productsErrMess={this.props.products.errMess}
            categoriesLoading={this.props.categories.isLoading}
            categoriesErrMess={this.props.categories.errMess}/>
            
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
            <AdminPage categories={this.props.categories.categories}
            categoriesLoading={this.props.categories.isLoading}
            categoriesErrMess={this.props.categories.errMess}
            addProduct={this.props.addProduct} addCategory={this.props.addCategory} resetProductForm={this.props.resetProductForm}/>
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
