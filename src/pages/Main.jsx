import { Outlet, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar'
import Index from './Index';
import Links from './Links';
import HomeIcon from '../assets/home-icon.png'
import Acccount from '../assets/accounts.png'
import Bookmark from '../assets/bookmark.png'
import ContactIcon from '../assets/contact-icon.png'


function Main() {



    return (

        <>

            <Helmet>
                <title>eHUB - Hero</title>
            </Helmet>

            {/*header section layout*/}
            <header id="header">
                <Navbar />
            </header>

            {/*main section layout*/}
            <main>
                <Outlet />
            </main>

            {/*footer section layout*/}
            <footer>
                <Links />
            </footer>

        </>
    )
}

export default Main;