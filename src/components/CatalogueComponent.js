import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,CardHeader,CardFooter} from 'reactstrap'
import "../App.css"
import ProductDetail from './ProductDetailComponent'
import { Button, ButtonGroup } from 'reactstrap';
class Catalogue extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedProduct:null
           
          };
    }
    onProductSelect(product){
        this.setState({selectedProduct:product});
        
    }
    
    render(){
        const menu=this.props.products.map((product)=>{
            return(
                <div key={product.id} className="col-12 col-md-3 m-4 ">
                <Card>
                    <CardHeader>{product.name}</CardHeader>
                    <CardImg width="100%" object src={product.image} alt={product.name} />
                   <CardFooter className='text-center'>
                       
                      <Button  style={{background:"#2ab89e"}} onClick={()=>this.onProductSelect(product)} position="absolute">See Details</Button>
                   
                    </CardFooter>
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