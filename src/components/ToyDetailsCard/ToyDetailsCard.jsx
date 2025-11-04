import React, { useEffect, useState } from 'react';
import { BsCashCoin, BsChatLeftTextFill } from 'react-icons/bs';
import { CiDeliveryTruck } from 'react-icons/ci';
import { FaCheck, FaFacebookF, FaHeart, FaLinkedinIn, FaPinterest, FaRegCalendar, FaRegHeart, FaStar } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiCalendar } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineSecurity } from 'react-icons/md';
import qrImage from '../../assets/qr.png'
import appLogo from '../../assets/appLogo.png'
import { Link } from 'react-router';
import { addToWishList, getWishList, removeWishList } from '../../utility/addToDB';
import { toast } from 'react-toastify';

const ToyDetailsCard = ({ toy }) => {
    const [wishlist, setWishList] = useState(false);
    const { toyId, toyName, sellerName, sellerEmail, price, rating, availableQuantity, totalSold, description, pictureURL, subCategory } = toy;

    useEffect(() => {
        const storedWishList = getWishList();
        const convertedStoredWishList = storedWishList.map(id => parseInt(id));

        if (convertedStoredWishList.includes(toyId)) {
            setWishList(true);
        }
    }, [toyId]);

    // Handle Add WishList
    const handleAddWishList = () => {
        addToWishList(toyId);
        setWishList(true);
        toast.success(`💖 You’ve added {${toyName}} to your wishlist!`);
    }

    // Handle Remove WishList
    const handleRemoveWishList = () => {
        removeWishList(toyId);
        setWishList(false);
        toast.success(`⚡ Removed! {${toyName}} is no longer in your wishlist.`);
    }

    return (
        <div className='flex flex-wrap -mx-3'>
            <title>{toyName}</title>

            <div className='w-full md:w-12/12 lg:w-4/12 px-3 mb-6'>
                <div className='toy-image'>
                    <img className='w-full rounded-md' src={pictureURL} alt='Toy Image' />
                </div>
            </div>
            <div className='w-full md:w-6/12 lg:w-5/12 px-3 mb-6'>
                <h4 className='text-3xl font-semibold mb-2 text-dark-1'>{toyName}</h4>
                <h3 className='text-[34px] font-bold mb-3.5 text-primary-theme'>${price}</h3>
                <div className='flex items-center justify-between font-medium mb-6'>
                    <div className='flex items-center gap-2'>
                        <div className='text-[#FFC300] flex items-center gap-1'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p>{rating}</p>
                    </div>
                    <div className="tooltip tooltip-left" data-tip={wishlist ? 'Remove to Wishlist' : 'Add to Wishlist'}>
                        <button onClick={() => (wishlist ? handleRemoveWishList() : handleAddWishList())} className='text-xl cursor-pointer text-dark-2 hover:text-primary-theme duration-150'>
                            {wishlist ? <FaHeart className='text-primary-theme' /> : <FaRegHeart />}
                        </button>
                    </div>
                </div>
                <div className='flex items-center justify-between py-6 border-t border-b border-dark-3 mb-6'>
                    <div className='flex items-center gap-2'>
                        <FaCheck className='text-primary-theme' />
                        <h6 className='text-base font-semibold text-dark-1'>Free Shipping</h6>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaCheck className='text-primary-theme' />
                        <h6 className='text-base font-semibold text-dark-1'>Support 24/7</h6>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaCheck className='text-primary-theme' />
                        <h6 className='text-base font-semibold text-dark-1'>Money Return</h6>
                    </div>
                </div>
                <p className='mb-6'>{description}</p>
                <div className='flex items-center gap-2 mb-6'>
                    <button className='w-full inline-block text-white py-3 px-8 rounded-md bg-[#95B3E0]/80 hover:bg-[#95B3E0] duration-300 cursor-pointer'>Buy Now</button>
                    <button className='w-full inline-block text-white py-3 px-8 rounded-md bg-primary-theme hover:bg-primary-theme-dark duration-300 cursor-pointer'>Add To Cart</button>
                </div>
                <ul className='space-y-4'>
                    <li>
                        <div className='availableQuantity text-base font-medium flex items-center relative'>
                            <div>
                                <span className='font-semibold'>In Stock</span>: {availableQuantity}
                            </div>
                            <div>
                                {totalSold} sold
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className='font-semibold'>SKU:</span> Ch-256xl
                    </li>
                    <li>
                        <span className='font-semibold'>Category:</span> {subCategory}
                    </li>
                    <li className='flex items-center gap-3'>
                        <span className='font-semibold'>Share:</span>
                        <div className='flex items-center gap-6 text-lg'>
                            <FaFacebookF />
                            <FaXTwitter />
                            <FaPinterest />
                            <FaLinkedinIn />
                        </div>
                    </li>
                </ul>
            </div>
            <div className='w-full md:w-6/12 lg:w-3/12 px-3 mb-6'>
                <span className='block text-sm font-semibold mb-4'>Delivery Options</span>
                <div className='text-sm flex items-center gap-2.5 mb-4'>
                    <IoLocationOutline className='text-lg' /> 5396 North Fresno CA 93722
                </div>
                <div className='py-4 border-t border-b border-dark-3 mb-4'>
                    <div className='flex items-start gap-2.5 mb-4'>
                        <CiDeliveryTruck className='text-[21px]' />
                        <div>
                            <span className='text-sm text-dark-1 font-medium block'>Standard Delivery</span>
                            <span className='text-[12px] block'>Guaranteed by 25-30 Oct</span>
                        </div>
                    </div>
                    <div className='text-sm flex items-center gap-2.5'>
                        <BsCashCoin className='text-lg' /> Cash on Delivery Available
                    </div>
                </div>
                <span className='block text-sm font-semibold mb-4'>Return & Warranty</span>
                <div className='text-sm flex items-center gap-2.5 mb-4'>
                    <FiCalendar className='text-lg' /> 14 days easy return
                </div>
                <div className='text-sm flex items-center gap-2.5 mb-4'>
                    <MdOutlineSecurity className='text-lg' /> Warranty not available
                </div>
                <div className='mt-6 flex gap-3 mb-4'>
                    <div>
                        <img className='w-full' src={qrImage} alt='QR Code' />
                        <p className='text-[12px] mt-1'>Scan with mobile</p>
                    </div>
                    <div>
                        <img className='w-full' src={appLogo} alt='App Logo' />
                    </div>
                </div>
                <span className='block text-sm font-semibold mb-3'>Sold by</span>
                <Link to='/' className='text-base font-semibold text-dark-1 hover:text-primary-theme duration-300 mb-2 inline-block'>{sellerName}</Link>
                <div className='text-blue-500 flex items-center gap-2 font-medium text-sm mb-3 cursor-pointer'>
                    Chat with seller <BsChatLeftTextFill />
                </div>
                <span className='block text-sm font-semibold mb-3'>Contact Now</span>
                <h5 className='text-base font-semibold text-dark-1 hover:text-primary-theme duration-300 cursor-pointer inline-block'>{sellerEmail}</h5>
            </div>
        </div>
    );
};

export default ToyDetailsCard;