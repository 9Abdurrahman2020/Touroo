import React from 'react';
import Banner from '../Banner/Banner';
import OurTeam from '../OurTeam/OurTeam';
import RecentTrip from '../RecentTrip/RecentTrip';
import Trips from '../Trips/Trips';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Trips/>
            <RecentTrip/>
            <OurTeam/>
        </div>
    );
};

export default Home;