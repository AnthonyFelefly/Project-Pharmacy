import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,CardSubtitle} from 'reactstrap'
import "../App.css"
import { PRODUCTS } from '../shared/products';

class ProductDetail extends Component{
    constructor(props){
        super(props);
        this.DivToScroll=React.createRef();
    }
    
    componentDidUpdate(){
        if(this.DivToScroll.current){
        this.DivToScroll.current.scrollIntoView({ 
            behavior: "smooth", 
            block: "nearest"
         })}
    }
    renderProductImage(product){
        if(product!=null){
            return(
                <div ref={this.DivToScroll} className="col-12 col-md-5 m-1">
                <Card >
                    <CardImg width="100%"  src={product.image} alt={product.name} />
                    <CardTitle className="m-1">{product.name}</CardTitle>
                    <CardSubtitle className="m-1">{product.category}</CardSubtitle>
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
                <div className='col-12 col-md-6'>
                    <Card>
                        <CardBody>
                            <CardTitle>{product.name}</CardTitle>
                            <p className="desc">Description:</p>
                            <p>{product.description}</p>
                            <p className="desc">Application:</p>
                            <p>{product.application}</p>
                            <p className="desc">Price:</p>
                            <p>{product.price}</p>
                            <p className="desc">Quantity in stock:</p>
                            <p>{product.quantity}</p>
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