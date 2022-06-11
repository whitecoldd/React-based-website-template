import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class Contacts extends Component {
    render() {
        return (
            <Container style={{width: "40%"}} >
                <h1 className="text-center">Contact Us</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder = "user@mail.co" />
                        <Form.Text>
                            Your privacy is our obligation
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" >
                        <Form.Label>Enter your message</Form.Label>
                        <Form.Control as="textarea" rows = "3" />
                    </Form.Group>
                    <Form.Group className="d-flex" controlId="formBasicCheckBox" >
                        <Form.Check type="checkbox" label ="I want to get notifications about updates"/>
                    </Form.Group>
                    <Button variant="success" type="submit" >Submit</Button>
                    

                </Form>
            </Container>
        );
    }
}

export default Contacts;