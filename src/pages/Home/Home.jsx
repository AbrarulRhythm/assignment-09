import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import toySlide1 from '../../assets/toySlide1.png';
import toySlide2 from '../../assets/toySlide2.png';
import toySlide3 from '../../assets/toySlide3.png';
import { Link } from 'react-router';
import PopularToys from '../../components/PopularToys/PopularToys';
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre';
import LatestBlog from '../../components/LatestBlog/LatestBlog';

const slideData = [
    {
        title: 'Big Adventures Start with Small Wheels!',
        subtitleOne: 'SRide Play Learn Grow',
        subtitleTwo: 'Bring joy, comfort, and endless hugs into your home with our soft and lovable teddy bears  perfect for kids and the young at heart.',
        buttonText: 'View More Toys',
        buttonLink: '/shop',
        image: toySlide1,
        bgColor: 'bg-[#C5E1EC]'
    },
    {
        title: 'Hugs, Cuddles, and Endless Smiles!',
        subtitleOne: 'SALE UP TO 30% OFF',
        subtitleTwo: 'Bring joy, comfort, and endless hugs into your home with our soft and lovable teddy bears  perfect for kids and the young at heart.',
        buttonText: 'View More Toys',
        buttonLink: '/shop',
        image: toySlide2,
        bgColor: 'bg-[#F379A7]'
    },
    {
        title: 'Meet Your New Cuddle Buddy!',
        subtitleOne: 'Soft. Sweet. Always There.',
        subtitleTwo: 'Bring joy, comfort, and endless hugs into your home with our soft and lovable teddy bears  perfect for kids and the young at heart.',
        buttonText: 'View More Toys',
        buttonLink: '/shop',
        image: toySlide3,
        bgColor: 'bg-[#DBA370]'
    }
]

const Home = () => {
    return (
        <>
            <section className='hero-section relative z-[-1]'>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    speed={2000}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, EffectFade, Pagination]}
                    className="mySwiper"
                >
                    {
                        slideData.map((slide, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className={slide.bgColor}>
                                        <div className='container text-white py-11'>
                                            <div className='flex flex-wrap -mx3 items-center'>
                                                <div className='w-full lg:w-6/12 px-3 mb-6 lg:mb-0'>
                                                    <p className='subTitleOne text-base md:text-lg font-medium tracking-widest mb-2 md:mb-4'>{slide.subtitleOne}</p>
                                                    <h1 className='sliderTitle text-3xl md:text-5xl lg:text-[48px] 2xl:text-[56px] font-bold mb-3 md:mb-4 leading-[1.4]'>{slide.title}</h1>
                                                    <p className='subTitleTwo mb-6'>{slide.subtitleTwo}</p>
                                                    <Link to={slide.buttonLink} className='sliderButton font-medium text-dark-1 hover:text-primary-theme bg-white py-4 px-10 rounded-md inline-block'>{slide.buttonText}</Link>
                                                </div>
                                                <div className='w-full lg:w-6/12 px-3'>
                                                    <div className='slider-image'>
                                                        <img src={slide.image} alt='slider image' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </section>
            <WhoWeAre></WhoWeAre>
            <PopularToys></PopularToys>
            <LatestBlog></LatestBlog>
        </>
    );
};

export default Home;