import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem,Button,Label,Col,CardImg,Card,CardText,Row } from 'reactstrap';
import {Control,LocalForm, Errors} from "react-redux-form";



class Contact extends Component {
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        }
   
    handleSubmit(values){
        console.log('Current stete is'+JSON.stringify(values))
        alert('Current stete is'+JSON.stringify(values))
    }
    
    
    render(){
        return( 
            <>
            <div className="container">
                 <div className="row">
                     <div className='container col-sm-6 ml-0 mt-2'>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        </div>
                        <div className="col-12">
                            <h3>Contact Us</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="container ml-auto mr-auto">
                <div className='row m-4'>
                    <Col md={4} className="mb-2" >
                        
                    <Card cassName="col-xl-4 col-lg-4 col-md-4 " height="400px" width="400px">
                        
                    <CardImg src="/assets/images/mail.png" style={{height:"320px"}}/>
                    <CardText className="contact text-center mb-30 mt-2">  
                        <h3>Mail Us Here</h3>
                        <p>PharmacyAbsCare@hotmail.com</p>
                    </CardText>
                    </Card>
                    </Col>
                    <Col md={4} className="mb-2">
                        
                    <Card cassName="col-xl-4 col-lg-4 col-md-4 " height="400px" width="400px">
                        
                    <CardImg src="/assets/images/phone.png" style={{height:"320px"}}/>
                    <CardText className="contact text-center mb-30 mt-2">  
                        <h3>Call Us Here</h3>
                        <p>+961 71098020</p>
                    </CardText>
                    </Card>
                    </Col>
                    <Col md={4} className="mb-2">
                        
                        <Card cassName="col-xl-4 col-lg-4 col-md-4 m-2" height="400px" width="400px">
                            
                        <CardImg src="/assets/images/locationpin.png" style={{height:"320px"}}/>
                        <CardText className="contact text-center mb-30 mt-2">  
                            <h3>Visit Us Here</h3>
                            <p>Beirut Souks, Beirut, LEBANON</p>
                        </CardText>
                        </Card>
                        </Col>
                </div>
            </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us A message</h3>
                    </div>
                    <div className='col-12 col-md-9'>
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model='.firstname' id='firstname' name="firstname" 
                                    placeholder="First Name" className='form-control'/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model='.lastname' id='lastname' name="lastname" 
                                    placeholder="Last Name"className='form-control'/>
                                    
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor='telnum' md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model='.telnum' id='telnum' name="telnum" 
                                    placeholder="Tel. Number" className='form-control'/>
                    
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model='.email' id='email' name="email" 
                                    placeholder="Email Address" className='form-control'/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6,offset:2}}>
                                    <div className='form-check'>
                                        <Label check>
                                            <Control.checkbox model='.agree' name='agree' className='form-check-input'/>{' '}
                                            <strong>May we contact you?</strong>
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
                                <Label htmlFor='message' md={2}>Your Message</Label>
                                <Col md={10}>
                                    <Control.textarea model='.message' id='message' name="message"
                                    rows="12" 
                                    placeholder="Type Your Message..." className='form-control'/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10,offset:2}}>
                                    <Button type="submit" color="default" disabled={false}>
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    
                </div>
            </div>
         </div>   
            </>
       );
    
    }
}

export default Contact;