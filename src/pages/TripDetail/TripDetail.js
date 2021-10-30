import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const TripDetail = () => {
    const { id } = useParams();
    const [trip, setTrip] = useState({});
    const { title, promo, duration, expanse, des, img, date, _id } = trip;
    useEffect(() => {
        fetch(`https://rahmanassignment11.herokuapp.com/single-trip/${id}`)
            .then(res => res.json())
            .then(data => setTrip(data))
    }, [])

    return (
        <div class="card shadow">
            <div class="row g-0">
                <div class="col-md-6">
                    <img src={img} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <h2 class="card-title">{title}</h2>
                        <h6 class="card-title">{promo}</h6>
                        <p class="card-text ">{des}</p>
                        <p class="card-text mb-1"><b>Date: <small>{date}</small></b></p>
                        <p class="card-text mb-1"><b>Duration: <small>{duration}-Day</small></b></p>
                        <p class="card-text mb-1"><b>Expanse: <small>{expanse}Tk</small></b></p>
                        <Link to={`/booking/${_id}`}><button className="btn btn-primary">Book For You</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TripDetail;