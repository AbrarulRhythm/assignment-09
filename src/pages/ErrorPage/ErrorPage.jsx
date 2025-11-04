import React from 'react';
import pageNotFound from '../../assets/404.png';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='main-wrapper h-screen flex justify-center items-center w-full'>
            <main className='site-main'>
                <section className='py-8 md:py-10'>
                    <div className='container'>
                        <div className='flex flex-wrap -mx-3 justify-center text-center'>
                            <div className='w-full px-3'>
                                <img className='mx-auto' src={pageNotFound} alt="404 image" />
                                <h1 className='text-3xl text-dark-1 md:text-[48px] font-semibold text-heading mb-2'>Oops, page not found!</h1>
                                <p className='text-base md:text-lg mb-6'>The page you are looking for is not available.</p>
                                <Link to='/' className='inline-block text-white py-4 px-10 rounded-md bg-primary-theme hover:bg-primary-theme-dark duration-300'>Go Back Home</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ErrorPage;