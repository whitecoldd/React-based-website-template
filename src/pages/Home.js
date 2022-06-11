import React, { Component } from 'react';
import CarouselOfMine from "../comps/CarouselOfMine";
import { Container, CardGroup, Card, Button } from 'react-bootstrap';
import '../main.css'

class Home extends Component {
    render() {
        return (
            <>
            <CarouselOfMine/>
            <Container>
                <h3 className='text-center m-4'>Our Team</h3>
                <CardGroup className='m-4'>
                    <Card className="me-2" bg="success">
                        <Card.Img
                            variant="top"
                            src="https://sm.ign.com/t/ign_hu/screenshot/default/eliza_ryye.1280.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Elizabeth Olsen</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus neque.</Card.Text>
                            <Button variant="primary" >More</Button>
                        </Card.Body>
                    </Card>
                    <Card className="me-2" bg="success">
                        <Card.Img
                            variant="top"
                            src="https://v-grrrl.com/img/movies/62/how-much-is-ana-de-armas-really-worth.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Ana de Armas</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus neque.</Card.Text>
                            <Button variant="primary" >More</Button>
                        </Card.Body>
                    </Card>
                    <Card bg="success">
                        <Card.Img
                            variant="top"
                            src="https://image.cnbcfm.com/api/v1/image/103893236-GettyImages-533810850.jpg?v=1529472521&w=929&h=523&ffmt=webp"
                        />
                        <Card.Body>
                            <Card.Title>Jennifer Lawrence</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus neque.</Card.Text>
                            <Button variant="primary" >More</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
            </>
        );
    }
}

export default Home;