
import AddCategoryC from "./AddCategoryComponent";
import React,{Component} from "react";
import AddProductC from "./AddProductComponent";
import { Row } from "reactstrap";

class AdminPage extends Component{
    render(){
        return(
        <div>
        <Row>
        <AddProductC  categories={this.props.categories}
            products={this.props.products} 
            postProduct={this.props.postProduct} resetProductForm={this.props.resetProductForm}/>
        <AddCategoryC  resetCategoryForm={this.props.resetCategoryForm} postCategory={this.props.postCategory}
         categories={this.props.categories}/>
      </Row>
        </div>);
    }
}
export default AdminPage;

