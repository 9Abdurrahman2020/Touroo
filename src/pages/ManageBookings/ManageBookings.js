import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [count, setCount] = useState(0);
    const [cancel, setCancel] = useState(1);
    const [update, setUpdate] = useState(1);

    useEffect(() => {
        fetch('https://rahmanassignment11.herokuapp.com/all-bookings')
            .then(res => res.json())
            .then(result => {
                setCount(result.length)
                setBookings(result)
            })
    }, [cancel, update])

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

    const updateStatus = id => {
        console.log(id);
        fetch(`https://rahmanassignment11.herokuapp.com/update/${id}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert('Successfully Approved !')
                    setUpdate(update + 1)
                }
            })
    }

    return (
        <div>
            {
                count < 1 ? <h3 className="text-center text-danger my-5 text-uppercase">No trip booked yet !</h3> :
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
                                    <th>Update</th>
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
                                        <td>{booking.status}</td>
                                        <td>
                                            {
                                                booking.status == "approved" ? <b className="text-success text-uppercase">Updated</b> : <button onClick={() => updateStatus(booking._id)} className="btn btn-primary">Approve</button>
                                            }
                                        </td>
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

export default ManageBookings;