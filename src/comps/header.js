import React, { Component } from 'react'
import { FormControl, Navbar, Nav, Container, Form, Button } from 'react-bootstrap'
import logo from './logo192.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
 
export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="success" variant="light" >
                    <Container>
                        <Navbar.Brand href="/">
                            <img src="https://images.squarespace-cdn.com/content/v1/5578d29be4b062c078836d49/1505150434821-KSEUNZRXVAJXAMAMS6BG/Starbucks_Coffee_Logo.svg.png?format=1500w"
                                height='35'
                                width='35'
                                className="d-inline-block align-top"
                                alt="Brand Icon"   >
                            </img>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto" >
                                <Nav.Link href="/" >Home</Nav.Link>
                                <Nav.Link href="/blog" >Blog</Nav.Link>
                                <Nav.Link href="/about" >About Us</Nav.Link>
                                <Nav.Link href="/contacts" >Contacts</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-dark" >Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


                <Router>
                    <Routes>
                        <Route exact path = "/" element = {<Home/>} />
                        <Route exact path = "/blog" element = {<Blog/>} />
                        <Route exact path = "/about" element = {<About/>} />
                        <Route exact path = "/contacts" element = {<Contacts/>} />
                    </Routes>
                </Router>

            </>
        )
    }
}