import React from 'react';
import footerLogo from '../../assets/logo-white.png';
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className='bg-[#383838] pt-10 md:pt-14 lg:pt-20 text-white'>
            <div className='container'>
                <div className='first-footer'>
                    <div className='flex flex-wrap -mx-3'>
                        <div className='w-full md:w-6/12 lg:w-3/12 px-3'>
                            <div className='py-6 md:py-10'>
                                <div className='footer-logo mb-4'>
                                    <img src={footerLogo} alt='footer_logo' />
                                </div>
                                <p className='text-[15px] mb-5'>Quisque imperdiet sapien porttito the bibendum sellentesque the commodo erat acar accumsa lobortis, enim diam.</p>
                                <ul className='flex items-center gap-4'>
                                    <li className='w-10 h-10 flex items-center justify-center rounded-full bg-primary-theme hover:bg-primary-theme-dark duration-300'>
                                        <a href="#" className='block'><FaFacebookF /></a>
                                    </li>
                                    <li className='w-10 h-10 flex items-center justify-center rounded-full bg-primary-theme hover:bg-primary-theme-dark duration-300'>
                                        <a href="#" className='block'><FaXTwitter /></a>
                                    </li>
                                    <li className='w-10 h-10 flex items-center justify-center rounded-full bg-primary-theme hover:bg-primary-theme-dark duration-300'>
                                        <a href="#" className='block'><FaInstagram /></a>
                                    </li>
                                    <li className='w-10 h-10 flex items-center justify-center rounded-full bg-primary-theme hover:bg-primary-theme-dark duration-300'>
                                        <a href="#" className='block'><FaPinterestP /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='w-full md:w-6/12 lg:w-3/12 px-3'>
                            <div className='py-6 md:py-10 ml-0 lg:ml-14'>
                                <h3 className='text-xl font-semibold mb-5'>Quick Links</h3>
                                <ul className='space-y-3 text-gray-200'>
                                    <li>
                                        <Link to='/' className='hover:text-primary-theme hover:tracking-wider duration-300'>About</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='hover:text-primary-theme hover:tracking-wider duration-300'>Shop</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='hover:text-primary-theme hover:tracking-wider duration-300'>Popular Toys</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='hover:text-primary-theme hover:tracking-wider duration-300'>Blog</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='hover:text-primary-theme hover:tracking-wider duration-300'>Support</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='w-full md:w-6/12 lg:w-3/12 px-3'>
                            <div className='py-6 md:py-10 ml-0 lg:ml-14'>
                                <h3 className='text-xl font-semibold mb-5'>Other Page</h3>
                                <ul className='space-y-3 text-gray-200'>
                                    <li>
                                        <Link to='/' className='hover:text-primary-theme hover:tracking-wider duration-300'>Speakers</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='hover:text-primary-theme hover:tracking-wider duration-300'>About Us</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='hover:text-primary-theme hover:tracking-wider duration-300'>Products</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='hover:text-primary-theme hover:tracking-wider duration-300'>Contact</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='hover:text-primary-theme hover:tracking-wider duration-300'>Tricket</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='w-full md:w-6/12 lg:w-3/12 px-3'>
                            <div className='py-6 md:py-10'>
                                <h3 className='text-xl font-semibold mb-5'>Subscribe</h3>
                                <p className='text-[15] mb-5'>Sign up for our monthly blogletter to stay informed about toys and offers</p>
                                <form>
                                    <div className='mb-4'>
                                        <input type="email" name='email' className='w-full py-4 px-6 bg-white text-dark-2 rounded-sm focus:outline-0 border border-transparent focus:border-primary-theme' placeholder='Enter your email' required />
                                    </div>
                                    <button className='w-full bg-primary-theme text-white hover:bg-primary-theme-dark duration-300 rounded-sm text-center py-4 cursor-pointer'>Subscribe Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#404040] py-8 lg:py-10'>
                <div className='container'>
                    <div className='flex flex-wrap -mx-3'>
                        <div className='w-full lg:w-6/12 px-3 mb-4 lg:mb-0'>
                            <ul className='footer-menu flex items-center gap-6 text-sm justify-center lg:justify-start'>
                                <li>
                                    <Link to='/'>Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to='/'>Term & Condition</Link>
                                </li>
                                <li>
                                    <Link to='/'>FAQ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='w-full lg:w-6/12 px-3'>
                            <p className='text-sm text-center lg:text-right'>Copyright &copy; 2025 <Link to='/' className='font-medium text-gray-300 hover:text-primary-theme duration-300'>ToyTopia</Link>. All rights reserveds</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;