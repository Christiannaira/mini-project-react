import CtaAnimation from '../assets/cta-animation.gif'
import { Link } from 'react-router-dom';

function CtaTwo() {
    return (
        <>
            <section className="cta2" id="cta2">
                <div className="container cta2-content">
                    <div className="row">
                        <div className="col-12 text-center">
                            <img src={CtaAnimation} alt="cta-animation" width={'340px'} />
                        </div>
                        <div className="col-12">
                            <div className="cta2-text text-center">
                                <h3>SOMETHING MISSING?</h3>
                            </div>
                            <div className="cta2-btn text-center mt-3">
                                <Link to='/categories'><button className='btn btn-dark'>VIEW ALL BOOKS</button></Link>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CtaTwo;