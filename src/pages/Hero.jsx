import { useState } from 'react';
import HeroAnimation from '../assets/hero-animation.gif';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import Pinterest from '../assets/pinterest.png';
import Twitter from '../assets/twitter.png';
import Youtube from '../assets/youtube.png';
import SearchAnimation from '../assets/search-icon.gif'
import ArrowDownAnimation from '../assets/arrow-down-animation.gif'
import Search from './Search';

function Hero() {

    const [search, setSearch] = useState('');

    const searchBook = () => {

        if (document.querySelector("#searchText").value) {
            setSearch(document.querySelector("#searchText").value);
        } else {
            alert('please insert something');
        }


    }

    return (
        <>

            {/*home section layout*/}
            <section className="home" id="home">
                <div className="container home-content">
                    <div className="row  text-center">
                        <div className="col-12">
                            <h1>Unlock The Universe</h1>

                        </div>
                        <div className="col-12" id="home-img">
                            <img src={HeroAnimation} alt="" width={'450px'} />
                        </div>
                        <div className="col-12">
                            <p> Dive into the Enchanting Realm of Reading and Discover Endless Adventures!</p>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <div className="search-bar">
                                <img src={SearchAnimation} alt="" />
                                <input type="text" className='form-control d-block' placeholder='search your favorite author, books...' id="searchText" />
                                <button className='btn btn-dark' onClick={searchBook}>Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="social-media-icons mt-4">
                        <div className="social-contents">
                            <a ><img src={Facebook} alt="facebook-icon" width={'28px'} /></a>
                            <a ><img src={Instagram} alt="instagram-icon" width={'28px'} /></a>
                            <a ><img src={Pinterest} alt="pinterest-icon" width={'28px'} /></a>
                            <a ><img src={Twitter} alt="twitter-icon" width={'28px'} /></a>
                            <a ><img src={Youtube} alt="youtube-icon" width={'28px'} /></a>
                        </div>
                    </div>
                    <div className='text-center mt-3'>
                        <a href=""><img src={ArrowDownAnimation} alt="" className='rounded-pill' /></a>

                    </div>

                    {search ? <Search keyword={search} /> : ''}


                </div>
            </section>

        </>
    )
}

export default Hero;