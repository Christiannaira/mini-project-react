import { Outlet, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar'
import Ratings from './Ratings';
import Links from './Links';


function Main() {

    const location = useLocation();

    return (

        <>

            <Helmet>
                {
                    location.pathname === '/' ? (<title>eHUB - Hero</title>) : ''
                }

                {
                    location.pathname === '/account' ? (<title>eHUB - Account</title>) : ''
                }

                {
                    location.pathname === '/contact' ? (<title>eHUB - Contact</title>) : ''
                }
                {
                    location.pathname === '/bookmarks' ? (<title>eHUB - Bookmarks</title>) : ''
                }
                {
                    location.pathname === '/categories' ? (<title>eHUB - Categories</title>) : ''
                }

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
                <Ratings />
                <Links />
            </footer>

        </>
    )
}

export default Main;