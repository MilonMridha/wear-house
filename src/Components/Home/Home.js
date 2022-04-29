import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'
import bannerOne from '../../banner/banner-1.jpg'
import bannerTwo from '../../banner/banner-2.jpg'
import bannerThree from '../../banner/banner-4.jpg'
import Inventory from '../Inventory/Inventory';


const Home = () => {
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block banner w-100"
                            src={bannerOne}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className='text-warning'>My Perfume House</h1>
                            <p className='text-warning'>Perfume is like a new dress, it makes you quite simply marvelous....</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bannerTwo}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1 className='text-warning'>My Perfume House</h1>
                            <p className='text-warning'>Perfume is like a new dress, it makes you quite simply marvelous....</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bannerThree}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1 className='text-warning'>My Perfume House</h1>
                            <p className='text-warning'>Perfume is like a new dress, it makes you quite simply marvelous....</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;