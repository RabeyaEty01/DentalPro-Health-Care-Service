import React from 'react';
import './Appointment.css';
import img1 from '../../../images/appointment.png';


const Appointment = () => {
    return (
      <div className="appoinment-part ">
          <h1 className="fw-bold">-Appointment <span className="service-text">Form</span> -</h1>
            <h3 className="text-secondary">Make Your Appointment With Our Certified Doctors </h3>
            <div className="container my-5">
            <div class="col-md-7 container">
                <div className="choose-card card  h-100 p-4 border-0 myLeftCtn myLeftCtn-2">
                    <form
                        className="myForm text-center">
                       <h1 className="fw-bold text-dark">Make An Appoinment</h1>

                        <div 
                         className="form-group my-3 ">
                            <i className="fas fa-user"></i>
                            <input className="myInput" placeholder="Name*" type="text" name="" id="" required />
                        </div>

                        <div className="form-group my-3">
                            <i className="fas fa-envelope"></i>
                            <input className="myInput" placeholder="Email*" type="email" name="" id="" required />
                        </div>

                        <div className="form-group my-3">
                            <i className="fas fa-lock"></i>
                            <input className="myInput" placeholder="Password" type="password" name="" id="password" required />
                        </div>

                        <div className="form-group my-3">
                            <i className="fas fa-lock"></i>
                            <input className="myInput" placeholder="Phone*" type="phone" name="" id="phone" required />
                        </div>

                        <div className="form-group my-3">
                            <i className="fas fa-lock"></i>
                            <input className="myInput " placeholder="Date" type="date" name="" id="date" required />
                        </div>

                        <input type="submit" className="btn-button my-3" value="Book Appointment" name="" id="" />

                    </form>
                </div>
            </div>
          
           
        </div>
      </div>
    );
};

export default Appointment;