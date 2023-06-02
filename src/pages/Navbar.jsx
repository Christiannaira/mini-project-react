import HomeIcon from '../assets/home-icon.png'
import Acccount from '../assets/accounts.png'
import Bookmark from '../assets/bookmark.png'
import ContactIcon from '../assets/contact-icon.png'
import { Link } from 'react-router-dom'


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
                    <Link to="/" data-bs-toggle="tooltip" data-bs-placement="top" title="Home" className='icons'><img src={HomeIcon} alt="home-icon" width={'20px'} /></Link>
                    <Link to="/account" data-bs-toggle="tooltip" data-bs-placement="top" title="Account" className='icons'><img src={Acccount} alt="login&signin" width={'20px'} /></Link>
                    <Link to="/contact" data-bs-toggle="tooltip" data-bs-placement="top" title="Contact" className='icons'><img src={ContactIcon} alt="contact-icon" width={'20px'} /></Link>
                    <Link to="/bookmarks" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark" className='icons'><img src={Bookmark} alt="bookmarks" width={'20px'} /></Link>


                </div>
            </nav>
        </>
    )
}

export default Navbar;