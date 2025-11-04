import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhoneAlt, FaSearch } from 'react-icons/fa';
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const TopHeader = () => {
    return (
        <div className='top-header border-b border-dark-3 relative z-10'>
            <div className='container'>
                <div className='flex flex-wrap -mx-3 '>
                    <div className='w-full lg:w-8/12 px-3 hidden lg:block'>
                        <div className='py-3'>
                            <ul className='text-sm flex items-center space-x-5'>
                                <li>
                                    <FaPhoneAlt /> +01 (977) 2599 12
                                </li>
                                <li>
                                    <MdEmail className='text-base' /> company@domain.com
                                </li>
                                <li>
                                    <FaLocationDot />  3146 Koontz Lane, California
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full lg:w-4/12 px-3 flex justify-between lg:justify-end'>
                        <div className='social-icons flex items-center py-4 lg:py-0'>
                            <ul className='flex items-center text-lg space-x-3'>
                                <li>
                                    <a href="#"><FaFacebookF /></a>
                                </li>
                                <li>
                                    <a href="#"><FaXTwitter /></a>
                                </li>
                                <li>
                                    <a href="#"><FaInstagram /></a>
                                </li>
                                <li>
                                    <a href="#"><FaLinkedin /></a>
                                </li>
                            </ul>
                        </div>
                        <div className='flex items-center ml-3 border-r border-l border-dark-3'>
                            <button className='px-[15px]'>
                                <FaSearch className='text-lg' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;