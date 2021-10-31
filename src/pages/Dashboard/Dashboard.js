import React, { useState } from 'react';
import AddNewTrip from '../AddNewTrip/AddNewTrip';
import ManageBookings from '../ManageBookings/ManageBookings';
import MyBookings from '../MyBookings/MyBookings';
import './dashboard.css'
const Dashboard = () => {
    const [menu, setMenu] = useState('manageBooking');
    
    return (
        <div>
            <div className="row">
                <div className="col-md-3 dashboard-menu px-5 py-3">
                    <button onClick={()=> setMenu('manageBooking')} id={menu === 'manageBooking' && 'selected'} className="btn btn-primary mb-2">Manage All Bookings</button>
                    <button onClick={()=> setMenu('myBooking')} id={menu === 'myBooking' && 'selected'} className="btn btn-primary mb-2">My Bookings</button>
                    <button onClick={()=> setMenu('addTrip')} id={menu === 'addTrip' && 'selected'} className="btn btn-primary mb-2">Add a new Trip</button>
                </div>
                <div className="col-md-9">
                    {
                        menu == 'manageBooking' && <ManageBookings/>
                    }
                    {
                        menu == 'myBooking' && <MyBookings/>
                    }
                    {
                        menu == 'addTrip' && <AddNewTrip/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;