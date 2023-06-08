import NotFoundImage from '../assets/not-found.gif'

function NotFound() {

    return (
        <>
            <section className='notFound d-flex align-items-center justify-content-center' id="notFound">
                <div className="container  text-center">
                    <div className="nf-img">
                        <img src={NotFoundImage} alt="" width={'300px'} />
                        <h3>No Results</h3>
                    </div>
                </div>

            </section>
        </>
    )
}

export default NotFound;