import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Registration = () => {
    const { signInUsingGoogle, handleEmailChange,
        handlePasswordChange, handleRegister,handleNameChange,handlePhotoURLChange, error} = useAuth();
       
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })

    }


    return (
        <div className="container login-page">
            <div className="myCard">
                <div className="row">
                    <div className="col-md-6">
                        <div className="myLeftCtn">
                            <form onSubmit={handleRegister} className="myForm text-center">
                                <header>Create new account</header>
                                
                                <div className="form-group my-3">
                                    <i className="fas fa-lock"></i>
                                    <input onBlur={handleNameChange} className="myInput" placeholder="Your Name" type="text" name="" id="name" required />
                                </div>


                                <div className="form-group my-3">
                                    <i className="fas fa-envelope"></i>
                                    <input onBlur={handleEmailChange} className="myInput" placeholder="Email" type="email" name="" id="" required />
                                    <div className="invalid-feedback">Please fill out this field.
                                    </div>
                                </div>

                                <div className="form-group my-3">
                                    <i className="fas fa-envelope"></i>
                                    <input onBlur={handlePhotoURLChange} className="myInput" placeholder="Your Photo URL" type="text" name="" id="" required />
                                    <div className="invalid-feedback">Please fill out this field.
                                    </div>
                                </div>

                                <div className="form-group my-3">
                                    <i className="fas fa-lock"></i>
                                    <input onBlur={handlePasswordChange} className="myInput" placeholder="Password" type="password" name="" id="password" required />
                                </div>

                                <div className="text-danger">{error}</div>

                                <input type="submit" className="btn-button my-3" value="CREATE ACCOUNT" name="" id="" />
                                <br />
                                <NavLink to="/login"><small>Already have an account?</small></NavLink>
                                <br />

                                <h4 className="text-center text-secondary">OR</h4>
                                <button onClick={handleGoogleLogin} className="border-0 rounded-pill p-2 w-75 bg-warning shadow"><i class="fab fa-google "></i> Sign Up With Google</button>

                            </form>
                        </div>

                    </div>

                    <div className="col-md-6">
                        <div className="myRightCtn">
                            <div className="box">
                                <header>Dental & Oral Health</header>
                                <p>Dental and oral health is an essential part of your overall health and well-being.Maintaining healthy teeth and gums is a lifelong commitment. The earlier you learn proper oral hygiene habits — such as brushing, flossing, and limiting your sugar intake — the easier it’ll be to avoid costly dental procedures and long-term health issues.</p>
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