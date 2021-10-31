import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContextProvider from './context/ContextProvider/ContextProvider';
import About from './pages/About/About';
import AddNewTrip from './pages/AddNewTrip/AddNewTrip';
import AllTrip from './pages/AllTrip/AllTrip';
import Booking from './pages/Booking/Booking';
import Contact from './pages/Contact/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ManageBookings from './pages/ManageBookings/ManageBookings';
import MyBookings from './pages/MyBookings/MyBookings';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';
import TripDetail from './pages/TripDetail/TripDetail';
import PrivateRoute from './PrivateRoute/PrivateRoute';
function App() {
  return (
    <div style={{overflow:'hidden'}}>
          <ContextProvider>
      <BrowserRouter>
          <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/details/:id">
          <TripDetail/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/all-trip">
          <AllTrip/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <PrivateRoute path="/booking/:id">
          <Booking/>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard/>
        </PrivateRoute>
        <PrivateRoute path="/my-bookings">
          <MyBookings/>
        </PrivateRoute>
        <PrivateRoute path="/add-trip">
          <AddNewTrip/>
        </PrivateRoute>
        <PrivateRoute path="/manage">
          <ManageBookings/>
        </PrivateRoute>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
        <Footer/>
    </BrowserRouter>
    </ContextProvider>
    </div>
  );
}

export default App;
