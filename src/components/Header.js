
import React from "react";
import {Navbar, Nav} from "react-bootstrap"
import {Form, FormControl} from "react-bootstrap";
import {Button} from "react-bootstrap"

function Header(props) {
    return (
        <Navbar bg="dark" variant="dark" style={{ padding: '55px'}}>
            <Navbar.Brand style={{ fontSize: '48px'}}>Employee Directory</Navbar.Brand>
        </Navbar>
    );
}

export default Header;