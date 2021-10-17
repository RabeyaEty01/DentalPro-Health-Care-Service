import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/3.jpg';
import banner2 from '../../../images/banner/photo-smi2.jpg';
import banner3 from '../../../images/banner/banner2.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item >
                    <img
                        className="d-block  banner-img img-fluid  w-100 "
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="hero-text">
                        <small>Care For Lifetime</small>
                        <h1>Let Us Brighten Your Smile</h1>
                        <p>Dramatically maintain clicks and mortar solutions without functional solutions.</p>
                        <p>Collaboratively expedite quality products via client focused results.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  banner-img  img-fluid w-100 "
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="hero-text">
                        <small>Care For Your Smile</small>
                        <h1>
                            Committed To Excellence</h1>
                        <p>Competently parallel task researched data and process improvements.</p>
                        <p>Collaboratively expedite quality products via client focused results.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  banner-img  img-fluid  w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="hero-text">
                        <small>Committed To Excellence</small>
                        <h1>
                            Personalized &amp; Comfortable</h1>
                        <p>Competently parallel task researched data and process improvements.</p>
                        <p>Collaboratively expedite quality products via client focused results.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;