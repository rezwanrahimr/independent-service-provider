import React, { useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import banner1 from '../../Images/Banner1.jpg';


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
                <Carousel.Caption className='col-md-4 text-black mb-4'>
                  
                    <h3 className='display-3 fw-bold'>Dr. Antonia Novello</h3>
                    <p>MBBS (DMC), MRCS (England), FCPS (Urology)
                    Female Urology, Endourology & Reconstructive Urology Specialist
                    Popular Medical College & Hospital
                    <br></br>
                     <small>25 Years of experience in Medical Services</small></p>
                     <br />
                     <Button className='rounded-pill px-4 ' variant="danger">Learn More । +</Button>  <Button className='rounded-pill px-4 ' variant="success">Doctor । +</Button>{' '}
                
                    
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    );
};

export default Banner; 