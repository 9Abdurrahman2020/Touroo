import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './mybookings.css';

const MyBookings = () => {
    const { user } = useAuth();
    const [count, setCount] = useState(1)
    const [bookings, setBookings] = useState([]);
    const [cancel, setCancel] = useState(1)
    useEffect(() => {
        fetch(`https://rahmanassignment11.herokuapp.com/my-bookings/${user.email}`)
            .then(res => res.json())
            .then(result => {
                setCount(result.count);
                setBookings(result.result);
            })
    }, [cancel]);

    const removeBookings = id => {
        const confirm = window.confirm('Are you sure? Want to cancel?')
        if (confirm) {
            fetch(`https://rahmanassignment11.herokuapp.com/delete/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    if (result.acknowledged) {
                        alert('Successfully canceled !')
                        setCancel(cancel + 1)
                    }
                })
        }
    }
    return (
        <div className="my-booking-container">
            {
                count < 1 ? <h3 className="text-center text-danger my-5 text-uppercase">You didn't book any trip yet !</h3> :

                    <div className="table-responsive-md">
                        <Table striped bordered hover size="md" className="text-center">
                            <thead>
                                <tr>
                                    <th>Index</th>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Trip Destination</th>
                                    <th>Booking Date</th>
                                    <th>Status</th>
                                    <th>Cancel Booking</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bookings.map((booking, index) => <tr>
                                        <td>{index + 1}</td>
                                        <td>{booking.name}</td>
                                        <td>{booking.email}</td>
                                        <td>{booking.trip}</td>
                                        <td>{booking.date}</td>
                                        <td className="text-uppercase">{booking.status}</td>
                                        <td>
                                            <button onClick={() => removeBookings(booking._id)} className="btn btn-danger">Cancel</button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </Table>
                    </div>


            }
        </div>
    );
};

export default MyBookings;