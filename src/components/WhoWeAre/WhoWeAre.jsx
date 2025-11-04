import React from 'react';
import whoWeAre from '../../assets/who-we-are.png';
import logoIcon from '../../assets/logo-icon.png';
import SectionTitle from '../SectionTitle/SectionTitle';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { Link } from 'react-router';

const WhoWeAre = () => {
    return (
        <section className='who-we-are pt-20 lg:pt-[180px] pb-20 lg:pb-24'>
            <div className='container'>
                <div className='flex flex-wrap -mx-3 items-center'>
                    <div className='w-full lg:w-7/12 px-3 mb-6 lg:mb-0'>
                        <div className='pr-0 md:pr-24 lg:pr-20'>
                            <div className='relative'>
                                <img className='w-full rounded-tl-[60px] rounded-br-[60px] rounded-tr-md rounded-bl-md' src={whoWeAre} alt='who we are' />
                                <div className='hidden md:block text-white bg-primary-theme text-center px-8 py-10 rounded-tl-[40px] rounded-br-[40px] rounded-tr-md rounded-bl-md w-[255px] absolute -top-11 right-[-71px]'>
                                    <img className='mx-auto' src={logoIcon} alt='logo icon' />
                                    <h1 className='text-[60px] font-medium mt-3'>35<span className='text-4xl'>+</span></h1>
                                    <p className='text-lg font-medium'>Years of Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-5/12 px-3'>
                        <SectionTitle subTitle='Who We Are' title='Our Story of Smiles'></SectionTitle>
                        <p>At ToyTopia, we believe every child deserves a world full of fun, color, and imagination. Our mission is to create toys that bring joy, laughter, and learning to little hearts everywhere. From soft cuddles to creative play, we’re here to make every moment magical.</p>
                        <hr className='border-0 border-t border-dark-3 my-6' />
                        <ul className='space-y-4 mb-6'>
                            <li>
                                <div className='flex items-center gap-3 text-dark-1'><IoCheckmarkDoneSharp className='text-xl text-primary-theme' />Safe & Quality Toys</div>
                            </li>
                            <li>
                                <div className='flex items-center gap-3 text-dark-1'><IoCheckmarkDoneSharp className='text-xl text-primary-theme' />SImagination & Learning</div>
                            </li>
                            <li>
                                <div className='flex items-center gap-3 text-dark-1'><IoCheckmarkDoneSharp className='text-xl text-primary-theme' />Made with Love</div>
                            </li>
                        </ul>
                        <Link to='/' className='inline-block text-white py-4 px-10 rounded-md bg-primary-theme hover:bg-primary-theme-dark duration-300'>Read More</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;