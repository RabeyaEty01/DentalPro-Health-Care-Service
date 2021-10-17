import React from 'react';
import footerlogo from '../../../images/logo-2.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className="bg-footer my-5 pt-4 pb-4">
            <img src={footerlogo} alt="" />
            <div className="text-white text-start ps-5 row row-cols-2 row-cols-lg-5 pt-4 pb-4">
                <div className="half-div">
                    <h4>SIGN UP AND SAVE</h4>
                    <p>Receive 20% off on registration</p>
                    <p>Hurry Up Now!</p>
                    <input type="text" placeholder="Email Address" />
                    <button className="btn-danger">SIGN UP</button>

                </div>
                <div className="text-start">
                    <h4>CONTACT INFO</h4>
                    <p>11244 Rabeya Ety,Dhaka</p>
                    <p>+088-127889746</p>
                    <p>etyrabeya@gmail.com</p>
                    <div className="d-flex">
                        <i className=" fa-2x fab fa-facebook"></i>
                        <i class="fa-2x fab fa-linkedin ms-2"></i>
                        <i className="fa-2x fab fa-twitter-square ms-2"></i>
                        <i className="fa-2x fab fa-instagram-square ms-2"></i>
                    </div>
                </div>

                <div>
                    <h4>Our Services</h4>
                    <p>Cosmetic Dentistry</p>
                    <p>General Dentistry</p>
                    <p>Certified Dentist</p>
                    <p>Best Dentist</p>

                </div>
                <div>
                    <h4>Support</h4>
                    <p>Our Dentist</p>
                    <p>Terms of Services</p>
                    <p>Our Pricing</p>
                    <p>Testimonials</p>

                </div>
                <div>
                    <h4>TERMS</h4>
                    <p>Privacy Policy</p>
                    <p>Disclaimer</p>
                    <p>Cancellation Policy</p>
                    <p>Cancellation Policy</p>

                </div>
            </div>
            <hr />
            <div>
                <p className="text-white">2021 Dental Care Theme © Copyright Rabeya Aktar Ety</p>


            </div>
        </div>
    );
};

export default Footer;