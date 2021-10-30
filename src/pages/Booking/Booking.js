import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './booking.css';

const Booking = () => {
    const [trip, setTrip] = useState({})
    const { id } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        fetch(`https://rahmanassignment11.herokuapp.com/single-trip/${id}`)
            .then(res => res.json())
            .then(data => setTrip(data))
    }, [])

    const onSubmit = data => {
        data.status = "pending";
        data.trip = trip.title;
        fetch('https://rahmanassignment11.herokuapp.com/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert('Congratulations ! You successfully booked the trip !')
                }
            })
    };


    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return (
        <div className="container my-5 py-3">
            <h1 className="text-center mb-4 text-warning book-trip-title"><span className="text-success">Book</span> The Trip</h1>
            <div className="booking-container row">
                <div className="col-md-6">
                    <img className="w-100" src={trip.img} class="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <b>Name:</b>
                        <input {...register("name")} placeholder="Name" defaultValue={user?.displayName} />
                        <b>Email:</b>
                        <input {...register("email")} placeholder="Email" defaultValue={user?.email} />
                        <b>Booking-Date:</b>
                        <input {...register("date")} type="date" placeholder="Date" defaultValue={date} />
                        <b>Trip Destination:</b>
                        <input className="mb-3" {...register("trip")} placeholder="Trip" defaultValue={trip?.title} />
                        <input className="btn btn-success" type="submit" value="Book Now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;