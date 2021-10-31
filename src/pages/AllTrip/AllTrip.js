import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Trip from '../Trip/Trip';

const AllTrip = () => {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://rahmanassignment11.herokuapp.com/trips')
            .then(res => res.json())
            .then(data => {
                setTrips(data);
                setLoading(false);
            })
    }, [])

    return (
        <div className="container my-4">
            <h1 className="text-center text-warning">Our All <span className="text-success">Trip</span></h1>
            <hr className="mx-auto mt-0 text-danger mb-4" style={{ width: '250px', height: '2px' }} />
            {
                loading && <div className="text-center">
                <Spinner animation="border" variant="primary" />
            </div>
            }
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    trips.map(trip => <Trip
                        key={trip._id}
                        trip={trip}
                    ></Trip>)
                }
            </Row>
        </div>
    );
};

export default AllTrip;