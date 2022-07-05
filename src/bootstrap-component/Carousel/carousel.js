import { Carousel } from "react-bootstrap";
import './carousel.css';

export default function Carousels() {
    return (
        <>
            <Carousel className="carousel-wrapper">
                <Carousel.Item className="carousel-item">
                    <img src={require('../../images/wall3.jpg')} alt="item" />
                    <Carousel.Caption className="carousel-caption">
                        <h5>food crave</h5>
                        <p>Feeling hot and bothered? Try it</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img src={require('../../images/wall1.jpg')} alt="item" />
                    <Carousel.Caption className="carousel-caption">
                        <h5>food crave</h5>
                        <p>Add some crunch to creamy experience</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img src={require('../../images/wall2.jpg')} alt="item" />
                    <Carousel.Caption className="carousel-caption">
                        <h5>food crave</h5>
                        <p>Discover the drinks and desserts</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}