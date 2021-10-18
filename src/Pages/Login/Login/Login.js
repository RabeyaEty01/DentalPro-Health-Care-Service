import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="container login-page">
            <div className="myCard">
                <div className="row">
                    <div className="col-md-6">
                        <div className="myLeftCtn">
                            <form className="myForm text-center">
                                <header>Please Login</header>

                                <div className="form-group my-3">
                                    <i className="fas fa-envelope"></i>
                                    <input className="myInput" placeholder="Email" type="email" name="" id="" required />
                                </div>

                                <div className="form-group my-3">
                                    <i className="fas fa-lock"></i>
                                    <input className="myInput" placeholder="Password" type="password" name="" id="password" required />
                                </div>

                                <input type="submit" className="btn-button my-3" value="SIGN IN" name="" id="" />
                                <br />
                                <NavLink to="/register"><small>Need an account?</small></NavLink>

                                <hr />
                                <h4 className="text-center text-secondary">OR</h4>
                                <button className=""> Sign in With Google</button>
                            </form>
                        </div>

                    </div>

                    <div className="col-md-6">
                        <div className="myRightCtn">
                            <div className="box">
                                <header>Hello World!</header>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta asperiores aperiam hic perferendis at ipsum voluptas, eaque est inventore, temporibus autem maiores unde! Quos incidunt amet expedita sit deserunt optio.</p>
                                <input type="button" className="butt_out" name="" value="Learn More" id="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;