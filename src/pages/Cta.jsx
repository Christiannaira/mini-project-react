import CtaImage from '../assets/cta-image.png'

function Cta() {
    return (
        <>
            <section className="cta" id="cta">
                <div className="container cta-content">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <h2>START READING</h2>
                        </div>
                        <div className="col-md-12 mt-3 mb-3">
                            <img src={CtaImage} alt="cta-image" width={'270px'} />
                        </div>

                        <div className='mt-3'>
                            <button className='btn btn-dark'>read</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Cta;