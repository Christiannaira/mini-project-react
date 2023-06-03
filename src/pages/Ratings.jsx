import { useEffect } from 'react';
import ReviewOne from '../assets/reviewone.jpg'
import ReviewTwo from '../assets/reviewtwo.jpg'
import ReviewThree from '../assets/reviewthree.jpg'
import ReviewFour from '../assets/reviewfour.jpg'
import Logo from '../assets/logo.png'



function Ratings() {

    useEffect(() => {
        var swiper = new Swiper('.swiper', {
            slidesPerView: 2,
            direction: getDirection(),
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                resize: function () {
                    swiper.changeDirection(getDirection());
                },
            },
        });

        function getDirection() {
            var windowWidth = window.innerWidth;
            var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

            return direction;
        }
    }, [])

    return (
        <>
            <div className="ratings">
                {/*swiperjs layout*/}
                <div class="swiper">
                    <div class="swiper-wrapper">

                        {/*review one*/}
                        <div class="swiper-slide">

                            <div className="container profile ">
                                <div className="main-profile row">
                                    <div className="col-12 d-flex justify-content-start align-items-center ">
                                        <div className="profile-img me-2">
                                            <img src={ReviewOne} alt="" width={'70px'} className='rounded-circle' />
                                        </div>
                                        <div className="profile-info text-start">
                                            <h5>Walter White <i class='bx bxs-check-circle'></i></h5>
                                            <span>Singapore</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="start-ratings text-start">
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                    </div>
                                </div>

                                <div className="profile-text row">
                                    <div className="col-12">
                                        <p>
                                            "Finding my favorite books on this ebook website is a breeze! The search function is powerful and accurate, delivering relevant results within seconds."
                                        </p>

                                    </div>
                                </div>
                                <div className="reactions">
                                    <a ><i class='bx bx-heart'></i></a>
                                    <a href=""><i class='bx bx-like' ></i></a>
                                    <a href=""><i class='bx bx-dislike' ></i></a>
                                </div>
                            </div>

                        </div>

                        {/*review two*/}

                        <div class="swiper-slide">

                            <div className="container profile ">
                                <div className="main-profile row">
                                    <div className="col-12 d-flex justify-content-start">
                                        <div className="profile-img me-2">
                                            <img src={ReviewTwo} alt="" width={'70px'} className='rounded-circle' />
                                        </div>
                                        <div className="profile-info text-start">
                                            <h5>Sarah Jhonson <i class='bx bxs-check-circle'></i></h5>
                                            <span >Cebu, Philippines</span>
                                        </div>

                                    </div>

                                </div>
                                <div className="row">
                                    <div className="start-ratings text-start">
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                    </div>
                                </div>
                                <div className="profile-text row">
                                    <div className="col-12">
                                        <p>   "Searching for my favorite books on this ebook website is a joy! The website's well-organized categories and subcategories make it easy to explore different genres and discover new titles. "</p>
                                    </div>
                                </div>
                                <div className=" reactions">
                                    <a href=""><i class='bx bx-heart'></i></a>
                                    <a href=""><i class='bx bx-like' ></i></a>
                                    <a href=""><i class='bx bx-dislike' ></i></a>
                                </div>
                            </div>

                        </div>

                        {/*review three*/}
                        <div class="swiper-slide">

                            <div className="container profile ">
                                <div className="main-profile row">
                                    <div className="col-12 d-flex justify-content-start">
                                        <div className="profile-img me-2">
                                            <img src={ReviewThree} alt="" width={'70px'} className='rounded-circle' />
                                        </div>
                                        <div className="profile-info text-start">
                                            <h5>William Anderson <i class='bx bxs-check-circle'></i></h5>
                                            <span>Shibuya, Japan</span>
                                        </div>

                                    </div>

                                </div>
                                <div className="row">
                                    <div className="start-ratings text-start">
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                    </div>
                                </div>
                                <div className="profile-text row">
                                    <div className="col-12">
                                        <p>"Searching for my favorite books on this ebook website is a joy! The website's well-organized categories and subcategories make it easy to explore different genres and discover new titles. "</p>
                                    </div>
                                </div>
                                <div className="reactions">
                                    <a href=""><i class='bx bx-heart'></i></a>
                                    <a href=""><i class='bx bx-like' ></i></a>
                                    <a href=""><i class='bx bx-dislike' ></i></a>
                                </div>
                            </div>

                        </div>

                        {/*review four*/}

                        <div class="swiper-slide">

                            <div className="container profile ">
                                <div className="main-profile row">
                                    <div className="col-12 d-flex justify-content-start">
                                        <div className="profile-img me-2">
                                            <img src={ReviewFour} alt="" width={'70px'} className='rounded-circle' />
                                        </div>
                                        <div className="profile-info text-start">
                                            <h5>Amanda Jepson <i class='bx bxs-check-circle'></i></h5>
                                            <span>Sydney, Australia</span>
                                        </div>

                                    </div>

                                </div>
                                <div className="row">
                                    <div className="start-ratings text-start">
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                    </div>
                                </div>
                                <div className="profile-text row">
                                    <div className="col-12">
                                        <p>  "I'm impressed with how easy it is to search for my favorite books on this ebook website. "</p>
                                    </div>
                                </div>
                                <div className="reactions">
                                    <a href=""><i class='bx bx-heart'></i></a>
                                    <a href=""><i class='bx bx-like' ></i></a>
                                    <a href=""><i class='bx bx-dislike' ></i></a>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>

            </div>

        </>
    )
}

export default Ratings;