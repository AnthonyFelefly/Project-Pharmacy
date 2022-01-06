
import AboutUs from './AboutUs';
import { Component } from 'react';
import Home from './HomeComponent';
import Catalogue from './CatalogueComponent';
import AdminPage from './AdminPageComponent';
import ProductDetail from './ProductDetailComponent';
import NavBar from "./NavbarComponent";
import Footer from './FooterComponent';
import Contact from "./ContactComponent";
import {Switch,Route,Redirect,useParams, withRouter} from'react-router-dom';
import {connect} from 'react-redux';
import { postProduct ,fetchProducts,fetchCategories,fetchUsers
  ,postCategory,deleteProduct,deleteCategory, addToCart,removeFromCart,adjust_qty, 
  postMessage, fetchMessages, deleteMessage, postUser, login, logout} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import Cart from './CartComponent';
import AllMessages from './MessagesComponent';


const mapStateToProps=state=>{
  return {
    products: state.products,
    categories: state.categories,
    users: state.users,
    messages: state.messages,
    auth:state.auth
  }
}
const mapDispatchToProps=(dispatch)=>({
  postMessage:(firstName,lastName,telnum,email,flag,contactMethod,message)=>{dispatch(postMessage(firstName,lastName,telnum,email,flag,contactMethod,message))},
  postProduct:(productName,category,description,application,quantity,price,image)=> dispatch(postProduct(productName,category,description,application,quantity,price,image)),
  postCategory:(categoryName)=> dispatch(postCategory(categoryName)),
  postUser:(firstName,lastName,password,email,telnum,date)=>{dispatch(postUser(firstName,lastName,password,email,telnum,date))},
  fetchProducts: () => { dispatch(fetchProducts())},
  fetchCategories: () => { dispatch(fetchCategories())},
  fetchUsers: () => { dispatch(fetchUsers())},
  fetchMessages:()=>{dispatch(fetchMessages())},
  deleteProduct:(productId)=>{dispatch(deleteProduct(productId))},
  deleteCategory:(categoryId)=>{dispatch(deleteCategory(categoryId))},
  deleteMessage:(messageId)=>{dispatch(deleteMessage(messageId))},
  login:(user)=>{dispatch(login(user))},
  logout:()=>{dispatch(logout())},
  addToCart:(productId)=>{dispatch(addToCart(productId))},
  removeFromCart:(productId)=>{dispatch(removeFromCart(productId))},
  adjust_qty:(productId,value)=>{dispatch(adjust_qty(productId,value))},
  resetMessageForm:()=>{dispatch(actions.reset('message'))},
  resetCategoryForm:()=>{dispatch(actions.reset('category'))},
  resetProductForm:()=>{dispatch(actions.reset('product'))},
  resetDeleteCategoryForm:()=>{dispatch(actions.reset('dcategory'))},
  resetDeleteProductForm:()=>{dispatch(actions.reset('dproduct'))},
  resetSignUpForm:()=>{dispatch(actions.reset('signup'))},
  resetSignInForm:()=>{dispatch(actions.reset('signin'))}
});
class Main extends Component {
  constructor(props){
    super(props);
    
  }
  componentDidMount(){
    this.props.fetchProducts();
    this.props.fetchCategories();
    this.props.fetchUsers();
    this.props.fetchMessages();
    
    
   
    
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
        <Catalogue add={this.props.addToCart} products={this.props.products.products.filter((product)=>product.category===cat[0].id)} categ={cat}
          productsLoading={this.props.products.isLoading}
          productsErrMess={this.props.products.errMess}
          categoriesLoading={this.props.categories.isLoading}
          categoriesErrMess={this.props.categories.errMess}
           />
        </>

      );

    } 
    const ProductWithId=()=>{
      let {catId,productId}=useParams();
      const cat=this.props.categories.categories.filter((categ)=>categ.id===parseInt(catId,10))[0];
      const product=this.props.products.products.filter((product)=>product.id===parseInt(productId,10))[0];
      return(
        <>
        <ProductDetail product={product} categ={cat} add={this.props.addToCart} 
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
            <div className='container m-2'>
              <div className='row'>
                <img src={baseUrl+'/images/loadingImg.png'} className="ml-auto mr-auto"style={{width:"600px",height:"auto"}} alt="Your Page Is loading"/>
              </div>
                <div className='row mt-4'>
                    <Loading/>
                </div>
            </div>)

    }
    else if(this.props.categories.errMess){
        return(
            <div className='container'>
                <div className="row">
                    <h4>{this.props.categories.errMess}</h4>
                </div>

            </div>
        )
    }
    return (
      
      
      <div className="col-sm-full">
        <NavBar className="col-sm-full ml-2" categories={this.props.categories.categories} users={this.props.users} cart={this.props.products.cart}
        categoriesLoading={this.props.categories.isLoading}
        categoriesErrMess={this.props.categories.errMess}
        resetSignUpForm={this.props.resetSignUpForm}
        resetSignInForm={this.props.resetSignInForm}
        postUser={this.props.postUser}
        login={this.props.login} logout={this.props.logout}
        auth={this.props.auth}/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route path="/cart" >
            <Cart  cart={this.props.products.cart} removeFromCart={this.props.removeFromCart} adjust_qty={this.props.adjust_qty}></Cart>  
          </Route>
          <Route path="/messages" >
            <AllMessages  messages={this.props.messages.messages} isLoading={this.props.messages.isLoading}
            errMess={this.props.messages.errMess} deleteMessage={this.props.deleteMessage}></AllMessages>  
          </Route>
          <Route exact path='/catalogue'>
          <Catalogue products={this.props.products.products} categ={this.props.categories.categories}
            productsLoading={this.props.products.isLoading}
            productsErrMess={this.props.products.errMess}
            add={this.props.addToCart}
            categoriesLoading={this.props.categories.isLoading}
            categoriesErrMess={this.props.categories.errMess}
            />
            
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
            <Contact resetMessageForm={this.props.resetMessageForm} postMessage={this.props.postMessage}/>
          </Route>
          <Route exact path="/admin">
            <AdminPage auth={this.props.auth} categories={this.props.categories.categories} deleteCategory={this.props.deleteCategory} resetDeleteCategoryForm={this.props.resetDeleteCategoryForm}
            products={this.props.products.products} postCategory={this.props.postCategory} resetCategoryForm={this.props.resetCategoryForm}
            postProduct={this.props.postProduct} addCategory={this.props.addCategory} resetProductForm={this.props.resetProductForm}
            resetDeleteProductForm={this.props.resetDeleteProductForm} deleteProduct={ this.props.deleteProduct}/>
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
