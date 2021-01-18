import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';


class NavBar extends React.Component {
    render() {
        let navOption = this.props.option;

        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Brand href="#home"
                              onClick={() => this.props.changePage('Home')}>{navOption.brand}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        {navOption.link.map(function (link) {
                            return <Nav.Link key={link} onClick={() => this.props.changePage(link)}
                            >{link}</Nav.Link>
                        }.bind(this))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;
