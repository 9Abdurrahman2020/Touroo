import React from 'react';
import { Card } from 'react-bootstrap';

const RecentTrip = () => {
    return (
        <div className="container">
            <h2 className="text-warning mb-3 text-center" style={{fontFamily: 'Dancing Script, cursive'}}>Recent Trip Album</h2>
            <div className="row">
                <div className="col-md-6">
                <Card>
                    <Card.Img  variant="top" style={{height:'350px'}} src="http://esdm.daffodilvarsity.edu.bd/images/saintTour%20(3).JPG" />
                    <Card.Body>
                        <h3>Saint Martin Island</h3>
                        <small className="text-muted">Date:15-Aug-2021</small>
                    </Card.Body>                    
                </Card>
                </div>
                <div className="col-md-6">
                <Card >
                    <Card.Img className="w-100"style={{height:'350px'}}  variant="top" src="https://1.bp.blogspot.com/-Sd4h_1G46l8/Xv9QqZolXmI/AAAAAAAAW84/pRrNGCqoAnE-_vZ_TcI2ju_kj5jwFEEnACK4BGAsYHg/s3569/LRM_EXPORT_152411540186118_20190308_191825313.jpeg" />
                    <Card.Body>
                        <h3>KuaKata Sea Beach</h3>
                        <small className="text-muted">Date:10-July-2021</small>
                    </Card.Body>                    
                </Card>
                </div>
            </div>
        </div>
    );
};

export default RecentTrip;