import React, { useEffect, useState } from 'react';
import TopHeader from '../components/Header/TopHeader';
import BottomHeader from '../components/Header/BottomHeader';
import { Outlet, useLocation } from 'react-router';
import Footer from '../components/Footer/Footer';
import LoadingPage from '../pages/LoadingPage/LoadingPage';

const HomeLayout = () => {
    const [loading, setloading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
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
                    </>
                )
            }
        </>
    );
};

export default HomeLayout;