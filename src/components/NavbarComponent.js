import React,{Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import{NavLink} from'react-router-dom';
import LoginPage from './Login';
import RegisterPage from './Register';

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false,
            isModalOpen:false,
            isRegModalOpen:false
        };
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.toggleRegModal=this.toggleRegModal.bind(this);
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
        return(
            <>
            
            <Navbar className="navbar " dark expand='md'>
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
                            
                                <NavLink className='nav-link' to='/catalogue'>
                                    <span></span> Products
                                </NavLink>
                           
                                <NavLink className='nav-link' to='/contactus'>
                                    <span ></span> Contact Us
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
