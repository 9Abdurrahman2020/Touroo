import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './banner.css'
const Banner = () => {
    const [trips, setTrips] = useState([]);
    useEffect(() => {
        fetch('https://rahmanassignment11.herokuapp.com/trips')
            .then(res => res.json())
            .then(data => setTrips(data))
    }, [])
    return (
        <div>
            <Carousel indicators={false} className="carousel-container">
                {
                    trips.slice(0, 5).map(trip => <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={trip.img}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{trip.title}</h3>
                            <p>{trip.promo}</p>
                            <Link to={`/details/${trip._id}`}><button className="btn btn-danger">See Detail</button></Link>
                        </Carousel.Caption>
                    </Carousel.Item>)
                }
            </Carousel>
        </div>
    );
};

export default Banner;