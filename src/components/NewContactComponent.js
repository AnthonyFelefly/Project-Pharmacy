import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem,Button,Form,FormGroup,Label,Input,Col,CardImg,Card,CardText } from 'reactstrap';



class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
            agree:false,
            contactType:'Tel.',
            message:''

        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        const target=event.target;
        const value=target.type==='checkbox' ?target.checked:target.value;
        const name=target.name;
        this.setState({
            [name]:value
        });

    }
    handleSubmit(event){
        console.log('Current stete is'+JSON.stringify(this.state))
        alert('Current stete is'+JSON.stringify(this.state))
        event.preventDefault();
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
                    <Col md={4} >
                        
                    <Card cassName="col-xl-4 col-lg-4 col-md-4" height="400px" width="400px">
                        
                    <CardImg src="/assets/images/mail.png"/>
                    <CardText className="contact text-center mb-30 mt-2">  
                        <h3>Mail Us Here</h3>
                        <p>PharmacyAbsCare@hotmail.com</p>
                    </CardText>
                    </Card>
                    </Col>
                    <Col md={4} >
                        
                    <Card cassName="col-xl-4 col-lg-4 col-md-4" height="400px" width="400px">
                        
                    <CardImg src="/assets/images/phone.png" style={{height:"325px"}}/>
                    <CardText className="contact text-center mb-30 mt-2">  
                        <h3>Call Us Here</h3>
                        <p>+961 71098020</p>
                    </CardText>
                    </Card>
                    </Col>
                    <Col md={4} >
                        
                        <Card cassName="col-xl-4 col-lg-4 col-md-4" height="400px" width="400px">
                            
                        <CardImg src="/assets/images/locationpin.png"/>
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type='text' id='firstname' name="firstname"
                                    placeholder="First Name" value={this.state.firstname} onChange={this.handleInputChange}/>
    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type='text' id='lastname' name="lastname"
                                    placeholder="Last Name" value={this.state.lastname} onChange={this.handleInputChange}/>
                                    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telnum' md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type='tel' id='telnum' name="telnum"
                                    placeholder="Tel. Number" value={this.state.telnum} onChange={this.handleInputChange}/>
                                    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type='email' id='email' name="email"
                                    placeholder="Email Address" value={this.state.email} onChange={this.handleInputChange}/>
                                    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6,offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type='checkbox' name='agree' checked={this.state.agree} onChange={this.handleInputChange}/>{' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
    
                                </Col>
                                <Col md={{size:3,offset:1}}>
                                    <Input type='select' name='ContactType'
                                    value={this.state.contactType} onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='message' md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type='textarea' id='message' name="message"
                                    rows="12"
                                    placeholder="Type Your Message..." value={this.state.message} onChange={this.handleInputChange}/>
                                    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10,offset:2}}>
                                    <Button type="submit" color="default">
                                    Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    
                </div>
            </div>
         </div>   
            </>
       );
    
    }
}

export default Contact;