import React,{Component} from 'react';
import {  Navbar, NavbarBrand,Nav,NavbarToggler,Collapse } from 'reactstrap';
import{NavLink} from'react-router-dom';

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false
        };
        this.toggleNav=this.toggleNav.bind(this);
        }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    };
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
                    <div className="container ">
                        <Nav navbar   className="mr-auto">
                            
                                <NavLink className='nav-link' to='/home'>
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
                        <div className="container col-md-auto " float="right">
                        <Nav className="nav navbar-nav navbar-right ">
                            <NavLink className='nav-link ' to='/contactus' float="right">
                                <span className="fa fa-user-plus"></span> Sign Up
                            </NavLink>
                            <NavLink className='nav-link' to='/contactus'>
                                <span className="fa fa-sign-in"></span> Login
                            </NavLink>
                        </Nav>
                        </div>
                        
                        </Collapse>
                
            </Navbar>
            </>
            

        )
    }
}
export default NavBar;
