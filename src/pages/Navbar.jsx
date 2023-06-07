import HomeIcon from '../assets/home-icon.png'
import Acccount from '../assets/accounts.png'
import Bookmark from '../assets/bookmark.png'
import ContactIcon from '../assets/contact-icon.png'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import LightMode from '../assets/lightmode.png'
import DarkMode from '../assets/darkmode.png'

function Navbar() {

    const changeColor = () => {
        const body = document.querySelector('body');


    }

    return (
        <>
            <nav>
                <div className="navbar-logo">
                    <Link to='/'><a href="#">Ehub<img src={Logo} alt="logo" /></a></Link>
                </div>


                <div className="top-icons">
                    <Link to="/" data-bs-toggle="tooltip" data-bs-placement="top" title="Home" className='icons'><img src={HomeIcon} alt="home-icon" width={'20px'} /></Link>
                    <Link to="/account" data-bs-toggle="tooltip" data-bs-placement="top" title="Account" className='icons'><img src={Acccount} alt="login&signin" width={'20px'} /></Link>
                    <Link to="/contact" data-bs-toggle="tooltip" data-bs-placement="top" title="Contact" className='icons'><img src={ContactIcon} alt="contact-icon" width={'20px'} /></Link>
                    <Link to="/bookmarks" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark" className='icons'><img src={Bookmark} alt="bookmarks" width={'20px'} /></Link>
                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="dark mode" className='icons lightmode'>
                        <img src={LightMode} alt="" width={'20px'} onClick={changeColor} /></a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;