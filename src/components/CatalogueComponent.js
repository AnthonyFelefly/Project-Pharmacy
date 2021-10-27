import React from 'react';
import {Card,CardImg,CardHeader,CardFooter} from 'reactstrap'
import "../App.css"
import { Button} from 'reactstrap';

    function RenderCatalogueItem({ product, onClick}){
        return(
            <Card>
                <CardHeader>{product.name}</CardHeader>
                <CardImg width="100%"  src={product.image} alt={product.name} />
                <CardFooter className='text-center'>
                    <Button  style={{background:"#2ab89e"}} onClick={()=>onClick(product.id)} position="absolute">See Details</Button>
                </CardFooter>
            </Card>
        );
    };
    const Catalogue =(props)=>{
        const menu=props.products.map((product)=>{
            return(
                <div key={product.id} className="col-12 col-md-3 m-4 ">
                <RenderCatalogueItem product={product} onClick={props.onClick} />
                </div>
            )

        });
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                </div>
            </div>

        );
    }

export default Catalogue;