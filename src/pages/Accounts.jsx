import AccountAnimation from '../assets/account-animation.gif'
import { Link } from 'react-router-dom';
import Ratings from './Ratings';

function Accounts() {
    return (
        <>
            <section className="accounts">
                {/*breadcrumb section layout*/}
                <div className='breadcrumb'>
                    <Link to='/'>Home</Link><i class='bx bx-chevron-right'></i> Account <i class='bx bx-chevron-right'></i>
                </div>
                <div className="container accounts-content">
                    <div className="main-content text-center d-md-flex align-items-center justify-content-center">
                        <h1>YOUR ACCOUNT</h1>
                        <img src={AccountAnimation} alt="account-animation" width={'300px'} />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Sign In</h3>
                            <form action="">
                                <input type="text" placeholder='Username' className='form-control' />
                                <input type="password" placeholder='Password' className='form-control' />
                                <span>Forgot Password?</span>
                                <label className='rememberMe' htmlFor='rememberMe'>
                                    <input type="checkbox" id='rememberMe' /> <span>Remember me</span>
                                </label>
                                <div className="account-btn">
                                    <a href="" className='btn btn-success'>Sign In</a>
                                </div>
                                <div className='mt-2'>
                                    <p>Don't have an account? <a href="">Sign up</a></p>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <h3>Sign Up</h3>
                            <form action="#">
                                <input type="text" placeholder='Email' className='form-control' />
                                <input type="text" placeholder='Username' className='form-control' />
                                <input type="password" placeholder='Password' className='form-control' />
                                <input type="password" placeholder='Confirm Password' className='form-control' />
                                <label className='acceptTC' htmlFor="accept">
                                    <input type="checkbox" id="accept" /> <span>Accept <a >Terms & Conditions</a></span>
                                </label>
                                <a href="#" className='btn btn-success'>Sign Up</a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Ratings />

        </>
    )
}

export default Accounts;