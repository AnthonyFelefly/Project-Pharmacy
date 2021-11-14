import { MDBBtn } from 'mdbreact';
import React from 'react';
import { Link } from 'react-router-dom';
import {Card,CardImg, CardText, CardBody, CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { CATEGORIES } from '../shared/categories';



    function RenderCatalogueItem({ product, onClick}){
        const category=CATEGORIES;
        return(<>
            
              <Card  elevation={5}>
                
                <CardImg className="mt-2"width="100%"  src={product.image} alt={product.name} />
                <CardBody >
                    <CardTitle style={{"font-size":"medium"}}>{product.name}</CardTitle>
                    <CardText>{(category.filter((cat)=>cat.id===product.category)[0]).description}</CardText>
                    <div className="text-center">
                    <MDBBtn   className=" teal accent-4 ml-auto mr-auto " onClick={()=>onClick(product.id)} position="absolute">See Details</MDBBtn>
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
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Products</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Products</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                </div>
            </div>

        );
    }

export default Catalogue;