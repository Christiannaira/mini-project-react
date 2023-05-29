import Navbar from './Navbar'
import Hero from './Hero';
import Cta from './Cta';
import FeaturedBooks from './FeaturedBooks';
import Cta2 from './CtaTwo';
import Books from './Books';
import Ratings from './Ratings';

function Main() {


    window.onscroll = function () {
        () => {
            if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
                document.getElementById("header").style.top = '0';
            } else {
                document.getElementById("header").style.top = "-70px";
            }
        }
    }

    return (
        <>
            {/*header section layout*/}
            <header id="header">
                <Navbar />
            </header>

            {/*main section layout*/}
            <main>
                <Hero />
                <Cta />
                <FeaturedBooks />
                <Cta2 />
                <Books />
                <Ratings />
            </main>


        </>
    )
}

export default Main;