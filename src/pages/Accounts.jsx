import AccountAnimation from '../assets/account-animation.gif'
import { Link } from 'react-router-dom';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import Ratings from './Ratings';


function Accounts() {
    return (
        <>
            <section className="accounts">
                {/*breadcrumb section layout*/}
                <div className='breadcrumb'>
                    <Link to='/'>Home</Link><i className='bx bx-chevron-right'></i> Account <i className='bx bx-chevron-right'></i> 
                  
                </div>

                {/* account section */}
                <div className="container accounts-content">
                    <div className="main-content text-center d-md-flex align-items-center justify-content-center">
                        <h1>YOUR ACCOUNT</h1>
                        <img src={AccountAnimation} alt="account-animation" width={'300px'} />
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <h3>Sign In</h3>

                            <SignIn />


                        </div>

                        <div className="col-md-6">
                            <h3>Sign Up</h3>

                            <SignUp />


                            

                        </div>

                    

                        </div>
                       

                    </div>
                

            </section>
            <Ratings />

        </>
    )
}

export default Accounts;