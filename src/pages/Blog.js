import React, { Component } from 'react';
import { Container, Card, Row, Col, ListGroup } from 'react-bootstrap';

class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={9}>
                        <div class="d-flex align-items-center m-5">
                            <div class="flex-shrink-0">
                                <img
                                    width={150}
                                    height={150}
                                    className="me-3"
                                    src="https://www.teahub.io/photos/full/229-2295188_uchiha-clan-symbol-png-hyuga-clan-symbol-png.png"
                                />
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5>Blog Post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus neque. Fusce tempor ipsum nulla, sit amet fermentum lectus tristique eu. Nunc lacinia laoreet nisl eget accumsan. Sed condimentum.</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center m-5">
                            <div class="flex-shrink-0">
                                <img
                                    width={150}
                                    height={150}
                                    className="me-3"
                                    src="https://www.teahub.io/photos/full/229-2295188_uchiha-clan-symbol-png-hyuga-clan-symbol-png.png"
                                />
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5>Blog Post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus neque. Fusce tempor ipsum nulla, sit amet fermentum lectus tristique eu. Nunc lacinia laoreet nisl eget accumsan. Sed condimentum.</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center m-5">
                            <div class="flex-shrink-0">
                                <img
                                    width={150}
                                    height={150}
                                    className="me-3"
                                    src="https://www.teahub.io/photos/full/229-2295188_uchiha-clan-symbol-png-hyuga-clan-symbol-png.png"
                                />
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5>Blog Post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus neque. Fusce tempor ipsum nulla, sit amet fermentum lectus tristique eu. Nunc lacinia laoreet nisl eget accumsan. Sed condimentum.</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center m-5">
                            <div class="flex-shrink-0">
                                <img
                                    width={150}
                                    height={150}
                                    className="me-3"
                                    src="https://www.teahub.io/photos/full/229-2295188_uchiha-clan-symbol-png-hyuga-clan-symbol-png.png"
                                />
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5>Blog Post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus neque. Fusce tempor ipsum nulla, sit amet fermentum lectus tristique eu. Nunc lacinia laoreet nisl eget accumsan. Sed condimentum.</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center m-5">
                            <div class="flex-shrink-0">
                                <img
                                    width={150}
                                    height={150}
                                    className="me-3"
                                    src="https://www.teahub.io/photos/full/229-2295188_uchiha-clan-symbol-png-hyuga-clan-symbol-png.png"
                                />
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5>Blog Post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus neque. Fusce tempor ipsum nulla, sit amet fermentum lectus tristique eu. Nunc lacinia laoreet nisl eget accumsan. Sed condimentum.</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center m-5">
                            <div class="flex-shrink-0">
                                <img
                                    width={150}
                                    height={150}
                                    className="me-3"
                                    src="https://www.teahub.io/photos/full/229-2295188_uchiha-clan-symbol-png-hyuga-clan-symbol-png.png"
                                />
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5>Blog Post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus neque. Fusce tempor ipsum nulla, sit amet fermentum lectus tristique eu. Nunc lacinia laoreet nisl eget accumsan. Sed condimentum.</p>
                            </div>
                        </div>

                    </Col>
                    <Col md={3}>
                        <h5 className='m-3'>Categories</h5>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>Gon</ListGroup.Item>
                                <ListGroup.Item>Killua</ListGroup.Item>
                                <ListGroup.Item>Kurapika</ListGroup.Item>
                                <ListGroup.Item>Leorio</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-2" bg="light">
                            <Card.Body>
                                <Card.Title>
                                    Widget
                                </Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus neque.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;