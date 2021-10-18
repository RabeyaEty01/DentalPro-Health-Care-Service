import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Registration = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="container login-page">
            <div className="myCard">
                <div className="row">
                    <div className="col-md-6">
                        <div className="myLeftCtn">
                            <form  onClick="" className="myForm text-center">
                                <header>Create new account</header>
                                <div className="form-group my-3">
                                    <i className="fas fa-envelope"></i>
                                    <input className="myInput" placeholder="Email" type="email" name="" id="" required />
                                    <div className="invalid-feedback">Please fill out this field.
                                    </div>
                                </div>

                                <div className="form-group my-3">
                                    <i className="fas fa-lock"></i>
                                    <input className="myInput" placeholder="Password" type="password" name="" id="password" required />
                                </div>

                                <div className="form-group my-3">
                                    <i className="fas fa-lock"></i>
                                    <input className="myInput" placeholder="Re-enter Password" type="password" name="" id="password" required />
                                </div>

                              
                                <input type="submit" className="btn-button " value="CREATE ACCOUNT" name="" id="" />

                                <hr />
                                <h4 className="text-center text-secondary">OR</h4>
                                <button onClick={signInUsingGoogle} className="border-0 rounded-pill p-2 w-75 bg-warning shadow"><i class="fab fa-google "></i> Sign Up With Google</button>

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

export default Registration;