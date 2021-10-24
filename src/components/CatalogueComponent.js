import React,{Component} from 'react';
import {Card,CardImg,CardHeader,CardFooter} from 'reactstrap'
import "../App.css"

import { Button} from 'reactstrap';
class Catalogue extends Component{
  
    
    
    render(){
        const menu=this.props.products.map((product)=>{
            return(
                <div key={product.id} className="col-12 col-md-3 m-4 ">
                <Card>
                    <CardHeader>{product.name}</CardHeader>
                    <CardImg width="100%" object src={product.image} alt={product.name} />
                   <CardFooter className='text-center'>
                      <Button  style={{background:"#2ab89e"}} onClick={()=>this.props.onClick(product.id)} position="absolute">See Details</Button>
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
                </div>
            </div>

        );
    }
}
export default Catalogue;