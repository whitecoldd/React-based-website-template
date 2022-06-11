import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../assets/bg1.jpg";
import pic2 from "../assets/bg2.jpg";
import pic3 from "../assets/bg3.jpg";

class CarouselOfMine extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={pic1}
                        alt = "bg"
                    />
                    <Carousel.Caption>
                        <h3>Kimi no Nawa</h3>
                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={pic2}
                        alt = "bg"
                    />
                    <Carousel.Caption>
                        <h3>Shokugeki no Soma</h3>
                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={pic3}
                        alt = "bg"
                    />
                    <Carousel.Caption>
                        <h3>Kono Subarashii Sekai wa Shukufuku wo</h3>
                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselOfMine;