import React,{useEffect} from 'react';
import {Card,CardImg,CardBody,CardTitle,CardSubtitle} from 'reactstrap'
import "../App.css";

     function RenderProductImage({product}){
        if(product!=null){
            return(
                <div className="col-12 col-md-5 m-4">
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
    function RenderProductDetail({product}){
        if (product!=null){
            
            return(
                <div className='col-12 col-md-6 m-4'>
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
    const ProductDetail=(product)=>{
        const DivToScroll=React.createRef();
       
         
        useEffect(()=>{
            if(DivToScroll.current){
                DivToScroll.current.scrollIntoView({ 
                    behavior: "smooth", 
                    block: "nearest"
                 })}
        })
        if (product == null) {
            return (<div></div>);
        }
        

        const ProductImage =RenderProductImage(product);
        const ProductDetail=RenderProductDetail(product);
        return (
            <div className='container'>
            <div ref={DivToScroll} className='row'>
                {ProductImage}
                {ProductDetail}
            </div>
            </div>
            
        )
    }

export default ProductDetail;


