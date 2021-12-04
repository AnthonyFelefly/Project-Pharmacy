import React,{Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,Button, Modal, ModalBody } from 'reactstrap';
import{NavLink} from'react-router-dom';
import LoginPage from './Login';
import RegisterPage from './Register';
import {
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false,
            isModalOpen:false,
            isRegModalOpen:false,
        };
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.toggleRegModal=this.toggleRegModal.bind(this);
        }
    
    componentDidMount(){
        console.log(this.props.categories);
    }
    componentDidUpdate(){
        console.log(this.props.categories);
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    };
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
    toggleRegModal() {
        this.setState({
          isRegModalOpen: !this.state.isRegModalOpen
        });
      }
    
    render(){
        const categoryDropDown=this.props.categories.map((cat)=>{
            return(
                <NavLink to={`/catalogue/${cat.id}`}>
                      <MDBDropdownItem>{cat.description}</MDBDropdownItem>
                </NavLink>
            );});
            
        return(
            <>
            
            <Navbar className="navbar col-sm-auto" dark expand='md'>
                   <div className="mt-2">
                    <NavbarToggler onClick={this.toggleNav}/>
                    <NavbarBrand className="mr-auto mt-auto mb-auto" href="/">
                        <h6>Pharmacy Absolute Care</h6>
                        
                    </NavbarBrand>
                    </div>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <div className="container ml-0 " float="left">
                        <Nav navbar   className="ml-0" >
                            
                                <NavLink className='nav-link ' to='/home'>
                                    <span ></span> Home
                                </NavLink>
                            
                                <NavLink className='nav-link' to='/aboutus'>
                                    <span ></span> About Us
                                </NavLink>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret disabled>
                                        <span className="mr-2">Products</span>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                    <NavLink to='/catalogue/'>
                                        <MDBDropdownItem>All</MDBDropdownItem>
                                    </NavLink>
                                        {categoryDropDown}
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                               
          
                                <NavLink className='nav-link' to='/contactus'>
                                    <span ></span> Contact Us
                                </NavLink>
                                <NavLink className='nav-link' to='/admin'>
                                    <span ></span> Admin
                                </NavLink>
                            
                        </Nav>
                        </div>
                        <div className="container col-auto mr-auto " float="right">
                        <Nav className="nav navbar-nav navbar-right">
                        <NavItem className='nav-link' onClick={this.toggleRegModal} float="right">
                        <Button className="teal lighten-1" style={{padding:"8px 32px"}}>
                                <span className="fa fa-user-plus"></span> Sign Up
                        </Button>
                            </NavItem>
                            <NavItem className='nav-link' onClick={this.toggleModal}>
                            <Button className="teal lighten-1" style={{padding:"8px 32px"}}>
                                <span className="fa fa-sign-in"></span> Login
                                </Button>
                            </NavItem>
                            
                        </Nav>
                        </div>
                        
                        </Collapse>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}  >
                        <ModalBody>
                            <LoginPage />
                        </ModalBody>
                    </Modal>
                    <Modal isOpen={this.state.isRegModalOpen} toggle={this.toggleRegModal}  >
                        <ModalBody>
                            <RegisterPage />
                        </ModalBody>
                    </Modal>
            </Navbar>
            </>
            

        )
    }
}
export default NavBar;
