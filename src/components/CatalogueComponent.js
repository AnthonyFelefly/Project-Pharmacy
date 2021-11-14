import React from 'react';
import {Card,CardImg,CardHeader,CardFooter, CardText, CardBody, CardTitle} from 'reactstrap'
import "../App.css"
import { Button} from 'reactstrap';



    function RenderCatalogueItem({ product, onClick}){
        return(<>
            
              <Card>
                
                <CardImg className="mt-2"width="100%"  src={product.image} alt={product.name} />
                <CardBody >
                    <CardTitle style={{"font-size":"medium"}}>{product.name}</CardTitle>
                    <CardText>{product.category}</CardText>
                    <div className="text-center">
                    <Button  color="teal accent-2" className="ml-auto mr-auto accent-2" onClick={()=>onClick(product.id)} position="absolute">See Details</Button>
                    </div>
                </CardBody>
            </Card></>); 
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