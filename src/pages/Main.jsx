import { Outlet, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar'
import Index from './Index';
import Links from './Links';



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
                <Index />
            </main>

            {/*footer section layout*/}
            <footer>
                <Links />
            </footer>

        </>
    )
}

export default Main;