import React from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';


class NavBar extends React.Component {
    render() {
        let navOption = this.props.option;

        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Brand href="#home">{navOption.brand}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {navOption.link.map(function (link) {
                            return <Nav.Link key={link} href={"#" + link}>{link}</Nav.Link>
                        })}
                        <NavDropdown title="More" id="collasible-nav-dropdown">
                            {navOption.item.map(function (item) {
                                return <NavDropdown.Item key={item} href={"#" + item}>{item}</NavDropdown.Item>
                            })}
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;
