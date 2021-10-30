import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './trip.css'
const Trip = ({trip}) => {
    const {title, promo, img, _id } = trip;
    return (
        <Col>
            <Card className="trip-card">
                <Card.Img className="img-card" variant="top" src={img} />
                <Card.Body>
                    <h3 className="text-white">{title}</h3>
                    <h6 className="text-white">{promo}</h6>
                    <Link to={`/details/${_id}`}><button className="btn btn-success">Trip Detail</button></Link>
                </Card.Body>                    
            </Card>
        </Col>
    );
};

export default Trip;