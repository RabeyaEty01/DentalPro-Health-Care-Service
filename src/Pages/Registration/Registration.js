import React from 'react';

const Registration = () => {
    return (
        <div className="container login-page">
        <div className="myCard">
            <div className="row">
                <div className="col-md-6">
                    <div className="myLeftCtn">
                        <form className="myForm text-center">
                            <header>Create new account</header>
                            <div className="form-group my-3">
                                <i className="fas fa-user"></i>
                                <input className="myInput" placeholder="User Name" type="text" name="" id="username" required />
                                <div className="invalid-feedback">Please fill out this field.
                                </div>
                            </div>

                            <div className="form-group my-3">
                                <i className="fas fa-envelope"></i>
                                <input className="myInput" placeholder="Email" type="email" name="" id="" required />
                            </div>

                            <div className="form-group my-3">
                                <i className="fas fa-lock"></i>
                                <input className="myInput" placeholder="Password" type="password" name="" id="password" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="">
                                    <input type="checkbox" name="check_1" id="check_1" required />
                                        <small>I read and agree to Terms & Conditions</small>
                                    <div className="invalid-feedback">
                                        You must check the box
                                    </div>
                                </label>

                            </div>
                            <input type="submit" className="btn-button my-3" value="CREATE ACCOUNT" name="" id="" />

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