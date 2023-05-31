import HomeIcon from '../assets/home-icon.png'
import Acccount from '../assets/accounts.png'
import Bookmark from '../assets/bookmark.png'
import ContactIcon from '../assets/contact-icon.png'


function Navbar() {


    return (
        <>
            <nav>
                <div className="navbar-logo">
                    <a href="#">eHUB</a>
                </div>
                <div className="navlist">
                    <div className="navbar-dropdown">
                        <button className="navbar-dropbtn">categories</button>
                        <div className="dropdown-content">
                            <div class="dropdown-header">
                                <h2>Mega Menu</h2>
                            </div>
                            <div class="dropdown-row container">
                                <div className="row">
                                    <div class="dropdown-column col-md-4">
                                        <h3>Category 1</h3>
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                    <div class="dropdown-column col-md-4">
                                        <h3>Category 2</h3>
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                    <div class="dropdown-column col-md-4">
                                        <h3>Category 3</h3>
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="top-icons">

                    <a href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="Home"><img src={HomeIcon} alt="home-icon" width={'20px'} /></a>
                    <a href="/account" data-bs-toggle="tooltip" data-bs-placement="top" title="Account"><img src={Acccount} alt="login&signin" width={'20px'} /></a>
                    <a href="/contact" data-bs-toggle="tooltip" data-bs-placement="top" title="Contact"><img src={ContactIcon} alt="contact-icon" width={'20px'} /></a>
                    <a href="/bookmark" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><img src={Bookmark} alt="bookmarks" width={'20px'} /></a>

                </div>
            </nav>
        </>
    )
}

export default Navbar;