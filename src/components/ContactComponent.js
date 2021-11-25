import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem,Button,Form,FormGroup,Label,Input,Col,CardImg,Card,CardText,FormFeedback } from 'reactstrap';



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
            message:'',
            touched:{
                firstname:false,
                lastname:false,
                telnum:false,
                email:false,
                message:false
            }

        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
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
    handleBlur=(field)=>(evt)=>{
        this.setState({
            touched:{...this.state.touched, [field]:true}
        })
    }
    validate(firstname,lastname,telnum,email,message){
        const errors={
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
            message:''
        };
        if(this.state.touched.firstname && firstname.length<3){
        errors.firstname="First Name should be of at least 3 characters";
        }else if (this.state.touched.firstname && firstname.length>20){
            errors.firstname="First Name shouldn't be longer than 20 characters";

        }
        if(this.state.touched.lastname && lastname.length<3){
            errors.lastname="Last Name should be of at least 3 characters";
            }else if (this.state.touched.lastname && lastname.length>20){
                errors.lastname="Last Name shouldn't be longer than 20 characters";
    
            }
        if(this.state.touched.message && message.length<3){
            errors.message="The message should be longer then 3 caracters";
            
            }
        const reg=/^\d+$/;
        if(this.state.touched.telnum && !reg.test(telnum) ){
        errors.telnum="Tel. Number should contain only numbers";
        }else if(this.state.touched.telnum && telnum.length!==8){
            errors.telnum="Tel. Number should  be composed of 8 digits";

        }
        const validEmail1=email.split('');
        const validEmail2=validEmail1.slice(validEmail1.indexOf('@'),);
        const validEmail3=validEmail2.filter(x=>x==='.');
        if(this.state.touched.email &&validEmail1.filter(x=>x==='@').length!==1){
            errors.email="Please input a valid email address";
        }else if(this.state.touched.email && validEmail3.length===0){
            errors.email="Please input a valid email address";

        }else if(this.state.touched.email &&validEmail2[validEmail2.length-1]==='.'){
            errors.email="Please input a valid email address";

        }
        
        
        return errors;       
    }
    
    render(){
        const errors=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email,this.state.message);
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type='text' id='firstname' name="firstname" valid={errors.firstname===""} invalid={errors.firstname!==''}
                                    placeholder="First Name" value={this.state.firstname} onBlur={this.handleBlur('firstname')} onChange={this.handleInputChange}/>
                                    <FormFeedback>
                                     {errors.firstname}   
                                    </FormFeedback>    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type='text' id='lastname' name="lastname" valid={errors.lastname===""} invalid={errors.lastname!==''}
                                    placeholder="Last Name" value={this.state.lastname} onBlur={this.handleBlur('lastname')} onChange={this.handleInputChange}/>
                                    <FormFeedback>
                                     {errors.lastname}   
                                    </FormFeedback> 
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telnum' md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type='tel' id='telnum' name="telnum" valid={errors.telnum===""} invalid={errors.telnum!==''}
                                    placeholder="Tel. Number" value={this.state.telnum} onBlur={this.handleBlur('telnum')} onChange={this.handleInputChange}/>
                                    <FormFeedback>
                                     {errors.telnum}   
                                    </FormFeedback> 
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type='email' id='email' name="email" valid={errors.email===""} invalid={errors.email!==''}
                                    placeholder="Email Address" value={this.state.email} onBlur={this.handleBlur('email')} onChange={this.handleInputChange}/>
                                    <FormFeedback>
                                     {errors.email}   
                                    </FormFeedback> 
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
                                <Label htmlFor='message' md={2}>Your Message</Label>
                                <Col md={10}>
                                    <Input type='textarea' id='message' name="message"
                                    rows="12" valid={errors.message===""} invalid={errors.message!==''}
                                    placeholder="Type Your Message..." value={this.state.message} onBlur={this.handleBlur('message')} onChange={this.handleInputChange}/>
                                    <FormFeedback>
                                     {errors.message}   
                                    </FormFeedback> 
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