import React from 'react';
import { Card } from 'react-bootstrap';

const OurTeam = () => {
    return (
        <div className="container my-5">
            <h2 className="text-success text-center mb-3">Our <span className="text-danger">Team</span></h2>
            <div className="row">
                <div className="col-md-3">
                <Card>
                    <Card.Img  variant="top" src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/team-member-1.jpg" />
                    <Card.Body>
                        <h3>Brenda Sherman</h3>
                        <small className="text-muted">CEO</small>
                    </Card.Body>                    
                </Card>
                </div>
                <div className="col-md-3">
                <Card>
                    <Card.Img  variant="top" src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/team-member-2.jpg" />
                    <Card.Body>
                        <h3>Derek Horton</h3>
                        <small className="text-muted">Photographer</small>
                    </Card.Body>                    
                </Card>
                </div>
                <div className="col-md-3">
                <Card>
                    <Card.Img  variant="top" src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/team-member-3.jpg" />
                    <Card.Body>
                        <h3>Alicia Mckenzie</h3>
                        <small className="text-muted">Project Coordinator</small>
                    </Card.Body>                    
                </Card>
                </div>
                <div className="col-md-3">
                <Card>
                    <Card.Img  variant="top" src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/team-member-4.jpg" />
                    <Card.Body>
                        <h3>Andy Bowen</h3>
                        <small className="text-muted">Tour guide</small>
                    </Card.Body>                    
                </Card>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;