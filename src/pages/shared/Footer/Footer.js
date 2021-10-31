import React from 'react';
import './footer.css';
const Footer = () => {
    return (
        <div className="bg-black text-white px-2 py-5 mt-5">
            <div className="row text-center">
                <div className="col-md-6">
                    <div>
                        <h4><i class="fas fa-map-marker-alt"></i> Mohamaya, Chandpur, BD</h4>
                    </div>
                    <div className="my-3">
                        <h4><i class="fas fa-phone-alt"></i>  +8801648308424</h4>
                    </div>
                    <div>
                        <h4><i class="fas fa-envelope"></i>  9Abdurrahman2020@gmail.com</h4>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <h3>About</h3>
                        <p>We are a Tour organization company. We organization trip around the world. We have trip every month and whole year. Fell free to book your Trip.<br/>-Happy Tourism-</p>
                        <div className="social">
                            <i class="me-2 fab fa-facebook-square"></i>
                            <i class="me-2 fab fa-twitter-square"></i>
                            <i class="me-2 fab fa-linkedin"></i>
                            <i class="me-2 fab fa-github-square"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;