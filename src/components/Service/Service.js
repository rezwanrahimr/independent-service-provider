import React, { useEffect, useState } from 'react';
import {  Button, Card, Col, Row } from 'react-bootstrap';
import './Service.css'


const Service = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data));
    },[])
    console.log(data);
    return (
        <div>
            <h1>Hello service</h1>
            <div  className=' container servie-item'>
            {
                data.map(datas => <div key={datas.id} className="container my-4">
                    
            
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={datas.image} />
            <Card.Body>
                <Card.Title className='fw-bold'>{datas.name}</Card.Title>
                <Card.Text>
                <small>{datas.price}</small>
                </Card.Text>
                <Button className='rounded-pill px-4 ' variant="outline-success">Appointment । +</Button>{' '}
            </Card.Body>
            </Card>
              
         
            
       
       
                </div>)
        
            }
            </div>
            
            
       
        </div>
    );
};

export default Service;