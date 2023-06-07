import { useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar'
import Ratings from './Ratings';
import Links from './Links';



function Main() {

    const location = useLocation();

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector("header").style.top = "0";

        } else {
            document.querySelector("header").style.top = "-80px";

        }
        prevScrollpos = currentScrollPos;
    }

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
                <Links />
            </footer>

        </>
    )
}

export default Main;