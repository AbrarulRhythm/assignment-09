import React, { useEffect, useState } from 'react';
import TopHeader from '../components/Header/TopHeader';
import BottomHeader from '../components/Header/BottomHeader';
import { Link, Outlet, useLocation } from 'react-router';
import Footer from '../components/Footer/Footer';
import LoadingPage from '../pages/LoadingPage/LoadingPage';
import { FaChevronUp } from 'react-icons/fa';

const HomeLayout = () => {
    const [loading, setloading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setloading(false), 500);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setloading(true);
        setFadeOut(false);
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setloading(false), 500);
        }, 2000);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    // Retun to top button
    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;

            if (scroll >= 250) {
                setIsVisible(true);
            }
            else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle Scroll top top
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <>
            {
                loading ? (
                    <div className={`h-screen flex justify-center items-center ${fadeOut ? 'scale-150 duration-700 opacity-0 invisible' : ''}`}>
                        <LoadingPage></LoadingPage>
                    </div>
                ) : (
                    <>
                        <div className='main-wrapper'>
                            {/* Header */}
                            <header>
                                <TopHeader></TopHeader>
                                <BottomHeader></BottomHeader>
                            </header>
                            {/* Header End */}

                            {/* ========== Main Start ====== */}
                            <main className='site-main'>
                                <Outlet></Outlet>
                            </main>
                            {/* ========== Main End ====== */}

                            {/* Footer */}
                            <Footer></Footer>
                            {/* Footer End */}
                        </div >

                        {/* Retun to top button */}
                        <div onClick={handleScrollToTop} data-tip='Return to top' className={`${isVisible ? 'bottom-2.5 opacity-100' : '-bottom-4 opacity-0'} tooltip tooltip-left fixed right-2.5 w-11 h-11 flex items-center justify-center rounded-full text-white bg-gray-400 hover:bg-gray-500 duration-300 cursor-pointer`}>
                            <FaChevronUp />
                        </div>
                    </>
                )
            }
        </>
    );
};

export default HomeLayout;