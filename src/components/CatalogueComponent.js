import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'
import "../App.css"
import ProductDetail from './ProductDetailComponent'
class Catalogue extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedProduct:null
           
          };
    }
    onProductSelect(product){
        this.setState({selectedProduct:product})
    }
    
    render(){
        const menu=this.props.products.map((product)=>{
            return(
                <div key={product.id} className="col-12 col-md-5 m-1 ">
                    <Card onClick={()=>this.onProductSelect(product)}>
                        <CardImg width="100%" object src={product.image} alt={product.name} />
                        <CardImgOverlay>
                            <CardTitle>{product.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )

        });
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <ProductDetail product={this.state.selectedProduct} />
                </div>
            </div>

        );
    }
}
export default Catalogue;