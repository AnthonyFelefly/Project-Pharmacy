import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem,Button,Label,Col,CardImg,Card,CardText,Row, CardHeader } from 'reactstrap';
import {Control,Form, Errors,actions} from "react-redux-form";
const required=(val)=>val&&val.length;//check if the legnth of value is greater then zero
const maxLength=(len)=>((val)=>(!(val)||(val.length <=len )));
const minLength=(len)=>((val)=>(!val)||((val)&&(val.length >=len )));
const isNumber=(val)=>(!val)||(!isNaN(Number(val)));//to check if the value is a number

class Checkout extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(values){
        var totalPrice=0;
        this.props.cart.map((product)=>totalPrice+=product.price*product.quantity);

        totalPrice=totalPrice.toFixed(2);
        this.props.postOrder(this.props.auth.currentUser.id,values.city,values.details,values.floor,values.contactMethod,values.addComments,totalPrice);
        this.props.resetCheckoutForm();
    }
    render(){
        return(
            <>
            
            <div className='container col-sm-6 ml-0 mt-2'>
               <Breadcrumb>
               <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                   <BreadcrumbItem><Link to='/Cart'>Cart</Link></BreadcrumbItem>
                   <BreadcrumbItem active>Checkout</BreadcrumbItem>
               </Breadcrumb>
               </div>
               <div className="col-md-12 mr-auto ml-auto">
                   <h3 className='col-md-12 ml-auto mr-auto'>Checkout</h3>
                   <hr/>
               </div>
           
            <Card className="col-md-8 mb-5 mt-5 ml-auto mr-auto">
            <CardHeader className=" col-sm-12 col-md-12  mb-3 mt-3">
            <b className='col-md-12 ml-auto mr-auto '>Complete Your Order Information</b>
            </CardHeader>
        <div className=' col-sm-auto  col-md-9'>
            
            
        <Form model='checkout' onSubmit={(values)=>this.handleSubmit(values)}>
            <Row className="form-group">
                <Label htmlFor='city' md={2}>City :</Label>
                <Col md={10}>
                    <Control.text  model='.city' id='city' name="city" 
                    placeholder="Type your City..." className='form-control'
                    validators={{
                        required,
                        minLength:minLength(3),
                        maxLength:maxLength(20)}}/>
                    <Errors className="text-danger"
                    model=".city" show="touched"
                    messages={{
                        required: 'This Field is Required ',
                        minLength:'The firstname must be Greater than 3 characters ',
                        maxLength: 'The firstname must be 20 characters or less'
                    }}/>
                </Col>
            </Row>
            <Row className="form-group">
                <Label htmlFor='details' md={2}>Detailed Address :</Label>
                <Col md={10}>
                    <Control.text model='.details' id='details' name="details" 
                    placeholder="Type your Address"className='form-control' rows="4"
                    validators={{
                        required,
                        minLength:minLength(10),
                        maxLength:maxLength(200)}}/>
                    <Errors className="text-danger"
                    model=".details" show="touched"
                    messages={{
                        required: 'This Field is Required',
                        minLength:'The Address must be Greater than 10 characters',
                        maxLength: 'The Address must be 200 characters or less'
                    }}/>
                    
                </Col>
            </Row>
            <Row className="form-group">
                <Label htmlFor='floor' md={2}>Floor Number :</Label>
                <Col md={10}>
                    <Control.text model='.floor' id='floor' name="floor" 
                    placeholder="Floor Number..." className='form-control'
                    validators={{
                        required,
                        maxLength:maxLength(2),
                        isNumber}}/>
                    <Errors className="text-danger"
                    model=".floor" show="touched"
                    messages={{
                        required: 'This Field is Required',
                        maxLength: 'The Floor Number should consists of one or two digits only ',
                        isNumber: ' The Floor Number should contain only Numbers'
                    }}/>
    
                </Col>
            </Row> 
            <Row className="form-group">
                <Col md={{size:6,offset:2}}>
                    <div >
                        <Label >
                            How should we contact You for Confirmation ?
                        </Label>
                    </div>

                </Col>
                <Col md={{size:3,offset:1}}>
                    <Control.select model='.contactType' name='ContactType'
                    className='from-control'>
                        <option>Tel.</option>
                        <option>Email</option>
                    </Control.select>
                    
                </Col>
            </Row>
            <Row className="form-group">
                <Label htmlFor='addComments' md={2}>Additional Comment</Label>
                <Col md={10}>
                    <Control.textarea model='.addComments' id='addComments' name="addComments"
                    rows="12" 
                    placeholder="Additional Comments Or Demands..." className='form-control'
                   />
                  
                </Col>
            </Row>
            <Row className="form-group">
                <Col md={{size:10,offset:2}}>
                    <Button type="submit" className="teal accent-4"  disabled={this.isActive}>
                    Confirm
                    </Button>
                </Col>
            </Row>
        </Form>
        
    
</div>
</Card>
</>)
    }

}

export default Checkout;