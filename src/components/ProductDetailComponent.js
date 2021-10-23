import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'
import "../App.css"
import { PRODUCTS } from '../shared/products';

class ProductDetail extends Component{
    constructor(props){
        super(props);
    }
    renderProductImage(product){
        if(product!=null){
            return(
                <div className="col-12 col-md-5 m-1">
                <Card >
                    <CardImg width="100%"  src={product.image} alt={product.name} />
                    <CardTitle>{product.name}</CardTitle>
                </Card>
                </div>
            );

        }
        else{
            <div></div>
        }
    }
    renderProductDetail(product){
        if (product!=null){
            return(
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardBody>
                            <CardTitle>{product.name}</CardTitle>
                            <p className="desc">Description:</p>
                            <p>{product.description}</p>
                            <p className="desc">Application:</p>
                            <p>{product.application}</p>
                            <p className="desc">Price:</p>
                            <p>{product.price}</p>
                        {/*<CardText>{product.description}</CardText>*/}
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else{
            return(<div></div>);
        }
    }
    render(){
        const product = this.props.product

        console.log(product);

        if (product == null) {
            return (<div></div>);
        }

        const ProductImage = this.renderProductImage(product);
        const ProductDetail=this.renderProductDetail(product);

        return (
            <div className='container'>
            <div className='row'>
                {ProductImage}
                {ProductDetail}
            </div>
            </div>
            
        )
    }

}
export default ProductDetail;