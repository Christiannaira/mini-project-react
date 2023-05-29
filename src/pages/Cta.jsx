import CtaImage from '../assets/cta-image.png'

function Cta() {
    return (
        <>
            <section className="cta" id="cta">
                <div className="container cta-content">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={CtaImage} alt="cta-image" width={'270px'} />
                        </div>
                        <div className="col-md-9">
                            <h2>START READING</h2>
                            <p>Embark on an extraordinary journey by immersing yourself in the captivating world of literature. Whether you're seeking an escape from reality, a chance to expand your knowledge, or a way to ignite your imagination, there's no better time to start reading than now. </p>
                            <div className='mt-3'>
                                <button className='btn btn-dark'>read</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Cta;