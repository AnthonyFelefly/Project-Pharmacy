import React,{Component} from 'react';
import {  Navbar, NavbarBrand,Jumbotron } from 'reactstrap';
class Header extends Component{
    render(){
        return(
            <>
             <Navbar className="navbar" dark>
                <div className="container">
                    <NavbarBrand href="/">Pharmacy Absolute Care</NavbarBrand>
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