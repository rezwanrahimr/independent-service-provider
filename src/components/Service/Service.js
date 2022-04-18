import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css'
import { useNavigate } from "react-router-dom";

// This is Service Section.
const Service = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return (
        <div>
            <h1 className='fw-bold my-4'>service</h1>
            <div className=' container servie-item'>
                {
                    data.map(datas => <div key={datas.id} className="container my-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={datas.image} />
                            <Card.Body>
                                <Card.Title className='fw-bold'>{datas.name}</Card.Title>
                                <Card.Text>
                                    <small>{datas.text}</small>
                                    <br></br>
                                    <small className='fw-bold'>Price: {datas.price}</small>
                                </Card.Text>
                                <Button className='rounded-pill px-4 ' onClick={() => navigate("/checkout")} variant="outline-success">Appointment । +</Button>{' '}
                            </Card.Body>
                        </Card>

                    </div>)
                }
            </div>

        </div>
    );
};

export default Service;