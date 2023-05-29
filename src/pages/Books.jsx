import ArrowRight from '../assets/arrow-right.png'

function Books() {
    return (
        <>
            <section className="books" id="books">
                <div className="container books-content">

                    {/*category 1*/}
                    <div className="row romance-section">

                        <div className="row-main-text">
                            <h2>SELF-HELP BOOKS</h2>
                            <img src={ArrowRight} alt="" width={'40px'} />
                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                    </div>

                    {/*category 2*/}
                    <div className="row romance-section">
                        <div className="row-main-text">
                            <h2>MYSTERY BOOKS</h2>
                            <img src={ArrowRight} alt="" width={'40px'} />
                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                    </div>

                    {/*category 3*/}
                    <div className="row romance-section">
                        <div className="row-main-text">
                            <h2>ACADEMICS BOOKS</h2>
                            <img src={ArrowRight} alt="" width={'40px'} />
                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-2">

                        </div>
                    </div>
                    <div className="books-btn">
                        <button className="btn btn-dark">SEE MORE CATEGORIES<i class="uit uit-angle-double-right"></i></button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Books;