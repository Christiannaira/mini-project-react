import { Link } from "react-router-dom";
import ContactAnimation from '../assets/contact-animation.gif'
import ContactAbstract from '../assets/contact-abstract.png'

function Contact() {
    return (
        <>
            <section className="contact">
                <div className="container contact-content">
                    <div className='breadcrumb'>
                        <Link to='/'>Home</Link><i class='bx bx-chevron-right'></i> Contact <i class='bx bx-chevron-right'></i>
                    </div>
                    <div className="main-content text-center">

                        <img src={ContactAnimation} alt='contact-animation' width={'400px'} />
                    </div>
                    <div className="row contact-row">
                        <div className="col-md-12">

                            <div className="row">

                                <div className="col-md-6">
                                    {/*contactInfo One*/}
                                    <div className="infoOne">
                                        <h3>CALL US</h3>
                                        <span>1 (234) 567-891, 1 (234) 987 654</span>
                                    </div>
                                    {/*contactInfo Two*/}
                                    <div className="infoTwo">
                                        <h3>LOCATION</h3>
                                        <span>121 Rock Street, 21 Avenue, New York, NY 92103-9000</span>
                                    </div>
                                    {/*contactInfo Three*/}
                                    <div className="infoThree">
                                        <h3>BUSINESS HOURS</h3>
                                        <span>1 (234) 567-891, 1 (234) 987 654</span>
                                    </div>
                                </div>
                                <div className="col-md-6 contact-form">
                                    <h2>CONTACT US</h2>
                                    <form action="">
                                        <input type="text" placeholder="Enter your name" className="form-control" />
                                        <input type="text" placeholder="Enter your valid address" className="form-control" />
                                        <textarea name="" id="" cols="30" rows="10" className="form-control" placeholder="Leave a message"></textarea>
                                        <button type="submit" className="btn btn-dark" >Submit</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="signature text-center mt-3">
                        <img src={ContactAbstract} alt="abstrac-signature" width={'150px'} />

                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact;