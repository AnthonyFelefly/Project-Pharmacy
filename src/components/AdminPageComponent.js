
import AddCategoryC from "./AddCategoryComponent";
import React,{Component} from "react";
import AddProductC from "./AddProductComponent";
import DeleteCategoryC from "./DeleteCategoryComponent";
import DeleteProductC from "./DeleteProductComponent";
import { Row } from "reactstrap";
import ViewMessagesC from "./ViewMessages";


class AdminPage extends Component{
    render(){
        return(
        <div>
        <Row className="ml-2">
        <AddProductC className="col-md-3 m-2" categories={this.props.categories}
            products={this.props.products} 
            postProduct={this.props.postProduct} resetProductForm={this.props.resetProductForm}/>
        <AddCategoryC className="col-md-3 m-2"resetCategoryForm={this.props.resetCategoryForm} postCategory={this.props.postCategory}
         categories={this.props.categories}/>
      <DeleteProductC className="col-md-3 m-2" products={this.props.products} resetDeleteProductForm={this.props.resetDeleteProductForm} deleteProduct={ this.props.deleteProduct}/>
      <DeleteCategoryC className="col-md-3 m-2"categories={this.props.categories} products={this.props.products} deleteCategory={this.props.deleteCategory} deleteProduct={ this.props.deleteProduct} resetDeleteCategoryForm={this.props.resetDeleteCategoryForm} />
      <ViewMessagesC className="col-md-3 m-2"/>
      </Row></div>);
    }
}
export default AdminPage;

