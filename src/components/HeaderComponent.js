import React,{Component} from 'react';
import {  Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem,Jumbotron } from 'reactstrap';
import{NavLink} from'react-router-dom';
class Header extends Component{
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
             <Navbar className="navbar" dark expand='md'>
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}/>
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo192.png" height="50" width="50" alt="Pharmacy Absolute Care" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/home'>
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/aboutus'>
                                    <span className="fa fa-info-circle fa-lg"></span> About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/catalogue'>
                                    <span className="fa fa-list fa-lg"></span> Products
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/contactus'>
                                    <span className="fa fa-id-card fa-lg"></span> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Pharmacy Absolute Care</h1>
                            <p>Bringing the medicine at your door.</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>

            </>

        )
    }
}
export default Header;