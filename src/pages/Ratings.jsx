import { useEffect } from 'react';
import ReviewOne from '../assets/reviewone.jpg'


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
                        <div class="swiper-slide">

                            <div className="container profile ">
                                <div className="main-profile row">
                                    <div className="col-12 d-flex justify-content-center align-items-center">
                                        <div className="profile-img me-4">
                                            <img src={ReviewOne} alt="" width={'100px'} className='rounded-circle' />
                                        </div>
                                        <div className="profile-info">
                                            <h3>Christian Naira <i class='bx bxs-check-circle'></i></h3>
                                            <span>CEO</span>
                                        </div>

                                    </div>

                                </div>
                                <div className="profile-text row">
                                    <div className="col-12">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident cupiditate sapiente ex, fugiat optio voluptate dolore laboriosam, voluptatum debitis tempora rem officia laudantium quos et corporis corrupti sint placeat velit!
                                        </p>

                                    </div>
                                </div>
                                <div className="reactions">
                                    <a href=""><i class='bx bx-heart'></i></a>
                                    <a href=""><i class='bx bx-like' ></i></a>
                                    <a href=""><i class='bx bx-dislike' ></i></a>
                                </div>
                            </div>

                        </div>

                        <div class="swiper-slide">

                            <div className="container profile ">
                                <div className="main-profile row">
                                    <div className="col-12 d-flex justify-content-center">
                                        <div className="profile-img">
                                            <img src={ReviewOne} alt="" width={'100px'} className='rounded-circle' />
                                        </div>
                                        <div className="profile-info">
                                            <h3>Christian Naira</h3>
                                            <span className='text-secondary'>CEO</span>
                                        </div>

                                    </div>

                                </div>
                                <div className="profile-text row">
                                    <div className="col-12">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo saepe, officia quibusdam, qui harum fugit iste aut corrupti, natus omnis ipsa soluta tenetur ex distinctio corporis consequatur labore expedita!
                                    </div>
                                </div>
                                <div className="row reactions">
                                    <a href=""><i class='bx bx-heart'></i></a>
                                    <a href=""><i class='bx bx-like' ></i></a>
                                    <a href=""><i class='bx bx-dislike' ></i></a>
                                </div>
                            </div>

                        </div>

                        <div class="swiper-slide">

                            <div className="container profile ">
                                <div className="main-profile row">
                                    <div className="col-12 d-flex justify-content-center">
                                        <div className="profile-img">
                                            <img src={ReviewOne} alt="" width={'100px'} className='rounded-circle' />
                                        </div>
                                        <div className="profile-info">
                                            <h3>Christian Naira</h3>
                                            <span className='text-secondary'>CEO</span>
                                        </div>

                                    </div>

                                </div>
                                <div className="profile-text row">
                                    <div className="col-12">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo saepe, officia quibusdam, qui harum fugit iste aut corrupti, natus omnis ipsa soluta tenetur ex distinctio corporis consequatur labore expedita!
                                    </div>
                                </div>
                                <div className="row reactions">
                                    <a href=""><i class='bx bx-heart'></i></a>
                                    <a href=""><i class='bx bx-like' ></i></a>
                                    <a href=""><i class='bx bx-dislike' ></i></a>
                                </div>
                            </div>

                        </div>

                        <div class="swiper-slide">

                            <div className="container profile ">
                                <div className="main-profile row">
                                    <div className="col-12 d-flex justify-content-center">
                                        <div className="profile-img">
                                            <img src={ReviewOne} alt="" width={'100px'} className='rounded-circle' />
                                        </div>
                                        <div className="profile-info">
                                            <h3>Christian Naira</h3>
                                            <span className='text-secondary'>CEO</span>
                                        </div>

                                    </div>

                                </div>
                                <div className="profile-text row">
                                    <div className="col-12">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo saepe, officia quibusdam, qui harum fugit iste aut corrupti, natus omnis ipsa soluta tenetur ex distinctio corporis consequatur labore expedita!
                                    </div>
                                </div>
                                <div className="row reactions">
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