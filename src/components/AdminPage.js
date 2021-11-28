import React,{Component} from 'react';
import { Card, CardImg, CardBody, Button, Modal, ModalHeader, ModalBody,
    Label, Row, Col, CardTitle } from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';

const required=(val)=>val&&val.length;//check if the legnth of value is greater then zero
const maxLength=(len)=>((val)=>(!(val)||(val.length <=len )));
const minLength=(len)=>((val)=>(!val)||((val)&&(val.length >=len )));
const isNumber=(val)=>(!val)||(!isNaN(Number(val)));//to check if the value is a number
class AdminPage extends Component {
    constructor(props){
        super(props);
        this.state={
            isModelOpen:false,
            categories:this.props.categories
        };
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }
    toggleModal() {
        this.setState({
            isModelOpen: !this.state.isModelOpen
        });
    }
    handleSubmit(values) {
        this.toggleModal();
        const cat=this.props.categories.filter((categ)=>categ.description===values.category)[0];
        const category=cat.id;
        this.props.addProduct(values.productName,category,values.description,values.application,values.quantity,values.price);
    }
    render(){
        const categoryDropDown=this.state.categories.map((cat)=>{
            return(
                <option>{cat.description}</option>
            );});
            return(
        <>
        
            <Card  elevation={5} className="col-md-4 m-2"onClick={this.toggleModal}>
                <CardImg className="mt-2" style={{width:"auto",height:"auto"}} src='/assets/images/AddProduct.png' alt="Add a new Product" />
                <CardBody >
                    <CardTitle style={{"font-size":"medium"}}>Add A New Product</CardTitle>
                </CardBody>
            </Card>

            <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Add Product</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                        <Label htmlFor="productName" md={12}>Product Name</Label>
                        <Col md={12}>
                        <Control.text model=".productName" id="productName" name="productName" 
                            placeholder="Product Name" 
                            className="form-control" 
                            validators={{
                                required,
                                minLength: minLength(3),
                                maxLength: maxLength(15)
                            }} 
                        />
                        <Errors className="text-danger" model=".productName" show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Should have more than 3 Characters',
                                maxLength: 'Should have 15 or less Characters'
                            }}
                        />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlfor="category" md={12}>Product Category</Label>
                        <Col md={12}>
                            <Control.select model=".category" name="category" className="form-control">
                            <option value="" selected disabled>Choose here</option>
                               {categoryDropDown}
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                                <Label htmlFor='description' md={12}>Product Description</Label>
                                <Col md={12}>
                                    <Control.textarea model='.description' id='description' name="description"
                                    rows="6" 
                                    placeholder="Type Product Description..." className='form-control'
                                    validators={{
                                        required,
                                        minLength:minLength(3)}}/>
                                    <Errors className="text-danger"
                                    model=".description" show="touched"
                                    messages={{
                                        required: 'This Field is Required',
                                        minLength:'The Description must be Greater than 3 characters',
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor='application' md={12}>Product Application</Label>
                                <Col md={12}>
                                    <Control.textarea model='.application' id='application' name="application"
                                    rows="6" 
                                    placeholder="Type Product application..." className='form-control'
                                    validators={{
                                        required,
                                        minLength:minLength(3)}}/>
                                    <Errors className="text-danger"
                                    model=".application" show="touched"
                                    messages={{
                                        required: 'This Field is Required',
                                        minLength:'The application text must be Greater than 3 characters',
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor='quantity' md={12}>Product Quantity</Label>
                                <Col md={12}>
                                    <Control.text model='.quantity' id='quantity' name="quantity" 
                                    placeholder="Quantity" className='form-control'
                                    validators={{
                                        required,
                                        isNumber}}/>
                                    <Errors className="text-danger"
                                    model=".quantity" show="touched"
                                    messages={{
                                        required: 'This Field is Required',
                                        isNumber: ' The Quantity should contain only Numbers'
                                    }}/>
                    
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor='price' md={12}>Product Price</Label>
                                <Col md={12}>
                                    <Control.text model='.price' id='price' name="price" 
                                    placeholder="Price" className='form-control'
                                    validators={{
                                        required,
                                        isNumber}}/>
                                    <Errors className="text-danger"
                                    model=".price" show="touched"
                                    messages={{
                                        required: 'This Field is Required',
                                        isNumber: ' The Price should contain only Numbers',
                                    }}/>
                    
                                </Col>
                            </Row>              
                   
                    <Button type="submit" value="submit" color="primary">Submit</Button>                            
                </LocalForm>
            </ModalBody>
        </Modal>
</>);
    }
}

export default AdminPage;