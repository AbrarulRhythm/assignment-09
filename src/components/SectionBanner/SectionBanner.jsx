import React from 'react';
import { Link, NavLink } from 'react-router';

const SectionBanner = ({ link, title }) => {
    return (
        <section className='section-banner py-14 md:py-[90px] lg:py-[120px] bg-[#95B3E0]'>
            <div className='container'>
                <div className='text-center'>
                    <h1 className='text-5xl md:text-6xl lg:text-[90px] font-bold mb-4 text-white'>{title}</h1>
                    <div className='text-base md:text-lg lg:text-xl flex items-center justify-center font-medium'>
                        <Link className='text-white' to='/'>Home</Link>
                        <span className='text-sm mx-4 text-primary-theme'>//</span>
                        <p className='text-primary-theme'>{link}</p>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default SectionBanner;