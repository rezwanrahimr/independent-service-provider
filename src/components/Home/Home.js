import React, { useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';

import banner1 from '../../Images/Banner1.jpg';
import banner2 from '../../Images/Banner1.jpg';
import banner3 from '../../Images/Banner1.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className='col-md-4 text-black'>
                  
                    <h3 className='display-2 fw-bold'>Dr Ken Hurt</h3>
                    <p>MBBS (DMC), MRCS (England), FCPS (Urology)
                    Female Urology, Endourology & Reconstructive Urology Specialist
                    Popular Medical College & Hospital
                    <br></br>
                     <small>25 Years of experience in Medical Services</small></p>
                     <br />
                     <Button className='rounded-pill px-4 ' variant="danger">Danger । +</Button>  <Button className='rounded-pill px-4 ' variant="success">Success । +</Button>{' '}
                
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner; 