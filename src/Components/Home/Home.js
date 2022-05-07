import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'
import bannerOne from '../../banner/banner-1.jpg'
import bannerTwo from '../../banner/banner-7.jpg'
import bannerThree from '../../banner/banner-8.jpg'
import bannerFour from '../../banner/banner-4.jpg'
import Inventory from '../Inventory/Inventory';
import image from '../../image/new.jpg'
import diagram from '../../image/diagram-2.jpg'
import { Link } from 'react-router-dom';





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
                            <h1 className='text-primary'>My Perfume House</h1>
                            <p className='text-primary'>Perfume is like a new dress, it makes you quite simply marvelous....</p>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bannerThree}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1 className='text-dark'>My Perfume House</h1>
                            <p className='text-dark'>Perfume is like a new dress, it makes you quite simply marvelous....</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bannerFour}
                            alt="Fourth slide"
                        />

                        <Carousel.Caption>
                            <h1 className='text-light'>My Perfume House</h1>
                            <p className='text-light'>Perfume is like a new dress, it makes you quite simply marvelous....</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
            <Inventory></Inventory>


            <Link to='/manage' className='mt-5 mb-3 w-50 text-decoration-none btn btn-dark rounded-pill '>Manage Inventories</Link>

            <div className='container'>
                <h3 className='text-dark mt-5'>Opinon</h3>
                <div className='row g-4 align-items-center mt-1 mb-3'>
                    <div className='col-md-6'>
                        <img className='w-75 rounded shadow' src={image} alt="" />
                    </div>
                    <div className='col-md-6'>
                        <p className='text-start'>
                            The most simple and practical tips are to keep your fragrance in a dark, cool, and dry place,” says Diptyque’s Eduardo Valadez. This method protects perfume from its three main aggressors: heat, light, and humidity. “A sunny windowsill or a cabinet or shelf near a heater will degrade perfume more quickly than storing in a dark, cool area,” adds Kristen Shirley, New York-based luxury expert, writer, and editor.


                        </p>
                    </div>
                </div>
                <h3 className='text-dark mt-5'>Diagram</h3>
                <div className='row g-4 align-items-center mt-2 mb-3'>

                    <div className='col-md-6 text-start'>
                        <h4>
                            Get the latest Perfume Store Design Ideas | Fragrances shop displays from Ujoy Display, the expert in custom design and manufacture perfume showcases

                        </h4>
                        <p>
                            A perfume store is similar to a beauty or cosmetics store, but with an emphasis on selling fragrances...
                        </p>
                    </div>
                    <div className='col-md-6'>
                        <img className='w-75 shadow rounded' src={diagram} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;