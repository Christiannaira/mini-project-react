import Hero from './Hero';
import Cta from './Cta';
import FeaturedBooks from './FeaturedBooks';
import Cta2 from './CtaTwo';
import Books from './Books';
import Ratings from './Ratings';
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <>
            <Hero />
            <Cta />
            <FeaturedBooks />
            <Cta2 />
            <Books />
            <Ratings />
        </>
    )
}

export default MainPage;