import React, { use, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png';
import { IoClose, IoMenu } from 'react-icons/io5';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { PiSignOutBold } from 'react-icons/pi';

const BottomHeader = () => {
    const { user, userSignOut } = use(AuthContext);
    const [openMenu, setOpenMenu] = useState(false);
    const [navStickyMovedUp, setNavStickyMovedUp] = useState(false);
    const [stickyNavTransition, setStickyNavTransition] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const menuRef = useRef(null);

    const links = <>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about-us'>About</NavLink>
        </li>
        <li>
            <NavLink to='/shop'>Shop</NavLink>
        </li>
        <li>
            <NavLink to='/product'>Product</NavLink>
        </li>
        <li>
            <NavLink to='/blog'>Blog</NavLink>
        </li>
        <li>
            <NavLink to='/contact-us'>Contact</NavLink>
        </li>
    </>

    // Handle Sign Out
    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                toast.success('Successfully signed out! We hope to see you again soon.')
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    // Profile Menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    // Sticky Navbar
    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;

            if (scroll >= 153) {
                setNavStickyMovedUp(true);
            }
            else {
                setNavStickyMovedUp(false);
            }

            // Apply Transition
            if (scroll >= 250) {
                setStickyNavTransition(true);
            }
            else {
                setStickyNavTransition(false);
            }

            // Sticky On
            if (scroll >= 500) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`
            ${navStickyMovedUp ? 'fixed top-0 -mt-[108px]' : 'absolute'}
            ${stickyNavTransition ? 'duration-500' : ''}
            ${isSticky ? 'mt-0 duration-500 shadow-md' : ''}
         left-0 right-0  bottom-header bg-white z-50`}>
            <div className='container'>
                <div className="navbar px-0 py-5 md:py-6">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <div>
                            <Link to='/' title='ToyTopia'>
                                <img className='hover:opacity-65 duration-300' src={logo} alt='Header Logo' />
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='flex items-center gap-4'>
                            {
                                user ? (
                                    <div ref={menuRef} className='relative'>
                                        <div
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setOpenMenu(!openMenu)
                                            }}
                                            className='user-image tooltip tooltip-left' data-tip={`${user && user.displayName}`}>
                                            <img className='w-[54px] h-[54px] object-cover rounded-full border-2 border-primary-theme' src={`${user && user.photoURL}`} alt='User Profile Image' />
                                        </div>

                                        <div className={`${openMenu ? 'opacity-100 visible translate-y-0 duration-300' : 'opacity-0 invisible duration-300 -translate-y-3'} absolute top-[76px] right-0 w-[291px] h-auto bg-white border border-dark-3 text-sm rounded-md text-dark-2 before:content-[''] before:w-6 before:h-6  before:absolute before:-top-3 before:right-3.5 before:bg-white before:rotate-45 before:rounded-tl-sm before:border-t before:border-l before:border-dark-3`}>
                                            <div className='text-center pt-6 mb-5'>
                                                <img className='mx-auto w-12 h-12 object-cover rounded-full mb-2' src={`${user && user.photoURL}`} alt='User Profile Image' />
                                                <h5 className='text-sm font-medium text-dark-1'>{`${user && user.displayName}`}</h5>
                                            </div>
                                            <ul className='text-dark-1 mb-4'>
                                                <li>
                                                    <Link to='/my-profile' className='flex items-center gap-2 py-2 px-4 hover:bg-gray-200 duration-200'>
                                                        <FaRegUser /> Profile
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/wishlist' className='flex items-center gap-2 py-2 px-4 hover:bg-gray-200 duration-200'>
                                                        <FaRegHeart /> Your Wishlist
                                                    </Link>
                                                </li>
                                            </ul>
                                            <hr className='border-0 border-t border-dark-3' />
                                            <div className='px-4 pb-4 mt-4'>
                                                <button onClick={handleSignOut} className='w-full bg-gray-100 py-2.5 border border-gray-200 rounded-md text-dark-1 cursor-pointer hover:bg-gray-200 duration-300 flex justify-center items-center gap-1 font-medium'><PiSignOutBold className='text-base' /> Sign Out</button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link to='/sign-in' className='py-2.5 md:py-3.5 px-6 md:px-9 rounded-md bg-primary-theme hover:bg-primary-theme-dark duration-300 text-white font-medium'>Sign In</Link>
                                )
                            }
                            {/* {
                                user ? (
                                    <button onClick={handleSignOut} className='py-2.5 md:py-3.5 px-6 md:px-9 rounded-md bg-primary-theme hover:bg-primary-theme-dark duration-300 text-white font-medium cursor-pointer'>Sign Out</button>
                                ) : (
                                    <Link to='/sign-in' className='py-2.5 md:py-3.5 px-6 md:px-9 rounded-md bg-primary-theme hover:bg-primary-theme-dark duration-300 text-white font-medium'>Sign In</Link>
                                )
                            } */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomHeader;