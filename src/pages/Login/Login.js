import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router';
import './login.css'
const Login = () => {
    const {loginWithGoogle, setLocation, setHistory} = useAuth();
    const location = useLocation();
    const history = useHistory();
    useEffect( ()=>{
        setLocation(location)
    },[location])

    useEffect( ()=>{
        setHistory(history)
    },[history])

    return (
        <div>
            <div className="login-component">
            <div className="login-container shadow">
                <h2 className="my-3">Please Login with !</h2>
                <button onClick={loginWithGoogle} className="btn btn-primary">Continue with Google</button>
                {/* <p>Don't have an account?<Link to="/register">Create an account</Link></p> */}
            </div>
        </div>
        </div>
    );
};

export default Login;