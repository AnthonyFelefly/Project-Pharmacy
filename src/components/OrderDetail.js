import { MDBBtn } from "mdbreact";
import React, { useState,useEffect } from "react";
import styles from "./styles/Cart.module.css";

import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { Card, CardBody, CardText, CardTitle, Row } from "reactstrap";
import OrderItem from "./OrderItem";


const OrderDetails = ({order,isLoading,errMess,productsOrder,products}) => {
  
  if (isLoading){
    return(
        <div className='container'>
            <div className='row'>
           <Loading/>
               
            </div>
        </div>)

}
else if(errMess){
    return(
        <div className='container'>
            <div className="row">
                <h4>{this.props.prodErrMess}</h4>
            </div>

        </div>
    )
}
 
  return (
    <div className={styles.cart}>
       <div className={styles.cart__items}>
         {productsOrder.map(item=>
        <OrderItem key={item.productId} itemData={products.filter(product=>product.id===item.productId)[0]} orderData={item}  />
        )} 
      </div> 
      <Card  style={{"width": "500px","object-fit": "contain","height":"500px"}}>
        <CardTitle>Order Summary</CardTitle>
        <CardBody>
          <CardText><span  style={{"font-size":"medium","fontWeight":"bold","color":"teal"}}>User Id: </span>
            <span style={{"font-size":"medium"}}>{order.userId}</span>
            </CardText>
            <CardText><span  style={{"font-size":"medium","fontWeight":"bold","color":"teal"}}>City: </span>
            <span style={{"font-size":"medium"}}>{order.city}</span>
            </CardText>
            <CardText><span  style={{"font-size":"medium","fontWeight":"bold","color":"teal"}}>Adress Detail: </span>
            <span className="col-md-9" style={{"font-size":"medium"}}>{order.details} AAAAAAAAAAAAAAAAAAAAAAAAAand I dont think it would be okay to play som bullshit</span>
            </CardText>
            <CardText><span  style={{"font-size":"medium","fontWeight":"bold","color":"teal"}}>Floor: </span>
            <span style={{"font-size":"medium"}}>{order.floor}</span>
            </CardText>
            <CardText><span  style={{"font-size":"medium","fontWeight":"bold","color":"teal"}}>Additional Comments: </span>
            <span style={{"font-size":"medium"}}>{order.addComments}</span>
            </CardText>
            <CardText><span  style={{"font-size":"medium","fontWeight":"bold","color":"teal"}}>Date: </span>
            <span style={{"font-size":"medium"}}>{order.date}</span>
            </CardText>
            <CardText><span  style={{"font-size":"medium","fontWeight":"bold","color":"teal"}}>TOTAL: $ {order.totalPrice}</span>
            </CardText>
            
            <Link to="/admin" className="m-2">
                <MDBBtn   className=" red darken-3 col-md-auto ml-auto mr-auto "  position="absolute">Decline</MDBBtn>
          </Link>
            <Link to="/admin" className="m-2">
            <MDBBtn   className=" teal accent-4 col-md-auto ml-auto mr-auto " position="absolute">Accept</MDBBtn>
          </Link>
          
          </CardBody>
      </Card>
      {/* <div className={styles.cart__summary}>
       <div>
            <span className={styles.summary__title}>User Email: </span>
        </div>
      
        
      </div> */}
    </div>
  );
};

export default OrderDetails;