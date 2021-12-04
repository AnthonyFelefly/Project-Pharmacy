
import AddCategoryC from "./AddCategoryComponent";
import React,{Component} from "react";
import AddProductC from "./AddProductComponent";
import DeleteCategoryC from "./DeleteCategoryComponent";
import DeleteProductC from "./DeleteProductComponent";
import { Row } from "reactstrap";

class AdminPage extends Component{
    render(){
        return(
        <div>
        <Row className="ml-2">
        <AddProductC  categories={this.props.categories}
            products={this.props.products} 
            postProduct={this.props.postProduct} resetProductForm={this.props.resetProductForm}/>
        <AddCategoryC resetCategoryForm={this.props.resetCategoryForm} postCategory={this.props.postCategory}
         categories={this.props.categories}/>
      <DeleteProductC  products={this.props.products} resetDeleteProductForm={this.props.resetDeleteProductForm} deleteProduct={ this.props.deleteProduct}/>
      <DeleteCategoryC categories={this.props.categories} products={this.props.products} deleteCategory={this.props.deleteCategory} deleteProduct={ this.props.deleteProduct} resetDeleteCategoryForm={this.props.resetDeleteCategoryForm} />
      </Row></div>);
    }
}
export default AdminPage;

