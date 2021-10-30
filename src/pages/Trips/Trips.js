import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Trip from '../Trip/Trip';

const Trips = () => {
    const [trips, setTrips] = useState([])
    useEffect(() => {
        fetch('https://rahmanassignment11.herokuapp.com/trips')
            .then(res => res.json())
            .then(data => setTrips(data))
    }, [])
    return (
        <div className="container my-5">
            <h1 className="text-center text-primary">Upcoming <span className="text-warning">Trip</span></h1>
            <hr className="mx-auto mt-0 text-success mb-4" style={{ width: '300px', height: '2px' }} />
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    trips.slice(0, 8).map(trip => <Trip
                        key={trip._id}
                        trip={trip}
                    ></Trip>)
                }
            </Row>
            <Link to="/all-trip">
                <button className="btn btn-primary my-3" style={{ width: '120px' }}>See All Trip</button>
            </Link>
        </div>
    );
};

export default Trips;