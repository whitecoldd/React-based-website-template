import React, { Component } from 'react';
import { Container, Nav, Row, Tab, Col } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link  type="button" eventKey="first" >Brad Pitt</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link  type="button" eventKey="second" >Matthew McConaughey</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link  type="button" eventKey="third" >Christian Bale</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link  type="button" eventKey="fourth" >Charlie Cox</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className = "mt-3">
                                <Tab.Pane eventKey="first" >
                                    <img height='500' width='900' src='https://ocdn.eu/pulscms-transforms/1/m2Mk9kpTURBXy8zOTk5NWQxMDk0ZDM3OGVhMTkzNWFlYzI0ZTQzYWEwOC5qcGeSlQMAzKLNFFvNC3OTBc0C6M0BnoGhMAE' />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus neque. Fusce tempor ipsum nulla, sit amet fermentum lectus tristique eu. Nunc lacinia laoreet nisl eget accumsan. Sed condimentum.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" >
                                    <img height='500' width='900' src='https://kep.index.hu/1/0/4109/41091/410911/41091147_3135669_f020b99c438e5861d42346152e54f11a_wm.jpg' />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus neque. Fusce tempor ipsum nulla, sit amet fermentum lectus tristique eu. Nunc lacinia laoreet nisl eget accumsan. Sed condimentum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus neque. Fusce tempor ipsum nulla, sit amet fermentum lectus tristique eu. Nunc lacinia laoreet nisl eget accumsan. Sed condimentum.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" >
                                    <img height='500' width='900' src='https://sm.ign.com/ign_hu/blogroll/t/thor-4-chr/thor-4-christian-bale-to-play-the-villain-in-love-thunder_d5jy.jpg' />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus neque. Fusce tempor ipsum nulla, sit amet fermentum lectus tristique eu. Nunc lacinia laoreet nisl eget accumsan. Sed condimentum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus neque. Fusce tempor ipsum nulla, sit amet fermentum lectus tristique eu. Nunc lacinia laoreet nisl eget accumsan. Sed condimentum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus neque. Fusce tempor ipsum nulla, sit amet fermentum lectus tristique eu. Nunc lacinia laoreet nisl eget accumsan. Sed condimentum.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth" >
                                    <img height='500' width='900' src='https://www.looper.com/img/gallery/what-you-didnt-know-about-the-star-of-daredevil/intro.jpg' />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus neque. Fusce tempor ipsum nulla, sit amet fermentum lectus tristique eu. Nunc lacinia laoreet nisl eget accumsan. Sed condimentum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus neque. Fusce tempor ipsum nulla, sit amet fermentum lectus tristique eu. Nunc lacinia laoreet nisl eget accumsan. Sed condimentum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus neque. Fusce tempor ipsum nulla, sit amet fermentum lectus tristique eu. Nunc lacinia laoreet nisl eget accumsan. Sed condimentum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus neque. Fusce tempor ipsum nulla, sit amet fermentum lectus tristique eu. Nunc lacinia laoreet nisl eget accumsan. Sed condimentum.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;